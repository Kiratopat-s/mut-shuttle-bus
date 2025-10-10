"use client";

import { Suspense, useState } from "react";
import { CarouselCheckIn } from "@/components/carouselCheckIn";
import PermissionBasedMenu from "@/components/PermissionBasedMenu";
import QrPassanger from "@/components/modals/qrPassangerModal";
import { useUserInformation } from "@/provider/UserProvider";
import { BookingCardInfo } from "@/hooks/useBookings";

function HomeContent() {
  const { hasAnyPermission } = useUserInformation();
  const [selectedBooking, setSelectedBooking] =
    useState<BookingCardInfo | null>(null);
  const [qrModalOpen, setQrModalOpen] = useState(false);

  const handleOpenQrModal = (booking: BookingCardInfo) => {
    setSelectedBooking(booking);
    setQrModalOpen(true);
  };

  const handleCloseQrModal = () => {
    setQrModalOpen(false);
    setSelectedBooking(null);
  };

  const canMakeBookings = hasAnyPermission(["create_booking"]);

  return (
    <div className="flex min-h-screen flex-col items-center w-full p-2 gap-12">
      <QrPassanger
        isOpen={qrModalOpen}
        onClose={handleCloseQrModal}
        bookingData={selectedBooking}
      />

      {/* แสดง CarouselCheckIn เฉพาะผู้ใช้ที่มีสิทธิ์จองรถ */}
      {canMakeBookings && (
        <div className="p-2 bg-red-900 rounded-xl w-full max-w-sm">
          <CarouselCheckIn onOpenQrModal={handleOpenQrModal} />
        </div>
      )}

      {/* แสดงเมนูตาม permissions */}
      <PermissionBasedMenu />
    </div>
  );
}

function HomeLoading() {
  return (
    <div className="flex min-h-screen flex-col items-center w-full p-2 gap-12">
      <div className="p-2 bg-gray-200 rounded-xl w-full max-w-sm animate-pulse">
        <div className="h-48 bg-gray-300 rounded-lg"></div>
      </div>
      <div className="w-full max-w-sm space-y-4">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="h-16 bg-gray-200 rounded-lg animate-pulse"
          ></div>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<HomeLoading />}>
      <HomeContent />
    </Suspense>
  );
}
