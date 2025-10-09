import {
    createApiResponse,
    getAuthUser,
    handleApiError,
} from "@/lib/api-helpers";
import { prisma } from "@/lib/prisma";

/**
 * GET /api/admin/roles
 * Get all roles (admin only)
 */
export async function GET() {
    try {
        const user = await getAuthUser();
        if (!user || user.role.roleName !== "admin") {
            return createApiResponse(
                false,
                403,
                undefined,
                undefined,
                "Forbidden. Admin access required."
            );
        }

        const roles = await prisma.role.findMany({
            orderBy: {
                roleName: "asc",
            },
        });

        return createApiResponse(
            true,
            200,
            { roles, count: roles.length },
            "Roles retrieved successfully"
        );
    } catch (error) {
        return handleApiError(error);
    }
}
