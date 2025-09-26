import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { EllipsisVertical, MonitorCog, QrCode } from "lucide-react";
import { ButtonWithIcon } from "./buttonWithLogo";
import OriginToDestination from "./originToDestination";

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
          <CarouselItem onClick={handleOpenQrPassengerModal} key={b.id}>
            <div className="p-2">
              <Card className="!p-0">
                <CardContent className="flex items-center justify-center p-4">
                  <div className="flex flex-col gap-2 w-full">
                    <div className="flex justify-between w-full items-center">
                      <p>Departs {b.departDate}</p>
                      <EllipsisVertical className=" scale-90 text-gray-500" />
                    </div>
                    <OriginToDestination
                      origin={b.origin}
                      destination={b.destination}
                      departTime={b.departTime}
                      arriveTime={b.arriveTime}
                    />
                    <div className="flex flex-row justify-between text-xs text-gray-500 w-full">
                      <div className="flex flex-row gap-8">
                        <div className="flex flex-col">
                          <p>Booking no.</p>
                          <p className="text-black">{b.bookingNo}</p>
                        </div>
                        <div className="flex flex-col">
                          <p>Vehicle no.</p>
                          <p className="text-black">{b.vehicleNo}</p>
                        </div>
                      </div>
                      <div className="flex flex-col justify-center items-center">
                        <QrCode className="text-red-500 scale-125" />
                      </div>
                    </div>
                    <ButtonWithIcon
                      name="Manage booking"
                      icon={<MonitorCog />}
                      classname="bg-red-500 text-white cursor-pointer hover:bg-red-600 hover:text-white"
                    />
                  </div>
                  {/* <span className="text-4xl font-semibold">{index + 1}</span> */}
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious /> */}
      {/* <CarouselNext /> */}
    </Carousel>
  );
}
