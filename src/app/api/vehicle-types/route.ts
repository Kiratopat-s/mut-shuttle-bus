import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAuthUser } from "@/lib/api-helpers";

/**
 * GET /api/vehicle-types
 * 
 * Get all vehicle types
 */
export async function GET() {
    try {
        // Authenticate user
        const authUser = await getAuthUser();
        if (!authUser) {
            return NextResponse.json(
                {
                    success: false,
                    error: "Unauthorized - Please log in",
                },
                { status: 401 }
            );
        }

        const vehicleTypes = await prisma.vehicleType.findMany({
            orderBy: {
                VehicleTypeName: "asc",
            },
            select: {
                VehicleTypeId: true,
                VehicleTypeName: true,
                defaultCapacity: true,
            },
        });

        // Format the response to use consistent naming
        const formattedTypes = vehicleTypes.map((type) => ({
            vehicleTypeId: type.VehicleTypeId,
            vehicleTypeName: type.VehicleTypeName,
            defaultCapacity: type.defaultCapacity,
        }));

        return NextResponse.json(
            {
                success: true,
                data: {
                    vehicleTypes: formattedTypes,
                    count: formattedTypes.length,
                },
                message: "Vehicle types retrieved successfully",
            },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error fetching vehicle types:", error);
        return NextResponse.json(
            {
                success: false,
                error: error instanceof Error ? error.message : "Internal server error",
            },
            { status: 500 }
        );
    }
}
