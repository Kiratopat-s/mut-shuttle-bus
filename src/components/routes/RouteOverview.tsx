import React from "react";
import { BarChart3, Clock, MapPin } from "lucide-react";

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

interface RouteOverviewProps {
  route: Route;
}

export function RouteOverview({ route }: RouteOverviewProps) {
  const averageTime = Math.round(
    route.overallTravelTime / route.busStops.length
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 p-4 sm:p-6 bg-gradient-to-r from-red-50 via-red-50 to-red-100 rounded-xl border border-red-200 shadow-inner">
      <div className="text-center group hover:scale-105 transition-transform">
        <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mx-auto mb-2 sm:mb-3 bg-gradient-to-br from-red-600 to-red-700 text-white rounded-full shadow-lg">
          <MapPin className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
        </div>
        <div className="text-2xl sm:text-3xl font-bold text-red-800 mb-1">
          {route.busStops.length}
        </div>
        <div className="text-xs sm:text-sm font-medium text-red-600">
          จำนวนป้าย
        </div>
      </div>

      <div className="text-center group hover:scale-105 transition-transform">
        <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mx-auto mb-2 sm:mb-3 bg-gradient-to-br from-red-600 to-red-700 text-white rounded-full shadow-lg">
          <Clock className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
        </div>
        <div className="text-2xl sm:text-3xl font-bold text-red-800 mb-1">
          {route.overallTravelTime}
        </div>
        <div className="text-xs sm:text-sm font-medium text-red-600">
          นาที (รวม)
        </div>
      </div>

      <div className="text-center group hover:scale-105 transition-transform sm:col-span-2 lg:col-span-1">
        <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mx-auto mb-2 sm:mb-3 bg-gradient-to-br from-red-600 to-red-700 text-white rounded-full shadow-lg">
          <BarChart3 className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
        </div>
        <div className="text-2xl sm:text-3xl font-bold text-red-800 mb-1">
          {averageTime}
        </div>
        <div className="text-xs sm:text-sm font-medium text-red-600">
          นาที (เฉลี่ย)
        </div>
      </div>
    </div>
  );
}
