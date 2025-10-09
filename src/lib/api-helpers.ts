import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

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
