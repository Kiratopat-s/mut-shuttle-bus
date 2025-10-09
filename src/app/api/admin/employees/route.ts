import {
    createApiResponse,
    getAuthUser,
    handleApiError,
    requireAdminAuth,
} from "@/lib/api-helpers";
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

/**
 * GET /api/admin/employees
 * Get all employees (admin only)
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

        const employees = await prisma.employee.findMany({
            include: {
                department: true,
                User: {
                    select: {
                        userId: true,
                        firstName: true,
                        lastName: true,
                        email: true,
                    },
                },
            },
            orderBy: {
                employeeId: "asc",
            },
        });

        const formattedEmployees = employees.map((emp) => ({
            employeeId: emp.employeeId,
            position: emp.position,
            department: emp.department?.departmentName,
            departmentId: emp.departmentId,
            users: emp.User,
        }));

        return createApiResponse(
            true,
            200,
            { employees: formattedEmployees, count: formattedEmployees.length },
            "Employees retrieved successfully"
        );
    } catch (error) {
        return handleApiError(error);
    }
}

/**
 * POST /api/admin/employees
 * Create a new employee
 */
export async function POST(request: NextRequest) {
    try {
        const authResult = await requireAdminAuth();
        if (authResult instanceof NextResponse) {
            return authResult;
        }

        const body = await request.json();
        const { position, departmentId } = body;

        if (!position || typeof position !== "string") {
            return NextResponse.json(
                { error: "Position is required" },
                { status: 400 }
            );
        }

        const employee = await prisma.employee.create({
            data: {
                position: position.trim(),
                departmentId: departmentId || null,
            },
            include: {
                department: true,
            },
        });

        return NextResponse.json(
            {
                employeeId: employee.employeeId,
                position: employee.position,
                department: employee.department?.departmentName,
                departmentId: employee.departmentId,
            },
            { status: 201 }
        );
    } catch (error) {
        console.error("Error creating employee:", error);
        return NextResponse.json(
            { error: "Failed to create employee" },
            { status: 500 }
        );
    }
}
