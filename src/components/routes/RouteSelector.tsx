"use client";

import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Route as RouteIcon } from "lucide-react";

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

interface RouteSelectorProps {
  routes: Route[];
  selectedRoute: string;
  onRouteChange: (routeId: string) => void;
}

export function RouteSelector({
  routes,
  selectedRoute,
  onRouteChange,
}: RouteSelectorProps) {
  return (
    <Card className="border-red-200 shadow-lg">
      <CardHeader className="bg-gradient-to-r from-red-50 to-red-100 border-b border-red-200 p-4 sm:p-6">
        <CardTitle className="text-red-800 flex items-center gap-2 text-lg sm:text-xl">
          <RouteIcon className="w-4 h-4 sm:w-5 sm:h-5 text-red-700" />
          เลือกเส้นทาง
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4 sm:p-6">
        <Select value={selectedRoute} onValueChange={onRouteChange}>
          <SelectTrigger className="w-full sm:max-w-xs border-red-200 focus:border-red-700 focus:ring-red-700/20 h-10 sm:h-11">
            <SelectValue placeholder="เลือกเส้นทาง" />
          </SelectTrigger>
          <SelectContent>
            {routes.map((route) => (
              <SelectItem
                key={route.id}
                value={route.id.toString()}
                className="focus:bg-red-50 focus:text-red-900"
              >
                <div className="flex items-center gap-2 w-full">
                  <RouteIcon className="w-3 h-3 sm:w-4 sm:h-4 text-red-600 flex-shrink-0" />
                  <span className="truncate text-sm sm:text-base">
                    {route.name}
                  </span>
                  <Badge
                    variant="secondary"
                    className="ml-auto bg-red-100 text-red-800 hover:bg-red-200 text-xs"
                  >
                    {route.overallTravelTime} นาที
                  </Badge>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </CardContent>
    </Card>
  );
}
