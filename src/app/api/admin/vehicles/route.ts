import { createApiResponse, handleApiError, requirePermission } from "@/lib/api-helpers";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

/**
 * GET /api/admin/vehicles
 * Get all vehicles (requires manage_vehicles or manage_schedules permission)
 */
export async function GET() {
    try {
        const authResult = await requirePermission(["manage_vehicles", "manage_schedules"]);
        if (authResult instanceof NextResponse) {
            return authResult;
        }

        const vehicles = await prisma.vehicle.findMany({
            include: {
                vehicleType: true,
                busStop: true,
            },
            orderBy: {
                licensePlate: "asc",
            },
        });

        const formattedVehicles = vehicles.map((v) => ({
            vehicleId: v.vehicleId,
            licensePlate: v.licensePlate,
            capacity: v.capacity,
            status: v.status,
            type: v.vehicleType.VehicleTypeName,
            vehicleTypeId: v.vehicleTypeId,
            currentStop: v.busStop
                ? {
                    busStopId: v.busStop.busStopId,
                    stopName: v.busStop.stopName,
                }
                : null,
            createdAt: v.createdAt.toISOString(),
            updatedAt: v.updatedAt.toISOString(),
        }));

        return createApiResponse(
            true,
            200,
            { vehicles: formattedVehicles, count: formattedVehicles.length },
            "Vehicles retrieved successfully"
        );
    } catch (error) {
        return handleApiError(error);
    }
}
