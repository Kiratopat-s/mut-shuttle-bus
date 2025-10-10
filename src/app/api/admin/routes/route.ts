import { createApiResponse, handleApiError } from "@/lib/api-helpers";
import { prisma } from "@/lib/prisma";
import { requireAdminAuth } from "@/lib/api-helpers";

/**
 * GET /api/admin/routes
 * Get all routes (admin only)
 */
export async function GET() {
    try {
        await requireAdminAuth();

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
