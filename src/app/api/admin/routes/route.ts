import { createApiResponse, handleApiError, requirePermission } from "@/lib/api-helpers";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

/**
 * GET /api/admin/routes
 * Get all routes (requires manage_routes or manage_schedules permission)
 */
export async function GET() {
    try {
        const authResult = await requirePermission(["manage_routes", "manage_schedules"]);
        if (authResult instanceof NextResponse) {
            return authResult;
        }

        const routes = await prisma.route.findMany({
            orderBy: {
                routeName: "asc",
            },
        });

        const formattedRoutes = routes.map((r) => ({
            routeId: r.routeId,
            routeName: r.routeName,
            overallTravelTime: r.overallTravelTime,
            createdAt: r.createdAt.toISOString(),
            updatedAt: r.updatedAt.toISOString(),
        }));

        return createApiResponse(
            true,
            200,
            { routes: formattedRoutes, count: formattedRoutes.length },
            "Routes retrieved successfully"
        );
    } catch (error) {
        return handleApiError(error);
    }
}
