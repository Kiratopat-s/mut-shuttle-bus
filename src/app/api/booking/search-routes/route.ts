import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAuthUser } from "@/lib/api-helpers";

/**
 * GET /api/booking/search-routes
 * 
 * Search for available vehicle routes based on search criteria
 * 
 * Query Parameters:
 * - date: ISO datetime string for the travel date
 * - originStopId: ID of the origin bus stop
 * - destinationStopId: ID of the destination bus stop
 * - guests: Number of passengers (default: 1)
 */
export async function GET(request: NextRequest) {
    try {
        // Authenticate user
        const authUser = await getAuthUser();
        if (!authUser) {
            return NextResponse.json(
                {
                    success: false,
                    error: "Unauthorized - Please log in",
                },
                { status: 401 }
            );
        }

        // Parse query parameters
        const searchParams = request.nextUrl.searchParams;
        const dateStr = searchParams.get("date");
        const originStopIdStr = searchParams.get("originStopId");
        const destinationStopIdStr = searchParams.get("destinationStopId");
        const guestsStr = searchParams.get("guests") || "1";

        // Validate required parameters
        if (!dateStr || !originStopIdStr || !destinationStopIdStr) {
            return NextResponse.json(
                {
                    success: false,
                    error: "Missing required parameters: date, originStopId, destinationStopId",
                },
                { status: 400 }
            );
        }

        const originStopId = parseInt(originStopIdStr);
        const destinationStopId = parseInt(destinationStopIdStr);
        const guests = parseInt(guestsStr);

        if (isNaN(originStopId) || isNaN(destinationStopId) || isNaN(guests)) {
            return NextResponse.json(
                {
                    success: false,
                    error: "Invalid parameter format",
                },
                { status: 400 }
            );
        }

        if (originStopId === destinationStopId) {
            return NextResponse.json(
                {
                    success: false,
                    error: "Origin and destination cannot be the same",
                },
                { status: 400 }
            );
        }

        // Parse the date
        const searchDate = new Date(dateStr);
        if (isNaN(searchDate.getTime())) {
            return NextResponse.json(
                {
                    success: false,
                    error: "Invalid date format",
                },
                { status: 400 }
            );
        }

        // Extract date in YYYY-MM-DD format for querying
        // This ensures we match the date portion regardless of timezone issues
        const year = searchDate.getFullYear();
        const month = String(searchDate.getMonth() + 1).padStart(2, '0');
        const day = String(searchDate.getDate()).padStart(2, '0');
        const dateOnly = `${year}-${month}-${day}`;

        console.log('Searching for date:', dateOnly);

        // Verify bus stops exist
        const [originStop, destinationStop] = await Promise.all([
            prisma.busStop.findUnique({ where: { busStopId: originStopId } }),
            prisma.busStop.findUnique({ where: { busStopId: destinationStopId } }),
        ]);

        if (!originStop || !destinationStop) {
            return NextResponse.json(
                {
                    success: false,
                    error: "One or both bus stops not found",
                },
                { status: 404 }
            );
        }

        // Find routes that include both stops in the correct order
        const routesWithBothStops = await prisma.route.findMany({
            where: {
                RouteBusStop: {
                    some: {
                        busStopId: originStopId,
                    },
                },
            },
            include: {
                RouteBusStop: {
                    orderBy: {
                        stopOrder: "asc",
                    },
                    include: {
                        busStop: true,
                    },
                },
            },
        });

        // Filter routes where destination comes after origin
        const validRoutes = routesWithBothStops.filter((route) => {
            const originIndex = route.RouteBusStop.findIndex(
                (rbs) => rbs.busStopId === originStopId
            );
            const destinationIndex = route.RouteBusStop.findIndex(
                (rbs) => rbs.busStopId === destinationStopId
            );
            return originIndex !== -1 && destinationIndex !== -1 && originIndex < destinationIndex;
        });

        if (validRoutes.length === 0) {
            return NextResponse.json(
                {
                    success: true,
                    data: {
                        routes: [],
                        count: 0,
                    },
                    message: "No routes found for the selected stops",
                },
                { status: 200 }
            );
        }

        const validRouteIds = validRoutes.map((r) => r.routeId);

        console.log('Search Debug:', {
            dateOnly,
            validRouteIds,
        });

        // Find schedules for these routes on the selected date
        // First, get all schedules that match the date using raw SQL
        const rawSchedules = await prisma.$queryRaw<Array<{
            vehicle_route_schedule_id: number;
            vehicle_id: number;
            route_id: number;
            driver_id: number;
            schedule_time: Date;
            status: string;
        }>>`
            SELECT vehicle_route_schedule_id, vehicle_id, route_id, driver_id, schedule_time, status
            FROM vehicle_route_schedules
            WHERE route_id = ANY(${validRouteIds})
            AND DATE(schedule_time) = ${dateOnly}::date
            AND status = 'UPCOMING'
        `;

        console.log('Raw schedules found:', rawSchedules.length);

        if (rawSchedules.length === 0) {
            return NextResponse.json(
                {
                    success: true,
                    data: {
                        routes: [],
                        count: 0,
                        searchCriteria: {
                            date: searchDate.toISOString(),
                            originStop: {
                                busStopId: originStop.busStopId,
                                stopName: originStop.stopName,
                            },
                            destinationStop: {
                                busStopId: destinationStop.busStopId,
                                stopName: destinationStop.stopName,
                            },
                            guests,
                        },
                    },
                    message: "No routes found for the selected date",
                },
                { status: 200 }
            );
        }

        // Now fetch full schedule details with relations
        const scheduleIds = rawSchedules.map(s => s.vehicle_route_schedule_id);
        const schedules = await prisma.vehicleRouteSchedule.findMany({
            where: {
                vehicleRouteScheduleId: { in: scheduleIds },
            },
            include: {
                route: {
                    include: {
                        RouteBusStop: {
                            orderBy: {
                                stopOrder: "asc",
                            },
                            include: {
                                busStop: true,
                            },
                        },
                    },
                },
                vehicle: {
                    include: {
                        vehicleType: true,
                        busStop: true,
                    },
                },
                driver: {
                    select: {
                        userId: true,
                        firstName: true,
                        lastName: true,
                    },
                },
                Booking: {
                    where: {
                        status: "BOOKED",
                    },
                },
            },
        });

        console.log('Schedules found:', schedules.length);
        schedules.forEach(s => {
            console.log('Schedule:', {
                id: s.vehicleRouteScheduleId,
                scheduleTime: s.scheduleTime,
                scheduleTimeISO: new Date(s.scheduleTime).toISOString(),
                routeId: s.routeId,
            });
        });

        // Calculate available seats and format response
        const formattedRoutes = schedules.map((schedule) => {
            const bookedSeats = schedule.Booking.length;
            const availableSeats = schedule.vehicle.capacity - bookedSeats;

            // Calculate travel time between origin and destination
            const route = schedule.route;
            const originStopIndex = route.RouteBusStop.findIndex(
                (rbs) => rbs.busStopId === originStopId
            );
            const destinationStopIndex = route.RouteBusStop.findIndex(
                (rbs) => rbs.busStopId === destinationStopId
            );

            // Calculate time from first stop to origin stop (when user boards)
            let timeToOrigin = 0;
            for (let i = 0; i < originStopIndex; i++) {
                timeToOrigin += route.RouteBusStop[i].travelTime;
            }

            // Calculate travel time from origin to destination
            let travelTime = 0;
            for (let i = originStopIndex; i < destinationStopIndex; i++) {
                travelTime += route.RouteBusStop[i].travelTime;
            }

            // Calculate actual start time (when bus arrives at origin stop) and end time
            const routeStartTime = new Date(schedule.scheduleTime); // Route departure from first stop
            const startTime = new Date(routeStartTime.getTime() + timeToOrigin * 60000); // When user boards at origin
            const endTime = new Date(startTime.getTime() + travelTime * 60000); // When user arrives at destination

            return {
                vehicleRouteScheduleId: schedule.vehicleRouteScheduleId,
                scheduleTime: schedule.scheduleTime,
                status: schedule.status,
                vehicle: {
                    vehicleId: schedule.vehicle.vehicleId,
                    licensePlate: schedule.vehicle.licensePlate,
                    capacity: schedule.vehicle.capacity,
                    status: schedule.vehicle.status,
                    vehicleType: {
                        vehicleTypeId: schedule.vehicle.vehicleType.VehicleTypeId,
                        vehicleTypeName: schedule.vehicle.vehicleType.VehicleTypeName,
                    },
                    currentStop: schedule.vehicle.busStop ? {
                        busStopId: schedule.vehicle.busStop.busStopId,
                        stopName: schedule.vehicle.busStop.stopName,
                    } : null,
                },
                route: {
                    routeId: route.routeId,
                    routeName: route.routeName,
                    overallTravelTime: route.overallTravelTime,
                },
                driver: schedule.driver,
                bookedSeats,
                availableSeats,
                travelTime, // in minutes
                startTime: startTime.toISOString(),
                endTime: endTime.toISOString(),
                origin: {
                    busStopId: originStop.busStopId,
                    stopName: originStop.stopName,
                    lat: originStop.lat,
                    lng: originStop.lng,
                },
                destination: {
                    busStopId: destinationStop.busStopId,
                    stopName: destinationStop.stopName,
                    lat: destinationStop.lat,
                    lng: destinationStop.lng,
                },
                hasEnoughSeats: availableSeats >= guests,
            };
        });

        // Sort by schedule time (earliest first)
        formattedRoutes.sort(
            (a, b) => new Date(a.scheduleTime).getTime() - new Date(b.scheduleTime).getTime()
        );

        return NextResponse.json(
            {
                success: true,
                data: {
                    routes: formattedRoutes,
                    count: formattedRoutes.length,
                    searchCriteria: {
                        date: searchDate.toISOString(),
                        originStop: {
                            busStopId: originStop.busStopId,
                            stopName: originStop.stopName,
                        },
                        destinationStop: {
                            busStopId: destinationStop.busStopId,
                            stopName: destinationStop.stopName,
                        },
                        guests,
                    },
                },
                message: "Routes retrieved successfully",
            },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error searching routes:", error);
        return NextResponse.json(
            {
                success: false,
                error: error instanceof Error ? error.message : "Internal server error",
            },
            { status: 500 }
        );
    }
}
