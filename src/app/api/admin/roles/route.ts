import {
    createApiResponse,
    requirePermission,
    handleApiError,
} from "@/lib/api-helpers";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

/**
 * GET /api/admin/roles
 * Get all roles (requires manage_users or manage_permissions permission)
 */
export async function GET() {
    try {
        const authResult = await requirePermission(["manage_users", "manage_permissions"]);
        if (authResult instanceof NextResponse) {
            return authResult;
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
