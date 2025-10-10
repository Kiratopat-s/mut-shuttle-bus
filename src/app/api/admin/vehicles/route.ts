import { createApiResponse, handleApiError } from "@/lib/api-helpers";
import { prisma } from "@/lib/prisma";
import { requireAdminAuth } from "@/lib/api-helpers";

/**
 * GET /api/admin/vehicles
 * Get all vehicles (admin only)
 */
export async function GET() {
    try {
        await requireAdminAuth();

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
