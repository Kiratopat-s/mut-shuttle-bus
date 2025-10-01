import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Route as RouteIcon, Navigation } from "lucide-react";
import { RouteOverview } from "./RouteOverview";
import { BusStopItem } from "./BusStopItem";
import { RouteSummary } from "./RouteSummary";

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

interface RoutesDiagramProps {
  route: Route;
}

export function RoutesDiagram({ route }: RoutesDiagramProps) {
  return (
    <Card className="border-red-200 shadow-xl overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-red-600 to-red-700 text-white p-4 sm:p-6">
        <CardTitle className="flex flex-col sm:flex-row items-start sm:items-center gap-3 text-lg sm:text-xl">
          <div className="flex items-center gap-3">
            <div className="p-1.5 sm:p-2 bg-white/20 rounded-lg">
              <RouteIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <span className="font-bold">{route.name}</span>
          </div>
          <Badge
            variant="secondary"
            className="self-start sm:ml-auto bg-white/20 text-white border-white/30 hover:bg-white/30 text-sm"
          >
            <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
            รวม {route.overallTravelTime} นาที
          </Badge>
        </CardTitle>
      </CardHeader>

      <CardContent className="p-4 sm:p-6 lg:p-8 bg-gradient-to-b from-white to-red-50/30">
        <div className="space-y-6 sm:space-y-8">
          {/* Route Overview */}
          <RouteOverview route={route} />

          {/* Route Steps */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div className="p-1.5 sm:p-2 bg-red-700 text-white rounded-lg">
                <Navigation className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <h3 className="font-bold text-xl sm:text-2xl text-red-800">
                ลำดับการเดินทาง
              </h3>
              <div className="flex-1 h-px bg-gradient-to-r from-red-300 to-transparent"></div>
            </div>

            <div className="space-y-1 sm:space-y-2">
              {route.busStops.map((stop, index) => {
                const isLastStop = index === route.busStops.length - 1;
                const nextStop = route.busStops.find(
                  (s) => s.stopOrder === stop.nextStop
                );

                return (
                  <BusStopItem
                    key={`${stop.stopOrder}-${index}`}
                    stop={stop}
                    index={index}
                    isLastStop={isLastStop}
                    nextStop={nextStop}
                  />
                );
              })}
            </div>
          </div>

          {/* Route Summary */}
          <RouteSummary route={route} />
        </div>
      </CardContent>
    </Card>
  );
}
