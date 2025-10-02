import { Car } from "lucide-react";
import React from "react";

interface OriginToDestinationProps {
  origin?: string;
  destination?: string;
  departTime?: string;
  arriveTime?: string;
}

function OriginToDestination({
  origin = "มหาวิทยลัยมหานคร",
  destination = "โลตัสหนองจอก",
  departTime = "08:00",
  arriveTime = "09:00",
}: OriginToDestinationProps) {
  return (
    <>
      <div className="flex flex-row gap-4 items-center w-full justify-between">
        <div className="flex flex-col gap-1 flex-1 min-w-0">
          <p className="truncate" title={origin}>
            {origin}
          </p>
          <p className="text-xs text-gray-500">{departTime}</p>
        </div>
        <div className="flex-shrink-0">
          <Car />
        </div>
        <div className="flex flex-col gap-1 flex-1 min-w-0">
          <p className="truncate text-right" title={destination}>
            {destination}
          </p>
          <p className="text-xs text-gray-500 text-right">{arriveTime}</p>
        </div>
      </div>
    </>
  );
}

export default OriginToDestination;
