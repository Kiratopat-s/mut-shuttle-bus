import { QRCodeSVG } from "qrcode.react";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import OriginToDestination from "../originToDestination";
import { useUserInformation } from "@/provider/UserProvider";

interface BookingData {
  id: number;
  origin: string;
  destination: string;
  departTime: string;
  arriveTime: string;
  departDate: string;
  bookingNo: string;
  vehicleNo: string;
}

interface QrPassangerProps {
  isOpen?: boolean;
  onClose?: () => void;
  bookingData?: BookingData | null;
}

function QrPassanger({
  isOpen = true,
  onClose,
  bookingData,
}: QrPassangerProps) {
  const { user } = useUserInformation();

  if (!bookingData) {
    return null;
  }

  const fullName = user ? `${user.firstName} ${user.lastName}` : "Guest";

  return (
    <div
      className={`${
        isOpen ? "flex" : "hidden"
      } w-screen h-screen bg-black/50 backdrop-blur-sm items-center justify-center p-4 fixed top-0 left-0 z-[1000]`}
      onClick={onClose}
    >
      <Card className="w-full max-w-sm" onClick={(e) => e.stopPropagation()}>
        <CardHeader className="relative">
          <CardTitle>MUT shuttle bus</CardTitle>
          <CardDescription></CardDescription>
          <div className="flex flex-col text-right absolute right-4 gap-1.5">
            <CardTitle>Booking</CardTitle>
            <CardDescription className="text-xs">
              #{bookingData.bookingNo}
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <OriginToDestination
            origin={bookingData.origin}
            destination={bookingData.destination}
            departTime={bookingData.departTime}
            arriveTime={bookingData.arriveTime}
          />
          <div className="flex flex-col mt-4 gap-3">
            <div className="flex justify-between items-start">
              <div className="flex flex-col">
                <p className="text-xs text-gray-500">Passenger</p>
                <p className="font-medium">{fullName}</p>
              </div>
              <div className="flex flex-col text-right">
                <p className="text-xs text-gray-500">Vehicle</p>
                <p className="font-medium">{bookingData.vehicleNo}</p>
              </div>
            </div>
            <div className="flex justify-between items-start">
              <div className="flex flex-col">
                <p className="text-xs text-gray-500">Date</p>
                <p className="font-medium text-sm">{bookingData.departDate}</p>
              </div>
            </div>
          </div>
          <div className="mt-6 bg-white p-4 rounded-lg border-2 border-gray-200">
            <QRCodeSVG
              value={JSON.stringify({
                bookingId: bookingData.id,
                bookingNo: bookingData.bookingNo,
                userId: user?.userId,
                timestamp: new Date().toISOString(),
              })}
              className="w-full aspect-square h-56"
              level="H"
              marginSize={0}
            />
            <p className="text-center text-xs text-gray-500 mt-2">
              Scan this QR code to check in
            </p>
          </div>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button
            variant="default"
            className="w-full bg-red-700 text-white cursor-pointer hover:bg-red-800"
            onClick={onClose}
          >
            Close
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default QrPassanger;
