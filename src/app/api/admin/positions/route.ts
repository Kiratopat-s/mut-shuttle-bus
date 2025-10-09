import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdminAuth } from "@/lib/api-helpers";

// GET /api/admin/positions - Get all unique positions
export async function GET() {
    try {
        const authResult = await requireAdminAuth();
        if (authResult instanceof NextResponse) {
            return authResult;
        }

        // Get distinct positions from employees table
        const employees = await prisma.employee.findMany({
            select: {
                position: true,
            },
            distinct: ["position"],
            orderBy: {
                position: "asc",
            },
        });

        const positions = employees.map((emp) => emp.position);

        return NextResponse.json(positions);
    } catch (error) {
        console.error("Error fetching positions:", error);
        return NextResponse.json(
            { error: "Failed to fetch positions" },
            { status: 500 }
        );
    }
}
