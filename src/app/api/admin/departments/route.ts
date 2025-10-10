import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requirePermission } from "@/lib/api-helpers";

// GET /api/admin/departments - Get all departments (requires manage_users permission)
export async function GET() {
    try {
        const authResult = await requirePermission(["manage_users"]);
        if (authResult instanceof NextResponse) {
            return authResult;
        }

        const departments = await prisma.department.findMany({
            orderBy: {
                departmentName: "asc",
            },
        });

        return NextResponse.json(departments);
    } catch (error) {
        console.error("Error fetching departments:", error);
        return NextResponse.json(
            { error: "Failed to fetch departments" },
            { status: 500 }
        );
    }
}

// POST /api/admin/departments - Create a new department (requires manage_users permission)
export async function POST(request: NextRequest) {
    try {
        const authResult = await requirePermission(["manage_users"]);
        if (authResult instanceof NextResponse) {
            return authResult;
        }

        const body = await request.json();
        const { departmentName } = body;

        if (!departmentName || typeof departmentName !== "string") {
            return NextResponse.json(
                { error: "Department name is required" },
                { status: 400 }
            );
        }

        // Check if department already exists
        const existing = await prisma.department.findUnique({
            where: { departmentName: departmentName.trim() },
        });

        if (existing) {
            return NextResponse.json(
                { error: "Department already exists" },
                { status: 409 }
            );
        }

        const department = await prisma.department.create({
            data: {
                departmentName: departmentName.trim(),
            },
        });

        return NextResponse.json(department, { status: 201 });
    } catch (error) {
        console.error("Error creating department:", error);
        return NextResponse.json(
            { error: "Failed to create department" },
            { status: 500 }
        );
    }
}
