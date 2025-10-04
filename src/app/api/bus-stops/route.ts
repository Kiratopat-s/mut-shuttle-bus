import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAuthUser } from "@/lib/api-helpers";

/**
 * GET /api/bus-stops
 * 
 * Get all bus stops
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

        const busStops = await prisma.busStop.findMany({
            orderBy: {
                stopName: "asc",
            },
            select: {
                busStopId: true,
                stopName: true,
                lat: true,
                lng: true,
            },
        });

        return NextResponse.json(
            {
                success: true,
                data: {
                    busStops,
                    count: busStops.length,
                },
                message: "Bus stops retrieved successfully",
            },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error fetching bus stops:", error);
        return NextResponse.json(
            {
                success: false,
                error: error instanceof Error ? error.message : "Internal server error",
            },
            { status: 500 }
        );
    }
}
