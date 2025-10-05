"use client";

import QRcodeScanner from "@/components/camera/QRcodeScanner";

export default function Page() {
  return (
    <div className="relative flex flex-col items-center h-full w-full">
      <QRcodeScanner
        isOpen={true}
        onClose={() => {}}
        onChange={() => {}}
        onError={() => {}}
      />
    </div>
  );
}
