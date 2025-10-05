"use client";

import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import PhotoLibraryOutlinedIcon from "@mui/icons-material/PhotoLibraryOutlined";
import { Scanner } from "@yudiel/react-qr-scanner";
import jsQR from "jsqr";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onChange: (serialNumber: string) => void;
  onError: (error: string) => void;
}

export default function QRcodeScanner({
  isOpen,
  onClose,
  onChange,
  onError,
}: Props) {
  const handleSerialNumberScanned = (rawValue: string) => {
    onChange(rawValue);
    onClose();
  };

  const handleUploadQRCodeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) {
      onError("Please upload a file");
      onChange("");
      return;
    }

    const reader = new FileReader();

    reader.onload = (event: ProgressEvent<FileReader>) => {
      const result = event.target?.result;
      if (typeof result !== "string") {
        onError("Failed to read image");
        return;
      }

      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");

        if (!context) {
          onError("Failed to get canvas context");
          return;
        }

        canvas.width = img.width;
        canvas.height = img.height;
        context.drawImage(img, 0, 0);

        const imageData = context.getImageData(
          0,
          0,
          canvas.width,
          canvas.height
        );
        const code = jsQR(imageData.data, imageData.width, imageData.height);

        if (code) {
          onError("");
          onChange(code.data);
        } else {
          onError("No QR code found.");
          onChange("");
        }
      };

      img.onerror = () => {
        onError("Failed to load image");
      };

      img.src = result;
    };

    reader.onerror = () => {
      onError("Failed to read file");
    };

    reader.readAsDataURL(file);

    onClose();
  };
  return (
    <>
      {isOpen && (
        <div className="border-neutral-200 bg-white">
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
            onScan={(result) => handleSerialNumberScanned(result[0].rawValue)}
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
      )}
    </>
  );
}
