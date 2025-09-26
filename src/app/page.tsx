"use client";

import { CarouselCheckIn } from "@/components/carouselCheckIn";
import QrPassanger from "@/components/qrPassanger";
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
      <div className="flex flex-col h-full justify-start gap-4">
        <div className="p-2 bg-red-900 rounded-xl w-full max-w-lg">
          <CarouselCheckIn onOpenQrModal={handleOpenQrModal} />
        </div>
      </div>
      {/* end body */}
    </>
  );
}
