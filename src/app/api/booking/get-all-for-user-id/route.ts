import { NextRequest } from "next/server";
import {
    createApiResponse,
    getAuthUser,
    handleApiError,
} from "@/lib/api-helpers";
import { prisma } from "@/lib/prisma";

/**
 * GET /api/booking/get-all-for-user-id?userId=<id>&status=<status>
 * Get all bookings for a specific user
 * Query params:
 *  - userId (optional): User ID to fetch bookings for (defaults to current user)
 *  - status (optional): Filter by booking status (BOOKED, CANCELLED, MISSED, COMPLETED)
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
        const userIdParam = searchParams.get("userId");
        const statusParam = searchParams.get("status");

        // Determine which user's bookings to fetch
        let targetUserId = user.userId;

        // If requesting another user's bookings, check if current user is admin
        if (userIdParam && parseInt(userIdParam) !== user.userId) {
            if (user.role.roleName !== "admin") {
                return createApiResponse(
                    false,
                    403,
                    undefined,
                    undefined,
                    "Forbidden. You can only view your own bookings."
                );
            }
            targetUserId = parseInt(userIdParam);
        }

        // Build where clause
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const where: any = {
            userId: targetUserId,
        };

        if (statusParam) {
            where.status = statusParam;
        }

        // Fetch bookings
        const bookings = await prisma.booking.findMany({
            where,
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
            orderBy: {
                createdAt: "desc",
            },
        });

        return createApiResponse(
            true,
            200,
            {
                bookings,
                count: bookings.length,
            },
            "Bookings retrieved successfully"
        );
    } catch (error) {
        return handleApiError(error);
    }
}
