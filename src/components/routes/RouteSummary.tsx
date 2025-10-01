import React from "react";
import { Route as RouteIcon, Info } from "lucide-react";

interface BusStop {
  stopOrder: number;
  name: string;
  latitude: number;
  longitude: number;
  nextStop: number;
  travelTime: number;
}

interface Route {
  id: number;
  name: string;
  overallTravelTime: number;
  busStops: BusStop[];
}

interface RouteSummaryProps {
  route: Route;
}

export function RouteSummary({ route }: RouteSummaryProps) {
  const startStop = route.busStops[0];
  const endStop = route.busStops[route.busStops.length - 1];
  const isCircularRoute = startStop.name === endStop.name;

  return (
    <div className="mt-4 sm:mt-6 p-4 sm:p-6 bg-gradient-to-r from-red-50 to-red-100 border-2 border-red-200 rounded-xl shadow-lg">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-4">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="p-1.5 sm:p-2 bg-red-700 text-white rounded-lg">
            <RouteIcon className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <span className="font-bold text-lg sm:text-xl text-red-800">
            สรุปเส้นทาง
          </span>
        </div>
        <div className="sm:ml-auto">
          <div className="flex items-center gap-1 text-red-600 bg-red-100 px-2 sm:px-3 py-1 rounded-full border border-red-300">
            <Info className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="text-xs sm:text-sm font-medium">
              ข้อมูลเส้นทาง
            </span>
          </div>
        </div>
      </div>

      <div className="bg-white p-3 sm:p-4 rounded-lg border border-red-200 shadow-sm">
        <div className="text-gray-800 leading-relaxed text-sm sm:text-base">
          <p className="mb-2">
            <span className="font-semibold text-red-700">เส้นทางนี้</span>{" "}
            มีทั้งหมด{" "}
            <span className="font-bold text-red-800 bg-red-100 px-1.5 sm:px-2 py-0.5 rounded text-sm sm:text-base">
              {route.busStops.length} ป้าย
            </span>{" "}
            ใช้เวลาเดินทางรวม{" "}
            <span className="font-bold text-red-800 bg-red-100 px-1.5 sm:px-2 py-0.5 rounded text-sm sm:text-base">
              {route.overallTravelTime} นาที
            </span>
          </p>

          {!isCircularRoute && (
            <p className="text-gray-700">
              จากจุดเริ่มต้น{" "}
              <span className="font-semibold text-red-700 bg-red-50 px-1.5 sm:px-2 py-0.5 rounded border border-red-200 break-words">
                &ldquo;{startStop.name}&rdquo;
              </span>{" "}
              ไปยังจุดสิ้นสุด{" "}
              <span className="font-semibold text-red-700 bg-red-50 px-1.5 sm:px-2 py-0.5 rounded border border-red-200 break-words">
                &ldquo;{endStop.name}&rdquo;
              </span>
            </p>
          )}

          {isCircularRoute && (
            <p className="text-gray-700">
              เป็นเส้นทางวนกลับ เริ่มต้นและสิ้นสุดที่{" "}
              <span className="font-semibold text-red-700 bg-red-50 px-1.5 sm:px-2 py-0.5 rounded border border-red-200 break-words">
                &ldquo;{startStop.name}&rdquo;
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
