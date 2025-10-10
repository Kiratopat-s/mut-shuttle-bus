"use client";

import { Suspense, useMemo } from "react";
import { useQueryState, parseAsIsoDateTime, parseAsString } from "nuqs";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Car, Calendar, Users, AlertCircle } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TripCardList, type Trip } from "@/components/tripCard";
import { useRouteSearch } from "@/hooks/useRouteSearch";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Skeleton } from "@/components/ui/skeleton";

function SearchPageContent() {
  const router = useRouter();
  const [sortBy, setSortBy] = useQueryState("sort", {
    defaultValue: "time-asc",
    shallow: false,
  });

  // Get search parameters from URL
  const [dateStr] = useQueryState("date", parseAsIsoDateTime);
  const [originStopIdStr] = useQueryState("originStopId", parseAsString);
  const [destinationStopIdStr] = useQueryState(
    "destinationStopId",
    parseAsString
  );
  const [guestsStr] = useQueryState("guests", parseAsString);

  // Parse parameters
  const searchParams = useMemo(() => {
    if (!dateStr || !originStopIdStr || !destinationStopIdStr || !guestsStr) {
      return null;
    }

    return {
      date: dateStr,
      originStopId: parseInt(originStopIdStr),
      destinationStopId: parseInt(destinationStopIdStr),
      guests: parseInt(guestsStr),
    };
  }, [dateStr, originStopIdStr, destinationStopIdStr, guestsStr]);

  // Fetch routes using the hook
  const { routes, isLoading, error, searchCriteria } =
    useRouteSearch(searchParams);

  // Convert API routes to Trip format for TripCardList
  const trips: Trip[] = useMemo(() => {
    return routes.map((route) => ({
      vehicleRouteScheduleId: route.vehicleRouteScheduleId.toString(),
      vehicle_license_plate: route.vehicle.licensePlate,
      vehicle_type: route.vehicle.vehicleType.vehicleTypeName,
      vehicle_seat: route.vehicle.capacity,
      vehicle_route_start_time: new Date(route.startTime).toLocaleTimeString(
        "th-TH",
        {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }
      ),
      vehicle_route_end_time: new Date(route.endTime).toLocaleTimeString(
        "th-TH",
        {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }
      ),
      vehicle_route_duration: `${route.travelTime} min`,
      available_seat: route.availableSeats,
      origin: route.origin.stopName,
      destination: route.destination.stopName,
    }));
  }, [routes]);

  // Sort trips
  const sortedTrips = useMemo(() => {
    const tripsCopy = [...trips];

    switch (sortBy) {
      case "time-asc":
        return tripsCopy.sort((a, b) =>
          a.vehicle_route_start_time.localeCompare(b.vehicle_route_start_time)
        );
      case "time-desc":
        return tripsCopy.sort((a, b) =>
          b.vehicle_route_start_time.localeCompare(a.vehicle_route_start_time)
        );
      case "duration-asc":
        return tripsCopy.sort((a, b) => {
          const aDuration = parseInt(a.vehicle_route_duration);
          const bDuration = parseInt(b.vehicle_route_duration);
          return aDuration - bDuration;
        });
      case "duration-desc":
        return tripsCopy.sort((a, b) => {
          const aDuration = parseInt(a.vehicle_route_duration);
          const bDuration = parseInt(b.vehicle_route_duration);
          return bDuration - aDuration;
        });
      case "seats-asc":
        return tripsCopy.sort((a, b) => a.available_seat - b.available_seat);
      case "seats-desc":
        return tripsCopy.sort((a, b) => b.available_seat - a.available_seat);
      case "vehicle-asc":
        return tripsCopy.sort((a, b) =>
          a.vehicle_type.localeCompare(b.vehicle_type)
        );
      case "vehicle-desc":
        return tripsCopy.sort((a, b) =>
          b.vehicle_type.localeCompare(a.vehicle_type)
        );
      default:
        return tripsCopy;
    }
  }, [trips, sortBy]);

  const handleBookTrip = (trip: Trip) => {
    // Pass all necessary data to guest-details page
    const params = new URLSearchParams({
      vehicleRouteScheduleId: trip.vehicleRouteScheduleId,
      guests: (searchParams?.guests || 1).toString(),
      originStopId: searchParams?.originStopId?.toString() || "",
      destinationStopId: searchParams?.destinationStopId?.toString() || "",
      // Display data for UI
      origin: trip.origin,
      destination: trip.destination,
      startTime: trip.vehicle_route_start_time,
      endTime: trip.vehicle_route_end_time,
      duration: trip.vehicle_route_duration,
      vehicleType: trip.vehicle_type,
      licensePlate: trip.vehicle_license_plate,
      availableSeats: trip.available_seat.toString(),
      capacity: trip.vehicle_seat.toString(),
    });

    router.push(`/booking/guest-details?${params.toString()}`);
  };

  const handleSortChange = (value: string) => {
    setSortBy(value);
  };

  // Show error if no search params
  if (!searchParams) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-4">
        <Alert variant="destructive" className="max-w-md">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            Missing search parameters. Please go back and fill in the search
            form.
          </AlertDescription>
        </Alert>
        <Button onClick={() => router.push("/booking")} className="mt-4">
          Go to Search
        </Button>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-start gap-4">
      {/* Header */}
      <div className="sticky top-0 left-0 w-screen flex flex-row items-center justify-start bg-white z-[100] border-b border-gray-200 shadow-sm">
        {/* Mobile Header */}
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
              <Car className="w-4 h-4 text-gray-400 flex-shrink-0" />
              <p className="text-xs text-gray-500 truncate">
                {searchCriteria?.originStop.stopName} →{" "}
                {searchCriteria?.destinationStop.stopName}
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs text-gray-500">
              <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                <span>
                  {searchCriteria?.date
                    ? new Date(searchCriteria.date).toLocaleDateString()
                    : ""}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="w-3 h-3" />
                <span>
                  {searchCriteria?.guests}{" "}
                  {searchCriteria?.guests === 1 ? "guest" : "guests"}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Header */}
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
              <p className="text-sm font-semibold text-foreground truncate">
                {searchCriteria?.originStop.stopName}
              </p>
              <p className="text-xs text-muted-foreground">Origin</p>
            </div>

            <div className="flex-shrink-0 px-2">
              <Car className="w-6 h-6 text-gray-400" />
            </div>

            <div className="flex flex-col gap-1 flex-1 min-w-0">
              <p className="text-sm font-semibold text-foreground truncate">
                {searchCriteria?.destinationStop.stopName}
              </p>
              <p className="text-xs text-muted-foreground">Destination</p>
            </div>

            <div className="flex flex-col gap-1 flex-shrink-0 text-right">
              <p className="text-sm font-semibold text-foreground">
                {searchCriteria?.date
                  ? new Date(searchCriteria.date).toLocaleDateString("th-TH", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })
                  : ""}
              </p>
              <p className="text-xs text-muted-foreground">Date</p>
            </div>

            <div className="flex flex-col gap-1 flex-shrink-0 text-right">
              <p className="text-sm font-semibold text-foreground">
                {searchCriteria?.guests}{" "}
                {searchCriteria?.guests === 1 ? "Guest" : "Guests"}
              </p>
              <p className="text-xs text-muted-foreground">Passengers</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="w-full max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 flex flex-col gap-4 sm:gap-6 pb-6">
        {/* Results Header with Sort */}
        <div className="flex items-center justify-between pt-3 sm:pt-4">
          <div>
            <h2 className="text-base sm:text-lg font-semibold text-foreground">
              Available Routes
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground">
              {isLoading
                ? "Searching..."
                : `${sortedTrips.length} ${
                    sortedTrips.length === 1 ? "route" : "routes"
                  } found`}
            </p>
          </div>

          <div>
            <Select value={sortBy} onValueChange={handleSortChange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="time-asc">Time (earliest first)</SelectItem>
                <SelectItem value="time-desc">Time (latest first)</SelectItem>
                <SelectItem value="duration-asc">
                  Duration (shortest)
                </SelectItem>
                <SelectItem value="duration-desc">
                  Duration (longest)
                </SelectItem>
                <SelectItem value="seats-asc">
                  Seats (least available)
                </SelectItem>
                <SelectItem value="seats-desc">
                  Seats (most available)
                </SelectItem>
                <SelectItem value="vehicle-asc">Vehicle (A-Z)</SelectItem>
                <SelectItem value="vehicle-desc">Vehicle (Z-A)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Error State */}
        {error && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {/* Loading State */}
        {isLoading && (
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="border rounded-lg p-4 space-y-3">
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
                <Skeleton className="h-4 w-full" />
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!isLoading && !error && sortedTrips.length === 0 && (
          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              No routes found for your search criteria. Routes must be bookable
              at least 20 minutes before departure. Please try different dates
              or locations.
            </AlertDescription>
          </Alert>
        )}

        {/* Results */}
        {!isLoading && !error && sortedTrips.length > 0 && (
          <TripCardList
            wantedSeat={searchParams.guests}
            trips={sortedTrips}
            onBook={handleBookTrip}
          />
        )}
      </div>
    </main>
  );
}

function SearchPageLoading() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start gap-4">
      <div className="sticky top-0 left-0 w-screen flex flex-row items-center justify-start bg-white z-[100] border-b border-gray-200 shadow-sm">
        <div className="flex md:hidden w-full p-2 gap-2 items-center">
          <Skeleton className="w-8 h-8 rounded" />
          <div className="flex flex-col gap-1 flex-1">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-3 w-1/2" />
          </div>
        </div>
      </div>
      <div className="w-full max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 flex flex-col gap-4 sm:gap-6 pb-6">
        <div className="flex items-center justify-between pt-3 sm:pt-4">
          <div>
            <Skeleton className="h-6 w-32 mb-2" />
            <Skeleton className="h-4 w-24" />
          </div>
          <Skeleton className="h-10 w-[180px]" />
        </div>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="border rounded-lg p-4 space-y-3">
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
              <Skeleton className="h-4 w-full" />
            </div>
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
