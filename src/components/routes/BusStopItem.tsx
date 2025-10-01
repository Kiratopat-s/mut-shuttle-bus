import React from "react";
import { Clock, MapPin, ArrowRight } from "lucide-react";

interface BusStop {
  stopOrder: number;
  name: string;
  latitude: number;
  longitude: number;
  nextStop: number;
  travelTime: number;
}

interface BusStopItemProps {
  stop: BusStop;
  index: number;
  isLastStop: boolean;
  nextStop?: BusStop;
}

export function BusStopItem({
  stop,
  index,
  isLastStop,
  nextStop,
}: BusStopItemProps) {
  return (
    <div className="relative">
      {/* Stop Card */}
      <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 border border-red-200 rounded-lg hover:bg-red-50/50 transition-colors group">
        {/* Step Number */}
        <div className="flex-shrink-0">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-red-600 to-red-700 text-white rounded-full flex items-center justify-center text-xs sm:text-sm font-bold shadow-lg group-hover:scale-105 transition-transform">
            {index + 1}
          </div>
        </div>

        {/* Stop Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start sm:items-center gap-2 mb-2">
            <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 flex-shrink-0 mt-0.5 sm:mt-0" />
            <h4 className="font-semibold text-gray-900 text-sm sm:text-base leading-tight">
              {stop.name}
            </h4>
          </div>
          <div className="text-xs sm:text-sm text-gray-600 mb-3 font-mono bg-gray-50 px-2 py-1 rounded">
            <span className="block sm:inline">พิกัด: </span>
            <button
              onClick={() => {
                const url = `https://www.google.com/maps/place/${stop.latitude},${stop.longitude}`;
                window.open(url, "_blank");
              }}
              className="text-red-600 hover:text-red-700 hover:bg-red-50 px-1 py-0.5 rounded transition-colors cursor-pointer underline decoration-red-300 hover:decoration-red-500 break-all"
              title="เปิดใน Google Maps"
            >
              {stop.latitude.toFixed(6)}, {stop.longitude.toFixed(6)}
            </button>
          </div>

          {/* Travel Time */}
          {!isLastStop && stop.travelTime > 0 && (
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 text-xs sm:text-sm">
              <div className="flex items-center gap-1 text-red-700 bg-red-50 px-2 py-1 rounded-full">
                <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="font-medium">{stop.travelTime} นาที</span>
              </div>
              {nextStop && (
                <div className="flex items-center gap-1 text-gray-600">
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="truncate">ไป {nextStop.name}</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Connecting Line */}
      {!isLastStop && stop.travelTime > 0 && (
        <div className="flex items-center gap-2 sm:gap-3 py-2 sm:py-3 pl-4 sm:pl-5">
          <div className="w-8 sm:w-10 flex justify-center">
            <div className="w-0.5 sm:w-1 h-8 sm:h-10 bg-gradient-to-b from-red-400 to-red-600 rounded-full shadow-sm"></div>
          </div>
          <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-red-700 bg-red-50 px-2 sm:px-3 py-1 rounded-full border border-red-200">
            <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="font-medium">{stop.travelTime} นาที</span>
          </div>
        </div>
      )}
    </div>
  );
}
