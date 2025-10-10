// API client for schedule management

export interface ScheduleData {
    vehicleRouteScheduleId: number;
    scheduleTime: string;
    status: "UPCOMING" | "CANCELLED" | "ONGOING" | "COMPLETED";
    driver: {
        userId: number;
        name: string;
        email: string;
    };
    route: {
        routeId: number;
        routeName: string;
        overallTravelTime: number;
    };
    vehicle: {
        vehicleId: number;
        licensePlate: string;
        capacity: number;
        type: string;
    };
    bookingCount?: number;
    bookings?: Array<{
        bookingId: number;
        status: string;
        user: {
            userId: number;
            name: string;
            email: string;
        };
        originStop: {
            stopName: string;
        };
        destinationStop: {
            stopName: string;
        };
    }>;
    createdAt: string;
    updatedAt: string;
}

export interface CreateScheduleRequest {
    vehicleId: number;
    routeId: number;
    driverId: number;
    scheduleTime: string;
    status?: "UPCOMING" | "CANCELLED" | "ONGOING" | "COMPLETED";
}

export interface UpdateScheduleRequest {
    vehicleId?: number;
    routeId?: number;
    driverId?: number;
    scheduleTime?: string;
    status?: "UPCOMING" | "CANCELLED" | "ONGOING" | "COMPLETED";
}

export interface ScheduleFilters {
    date?: string;
    driverId?: number;
    routeId?: number;
    vehicleId?: number;
    status?: string;
}

export const scheduleApi = {
    /**
     * Get all schedules with optional filters
     */
    async getSchedules(filters?: ScheduleFilters): Promise<ScheduleData[]> {
        const params = new URLSearchParams();
        if (filters?.date) params.append("date", filters.date);
        if (filters?.driverId) params.append("driverId", filters.driverId.toString());
        if (filters?.routeId) params.append("routeId", filters.routeId.toString());
        if (filters?.vehicleId) params.append("vehicleId", filters.vehicleId.toString());
        if (filters?.status) params.append("status", filters.status);

        const response = await fetch(`/api/admin/schedules?${params.toString()}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error || "Failed to fetch schedules");
        }

        const data = await response.json();
        return data.schedules;
    },

    /**
     * Get a single schedule by ID
     */
    async getSchedule(id: number): Promise<ScheduleData> {
        const response = await fetch(`/api/admin/schedules/${id}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error || "Failed to fetch schedule");
        }

        const data = await response.json();
        return data.schedule;
    },

    /**
     * Create a new schedule
     */
    async createSchedule(schedule: CreateScheduleRequest): Promise<ScheduleData> {
        const response = await fetch("/api/admin/schedules", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify(schedule),
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error || "Failed to create schedule");
        }

        const data = await response.json();
        return data.schedule;
    },

    /**
     * Update an existing schedule
     */
    async updateSchedule(
        id: number,
        updates: UpdateScheduleRequest
    ): Promise<ScheduleData> {
        const response = await fetch(`/api/admin/schedules/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify(updates),
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error || "Failed to update schedule");
        }

        const data = await response.json();
        return data.schedule;
    },

    /**
     * Delete a schedule
     */
    async deleteSchedule(id: number): Promise<void> {
        const response = await fetch(`/api/admin/schedules/${id}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error || "Failed to delete schedule");
        }
    },
};

// Helper function to format schedule time for display
export function formatScheduleTime(isoString: string): string {
    const date = new Date(isoString);
    return date.toLocaleString("th-TH", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
    });
}

// Helper function to get status badge color
export function getStatusColor(
    status: string
): "default" | "secondary" | "destructive" | "outline" {
    switch (status) {
        case "UPCOMING":
            return "default";
        case "ONGOING":
            return "secondary";
        case "COMPLETED":
            return "outline";
        case "CANCELLED":
            return "destructive";
        default:
            return "default";
    }
}

// Helper function to get status label in Thai
export function getStatusLabel(status: string): string {
    switch (status) {
        case "UPCOMING":
            return "กำลังจะเริ่ม";
        case "ONGOING":
            return "กำลังดำเนินการ";
        case "COMPLETED":
            return "เสร็จสิ้น";
        case "CANCELLED":
            return "ยกเลิก";
        default:
            return status;
    }
}
