import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdminAuth } from "@/lib/api-helpers";

// GET /api/admin/schedules - Get all schedules with filters
export async function GET(req: NextRequest) {
    try {
        const authResult = await requireAdminAuth();
        if (authResult instanceof NextResponse) {
            return authResult;
        }

        const { searchParams } = new URL(req.url);
        const date = searchParams.get("date");
        const driverId = searchParams.get("driverId");
        const routeId = searchParams.get("routeId");
        const vehicleId = searchParams.get("vehicleId");
        const status = searchParams.get("status");

        // Build filter object
        const where: {
            scheduleTime?: {
                gte: Date;
                lte: Date;
            };
            driverId?: number;
            routeId?: number;
            vehicleId?: number;
            status?: "UPCOMING" | "CANCELLED" | "ONGOING" | "COMPLETED";
        } = {};

        if (date) {
            const startOfDay = new Date(date);
            startOfDay.setHours(0, 0, 0, 0);
            const endOfDay = new Date(date);
            endOfDay.setHours(23, 59, 59, 999);

            where.scheduleTime = {
                gte: startOfDay,
                lte: endOfDay,
            };
        }

        if (driverId) {
            where.driverId = parseInt(driverId);
        }

        if (routeId) {
            where.routeId = parseInt(routeId);
        }

        if (vehicleId) {
            where.vehicleId = parseInt(vehicleId);
        }

        if (status) {
            const upperStatus = status.toUpperCase();
            if (["UPCOMING", "CANCELLED", "ONGOING", "COMPLETED"].includes(upperStatus)) {
                where.status = upperStatus as "UPCOMING" | "CANCELLED" | "ONGOING" | "COMPLETED";
            }
        }

        const schedules = await prisma.vehicleRouteSchedule.findMany({
            where,
            include: {
                driver: {
                    select: {
                        userId: true,
                        firstName: true,
                        lastName: true,
                        email: true,
                    },
                },
                route: {
                    select: {
                        routeId: true,
                        routeName: true,
                        overallTravelTime: true,
                    },
                },
                vehicle: {
                    select: {
                        vehicleId: true,
                        licensePlate: true,
                        capacity: true,
                        vehicleType: {
                            select: {
                                VehicleTypeName: true,
                            },
                        },
                    },
                },
                Booking: {
                    where: {
                        status: {
                            in: ["BOOKED", "COMPLETED"],
                        },
                    },
                    select: {
                        bookingId: true,
                        status: true,
                    },
                },
            },
            orderBy: [
                { scheduleTime: "asc" },
                { createdAt: "desc" },
            ],
        });

        return NextResponse.json({
            schedules: schedules.map((schedule) => ({
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
                    type: schedule.vehicle.vehicleType.VehicleTypeName,
                },
                bookingCount: schedule.Booking.length,
                createdAt: schedule.createdAt.toISOString(),
                updatedAt: schedule.updatedAt.toISOString(),
            })),
        });
    } catch (error) {
        console.error("Error fetching schedules:", error);
        return NextResponse.json(
            { error: "Failed to fetch schedules" },
            { status: 500 }
        );
    }
}

// POST /api/admin/schedules - Create new schedule
export async function POST(req: NextRequest) {
    try {
        const authResult = await requireAdminAuth();
        if (authResult instanceof NextResponse) {
            return authResult;
        }

        const body = await req.json();
        const { vehicleId, routeId, driverId, scheduleTime, status } = body;

        // Validate required fields
        if (!vehicleId || !routeId || !driverId || !scheduleTime) {
            return NextResponse.json(
                { error: "Vehicle ID, route ID, driver ID, and schedule time are required" },
                { status: 400 }
            );
        }

        // Validate driver exists and has driver role
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

        // Validate vehicle exists and is active
        const vehicle = await prisma.vehicle.findUnique({
            where: { vehicleId: parseInt(vehicleId) },
        });

        if (!vehicle) {
            return NextResponse.json(
                { error: "Vehicle not found" },
                { status: 404 }
            );
        }

        // Validate route exists
        const route = await prisma.route.findUnique({
            where: { routeId: parseInt(routeId) },
        });

        if (!route) {
            return NextResponse.json(
                { error: "Route not found" },
                { status: 404 }
            );
        }

        // Check for scheduling conflicts
        const scheduleDate = new Date(scheduleTime);
        const conflictStart = new Date(scheduleDate.getTime() - 30 * 60000); // 30 minutes before
        const conflictEnd = new Date(scheduleDate.getTime() + route.overallTravelTime * 60000 + 30 * 60000); // Route time + 30 minutes after

        const conflicts = await prisma.vehicleRouteSchedule.findMany({
            where: {
                OR: [
                    { driverId: parseInt(driverId) },
                    { vehicleId: parseInt(vehicleId) },
                ],
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
            const driverConflict = conflicts.find((c) => c.driverId === parseInt(driverId));
            const vehicleConflict = conflicts.find((c) => c.vehicleId === parseInt(vehicleId));

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

        // Create schedule
        const schedule = await prisma.vehicleRouteSchedule.create({
            data: {
                vehicleId: parseInt(vehicleId),
                routeId: parseInt(routeId),
                driverId: parseInt(driverId),
                scheduleTime: scheduleDate,
                status: status || "UPCOMING",
            },
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

        return NextResponse.json(
            {
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
                        type: schedule.vehicle.vehicleType.VehicleTypeName,
                    },
                },
                message: "Schedule created successfully",
            },
            { status: 201 }
        );
    } catch (error) {
        console.error("Error creating schedule:", error);
        return NextResponse.json(
            { error: "Failed to create schedule" },
            { status: 500 }
        );
    }
}
