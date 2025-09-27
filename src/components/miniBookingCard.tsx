"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { EllipsisVertical, MonitorCog, QrCode } from "lucide-react";
import { ButtonWithIcon } from "./buttonWithLogo";
import OriginToDestination from "./originToDestination";
interface MiniBookingCardProps {
  handleOpenQrPassengerModal: () => void;
  bookingInfo: {
    id: number;
    origin: string;
    destination: string;
    departTime: string;
    arriveTime: string;
    departDate: string;
    bookingNo: string;
    vehicleNo: string;
  };
  isPast?: boolean;
}

function MiniBookingCard({
  handleOpenQrPassengerModal,
  bookingInfo,
}: MiniBookingCardProps) {
  return (
    <div onClick={handleOpenQrPassengerModal} key={bookingInfo.id}>
      <div className="p-2">
        <Card className="!p-0">
          <CardContent className="flex items-center justify-center p-2">
            <div className="flex flex-col gap-2 w-full">
              <div className="flex justify-between w-full items-center">
                <p>Departs {bookingInfo.departDate}</p>
                <EllipsisVertical className=" scale-90 text-gray-500" />
              </div>
              <OriginToDestination
                origin={bookingInfo.origin}
                destination={bookingInfo.destination}
                departTime={bookingInfo.departTime}
                arriveTime={bookingInfo.arriveTime}
              />
              <div className="flex flex-row justify-between text-xs text-gray-500 w-full">
                <div className="flex flex-row gap-8">
                  <div className="flex flex-col">
                    <p>Booking no.</p>
                    <p className="text-black">{bookingInfo.bookingNo}</p>
                  </div>
                  <div className="flex flex-col">
                    <p>Vehicle no.</p>
                    <p className="text-black">{bookingInfo.vehicleNo}</p>
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
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default MiniBookingCard;
