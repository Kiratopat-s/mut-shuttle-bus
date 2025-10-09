import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

/**
 * GET /api/secure/user/search-by-email?email=user@example.com
 * Search for a user by email address
 * Returns user information if found (excluding password)
 */
export async function GET(req: NextRequest): Promise<NextResponse> {
    try {
        // Check authentication
        const auth = req.headers.get("X-User-Id");
        if (!auth) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }

        // Get email from query parameters
        const email = req.nextUrl.searchParams.get("email");
        if (!email) {
            return NextResponse.json(
                { message: "Email parameter is required" },
                { status: 400 }
            );
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { message: "Invalid email format" },
                { status: 400 }
            );
        }

        // Search for user by email
        const user = await prisma.user.findUnique({
            where: {
                email: email.toLowerCase().trim(),
            },
            select: {
                userId: true,
                email: true,
                firstName: true,
                lastName: true,
                roleId: true,
                role: {
                    select: {
                        roleId: true,
                        roleName: true,
                    },
                },
                employee: {
                    select: {
                        employeeId: true,
                        position: true,
                        department: {
                            select: {
                                departmentId: true,
                                departmentName: true,
                            },
                        },
                    },
                },
            },
        });

        // Return null if user not found (not an error, just no match)
        if (!user) {
            return NextResponse.json(
                { message: "User not found", user: null },
                { status: 200 }
            );
        }

        // Return user information
        return NextResponse.json(
            {
                message: "User found",
                user: {
                    userId: user.userId,
                    email: user.email,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    role: user.role.roleName,
                    department: user.employee?.department?.departmentName || null,
                    position: user.employee?.position || null,
                },
            },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error searching user by email:", error);
        return NextResponse.json(
            { message: "Internal server error" },
            { status: 500 }
        );
    }
}
