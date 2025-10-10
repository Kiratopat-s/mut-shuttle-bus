import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdminAuth } from "@/lib/api-helpers";

// GET /api/admin/schedules/[id] - Get single schedule
export async function GET(
    req: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const authResult = await requireAdminAuth();
        if (authResult instanceof NextResponse) {
            return authResult;
        }

        const { id } = await params;
        const scheduleId = parseInt(id);

        const schedule = await prisma.vehicleRouteSchedule.findUnique({
            where: { vehicleRouteScheduleId: scheduleId },
            include: {
                driver: {
                    select: {
                        userId: true,
                        firstName: true,
                        lastName: true,
                        email: true,
                    },
                },
                route: true,
                vehicle: {
                    include: {
                        vehicleType: true,
                    },
                },
                Booking: {
                    include: {
                        user: {
                            select: {
                                userId: true,
                                firstName: true,
                                lastName: true,
                                email: true,
                            },
                        },
                        originStop: true,
                        destinationStop: true,
                    },
                },
            },
        });

        if (!schedule) {
            return NextResponse.json(
                { error: "Schedule not found" },
                { status: 404 }
            );
        }

        return NextResponse.json({
            schedule: {
                vehicleRouteScheduleId: schedule.vehicleRouteScheduleId,
                scheduleTime: schedule.scheduleTime.toISOString(),
                status: schedule.status,
                driver: {
                    userId: schedule.driver.userId,
                    name: `${schedule.driver.firstName} ${schedule.driver.lastName}`,
                    email: schedule.driver.email,
                },
                route: schedule.route,
                vehicle: {
                    vehicleId: schedule.vehicle.vehicleId,
                    licensePlate: schedule.vehicle.licensePlate,
                    capacity: schedule.vehicle.capacity,
                    status: schedule.vehicle.status,
                    type: schedule.vehicle.vehicleType.VehicleTypeName,
                },
                bookings: schedule.Booking.map((booking) => ({
                    bookingId: booking.bookingId,
                    status: booking.status,
                    user: {
                        userId: booking.user.userId,
                        name: `${booking.user.firstName} ${booking.user.lastName}`,
                        email: booking.user.email,
                    },
                    originStop: booking.originStop,
                    destinationStop: booking.destinationStop,
                })),
                createdAt: schedule.createdAt.toISOString(),
                updatedAt: schedule.updatedAt.toISOString(),
            },
        });
    } catch (error) {
        console.error("Error fetching schedule:", error);
        return NextResponse.json(
            { error: "Failed to fetch schedule" },
            { status: 500 }
        );
    }
}

// PUT /api/admin/schedules/[id] - Update schedule
export async function PUT(
    req: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const authResult = await requireAdminAuth();
        if (authResult instanceof NextResponse) {
            return authResult;
        }

        const { id } = await params;
        const scheduleId = parseInt(id);
        const body = await req.json();
        const { vehicleId, routeId, driverId, scheduleTime, status } = body;

        // Check if schedule exists
        const existingSchedule = await prisma.vehicleRouteSchedule.findUnique({
            where: { vehicleRouteScheduleId: scheduleId },
            include: { route: true },
        });

        if (!existingSchedule) {
            return NextResponse.json(
                { error: "Schedule not found" },
                { status: 404 }
            );
        }

        // Validate driver if provided
        if (driverId) {
            const driver = await prisma.user.findUnique({
                where: { userId: parseInt(driverId) },
                include: { role: true },
            });

            if (!driver) {
                return NextResponse.json(
                    { error: "Driver not found" },
                    { status: 404 }
                );
            }

            if (driver.role.roleName !== "driver") {
                return NextResponse.json(
                    { error: "Selected user is not a driver" },
                    { status: 400 }
                );
            }
        }

        // Validate vehicle if provided
        if (vehicleId) {
            const vehicle = await prisma.vehicle.findUnique({
                where: { vehicleId: parseInt(vehicleId) },
            });

            if (!vehicle) {
                return NextResponse.json(
                    { error: "Vehicle not found" },
                    { status: 404 }
                );
            }
        }

        // Validate route if provided
        let route = existingSchedule.route;
        if (routeId) {
            const foundRoute = await prisma.route.findUnique({
                where: { routeId: parseInt(routeId) },
            });

            if (!foundRoute) {
                return NextResponse.json(
                    { error: "Route not found" },
                    { status: 404 }
                );
            }
            route = foundRoute;
        }

        // Check for scheduling conflicts if time, driver, or vehicle changes
        if (scheduleTime || driverId || vehicleId) {
            const newScheduleDate = scheduleTime
                ? new Date(scheduleTime)
                : existingSchedule.scheduleTime;
            const newDriverId = driverId
                ? parseInt(driverId)
                : existingSchedule.driverId;
            const newVehicleId = vehicleId
                ? parseInt(vehicleId)
                : existingSchedule.vehicleId;

            const conflictStart = new Date(
                newScheduleDate.getTime() - 30 * 60000
            );
            const conflictEnd = new Date(
                newScheduleDate.getTime() + route.overallTravelTime * 60000 + 30 * 60000
            );

            const conflicts = await prisma.vehicleRouteSchedule.findMany({
                where: {
                    vehicleRouteScheduleId: {
                        not: scheduleId, // Exclude current schedule
                    },
                    OR: [{ driverId: newDriverId }, { vehicleId: newVehicleId }],
                    scheduleTime: {
                        gte: conflictStart,
                        lte: conflictEnd,
                    },
                    status: {
                        in: ["UPCOMING", "ONGOING"],
                    },
                },
            });

            if (conflicts.length > 0) {
                const driverConflict = conflicts.find(
                    (c) => c.driverId === newDriverId
                );
                const vehicleConflict = conflicts.find(
                    (c) => c.vehicleId === newVehicleId
                );

                if (driverConflict) {
                    return NextResponse.json(
                        { error: "Driver already has a schedule at this time" },
                        { status: 409 }
                    );
                }

                if (vehicleConflict) {
                    return NextResponse.json(
                        { error: "Vehicle already has a schedule at this time" },
                        { status: 409 }
                    );
                }
            }
        }

        // Build update data
        const updateData: {
            vehicleId?: number;
            routeId?: number;
            driverId?: number;
            scheduleTime?: Date;
            status?: "UPCOMING" | "CANCELLED" | "ONGOING" | "COMPLETED";
            updatedAt: Date;
        } = {
            updatedAt: new Date(),
        };

        if (vehicleId) updateData.vehicleId = parseInt(vehicleId);
        if (routeId) updateData.routeId = parseInt(routeId);
        if (driverId) updateData.driverId = parseInt(driverId);
        if (scheduleTime) updateData.scheduleTime = new Date(scheduleTime);
        if (status) {
            const upperStatus = status.toUpperCase();
            if (["UPCOMING", "CANCELLED", "ONGOING", "COMPLETED"].includes(upperStatus)) {
                updateData.status = upperStatus as "UPCOMING" | "CANCELLED" | "ONGOING" | "COMPLETED";
            }
        }

        // Update schedule
        const updatedSchedule = await prisma.vehicleRouteSchedule.update({
            where: { vehicleRouteScheduleId: scheduleId },
            data: updateData,
            include: {
                driver: {
                    select: {
                        userId: true,
                        firstName: true,
                        lastName: true,
                        email: true,
                    },
                },
                route: true,
                vehicle: {
                    include: {
                        vehicleType: true,
                    },
                },
            },
        });

        return NextResponse.json({
            schedule: {
                vehicleRouteScheduleId: updatedSchedule.vehicleRouteScheduleId,
                scheduleTime: updatedSchedule.scheduleTime.toISOString(),
                status: updatedSchedule.status,
                driver: {
                    userId: updatedSchedule.driver.userId,
                    name: `${updatedSchedule.driver.firstName} ${updatedSchedule.driver.lastName}`,
                    email: updatedSchedule.driver.email,
                },
                route: updatedSchedule.route,
                vehicle: {
                    vehicleId: updatedSchedule.vehicle.vehicleId,
                    licensePlate: updatedSchedule.vehicle.licensePlate,
                    capacity: updatedSchedule.vehicle.capacity,
                    type: updatedSchedule.vehicle.vehicleType.VehicleTypeName,
                },
            },
            message: "Schedule updated successfully",
        });
    } catch (error) {
        console.error("Error updating schedule:", error);
        return NextResponse.json(
            { error: "Failed to update schedule" },
            { status: 500 }
        );
    }
}

// DELETE /api/admin/schedules/[id] - Delete schedule
export async function DELETE(
    req: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const authResult = await requireAdminAuth();
        if (authResult instanceof NextResponse) {
            return authResult;
        }

        const { id } = await params;
        const scheduleId = parseInt(id);

        // Check if schedule exists
        const schedule = await prisma.vehicleRouteSchedule.findUnique({
            where: { vehicleRouteScheduleId: scheduleId },
            include: {
                Booking: {
                    where: {
                        status: {
                            in: ["BOOKED"],
                        },
                    },
                },
            },
        });

        if (!schedule) {
            return NextResponse.json(
                { error: "Schedule not found" },
                { status: 404 }
            );
        }

        // Check if there are active bookings
        if (schedule.Booking.length > 0) {
            return NextResponse.json(
                {
                    error: "Cannot delete schedule with active bookings. Please cancel all bookings first.",
                    activeBookings: schedule.Booking.length,
                },
                { status: 409 }
            );
        }

        // Delete schedule
        await prisma.vehicleRouteSchedule.delete({
            where: { vehicleRouteScheduleId: scheduleId },
        });

        return NextResponse.json({
            message: "Schedule deleted successfully",
            scheduleId,
        });
    } catch (error) {
        console.error("Error deleting schedule:", error);
        return NextResponse.json(
            { error: "Failed to delete schedule" },
            { status: 500 }
        );
    }
}
