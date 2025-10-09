import { useState, useEffect } from "react";
import { bookingApi, Booking } from "@/lib/booking-api-client";

export interface BookingCardInfo {
    id: number;
    origin: string;
    destination: string;
    departTime: string;
    arriveTime: string;
    departDate: string;
    bookingNo: string;
    vehicleNo: string;
    scheduleDateTime?: string; // Add optional raw datetime
}

export interface UseBookingsResult {
    bookings: BookingCardInfo[];
    loading: boolean;
    error: string | null;
    refetch: () => Promise<void>;
}

/**
 * Custom hook to fetch and transform user bookings
 * @param status - Filter by booking status (optional)
 * @param autoFetch - Automatically fetch on mount (default: true)
 */
export function useBookings(
    status?: "BOOKED" | "CANCELLED" | "MISSED" | "COMPLETED",
    autoFetch: boolean = true
): UseBookingsResult {
    const [bookings, setBookings] = useState<BookingCardInfo[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const calculateArrivalTime = (
        scheduleTime: string,
        travelTimeMinutes: number
    ): string => {
        const departDate = new Date(scheduleTime);
        const arriveDate = new Date(
            departDate.getTime() + travelTimeMinutes * 60000
        );
        return arriveDate.toLocaleTimeString("th-TH", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
        });
    };

    /**
     * Calculate the actual boarding time at user's origin stop
     * and arrival time at user's destination stop
     */
    const calculateUserTimes = (booking: Booking): { boardTime: string; arrivalTime: string } => {
        const route = booking.vehicleRouteSchedule.route;
        const routeStartTime = new Date(booking.vehicleRouteSchedule.scheduleTime);

        // If route doesn't have RouteBusStop data, fall back to old calculation
        if (!route.RouteBusStop || route.RouteBusStop.length === 0) {
            return {
                boardTime: routeStartTime.toLocaleTimeString("th-TH", {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: false,
                }),
                arrivalTime: calculateArrivalTime(
                    booking.vehicleRouteSchedule.scheduleTime,
                    route.overallTravelTime
                ),
            };
        }

        // Find indices of origin and destination stops
        const originStopIndex = route.RouteBusStop.findIndex(
            (rbs) => rbs.busStopId === booking.originStopId
        );
        const destinationStopIndex = route.RouteBusStop.findIndex(
            (rbs) => rbs.busStopId === booking.destinationStopId
        );

        if (originStopIndex === -1 || destinationStopIndex === -1) {
            // Fallback if stops not found
            return {
                boardTime: routeStartTime.toLocaleTimeString("th-TH", {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: false,
                }),
                arrivalTime: calculateArrivalTime(
                    booking.vehicleRouteSchedule.scheduleTime,
                    route.overallTravelTime
                ),
            };
        }

        // Calculate time to reach origin stop (when user boards)
        let timeToOrigin = 0;
        for (let i = 0; i < originStopIndex; i++) {
            timeToOrigin += route.RouteBusStop[i].travelTime;
        }

        // Calculate travel time from origin to destination
        let travelTime = 0;
        for (let i = originStopIndex; i < destinationStopIndex; i++) {
            travelTime += route.RouteBusStop[i].travelTime;
        }

        // Calculate actual boarding time (when bus arrives at origin)
        const userBoardTime = new Date(routeStartTime.getTime() + timeToOrigin * 60000);

        // Calculate actual arrival time (when bus arrives at destination)
        const userArrivalTime = new Date(userBoardTime.getTime() + travelTime * 60000);

        return {
            boardTime: userBoardTime.toLocaleTimeString("th-TH", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
            }),
            arrivalTime: userArrivalTime.toLocaleTimeString("th-TH", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
            }),
        };
    };

    const transformBooking = (booking: Booking): BookingCardInfo => {
        const { boardTime, arrivalTime } = calculateUserTimes(booking);
        const scheduleDate = new Date(booking.vehicleRouteSchedule.scheduleTime);

        return {
            id: booking.bookingId,
            origin: booking.originStop.stopName,
            destination: booking.destinationStop.stopName,
            departTime: boardTime,
            arriveTime: arrivalTime,
            departDate: scheduleDate.toLocaleDateString("en-US", {
                weekday: "short",
                day: "2-digit",
                month: "short",
                year: "numeric",
            }),
            bookingNo: booking.bookingId.toString().padStart(20, "0"),
            vehicleNo: booking.vehicleRouteSchedule.vehicle.licensePlate,
            scheduleDateTime: booking.vehicleRouteSchedule.scheduleTime, // Add raw datetime for comparison
        };
    };

    const fetchBookings = async () => {
        try {
            setLoading(true);
            setError(null);

            const data = await bookingApi.getUserBookings(undefined, status);
            const transformedBookings = data.map(transformBooking);

            setBookings(transformedBookings);
        } catch (err) {
            console.error("Failed to fetch bookings:", err);

            // Handle specific error messages
            const errorMessage = err instanceof Error ? err.message : "Failed to load bookings";

            // Check if it's an auth error - don't set error state, just log
            if (errorMessage.includes('Unauthorized') || errorMessage.includes('authentication')) {
                console.log("Authentication required - user will be redirected");
                setError(null); // Clear error since redirect will handle it
            } else {
                setError(errorMessage);
            }

            setBookings([]); // Clear bookings on error
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (autoFetch) {
            fetchBookings();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [status, autoFetch]);

    return {
        bookings,
        loading,
        error,
        refetch: fetchBookings,
    };
}

/**
 * Hook to get active (BOOKED) bookings only
 */
export function useActiveBookings(): UseBookingsResult {
    return useBookings("BOOKED");
}

/**
 * Hook to get all bookings regardless of status
 */
export function useAllBookings(): UseBookingsResult {
    return useBookings(undefined);
}

/**
 * Hook to get completed bookings
 */
export function useCompletedBookings(): UseBookingsResult {
    return useBookings("COMPLETED");
}

/**
 * Hook to get cancelled bookings
 */
export function useCancelledBookings(): UseBookingsResult {
    return useBookings("CANCELLED");
}
