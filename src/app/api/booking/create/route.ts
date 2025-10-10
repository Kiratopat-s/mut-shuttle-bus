import { NextRequest, NextResponse } from "next/server";
import { BookingStatus } from "@/generated/prisma";
import {
    createApiResponse,
    requirePermission,
    validateRequiredFields,
    handleApiError,
} from "@/lib/api-helpers";
import { prisma } from "@/lib/prisma";

export interface CreateBookingRequest {
    originStopId: number;
    destinationStopId: number;
    vehicleRouteScheduleId: number;
}

/**
 * POST /api/booking/create
 * Create a new booking (requires create_booking permission)
 */
export async function POST(req: NextRequest) {
    try {
        // Check authentication and permission
        const authResult = await requirePermission(["create_booking"]);
        if (authResult instanceof NextResponse) {
            return authResult;
        }
        const user = authResult;

        // Parse request body
        const body: CreateBookingRequest = await req.json();

        // Validate required fields
        const validation = validateRequiredFields(body, [
            "originStopId",
            "destinationStopId",
            "vehicleRouteScheduleId",
        ]);

        if (!validation.valid) {
            return createApiResponse(
                false,
                400,
                undefined,
                "Validation failed",
                undefined
            );
        }

        // Validate that origin and destination are different
        if (body.originStopId === body.destinationStopId) {
            return createApiResponse(
                false,
                400,
                undefined,
                undefined,
                "Origin and destination stops must be different"
            );
        }

        // Check if vehicle route schedule exists
        const schedule = await prisma.vehicleRouteSchedule.findUnique({
            where: { vehicleRouteScheduleId: body.vehicleRouteScheduleId },
            include: {
                route: true,
                vehicle: true,
            },
        });

        if (!schedule) {
            return createApiResponse(
                false,
                404,
                undefined,
                undefined,
                "Vehicle route schedule not found"
            );
        }

        // Check if schedule is upcoming
        if (schedule.status !== "UPCOMING") {
            return createApiResponse(
                false,
                400,
                undefined,
                undefined,
                `Cannot book this schedule. Current status: ${schedule.status}`
            );
        }

        // Check if bus stops exist
        const [originStop, destinationStop] = await Promise.all([
            prisma.busStop.findUnique({ where: { busStopId: body.originStopId } }),
            prisma.busStop.findUnique({
                where: { busStopId: body.destinationStopId },
            }),
        ]);

        if (!originStop || !destinationStop) {
            return createApiResponse(
                false,
                404,
                undefined,
                undefined,
                "One or more bus stops not found"
            );
        }

        // Check if user already has a booking for this schedule
        const existingBooking = await prisma.booking.findFirst({
            where: {
                userId: user.userId,
                vehicleRouteScheduleId: body.vehicleRouteScheduleId,
                status: BookingStatus.BOOKED,
            },
        });

        if (existingBooking) {
            return createApiResponse(
                false,
                409,
                undefined,
                undefined,
                "You already have an active booking for this schedule"
            );
        }

        // Count current bookings for capacity check
        const bookingCount = await prisma.booking.count({
            where: {
                vehicleRouteScheduleId: body.vehicleRouteScheduleId,
                status: BookingStatus.BOOKED,
            },
        });

        if (bookingCount >= schedule.vehicle.capacity) {
            return createApiResponse(
                false,
                409,
                undefined,
                undefined,
                "This schedule is fully booked"
            );
        }

        // Create the booking
        const booking = await prisma.booking.create({
            data: {
                originStopId: body.originStopId,
                destinationStopId: body.destinationStopId,
                userId: user.userId,
                vehicleRouteScheduleId: body.vehicleRouteScheduleId,
                status: BookingStatus.BOOKED,
            },
            include: {
                originStop: true,
                destinationStop: true,
                user: {
                    select: {
                        userId: true,
                        firstName: true,
                        lastName: true,
                        email: true,
                    },
                },
                vehicleRouteSchedule: {
                    include: {
                        route: true,
                        vehicle: {
                            include: {
                                vehicleType: true,
                            },
                        },
                        driver: {
                            select: {
                                userId: true,
                                firstName: true,
                                lastName: true,
                            },
                        },
                    },
                },
            },
        });

        return createApiResponse(
            true,
            201,
            booking,
            "Booking created successfully"
        );
    } catch (error) {
        return handleApiError(error);
    }
}
