import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import MiniBookingCard from "./miniBookingCard";

const MockBookings = [
  {
    id: 1,
    origin: "มหาวิทยลัยมหานคร",
    destination: "โลตัสหนองจอก",
    departTime: "08:00",
    arriveTime: "09:00",
    departDate: "Fri, 26 Sep 2025",
    bookingNo: "21222423624825102612",
    vehicleNo: "สย 2591 กทม",
  },
  {
    id: 2,
    origin: "โลตัสหนองจอก",
    destination: "Big C หนองจอก",
    departTime: "11:00",
    arriveTime: "12:00",
    departDate: "Fri, 26 Sep 2025",
    bookingNo: "31222423624825102612",
    vehicleNo: "บก 1130 กทม",
  },
  {
    id: 3,
    origin: "Big C หนองจอก",
    destination: "มหาวิทยลัยมหานคร",
    departTime: "14:00",
    arriveTime: "15:30",
    departDate: "Fri, 26 Sep 2025",
    bookingNo: "41222423624825102612",
    vehicleNo: "สย 2599 กทม",
  },
];

interface CarouselCheckInProps {
  onOpenQrModal?: () => void;
}

export function CarouselCheckIn({ onOpenQrModal }: CarouselCheckInProps) {
  const handleOpenQrPassengerModal = () => {
    onOpenQrModal?.();
  };

  return (
    <Carousel className="w-full max-w-sm">
      <CarouselContent>
        {MockBookings.map((b) => (
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
