/**
 * Route Search API Client
 * Handles all route search related API calls
 */

export interface RouteSearchParams {
    date: Date;
    originStopId: number;
    destinationStopId: number;
    guests: number;
}

export interface BusStopInfo {
    busStopId: number;
    stopName: string;
    lat?: number;
    lng?: number;
}

export interface VehicleInfo {
    vehicleId: number;
    licensePlate: string;
    capacity: number;
    status: string;
    vehicleType: {
        vehicleTypeId: number;
        vehicleTypeName: string;
    };
    currentStop: BusStopInfo | null;
}

export interface DriverInfo {
    userId: number;
    firstName: string;
    lastName: string;
}

export interface RouteInfo {
    routeId: number;
    routeName: string;
    overallTravelTime: number;
}

export interface AvailableRoute {
    vehicleRouteScheduleId: number;
    scheduleTime: string;
    status: string;
    vehicle: VehicleInfo;
    route: RouteInfo;
    driver: DriverInfo;
    bookedSeats: number;
    availableSeats: number;
    travelTime: number;
    startTime: string;
    endTime: string;
    origin: BusStopInfo;
    destination: BusStopInfo;
    hasEnoughSeats: boolean;
}

export interface RouteSearchResponse {
    routes: AvailableRoute[];
    count: number;
    searchCriteria: {
        date: string;
        originStop: BusStopInfo;
        destinationStop: BusStopInfo;
        guests: number;
    };
}

export interface ApiResponse<T> {
    success: boolean;
    data?: T;
    message?: string;
    error?: string;
}

/**
 * Search for available routes based on criteria
 */
export async function searchRoutes(
    params: RouteSearchParams
): Promise<RouteSearchResponse> {
    const searchParams = new URLSearchParams({
        date: params.date.toISOString(),
        originStopId: params.originStopId.toString(),
        destinationStopId: params.destinationStopId.toString(),
        guests: params.guests.toString(),
    });

    const response = await fetch(
        `/api/booking/search-routes?${searchParams.toString()}`,
        {
            method: "GET",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
        }
    );

    const result: ApiResponse<RouteSearchResponse> = await response.json();

    if (!result.success) {
        throw new Error(result.error || "Failed to search routes");
    }

    return result.data!;
}

/**
 * Get all bus stops
 */
export async function getAllBusStops(): Promise<BusStopInfo[]> {
    const response = await fetch("/api/bus-stops", {
        method: "GET",
        credentials: "include",
    });

    const result: ApiResponse<{ busStops: BusStopInfo[] }> = await response.json();

    if (!result.success) {
        throw new Error(result.error || "Failed to fetch bus stops");
    }

    return result.data!.busStops;
}

/**
 * Get all vehicle types
 */
export async function getAllVehicleTypes(): Promise<Array<{
    vehicleTypeId: number;
    vehicleTypeName: string;
    defaultCapacity: number;
}>> {
    const response = await fetch("/api/vehicle-types", {
        method: "GET",
        credentials: "include",
    });

    const result: ApiResponse<{
        vehicleTypes: Array<{
            vehicleTypeId: number;
            vehicleTypeName: string;
            defaultCapacity: number;
        }>
    }> = await response.json();

    if (!result.success) {
        throw new Error(result.error || "Failed to fetch vehicle types");
    }

    return result.data!.vehicleTypes;
}
