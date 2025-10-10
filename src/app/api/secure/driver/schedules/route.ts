import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";
import { requirePermission } from "@/lib/api-helpers";

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  try {
    // Check for drive_vehicle permission
    const authResult = await requirePermission(["drive_vehicle"]);
    if (authResult instanceof NextResponse) {
      return authResult;
    }
    const user = authResult;

    // Get query parameters
    const { searchParams } = new URL(req.url);
    const dateParam = searchParams.get("date");
    const startDate = dateParam ? new Date(dateParam) : new Date();

    // Set date range (from start of day to end of day)
    const startOfDay = new Date(startDate);
    startOfDay.setHours(0, 0, 0, 0);

    const endOfDay = new Date(startDate);
    endOfDay.setHours(23, 59, 59, 999);

    // Get driver's schedules for the specified date
    const schedules = await prisma.vehicleRouteSchedule.findMany({
      where: {
        driverId: user.userId,
        scheduleTime: {
          gte: startOfDay,
          lte: endOfDay
        }
      },
      include: {
        route: {
          include: {
            RouteBusStop: {
              include: {
                busStop: true,
                nextStop: true
              },
              orderBy: {
                stopOrder: 'asc'
              }
            }
          }
        },
        vehicle: {
          include: {
            vehicleType: true
          }
        },
        Booking: {
          where: {
            status: {
              in: ['BOOKED', 'COMPLETED']
            }
          },
          include: {
            originStop: true,
            destinationStop: true,
            user: true
          }
        }
      },
      orderBy: {
        scheduleTime: 'asc'
      }
    });

    // Transform data to match frontend interface
    const transformedSchedules = schedules.map(schedule => {
      const routeStops = schedule.route.RouteBusStop;
      const firstStop = routeStops[0]?.busStop;
      const lastStop = routeStops[routeStops.length - 1]?.nextStop || routeStops[routeStops.length - 1]?.busStop;


      // Calculate estimated arrival time based on route travel time
      const departureTime = new Date(schedule.scheduleTime);
      const arrivalTime = new Date(departureTime.getTime() + (schedule.route.overallTravelTime * 60000)); // Convert minutes to milliseconds

      return {
        id: schedule.vehicleRouteScheduleId.toString(),
        routeName: schedule.route.routeName,
        departureTime: departureTime.toLocaleTimeString('en-EN', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false
        }),
        arrivalTime: arrivalTime.toLocaleTimeString('en-EN', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false
        }),
        startLocation: firstStop?.stopName || "ไม่ระบุ",
        endLocation: lastStop?.stopName || "ไม่ระบุ",
        passengerCount: schedule.Booking.length,
        maxPassengers: schedule.vehicle.capacity,
        status: schedule.status.toLowerCase() === 'upcoming' ? 'pending' :
          schedule.status.toLowerCase() === 'ongoing' ? 'in-progress' :
            schedule.status.toLowerCase() === 'completed' ? 'completed' : 'pending',
        date: startDate.toISOString().split('T')[0],
        vehicleInfo: {
          licensePlate: schedule.vehicle.licensePlate,
          vehicleType: schedule.vehicle.vehicleType.VehicleTypeName,
          capacity: schedule.vehicle.capacity
        },
        routeDetails: {
          overallTravelTime: schedule.route.overallTravelTime,
          stops: routeStops.map(stop => ({
            stopName: stop.busStop.stopName,
            stopOrder: stop.stopOrder,
            travelTime: stop.travelTime,
            lat: stop.busStop.lat,
            lng: stop.busStop.lng
          }))
        },
        passengers: schedule.Booking.map(booking => ({
          bookingId: booking.bookingId,
          passengerName: `${booking.user.firstName} ${booking.user.lastName}`,
          originStop: booking.originStop.stopName,
          destinationStop: booking.destinationStop.stopName,
          status: booking.status
        }))
      };
    });

    return NextResponse.json({
      schedules: transformedSchedules,
      date: startDate.toISOString().split('T')[0],
      driverInfo: {
        driverId: user.userId,
        driverName: `${user.firstName} ${user.lastName}`,
        email: user.email
      }
    });

  } catch (error) {
    console.error("Error fetching driver schedules:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

export async function PATCH(req: NextRequest) {
  try {
    // Check for update_vehicle_status permission
    const authResult = await requirePermission(["update_vehicle_status"]);
    if (authResult instanceof NextResponse) {
      return authResult;
    }
    const user = authResult;

    const body = await req.json();
    const { scheduleId, status } = body;

    if (!scheduleId || !status) {
      return NextResponse.json({ message: "Schedule ID and status are required" }, { status: 400 });
    }

    // Validate status
    const validStatuses = ['UPCOMING', 'ONGOING', 'COMPLETED', 'CANCELLED'];
    if (!validStatuses.includes(status.toUpperCase())) {
      return NextResponse.json({ message: "Invalid status" }, { status: 400 });
    }

    // Update schedule status
    const updatedSchedule = await prisma.vehicleRouteSchedule.update({
      where: {
        vehicleRouteScheduleId: parseInt(scheduleId),
        driverId: user.userId // Ensure driver can only update their own schedules
      },
      data: {
        status: status.toUpperCase(),
        updatedAt: new Date()
      },
      include: {
        route: true,
        vehicle: true
      }
    });

    return NextResponse.json({
      message: "Schedule status updated successfully",
      schedule: {
        id: updatedSchedule.vehicleRouteScheduleId,
        status: updatedSchedule.status,
        routeName: updatedSchedule.route.routeName,
        vehicleLicensePlate: updatedSchedule.vehicle.licensePlate
      }
    });

  } catch (error) {
    console.error("Error updating schedule status:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}