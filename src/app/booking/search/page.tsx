"use client";
import React, { useMemo, Suspense } from "react";
import { Car, ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useQueryState } from "nuqs";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TripCardList, type Trip } from "@/components/tripCard";

export interface BookingInfoFromAPI {
  date: Date;
  origin: string;
  destination: string;
  guests: number;
  vehicle: string;
}

function SearchPageContent() {
  const [sortBy, setSortBy] = useQueryState("sort", {
    defaultValue: "time-asc",
    shallow: false,
  });

  const MockBookingInfoFromAPI: BookingInfoFromAPI = {
    date: new Date("2025-09-28T09:28:04.297Z"),
    origin: "มหาวิทยาลัยเทคโนโลยีมหานคร",
    destination: "Big C หนองจอก",
    guests: 4,
    vehicle: "All vehicle types",
  };

  const MockMatchTrip = useMemo(
    () => [
      {
        vehicleRouteScheduleId: "1",
        vehicle_license_plate: "ป้ายทะเบียน 1",
        vehicle_type: "Minibus",
        vehicle_seat: 25,
        vehicle_route_start_time: "09:30",
        vehicle_route_end_time: "10:15",
        vehicle_route_duration: "45 min",
        available_seat: 25,
        origin: "มหาวิทยาลัยเทคโนโลยีมหานคร",
        destination: "Big C หนองจอก",
      },
      {
        vehicleRouteScheduleId: "2",
        vehicle_license_plate: "ป้ายทะเบียน 2",
        vehicle_type: "Bus",
        vehicle_seat: 40,
        vehicle_route_start_time: "10:00",
        vehicle_route_end_time: "10:45",
        vehicle_route_duration: "45 min",
        available_seat: 2,
        origin: "มหาวิทยาลัยเทคโนโลยีมหานคร",
        destination: "Big C หนองจอก",
      },
      {
        vehicleRouteScheduleId: "3",
        vehicle_license_plate: "ป้ายทะเบียน 3",
        vehicle_type: "Van",
        vehicle_seat: 12,
        vehicle_route_start_time: "10:30",
        vehicle_route_end_time: "11:15",
        vehicle_route_duration: "45 min",
        available_seat: 5,
        origin: "มหาวิทยาลัยเทคโนโลยีมหานคร",
        destination: "Big C หนองจอก",
      },
      {
        vehicleRouteScheduleId: "4",
        vehicle_license_plate: "ป้ายทะเบียน 4",
        vehicle_type: "Minibus",
        vehicle_seat: 25,
        vehicle_route_start_time: "11:00",
        vehicle_route_end_time: "11:45",
        vehicle_route_duration: "45 min",
        available_seat: 20,
        origin: "มหาวิทยาลัยเทคโนโลยีมหานคร",
        destination: "Big C หนองจอก",
      },
      {
        vehicleRouteScheduleId: "5",
        vehicle_license_plate: "ป้ายทะเบียน 5",
        vehicle_type: "Bus",
        vehicle_seat: 40,
        vehicle_route_start_time: "11:30",
        vehicle_route_end_time: "12:15",
        vehicle_route_duration: "45 min",
        available_seat: 0,
        origin: "มหาวิทยาลัยเทคโนโลยีมหานคร",
        destination: "Big C หนองจอก",
      },
      {
        vehicleRouteScheduleId: "6",
        vehicle_license_plate: "ป้ายทะเบียน 6",
        vehicle_type: "Van",
        vehicle_seat: 12,
        vehicle_route_start_time: "12:00",
        vehicle_route_end_time: "12:45",
        vehicle_route_duration: "45 min",
        available_seat: 8,
        origin: "มหาวิทยาลัยเทคโนโลยีมหานคร",
        destination: "Big C หนองจอก",
      },
      {
        vehicleRouteScheduleId: "7",
        vehicle_license_plate: "ป้ายทะเบียน 7",
        vehicle_type: "Minivan",
        vehicle_seat: 15,
        vehicle_route_start_time: "12:30",
        vehicle_route_end_time: "13:15",
        vehicle_route_duration: "45 min",
        available_seat: 10,
        origin: "มหาวิทยาลัยเทคโนโลยีมหานคร",
        destination: "Big C หนองจอก",
      },
      {
        vehicleRouteScheduleId: "8",
        vehicle_license_plate: "ป้ายทะเบียน 8",
        vehicle_type: "Minibus",
        vehicle_seat: 25,
        vehicle_route_start_time: "13:00",
        vehicle_route_end_time: "13:45",
        vehicle_route_duration: "45 min",
        available_seat: 18,
        origin: "มหาวิทยาลัยเทคโนโลยีมหานคร",
        destination: "Big C หนองจอก",
      },
      {
        vehicleRouteScheduleId: "9",
        vehicle_license_plate: "ป้ายทะเบียน 9",
        vehicle_type: "Bus",
        vehicle_seat: 40,
        vehicle_route_start_time: "13:30",
        vehicle_route_end_time: "14:15",
        vehicle_route_duration: "45 min",
        available_seat: 22,
        origin: "มหาวิทยาลัยเทคโนโลยีมหานคร",
        destination: "Big C หนองจอก",
      },
      {
        vehicleRouteScheduleId: "10",
        vehicle_license_plate: "ป้ายทะเบียน 10",
        vehicle_type: "Van",
        vehicle_seat: 12,
        vehicle_route_start_time: "14:00",
        vehicle_route_end_time: "14:45",
        vehicle_route_duration: "45 min",
        available_seat: 6,
        origin: "มหาวิทยาลัยเทคโนโลยีมหานคร",
        destination: "Big C หนองจอก",
      },
    ],
    []
  );

  const router = useRouter();

  const sortedTrips = useMemo(() => {
    const trips = [...MockMatchTrip];

    switch (sortBy) {
      case "time-asc":
        return trips.sort((a, b) =>
          a.vehicle_route_start_time.localeCompare(b.vehicle_route_start_time)
        );
      case "time-desc":
        return trips.sort((a, b) =>
          b.vehicle_route_start_time.localeCompare(a.vehicle_route_start_time)
        );
      case "duration-asc":
        return trips.sort((a, b) => {
          const aDuration = parseInt(a.vehicle_route_duration);
          const bDuration = parseInt(b.vehicle_route_duration);
          return aDuration - bDuration;
        });
      case "duration-desc":
        return trips.sort((a, b) => {
          const aDuration = parseInt(a.vehicle_route_duration);
          const bDuration = parseInt(b.vehicle_route_duration);
          return bDuration - aDuration;
        });
      case "seats-asc":
        return trips.sort((a, b) => a.available_seat - b.available_seat);
      case "seats-desc":
        return trips.sort((a, b) => b.available_seat - a.available_seat);
      case "vehicle-asc":
        return trips.sort((a, b) =>
          a.vehicle_type.localeCompare(b.vehicle_type)
        );
      case "vehicle-desc":
        return trips.sort((a, b) =>
          b.vehicle_type.localeCompare(a.vehicle_type)
        );
      default:
        return trips;
    }
  }, [MockMatchTrip, sortBy]);

  const handleBookTrip = (trip: Trip) => {
    router.push(
      `/booking/guest-details?tripId=${trip.vehicleRouteScheduleId}&guests=${MockBookingInfoFromAPI.guests}`
    );
  };

  const handleSortChange = (value: string) => {
    setSortBy(value);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-start gap-4">
      <div className="sticky top-0 left-0 w-screen flex flex-row items-center justify-start bg-white z-[100] border-b border-gray-200 shadow-sm">
        <div className="flex md:hidden w-full p-2 gap-2 items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => router.back()}
            className="flex-shrink-0 w-8 h-8"
            aria-label="Go back"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>

          <div className="flex flex-col gap-1 flex-1 min-w-0">
            <div className="flex items-center gap-1 min-w-0">
              <div className="flex-1 min-w-0">
                <p className="truncate text-xs font-medium text-gray-900">
                  {MockBookingInfoFromAPI.origin.length > 20
                    ? MockBookingInfoFromAPI.origin.substring(0, 20) + "..."
                    : MockBookingInfoFromAPI.origin}
                </p>
              </div>
              <div className="flex-shrink-0 px-1">
                <Car className="w-3 h-3 text-red-700" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="truncate text-xs font-medium text-gray-900">
                  {MockBookingInfoFromAPI.destination.length > 15
                    ? MockBookingInfoFromAPI.destination.substring(0, 15) +
                      "..."
                    : MockBookingInfoFromAPI.destination}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-gray-500">
              <span>
                อา. {MockBookingInfoFromAPI.date.getDate()}{" "}
                {MockBookingInfoFromAPI.date.toLocaleDateString("th", {
                  month: "short",
                })}
              </span>
              <span>•</span>
              <span>
                {MockBookingInfoFromAPI.guests} passenger
                {MockBookingInfoFromAPI.guests > 1 ? "s" : ""}
              </span>
            </div>
          </div>
        </div>

        <div className="hidden md:flex w-full p-4 gap-4 items-center max-w-6xl mx-auto">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => router.back()}
            className="flex-shrink-0"
            aria-label="Go back"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          <div className="flex items-center gap-6 flex-1 min-w-0">
            <div className="flex flex-col gap-1 flex-1 min-w-0">
              <p className="text-xs text-gray-500 uppercase tracking-wide">
                From
              </p>
              <p
                className="truncate text-lg font-bold text-gray-900"
                title={MockBookingInfoFromAPI.origin}
              >
                {MockBookingInfoFromAPI.origin}
              </p>
            </div>

            <div className="flex-shrink-0 px-2">
              <Car className="w-6 h-6 text-gray-400" />
            </div>

            <div className="flex flex-col gap-1 flex-1 min-w-0">
              <p className="text-xs text-gray-500 uppercase tracking-wide">
                To
              </p>
              <p
                className="truncate text-lg font-bold text-gray-900"
                title={MockBookingInfoFromAPI.destination}
              >
                {MockBookingInfoFromAPI.destination}
              </p>
            </div>

            <div className="flex flex-col gap-1 flex-shrink-0 text-right">
              <p className="text-xs text-gray-500 uppercase tracking-wide">
                Date
              </p>
              <p className="text-sm font-medium text-gray-900">
                {MockBookingInfoFromAPI.date.toLocaleDateString("th", {
                  weekday: "short",
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </p>
            </div>

            <div className="flex flex-col gap-1 flex-shrink-0 text-right">
              <p className="text-xs text-gray-500 uppercase tracking-wide">
                Passengers
              </p>
              <p className="text-sm font-medium text-gray-900">
                {MockBookingInfoFromAPI.guests} passenger
                {MockBookingInfoFromAPI.guests > 1 ? "s" : ""}
              </p>
            </div>

            {MockBookingInfoFromAPI.vehicle !== "All vehicle types" && (
              <div className="flex flex-col gap-1 flex-shrink-0 text-right">
                <p className="text-xs text-gray-500 uppercase tracking-wide">
                  Vehicle
                </p>
                <p className="text-sm font-medium text-gray-900">
                  {MockBookingInfoFromAPI.vehicle}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="w-full max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 flex flex-col gap-4 sm:gap-6 pb-6">
        <div className="flex items-center justify-between pt-3 sm:pt-4">
          <div>
            <h2 className="text-base sm:text-lg font-semibold text-foreground">
              Available Routes
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground">
              {sortedTrips.length} route
              {sortedTrips.length !== 1 ? "s" : ""} found
            </p>
          </div>

          <div>
            <Select value={sortBy} onValueChange={handleSortChange}>
              <SelectTrigger className="w-32 sm:w-40 text-xs sm:text-sm">
                <SelectValue placeholder="Sort" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="time-asc">Time A-Z</SelectItem>
                <SelectItem value="time-desc">Time Z-A</SelectItem>
                <SelectItem value="duration-asc">Duration A-Z</SelectItem>
                <SelectItem value="duration-desc">Duration Z-A</SelectItem>
                <SelectItem value="seats-asc">Seats A-Z</SelectItem>
                <SelectItem value="seats-desc">Seats Z-A</SelectItem>
                <SelectItem value="vehicle-asc">Vehicle A-Z</SelectItem>
                <SelectItem value="vehicle-desc">Vehicle Z-A</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <TripCardList
          wantedSeat={MockBookingInfoFromAPI.guests}
          trips={sortedTrips}
          onBook={handleBookTrip}
        />
      </div>
    </main>
  );
}

function SearchPageLoading() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start gap-4">
      <div className="sticky top-0 left-0 w-screen flex flex-row items-center justify-start bg-white z-[100] border-b border-gray-200 shadow-sm">
        <div className="flex md:hidden w-full p-2 gap-2 items-center">
          <div className="w-8 h-8 bg-gray-200 rounded animate-pulse"></div>
          <div className="flex flex-col gap-1 flex-1">
            <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-3 bg-gray-200 rounded animate-pulse w-3/4"></div>
          </div>
        </div>
        <div className="hidden md:flex w-full p-4 gap-4 items-center max-w-6xl mx-auto">
          <div className="w-10 h-10 bg-gray-200 rounded animate-pulse"></div>
          <div className="flex items-center gap-6 flex-1">
            <div className="h-8 bg-gray-200 rounded animate-pulse flex-1"></div>
            <div className="h-8 bg-gray-200 rounded animate-pulse flex-1"></div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 flex flex-col gap-4 sm:gap-6 pb-6">
        <div className="flex items-center justify-between pt-3 sm:pt-4">
          <div>
            <div className="h-6 bg-gray-200 rounded animate-pulse w-32 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded animate-pulse w-24"></div>
          </div>
        </div>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="h-24 bg-gray-200 rounded animate-pulse"
            ></div>
          ))}
        </div>
      </div>
    </main>
  );
}

function Page() {
  return (
    <Suspense fallback={<SearchPageLoading />}>
      <SearchPageContent />
    </Suspense>
  );
}

export default Page;
