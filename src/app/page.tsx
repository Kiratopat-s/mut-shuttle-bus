"use client";

import { Suspense } from "react";
import { CarouselCheckIn } from "@/components/carouselCheckIn";
import HomeMainMenu from "@/components/homeMainMenu";
import HomeMainMenuDriver from "@/components/homeMainMenuDriver";
import QrPassanger from "@/components/modals/qrPassangerModal";
import { useQueryState, parseAsBoolean } from "nuqs";
import { useUserInformation } from "@/provider/UserProvider";

function HomeContent() {
  const { user } = useUserInformation();
  const [qrModalOpen, setQrModalOpen] = useQueryState(
    "qr",
    parseAsBoolean.withDefault(false)
  );

  const handleOpenQrModal = () => {
    setQrModalOpen(true);
  };

  const handleCloseQrModal = () => {
    setQrModalOpen(false);
  };

  const isDriver = user?.role.roleName === "driver";

  return (
    <div className="flex min-h-screen flex-col items-center w-full p-2 gap-12">
      <QrPassanger isOpen={qrModalOpen} onClose={handleCloseQrModal} />

      {/* แสดง CarouselCheckIn เฉพาะผู้ใช้ที่ไม่ใช่ driver */}
      {!isDriver && (
        <div className="p-2 bg-red-900 rounded-xl w-full max-w-sm">
          <CarouselCheckIn onOpenQrModal={handleOpenQrModal} />
        </div>
      )}
      {/* แสดงเมนูตาม role */}
      {isDriver ? <HomeMainMenuDriver /> : <HomeMainMenu />}
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
