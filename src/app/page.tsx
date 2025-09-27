"use client";

import { CarouselCheckIn } from "@/components/carouselCheckIn";
import HomeMainMenu from "@/components/homeMainMenu";
import QrPassanger from "@/components/modals/qrPassangerModal";
import { useQueryState, parseAsBoolean } from "nuqs";

export default function Home() {
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

  return (
    <>
      <QrPassanger isOpen={qrModalOpen} onClose={handleCloseQrModal} />
      {/* body */}
      <div className="flex flex-col h-[80vh] gap-12">
        <div className="p-2 bg-red-900 rounded-xl w-full max-w-lg">
          <CarouselCheckIn onOpenQrModal={handleOpenQrModal} />
        </div>
        <HomeMainMenu />
      </div>
      {/* end body */}
    </>
  );
}
