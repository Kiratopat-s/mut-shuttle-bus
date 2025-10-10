import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requirePermission } from "@/lib/api-helpers";

// PUT /api/admin/permissions/roles - Update role permissions (requires manage_permissions)
export async function PUT(request: Request) {
    try {
        const authResult = await requirePermission(["manage_permissions"]);
        if (authResult instanceof NextResponse) {
            return authResult;
        }

        const body = await request.json();
        const { roleId, permissionId, granted } = body;

        if (
            typeof roleId !== "number" ||
            typeof permissionId !== "number" ||
            typeof granted !== "boolean"
        ) {
            return NextResponse.json(
                { error: "Invalid request parameters" },
                { status: 400 }
            );
        }

        // Verify role and permission exist
        const [role, permission] = await Promise.all([
            prisma.role.findUnique({ where: { roleId } }),
            prisma.permission.findUnique({ where: { permissionId } }),
        ]);

        if (!role || !permission) {
            return NextResponse.json(
                { error: "Role or permission not found" },
                { status: 404 }
            );
        }

        if (granted) {
            // Grant permission to role (upsert to avoid duplicate key errors)
            await prisma.rolePermission.upsert({
                where: {
                    roleId_permissionId: {
                        roleId,
                        permissionId,
                    },
                },
                create: {
                    roleId,
                    permissionId,
                },
                update: {}, // No update needed, just ensure it exists
            });
        } else {
            // Revoke permission from role
            await prisma.rolePermission.deleteMany({
                where: {
                    roleId,
                    permissionId,
                },
            });
        }

        return NextResponse.json({
            success: true,
            message: granted
                ? "Permission granted successfully"
                : "Permission revoked successfully",
        });
    } catch (error) {
        console.error("Error updating role permission:", error);
        return NextResponse.json(
            { error: "Failed to update role permission" },
            { status: 500 }
        );
    }
}
