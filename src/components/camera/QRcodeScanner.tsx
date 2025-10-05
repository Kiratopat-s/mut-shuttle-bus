"use client";

import { Scanner } from "@yudiel/react-qr-scanner";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onChange: (serialNumber: string) => void;
}

export default function QRcodeScanner({ isOpen, onClose, onChange }: Props) {
  const handleSerialNumberScanned = (rawValue: string) => {
    onChange(rawValue);
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50">
          <div className="relative px-4 py-10 bg-white rounded-2xl">
            <div className="border-neutral-200 bg-white">
              <button className="absolute top-4 right-4 z-10" onClick={onClose}>
                X
              </button>
              <Scanner
                styles={{
                  container: {
                    width: "100%",
                    height: "100%",
                    backgroundColor: "black",
                  },
                  video: {
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  },
                }}
                components={{
                  finder: false,
                }}
                onScan={(result) =>
                  handleSerialNumberScanned(result[0].rawValue)
                }
                allowMultiple={true}
              >
                <div className="relative h-full w-full">
                  <svg
                    className="absolute inset-0 h-full w-full"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <mask id="scanner-mask">
                        <rect width="100%" height="100%" fill="white" />
                        <rect
                          x="calc(50% - 140px)"
                          y="calc(50% - 140px)"
                          width="280px"
                          height="280px"
                          rx="24"
                          fill="black"
                        />
                      </mask>
                    </defs>
                    <rect
                      width="100%"
                      height="100%"
                      fill="black"
                      mask="url(#scanner-mask)"
                      fillOpacity="0.6"
                    />
                  </svg>
                  <div
                    id="scan-box"
                    className="pointer-events-none absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 transform rounded-3xl border-[4px] border-brand-700 shadow"
                  ></div>
                </div>
              </Scanner>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
