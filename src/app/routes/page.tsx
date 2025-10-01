"use client";

import React, { Suspense, useState } from "react";
import Loading from "@/components/loading/Loading";
import {
  PageHeader,
  RouteSelector,
  RoutesDiagram as RouteDiagram,
} from "@/components/routes";

interface BusStop {
  stopOrder: number;
  name: string;
  latitude: number;
  longitude: number;
  nextStop: number;
  travelTime: number; // in minutes
}

interface Route {
  id: number;
  name: string;
  overallTravelTime: number; // in minutes
  busStops: BusStop[];
}

const DemoRoutes: Route[] = [
  {
    id: 1,
    name: "เส้นทางที่ 1",
    overallTravelTime: 30,
    busStops: [
      {
        stopOrder: 0,
        name: "มหาวิทยาลัยเทคโนโลยีมหานคร",
        latitude: 13.842369,
        longitude: 100.855465,
        nextStop: 1,
        travelTime: 5,
      },
      {
        stopOrder: 1,
        name: "โลตัสหนองจอก",
        latitude: 13.85108673,
        longitude: 100.8596003,
        nextStop: 2,
        travelTime: 3,
      },
      {
        stopOrder: 2,
        name: "โรงพยาบาลหนองจอก",
        latitude: 13.85902081,
        longitude: 100.8587751,
        nextStop: 3,
        travelTime: 6,
      },
      {
        stopOrder: 3,
        name: "Big C หนองจอก",
        latitude: 13.85445515,
        longitude: 100.8547605,
        nextStop: 4,
        travelTime: 3,
      },
      {
        stopOrder: 4,
        name: "สวนสาธารณหนองจอก",
        latitude: 13.85453204,
        longitude: 100.8589811,
        nextStop: 5,
        travelTime: 3,
      },
      {
        stopOrder: 5,
        name: "ร้านส้มตำป้านาง",
        latitude: 13.85519269,
        longitude: 100.8506088,
        nextStop: 0,
        travelTime: 10,
      },
    ],
  },
  {
    id: 2,
    name: "เส้นทางที่ 2",
    overallTravelTime: 13,
    busStops: [
      {
        stopOrder: 0,
        name: "มหาวิทยาลัยเทคโนโลยีมหานคร",
        latitude: 13.842369,
        longitude: 100.855465,
        nextStop: 1,
        travelTime: 5,
      },
      {
        stopOrder: 1,
        name: "โลตัสหนองจอก",
        latitude: 13.85108673,
        longitude: 100.8596003,
        nextStop: 2,
        travelTime: 3,
      },
      {
        stopOrder: 2,
        name: "สวนสาธารณหนองจอก",
        latitude: 13.85453204,
        longitude: 100.8589811,
        nextStop: 3,
        travelTime: 5,
      },
      {
        stopOrder: 3,
        name: "ร้านส้มตำป้านาง",
        latitude: 13.85519269,
        longitude: 100.8506088,
        nextStop: 0,
        travelTime: 0, // End of route
      },
    ],
  },
  {
    id: 3,
    name: "เส้นทางที่ 3",
    overallTravelTime: 12,
    busStops: [
      {
        stopOrder: 0,
        name: "Big C หนองจอก",
        latitude: 13.85445515,
        longitude: 100.8547605,
        nextStop: 1,
        travelTime: 5,
      },
      {
        stopOrder: 1,
        name: "โลตัสหนองจอก",
        latitude: 13.85108673,
        longitude: 100.8596003,
        nextStop: 2,
        travelTime: 3,
      },
      {
        stopOrder: 2,
        name: "สวนสาธารณหนองจอก",
        latitude: 13.85453204,
        longitude: 100.8589811,
        nextStop: 3,
        travelTime: 5,
      },
      {
        stopOrder: 3,
        name: "ร้านส้มตำป้านาง",
        latitude: 13.85519269,
        longitude: 100.8506088,
        nextStop: 4,
        travelTime: 2,
      },
      {
        stopOrder: 4,
        name: "มหาวิทยาลัยเทคโนโลยีมหานคร",
        latitude: 13.842369,
        longitude: 100.855465,
        nextStop: 0,
        travelTime: 0, // End of route
      },
    ],
  },
];

function RoutesPageContent() {
  const [selectedRoute, setSelectedRoute] = useState<string>("1");

  const selectedRouteData = DemoRoutes.find(
    (route) => route.id.toString() === selectedRoute
  );

  return (
    <main className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-50/50">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 py-4 sm:py-6 lg:py-8 max-w-7xl">
        <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8">
          {/* Header */}
          <PageHeader
            title="เส้นทางการเดินรถ"
            description="เลือกเส้นทางเพื่อดูรายละเอียดป้ายรถและเวลาเดินทาง"
          />

          {/* Route Selector */}
          <RouteSelector
            routes={DemoRoutes}
            selectedRoute={selectedRoute}
            onRouteChange={setSelectedRoute}
          />

          {/* Route Diagram */}
          {selectedRouteData && <RouteDiagram route={selectedRouteData} />}
        </div>
      </div>
    </main>
  );
}

function Page() {
  return (
    <Suspense fallback={<Loading title="Loading Routes..." />}>
      <RoutesPageContent />
    </Suspense>
  );
}

export default Page;
