"use client";
import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import MiniBookingCard from "./miniBookingCard";
import { useActiveBookings } from "@/hooks/useBookings";

interface CarouselCheckInProps {
  onOpenQrModal?: () => void;
}

export function CarouselCheckIn({ onOpenQrModal }: CarouselCheckInProps) {
  const { bookings, loading, error } = useActiveBookings();

  const handleOpenQrPassengerModal = () => {
    onOpenQrModal?.();
  };

  if (loading) {
    return (
      <div className="w-full max-w-sm flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full max-w-sm p-4">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
          <p className="text-red-800 text-sm">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-2 text-red-600 hover:text-red-800 text-xs underline"
          >
            Try again
          </button>
        </div>
      </div>
    );
  }

  if (bookings.length === 0) {
    return (
      <div className="w-full max-w-sm p-4">
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 text-center">
          <p className="text-gray-600 text-sm mb-2">No active bookings</p>
          <p className="text-gray-500 text-xs">Book a ride to get started</p>
        </div>
      </div>
    );
  }

  return (
    <Carousel className="w-full max-w-sm">
      <CarouselContent>
        {bookings.map((b) => (
          <CarouselItem key={b.id}>
            <MiniBookingCard
              bookingInfo={b}
              handleOpenQrPassengerModal={handleOpenQrPassengerModal}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious /> */}
      {/* <CarouselNext /> */}
    </Carousel>
  );
}
