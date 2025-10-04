import { NextRequest } from "next/server";
import {
    createApiResponse,
    getAuthUser,
    handleApiError,
} from "@/lib/api-helpers";
import { prisma } from "@/lib/prisma";

/**
 * GET /api/booking/get-by-booking-id?bookingId=<id>
 * Get a specific booking by ID
 */
export async function GET(req: NextRequest) {
    try {
        // Check authentication
        const user = await getAuthUser();
        if (!user) {
            return createApiResponse(
                false,
                401,
                undefined,
                undefined,
                "Unauthorized. Please login first."
            );
        }

        // Get query parameters
        const { searchParams } = new URL(req.url);
        const bookingIdParam = searchParams.get("bookingId");

        if (!bookingIdParam) {
            return createApiResponse(
                false,
                400,
                undefined,
                undefined,
                "Booking ID is required"
            );
        }

        const bookingId = parseInt(bookingIdParam);

        // Fetch booking
        const booking = await prisma.booking.findUnique({
            where: { bookingId },
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

        if (!booking) {
            return createApiResponse(
                false,
                404,
                undefined,
                undefined,
                "Booking not found"
            );
        }

        // Check if user has permission to view this booking
        if (booking.userId !== user.userId && user.role.roleName !== "admin") {
            return createApiResponse(
                false,
                403,
                undefined,
                undefined,
                "Forbidden. You can only view your own bookings."
            );
        }

        return createApiResponse(
            true,
            200,
            booking,
            "Booking retrieved successfully"
        );
    } catch (error) {
        return handleApiError(error);
    }
}
