import { useState, useEffect } from "react";
import { getAllBusStops } from "@/lib/route-search-api-client";
import { useCallback } from "react";

interface BusStop {
    busStopId: number;
    stopName: string;
    lat?: number;
    lng?: number;
}

interface UseBusStopsResult {
    busStops: BusStop[];
    isLoading: boolean;
    error: string | null;
    refetch: () => Promise<void>;
}

/**
 * Custom hook for fetching all bus stops
 */
export function useBusStops(): UseBusStopsResult {
    const [busStops, setBusStops] = useState<BusStop[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);


    const fetchBusStops = useCallback(async () => {
        setIsLoading(true);
        setError(null);

        try {
            const stops = await getAllBusStops();
            setBusStops(stops);
        } catch (err) {
            console.error("Error fetching bus stops:", err);
            setError(err instanceof Error ? err.message : "Failed to fetch bus stops");
            setBusStops([]);
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchBusStops();
    }, [fetchBusStops]);

    return {
        busStops,
        isLoading,
        error,
        refetch: fetchBusStops,
    };
}
