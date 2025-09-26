import React from "react";
import { Button } from "./ui/button";

const MockBusStops = [
  {
    id: 1,
    name: "มหาวิทยลัยมหานคร",
  },
  {
    id: 2,
    name: "โลตัสหนองจอก",
  },
  {
    id: 3,
    name: "บิ๊กซีหนองจอก",
  },
  {
    id: 4,
    name: "โรงพยาบาลหนองจอก",
  },
  {
    id: 5,
    name: "สวนสาธารณหนองจอก",
  },
];

function Discover() {
  return (
    <div className="flex flex-col gap-2 mt-2">
      <h4>Discover</h4>
      <div className="flex flex-row flex-wrap gap-4 justify-start">
        {MockBusStops.map((stop) => (
          <Button key={stop.id} variant="outline" size="sm">
            {stop.name}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default Discover;
