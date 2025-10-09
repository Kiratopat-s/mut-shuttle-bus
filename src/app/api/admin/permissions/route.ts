import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdminAuth } from "@/lib/api-helpers";

// GET /api/admin/permissions - Get all permissions with role assignments
export async function GET() {
    try {
        const authResult = await requireAdminAuth();
        if (authResult instanceof NextResponse) {
            return authResult;
        }

        // Get all permissions with their role assignments
        const permissions = await prisma.permission.findMany({
            include: {
                RolePermission: {
                    include: {
                        role: true,
                    },
                },
            },
            orderBy: {
                permissionName: "asc",
            },
        });

        // Get all roles for the response
        const roles = await prisma.role.findMany({
            orderBy: {
                roleName: "asc",
            },
        });

        // Format the response
        const formattedPermissions = permissions.map((permission) => ({
            permissionId: permission.permissionId,
            permissionName: permission.permissionName,
            roles: roles.reduce((acc, role) => {
                acc[role.roleName] = permission.RolePermission.some(
                    (rp) => rp.roleId === role.roleId
                );
                return acc;
            }, {} as Record<string, boolean>),
        }));

        return NextResponse.json({
            permissions: formattedPermissions,
            roles: roles.map((r) => ({
                roleId: r.roleId,
                roleName: r.roleName,
            })),
        });
    } catch (error) {
        console.error("Error fetching permissions:", error);
        return NextResponse.json(
            { error: "Failed to fetch permissions" },
            { status: 500 }
        );
    }
}

// POST /api/admin/permissions - Create a new permission
export async function POST(request: Request) {
    try {
        const authResult = await requireAdminAuth();
        if (authResult instanceof NextResponse) {
            return authResult;
        }

        const body = await request.json();
        const { permissionName } = body;

        if (!permissionName || typeof permissionName !== "string") {
            return NextResponse.json(
                { error: "Permission name is required" },
                { status: 400 }
            );
        }

        // Check if permission already exists
        const existing = await prisma.permission.findUnique({
            where: { permissionName: permissionName.trim() },
        });

        if (existing) {
            return NextResponse.json(
                { error: "Permission already exists" },
                { status: 409 }
            );
        }

        const permission = await prisma.permission.create({
            data: {
                permissionName: permissionName.trim(),
            },
        });

        return NextResponse.json(permission, { status: 201 });
    } catch (error) {
        console.error("Error creating permission:", error);
        return NextResponse.json(
            { error: "Failed to create permission" },
            { status: 500 }
        );
    }
}
