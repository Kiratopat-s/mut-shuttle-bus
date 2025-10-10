import { NextRequest, NextResponse } from "next/server";
import {
    createApiResponse,
    requirePermission,
    handleApiError,
} from "@/lib/api-helpers";
import { prisma } from "@/lib/prisma";
import { Base64 } from "js-base64";

/**
 * GET /api/admin/users/[userId]
 * Get a specific user (requires manage_users permission)
 */
export async function GET(
    req: NextRequest,
    { params }: { params: Promise<{ userId: string }> }
) {
    try {
        const authResult = await requirePermission(["manage_users"]);
        if (authResult instanceof NextResponse) {
            return authResult;
        }

        const { userId } = await params;
        const targetUser = await prisma.user.findUnique({
            where: { userId: Number(userId) },
            include: {
                role: true,
                employee: {
                    include: {
                        department: true,
                    },
                },
            },
        });

        if (!targetUser) {
            return createApiResponse(
                false,
                404,
                undefined,
                undefined,
                "User not found"
            );
        }

        return createApiResponse(
            true,
            200,
            {
                userId: targetUser.userId,
                firstName: targetUser.firstName,
                lastName: targetUser.lastName,
                email: targetUser.email,
                role: targetUser.role.roleName,
                roleId: targetUser.roleId,
                employeeId: targetUser.employeeId,
                employee: targetUser.employee
                    ? {
                        employeeId: targetUser.employee.employeeId,
                        position: targetUser.employee.position,
                        department: targetUser.employee.department?.departmentName,
                        departmentId: targetUser.employee.departmentId,
                    }
                    : null,
            },
            "User retrieved successfully"
        );
    } catch (error) {
        return handleApiError(error);
    }
}

/**
 * PATCH /api/admin/users/[userId]
 * Update a user (requires manage_users permission)
 */
export async function PATCH(
    req: NextRequest,
    { params }: { params: Promise<{ userId: string }> }
) {
    try {
        const authResult = await requirePermission(["manage_users"]);
        if (authResult instanceof NextResponse) {
            return authResult;
        }

        const { userId } = await params;
        const body = await req.json();
        const {
            firstName,
            lastName,
            email,
            password,
            roleId,
            employeeId,
        } = body;

        // Check if user exists
        const existingUser = await prisma.user.findUnique({
            where: { userId: Number(userId) },
        });

        if (!existingUser) {
            return createApiResponse(
                false,
                404,
                undefined,
                undefined,
                "User not found"
            );
        }

        // Check if email is being changed and already exists
        if (email && email !== existingUser.email) {
            const emailExists = await prisma.user.findUnique({
                where: { email },
            });

            if (emailExists) {
                return createApiResponse(
                    false,
                    409,
                    undefined,
                    undefined,
                    "Email already exists"
                );
            }
        }

        // Prepare update data
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const updateData: any = {};

        if (firstName !== undefined) updateData.firstName = firstName;
        if (lastName !== undefined) updateData.lastName = lastName;
        if (email !== undefined) updateData.email = email;
        if (password !== undefined) updateData.password = Base64.encode(password);
        if (roleId !== undefined) updateData.roleId = Number(roleId);
        if (employeeId !== undefined) {
            updateData.employeeId = employeeId ? Number(employeeId) : null;
        }

        // Update user
        const updatedUser = await prisma.user.update({
            where: { userId: Number(userId) },
            data: updateData,
            include: {
                role: true,
                employee: {
                    include: {
                        department: true,
                    },
                },
            },
        });

        return createApiResponse(
            true,
            200,
            {
                userId: updatedUser.userId,
                firstName: updatedUser.firstName,
                lastName: updatedUser.lastName,
                email: updatedUser.email,
                role: updatedUser.role.roleName,
                roleId: updatedUser.roleId,
                employeeId: updatedUser.employeeId,
                employee: updatedUser.employee
                    ? {
                        employeeId: updatedUser.employee.employeeId,
                        position: updatedUser.employee.position,
                        department: updatedUser.employee.department?.departmentName,
                        departmentId: updatedUser.employee.departmentId,
                    }
                    : null,
            },
            "User updated successfully"
        );
    } catch (error) {
        return handleApiError(error);
    }
}

/**
 * DELETE /api/admin/users/[userId]
 * Delete a user (requires manage_users permission)
 */
export async function DELETE(
    req: NextRequest,
    { params }: { params: Promise<{ userId: string }> }
) {
    try {
        const authResult = await requirePermission(["manage_users"]);
        if (authResult instanceof NextResponse) {
            return authResult;
        }
        const authenticatedUser = authResult;

        const { userId } = await params;

        // Check if user exists
        const existingUser = await prisma.user.findUnique({
            where: { userId: Number(userId) },
        });

        if (!existingUser) {
            return createApiResponse(
                false,
                404,
                undefined,
                undefined,
                "User not found"
            );
        }

        // Prevent deleting yourself
        if (existingUser.userId === authenticatedUser.userId) {
            return createApiResponse(
                false,
                400,
                undefined,
                undefined,
                "Cannot delete your own account"
            );
        }

        // Delete user
        await prisma.user.delete({
            where: { userId: Number(userId) },
        });

        return createApiResponse(
            true,
            200,
            { userId: Number(userId) },
            "User deleted successfully"
        );
    } catch (error) {
        return handleApiError(error);
    }
}
