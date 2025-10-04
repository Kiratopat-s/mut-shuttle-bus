/**
 * Booking API Client
 * Type-safe API client for booking operations
 */

export interface BookingCreateRequest {
    originStopId: number;
    destinationStopId: number;
    vehicleRouteScheduleId: number;
}

export interface BookingUpdateRequest {
    bookingId: number;
    status?: 'BOOKED' | 'CANCELLED' | 'MISSED' | 'COMPLETED';
    originStopId?: number;
    destinationStopId?: number;
    vehicleRouteScheduleId?: number;
}

export interface ApiResponse<T> {
    success: boolean;
    data?: T;
    message?: string;
    error?: string;
}

export interface BusStop {
    busStopId: number;
    stopName: string;
    lat: number;
    lng: number;
}

export interface Route {
    routeId: number;
    routeName: string;
    overallTravelTime: number;
    RouteBusStop?: RouteBusStop[];
}

export interface RouteBusStop {
    routeBusStopId: number;
    routeId: number;
    busStopId: number;
    stopOrder: number;
    travelTime: number;
    busStop: BusStop;
}

export interface VehicleType {
    VehicleTypeId: number;
    VehicleTypeName: string;
    defaultCapacity: number;
}

export interface Vehicle {
    vehicleId: number;
    licensePlate: string;
    capacity: number;
    status: 'ACTIVE' | 'INACTIVE' | 'MAINTENANCE';
    vehicleType: VehicleType;
}

export interface User {
    userId: number;
    firstName: string;
    lastName: string;
    email: string;
}

export interface VehicleRouteSchedule {
    vehicleRouteScheduleId: number;
    scheduleTime: string;
    status: 'UPCOMING' | 'CANCELLED' | 'ONGOING' | 'COMPLETED';
    route: Route;
    vehicle: Vehicle;
    driver: User;
}

export interface Booking {
    bookingId: number;
    userId: number;
    originStopId: number;
    destinationStopId: number;
    vehicleRouteScheduleId: number;
    status: 'BOOKED' | 'CANCELLED' | 'MISSED' | 'COMPLETED';
    createdAt: string;
    updatedAt: string;
    originStop: BusStop;
    destinationStop: BusStop;
    user: User;
    vehicleRouteSchedule: VehicleRouteSchedule;
}

export class BookingApiClient {
    private baseUrl: string;

    constructor(baseUrl: string = '/api/booking') {
        this.baseUrl = baseUrl;
    }

    /**
     * Create a new booking
     */
    async createBooking(data: BookingCreateRequest): Promise<Booking> {
        const response = await fetch(`${this.baseUrl}/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify(data),
        });

        // Check if response is ok
        if (!response.ok) {
            if (response.status === 401) {
                throw new Error('Unauthorized. Please login first.');
            }
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Check if response is JSON
        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
            throw new Error('Server returned non-JSON response. Please check your authentication.');
        }

        const result: ApiResponse<Booking> = await response.json();

        if (!result.success || !result.data) {
            throw new Error(result.error || 'Failed to create booking');
        }

        return result.data;
    }

    /**
     * Get all bookings for current user or specified user
     */
    async getUserBookings(
        userId?: number,
        status?: 'BOOKED' | 'CANCELLED' | 'MISSED' | 'COMPLETED'
    ): Promise<Booking[]> {
        const params = new URLSearchParams();
        if (userId) params.append('userId', userId.toString());
        if (status) params.append('status', status);

        const response = await fetch(
            `${this.baseUrl}/get-all-for-user-id?${params}`,
            {
                credentials: 'include',
            }
        );

        // Check if response is ok
        if (!response.ok) {
            if (response.status === 401) {
                throw new Error('Unauthorized. Please login first.');
            }
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Check if response is JSON
        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
            throw new Error('Server returned non-JSON response. Please check your authentication.');
        }

        const result: ApiResponse<{ bookings: Booking[]; count: number }> =
            await response.json();

        if (!result.success || !result.data) {
            throw new Error(result.error || 'Failed to fetch bookings');
        }

        return result.data.bookings;
    }

    /**
     * Get a specific booking by ID
     */
    async getBookingById(bookingId: number): Promise<Booking> {
        const response = await fetch(
            `${this.baseUrl}/get-by-booking-id?bookingId=${bookingId}`,
            {
                credentials: 'include',
            }
        );

        // Check if response is ok
        if (!response.ok) {
            if (response.status === 401) {
                throw new Error('Unauthorized. Please login first.');
            }
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Check if response is JSON
        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
            throw new Error('Server returned non-JSON response. Please check your authentication.');
        }

        const result: ApiResponse<Booking> = await response.json();

        if (!result.success || !result.data) {
            throw new Error(result.error || 'Failed to fetch booking');
        }

        return result.data;
    }

    /**
     * Update an existing booking
     */
    async updateBooking(data: BookingUpdateRequest): Promise<Booking> {
        const response = await fetch(`${this.baseUrl}/edit-by-booking-id`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify(data),
        });

        // Check if response is ok
        if (!response.ok) {
            if (response.status === 401) {
                throw new Error('Unauthorized. Please login first.');
            }
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Check if response is JSON
        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
            throw new Error('Server returned non-JSON response. Please check your authentication.');
        }

        const result: ApiResponse<Booking> = await response.json();

        if (!result.success || !result.data) {
            throw new Error(result.error || 'Failed to update booking');
        }

        return result.data;
    }

    /**
     * Cancel a booking
     */
    async cancelBooking(bookingId: number): Promise<Booking> {
        const response = await fetch(
            `${this.baseUrl}/edit-by-booking-id?bookingId=${bookingId}`,
            {
                method: 'DELETE',
                credentials: 'include',
            }
        );

        // Check if response is ok
        if (!response.ok) {
            if (response.status === 401) {
                throw new Error('Unauthorized. Please login first.');
            }
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Check if response is JSON
        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
            throw new Error('Server returned non-JSON response. Please check your authentication.');
        }

        const result: ApiResponse<Booking> = await response.json();

        if (!result.success || !result.data) {
            throw new Error(result.error || 'Failed to cancel booking');
        }

        return result.data;
    }
}

// Singleton instance
export const bookingApi = new BookingApiClient();

/**
 * React Hook Examples
 *
 * You can use these patterns in your React components
 */

// Example: Create booking hook
/*
import { useState } from 'react';
import { bookingApi, BookingCreateRequest } from '@/lib/booking-api-client';

export function useCreateBooking() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createBooking = async (data: BookingCreateRequest) => {
    setLoading(true);
    setError(null);

    try {
      const booking = await bookingApi.createBooking(data);
      return booking;
    } catch (err) {
      const message = err instanceof Error ? err.message : 'An error occurred';
      setError(message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { createBooking, loading, error };
}
*/

// Example: Get user bookings hook
/*
import { useState, useEffect } from 'react';
import { bookingApi, Booking } from '@/lib/booking-api-client';

export function useUserBookings(status?: 'BOOKED' | 'CANCELLED' | 'MISSED' | 'COMPLETED') {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBookings = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await bookingApi.getUserBookings(undefined, status);
        setBookings(data);
      } catch (err) {
        const message = err instanceof Error ? err.message : 'An error occurred';
        setError(message);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, [status]);

  const refetch = async () => {
    try {
      const data = await bookingApi.getUserBookings(undefined, status);
      setBookings(data);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'An error occurred';
      setError(message);
    }
  };

  return { bookings, loading, error, refetch };
}
*/

// Example: Cancel booking hook
/*
import { useState } from 'react';
import { bookingApi } from '@/lib/booking-api-client';

export function useCancelBooking() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const cancelBooking = async (bookingId: number) => {
    setLoading(true);
    setError(null);
    
    try {
      const booking = await bookingApi.cancelBooking(bookingId);
      return booking;
    } catch (err) {
      const message = err instanceof Error ? err.message : 'An error occurred';
      setError(message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { cancelBooking, loading, error };
}
*/
