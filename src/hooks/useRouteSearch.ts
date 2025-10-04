import { useState, useEffect, useCallback } from "react";
import {
    searchRoutes,
    RouteSearchParams,
    AvailableRoute,
    RouteSearchResponse,
} from "@/lib/route-search-api-client";

interface UseRouteSearchResult {
    routes: AvailableRoute[];
    isLoading: boolean;
    error: string | null;
    searchCriteria: RouteSearchResponse["searchCriteria"] | null;
    refetch: () => Promise<void>;
}

/**
 * Custom hook for searching available routes
 */
export function useRouteSearch(
    params: RouteSearchParams | null
): UseRouteSearchResult {
    const [routes, setRoutes] = useState<AvailableRoute[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [searchCriteria, setSearchCriteria] = useState<
        RouteSearchResponse["searchCriteria"] | null
    >(null);

    const fetchRoutes = useCallback(async () => {
        if (!params) {
            setRoutes([]);
            setSearchCriteria(null);
            return;
        }

        setIsLoading(true);
        setError(null);

        try {
            const response = await searchRoutes(params);
            setRoutes(response.routes);
            setSearchCriteria(response.searchCriteria);
        } catch (err) {
            console.error("Error fetching routes:", err);
            setError(err instanceof Error ? err.message : "Failed to fetch routes");
            setRoutes([]);
            setSearchCriteria(null);
        } finally {
            setIsLoading(false);
        }
    }, [params]);

    useEffect(() => {
        fetchRoutes();
    }, [fetchRoutes]);

    return {
        routes,
        isLoading,
        error,
        searchCriteria,
        refetch: fetchRoutes,
    };
}
