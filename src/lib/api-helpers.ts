import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { prisma } from "@/lib/prisma";
import { type Permission } from "@/lib/permissions";

export interface ApiResponse<T = unknown> {
    success: boolean;
    data?: T;
    message?: string;
    error?: string;
    errors?: Record<string, string[]>;
}

export interface DecodedUser {
    userId: number;
    email: string;
    firstName: string;
    lastName: string;
    roleId: number;
    employeeId?: number | null;
    role: {
        roleId: number;
        roleName: string;
    };
}

/**
 * Create a standardized API response
 */
export function createApiResponse<T>(
    success: boolean,
    status: number,
    data?: T,
    message?: string,
    error?: string
): NextResponse {
    const response: ApiResponse<T> = {
        success,
        ...(data && { data }),
        ...(message && { message }),
        ...(error && { error }),
    };

    return NextResponse.json(response, { status });
}

/**
 * Get authenticated user from JWT token
 */
export async function getAuthUser(): Promise<DecodedUser | null> {
    try {
        const cookieStore = await cookies();
        const token = cookieStore.get("accessToken")?.value;

        if (!token) {
            return null;
        }

        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET as string
        ) as DecodedUser;
        return decoded;
    } catch (error) {
        console.error("Auth error:", error);
        return null;
    }
}

/**
 * Validate required fields
 */
export function validateRequiredFields(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: any,
    requiredFields: string[]
): { valid: boolean; errors: Record<string, string[]> } {
    const errors: Record<string, string[]> = {};

    requiredFields.forEach((field) => {
        if (data[field] === undefined || data[field] === null || data[field] === "") {
            errors[field] = [`${field} is required`];
        }
    });

    return {
        valid: Object.keys(errors).length === 0,
        errors,
    };
}

/**
 * Require admin authentication
 */
export async function requireAdminAuth(): Promise<DecodedUser | NextResponse> {
    const user = await getAuthUser();

    if (!user) {
        return NextResponse.json(
            { error: "Unauthorized" },
            { status: 401 }
        );
    }

    if (user.role.roleName !== "admin") {
        return NextResponse.json(
            { error: "Forbidden - Admin access required" },
            { status: 403 }
        );
    }

    return user;
}

/**
 * Get user with full permissions from database
 */
export async function getUserWithPermissions(userId: number) {
    return await prisma.user.findUnique({
        where: { userId },
        include: {
            role: {
                include: {
                    RolePermission: {
                        include: {
                            permission: true,
                        },
                    },
                },
            },
        },
    });
}

/**
 * Check if user has specific permission
 */
export async function userHasPermission(
    userId: number,
    requiredPermission: Permission
): Promise<boolean> {
    const user = await getUserWithPermissions(userId);

    if (!user) {
        return false;
    }

    const userPermissions = user.role.RolePermission.map(
        (rp) => rp.permission.permissionName
    );

    return userPermissions.includes(requiredPermission);
}

/**
 * Check if user has any of the specified permissions
 */
export async function userHasAnyPermission(
    userId: number,
    requiredPermissions: Permission[]
): Promise<boolean> {
    const user = await getUserWithPermissions(userId);

    if (!user) {
        return false;
    }

    const userPermissions = user.role.RolePermission.map(
        (rp) => rp.permission.permissionName
    );

    return requiredPermissions.some((permission) =>
        userPermissions.includes(permission)
    );
}

/**
 * Check if user has all of the specified permissions
 */
export async function userHasAllPermissions(
    userId: number,
    requiredPermissions: Permission[]
): Promise<boolean> {
    const user = await getUserWithPermissions(userId);

    if (!user) {
        return false;
    }

    const userPermissions = user.role.RolePermission.map(
        (rp) => rp.permission.permissionName
    );

    return requiredPermissions.every((permission) =>
        userPermissions.includes(permission)
    );
}

/**
 * Require authentication (any logged-in user)
 */
export async function requireAuth(): Promise<DecodedUser | NextResponse> {
    const user = await getAuthUser();

    if (!user) {
        return NextResponse.json(
            { error: "Unauthorized - Authentication required" },
            { status: 401 }
        );
    }

    return user;
}

/**
 * Require specific role
 */
export async function requireRole(
    requiredRole: string | string[]
): Promise<DecodedUser | NextResponse> {
    const user = await getAuthUser();

    if (!user) {
        return NextResponse.json(
            { error: "Unauthorized - Authentication required" },
            { status: 401 }
        );
    }

    const roles = Array.isArray(requiredRole) ? requiredRole : [requiredRole];

    if (!roles.includes(user.role.roleName)) {
        return NextResponse.json(
            {
                error: `Forbidden - Required role: ${roles.join(" or ")}`,
                userRole: user.role.roleName
            },
            { status: 403 }
        );
    }

    return user;
}

/**
 * Require specific permission (checks ANY of the provided permissions)
 */
export async function requirePermission(
    requiredPermissions: Permission | Permission[]
): Promise<DecodedUser | NextResponse> {
    const user = await getAuthUser();

    if (!user) {
        return NextResponse.json(
            { error: "Unauthorized - Authentication required" },
            { status: 401 }
        );
    }

    const permissions = Array.isArray(requiredPermissions)
        ? requiredPermissions
        : [requiredPermissions];

    const hasPermission = await userHasAnyPermission(user.userId, permissions);

    if (!hasPermission) {
        return NextResponse.json(
            {
                error: "Forbidden - Insufficient permissions",
                requiredPermissions: permissions,
                userRole: user.role.roleName
            },
            { status: 403 }
        );
    }

    return user;
}

/**
 * Require ALL specified permissions
 */
export async function requireAllPermissions(
    requiredPermissions: Permission[]
): Promise<DecodedUser | NextResponse> {
    const user = await getAuthUser();

    if (!user) {
        return NextResponse.json(
            { error: "Unauthorized - Authentication required" },
            { status: 401 }
        );
    }

    const hasAllPermissions = await userHasAllPermissions(
        user.userId,
        requiredPermissions
    );

    if (!hasAllPermissions) {
        return NextResponse.json(
            {
                error: "Forbidden - Insufficient permissions",
                requiredPermissions,
                userRole: user.role.roleName
            },
            { status: 403 }
        );
    }

    return user;
}

/**
 * Combined role and permission check (user must have role OR any permission)
 */
export async function requireRoleOrPermission(
    requiredRoles: string[],
    requiredPermissions: Permission[]
): Promise<DecodedUser | NextResponse> {
    const user = await getAuthUser();

    if (!user) {
        return NextResponse.json(
            { error: "Unauthorized - Authentication required" },
            { status: 401 }
        );
    }

    // Check if user has required role
    const hasRole = requiredRoles.includes(user.role.roleName);

    // Check if user has any required permission
    const hasPermission = await userHasAnyPermission(user.userId, requiredPermissions);

    if (!hasRole && !hasPermission) {
        return NextResponse.json(
            {
                error: "Forbidden - Insufficient access",
                requiredRoles,
                requiredPermissions,
                userRole: user.role.roleName
            },
            { status: 403 }
        );
    }

    return user;
}

/**
 * Handle API errors
 */
export function handleApiError(error: unknown): NextResponse {
    console.error("API Error:", error);

    if (error instanceof Error) {
        return createApiResponse(false, 500, undefined, undefined, error.message);
    }

    return createApiResponse(
        false,
        500,
        undefined,
        undefined,
        "An unexpected error occurred"
    );
}
