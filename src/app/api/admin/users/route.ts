import { NextRequest } from "next/server";
import {
    createApiResponse,
    getAuthUser,
    handleApiError,
} from "@/lib/api-helpers";
import { prisma } from "@/lib/prisma";
import { Base64 } from "js-base64";

/**
 * GET /api/admin/users
 * Get all users (admin only)
 */
export async function GET(req: NextRequest) {
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

        const { searchParams } = new URL(req.url);
        const roleFilter = searchParams.get("role");

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const where: any = {};
        if (roleFilter && roleFilter !== "all") {
            where.role = {
                roleName: roleFilter,
            };
        }

        const users = await prisma.user.findMany({
            where,
            include: {
                role: true,
                employee: {
                    include: {
                        department: true,
                    },
                },
            },
            orderBy: {
                createdAt: "desc",
            },
        });

        // Map to frontend format
        const formattedUsers = users.map((u) => ({
            userId: u.userId,
            firstName: u.firstName,
            lastName: u.lastName,
            email: u.email,
            role: u.role.roleName,
            roleId: u.roleId,
            employeeId: u.employeeId,
            employee: u.employee
                ? {
                    employeeId: u.employee.employeeId,
                    position: u.employee.position,
                    department: u.employee.department?.departmentName,
                    departmentId: u.employee.departmentId,
                }
                : null,
            createdAt: u.createdAt.toISOString(),
            updatedAt: u.updatedAt.toISOString(),
        }));

        return createApiResponse(
            true,
            200,
            { users: formattedUsers, count: formattedUsers.length },
            "Users retrieved successfully"
        );
    } catch (error) {
        return handleApiError(error);
    }
}

/**
 * POST /api/admin/users
 * Create a new user (admin only)
 */
export async function POST(req: NextRequest) {
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

        const body = await req.json();
        const {
            firstName,
            lastName,
            email,
            password,
            roleId,
            employeeId,
        } = body;

        // Validate required fields
        if (!firstName || !lastName || !email || !password || !roleId) {
            return createApiResponse(
                false,
                400,
                undefined,
                undefined,
                "Missing required fields"
            );
        }

        // Check if email already exists
        const existingUser = await prisma.user.findUnique({
            where: { email },
        });

        if (existingUser) {
            return createApiResponse(
                false,
                409,
                undefined,
                undefined,
                "Email already exists"
            );
        }

        // Encode password (base64 - matching your current system)
        const encodedPassword = Base64.encode(password);

        // Create user
        const newUser = await prisma.user.create({
            data: {
                firstName,
                lastName,
                email,
                password: encodedPassword,
                roleId: Number(roleId),
                employeeId: employeeId ? Number(employeeId) : null,
            },
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
            201,
            {
                userId: newUser.userId,
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                email: newUser.email,
                role: newUser.role.roleName,
                roleId: newUser.roleId,
                employeeId: newUser.employeeId,
                employee: newUser.employee
                    ? {
                        employeeId: newUser.employee.employeeId,
                        position: newUser.employee.position,
                        department: newUser.employee.department?.departmentName,
                    }
                    : null,
            },
            "User created successfully"
        );
    } catch (error) {
        return handleApiError(error);
    }
}
