"use client";

import React from "react";
import { Car } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export interface Trip {
  vehicleRouteScheduleId: string;
  vehicle_license_plate: string;
  vehicle_type: string;
  vehicle_seat: number;
  vehicle_route_start_time: string;
  vehicle_route_end_time: string;
  vehicle_route_duration: string;
  available_seat: number;
  origin: string;
  destination: string;
}

interface TripCardProps {
  trip: Trip;
  wantedSeat: number;
  onBook?: (trip: Trip) => void;
}

export function TripCard({ trip, onBook, wantedSeat }: TripCardProps) {
  const handleBookClick = () => {
    onBook?.(trip);
  };

  const seatPercentage = (trip.available_seat / trip.vehicle_seat) * 100;
  const getSeatStatus = () => {
    if (seatPercentage > 50) return "text-green-600";
    if (seatPercentage > 20) return "text-yellow-600";
    return "text-red-600";
  };

  const getSeatStatusBg = () => {
    if (seatPercentage > 50) return "bg-green-50 border-green-200";
    if (seatPercentage > 20) return "bg-yellow-50 border-yellow-200";
    return "bg-red-50 border-red-200";
  };

  const isDisabledBook =
    trip.available_seat === 0 || trip.available_seat < wantedSeat;

  return (
    <Card className="group hover:shadow-md transition-all duration-200 border-l-4 border-l-red-700">
      <CardContent className="p-3 sm:p-4">
        <div className="block sm:hidden">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="text-center">
                <div className="text-lg font-bold text-gray-900 font-mono">
                  {new Date(
                    `1970-01-01T${trip.vehicle_route_start_time}Z`
                  ).toLocaleTimeString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: false,
                  })}
                </div>
                <div className="text-xs text-gray-500">Departure</div>
              </div>

              <div className="flex flex-col items-center px-1">
                <div className="text-gray-400 text-sm">→</div>
                <div className="text-xs text-gray-500 whitespace-nowrap">
                  {trip.vehicle_route_duration}
                </div>
              </div>

              <div className="text-center">
                <div className="text-lg font-bold text-gray-900 font-mono">
                  {new Date(
                    `1970-01-01T${trip.vehicle_route_end_time}Z`
                  ).toLocaleTimeString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: false,
                  })}
                </div>
                <div className="text-xs text-gray-500">Arrival</div>
              </div>
            </div>

            <Button
              className="bg-red-700 hover:bg-red-800 text-white px-4 py-2 rounded-lg font-medium transition-colors text-sm"
              onClick={handleBookClick}
              disabled={isDisabledBook}
            >
              {trip.available_seat === 0
                ? "Full"
                : trip.available_seat < wantedSeat
                ? "Not enough seat"
                : "Book now"}
            </Button>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Car className="w-4 h-4 text-red-700" />
              <span className="text-sm font-semibold text-red-700">
                {trip.vehicle_type}
              </span>
            </div>

            <div
              className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium border ${getSeatStatusBg()} ${getSeatStatus()}`}
            >
              <span>
                {trip.available_seat}/{trip.vehicle_seat}
              </span>
              <span className="text-gray-500">seats</span>
            </div>
          </div>

          <div className="mt-2 pt-2 border-t border-gray-100">
            <span className="text-xs text-gray-400">
              {trip.vehicle_license_plate}
            </span>
          </div>
        </div>

        <div className="hidden sm:block">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 font-mono">
                  {trip.vehicle_route_start_time}
                </div>
                <div className="text-xs text-gray-500 mt-0.5">Departure</div>
              </div>

              <div className="flex flex-col items-center px-2">
                <div className="text-gray-400 text-sm">→</div>
                <div className="text-xs text-gray-500 whitespace-nowrap">
                  {trip.vehicle_route_duration}
                </div>
              </div>

              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 font-mono">
                  {trip.vehicle_route_end_time}
                </div>
                <div className="text-xs text-gray-500 mt-0.5">Arrival</div>
              </div>
            </div>

            <div className="flex items-center gap-4 flex-shrink-0">
              <div className="text-right">
                <div className="flex items-center gap-2 justify-end mb-1">
                  <Car className="w-4 h-4 text-red-700" />
                  <span className="text-sm font-semibold text-red-700">
                    {trip.vehicle_type}
                  </span>
                </div>

                <div
                  className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium border ${getSeatStatusBg()} ${getSeatStatus()}`}
                >
                  <span>
                    {trip.available_seat}/{trip.vehicle_seat}
                  </span>
                  <span className="text-gray-500">seats</span>
                </div>
              </div>

              <Button
                className="bg-red-700 hover:bg-red-800 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                onClick={handleBookClick}
                disabled={isDisabledBook}
              >
                {trip.available_seat === 0
                  ? "Full"
                  : trip.available_seat < wantedSeat
                  ? "Not enough seat"
                  : "Book now"}
              </Button>
            </div>
          </div>

          <div className="mt-3 pt-2 border-t border-gray-100">
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-400">
                {trip.vehicle_license_plate}
              </span>
              <span className="text-xs text-gray-400">
                Route: {trip.origin} → {trip.destination}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function NoTripsFound() {
  return (
    <Card className="py-8 sm:py-12 border-dashed border-2 border-gray-200">
      <CardContent className="text-center px-4">
        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
          <Car className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400" />
        </div>
        <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-2">
          No Routes Found
        </h3>
        <p className="text-gray-500 text-sm max-w-xs sm:max-w-sm mx-auto leading-relaxed">
          Try changing your travel date or check your pickup and drop-off
          locations again
        </p>
      </CardContent>
    </Card>
  );
}

interface TripCardListProps {
  wantedSeat: number;
  trips: Trip[];
  onBook?: (trip: Trip) => void;
  className?: string;
}

export function TripCardList({
  trips,
  onBook,
  className,
  wantedSeat,
}: TripCardListProps) {
  return (
    <div className={`space-y-4 ${className || ""}`}>
      {trips.length > 0 ? (
        trips.map((trip) => (
          <TripCard
            key={trip.vehicleRouteScheduleId}
            trip={trip}
            onBook={onBook}
            wantedSeat={wantedSeat}
          />
        ))
      ) : (
        <NoTripsFound />
      )}
    </div>
  );
}
