"use client";
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { EllipsisVertical, QrCode, TicketCheck } from "lucide-react";
import { ButtonWithIcon } from "./buttonWithLogo";
import OriginToDestination from "./originToDestination";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { bookingApi } from "@/lib/booking-api-client";
import { useRouter } from "next/navigation";
interface MiniBookingCardProps {
  handleOpenQrPassengerModal: (bookingInfo: {
    id: number;
    origin: string;
    destination: string;
    departTime: string;
    arriveTime: string;
    departDate: string;
    bookingNo: string;
    vehicleNo: string;
    scheduleDateTime?: string;
  }) => void;
  bookingInfo: {
    id: number;
    origin: string;
    destination: string;
    departTime: string;
    arriveTime: string;
    departDate: string;
    bookingNo: string;
    vehicleNo: string;
    scheduleDateTime?: string;
  };
  isPast?: boolean;
}

function MiniBookingCard({
  handleOpenQrPassengerModal,
  bookingInfo,
  isPast = false,
}: MiniBookingCardProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showAlertDialog, setShowAlertDialog] = useState(false);

  const handleClick = () => {
    handleOpenQrPassengerModal(bookingInfo);
  };

  const handleCancelClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowAlertDialog(true);
  };

  const handleConfirmCancel = async () => {
    setIsLoading(true);

    try {
      await bookingApi.cancelBooking(bookingInfo.id);
      setShowAlertDialog(false);
      setIsOpen(false);
      router.refresh();
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Failed to cancel booking";
      alert(`Error: ${message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div key={bookingInfo.id}>
      <div className="p-2">
        <Card className="!p-0 hover:shadow-lg transition-shadow">
          <CardContent className="flex items-center justify-center p-2">
            <div className="flex flex-col gap-2 w-full">
              <div className="flex justify-between w-full items-center">
                <p>Departs {bookingInfo.departDate}</p>
                {!isPast && (
                  <Popover open={isOpen} onOpenChange={setIsOpen}>
                    <PopoverTrigger asChild>
                      <button
                        type="button"
                        className="hover:bg-gray-100 rounded-full p-1 transition-colors z-100 cursor-pointer"
                        aria-label="Booking options"
                      >
                        <EllipsisVertical className="scale-90 text-gray-500" />
                      </button>
                    </PopoverTrigger>
                    <PopoverContent className="w-40">
                      <Button
                        variant="destructive"
                        className="w-full cursor-pointer"
                        onClick={handleCancelClick}
                        disabled={isLoading}
                      >
                        {isLoading ? "Cancelling..." : "Cancel Booking"}
                      </Button>
                    </PopoverContent>
                  </Popover>
                )}
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
                {!isPast && (
                  <div className="flex flex-col justify-center items-center">
                    <QrCode className="text-red-500 scale-125" />
                  </div>
                )}
              </div>
              {!isPast && (
                <ButtonWithIcon
                  onclick={handleClick}
                  name="Check In QR code"
                  icon={<TicketCheck />}
                  className="bg-red-500 text-white cursor-pointer hover:bg-red-600 hover:text-white"
                />
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      <AlertDialog open={showAlertDialog} onOpenChange={setShowAlertDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Cancel Booking</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to cancel booking {bookingInfo.bookingNo}?
              This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={isLoading}>
              No, keep it
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={handleConfirmCancel}
              disabled={isLoading}
              className="bg-red-500 hover:bg-red-600"
            >
              {isLoading ? "Cancelling..." : "Yes, cancel booking"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

export default MiniBookingCard;
