import React from "react";
import { History, X } from "lucide-react";

const MockRecentSearch = [
  {
    id: 1,
    name: "มหาวิทยลัยมหานคร",
  },
  {
    id: 2,
    name: "โลตัสหนองจอก",
  },
];

function RecentSearch() {
  return (
    <div className="flex flex-col gap-2 mt-4">
      <div className="flex flex-row justify-between w-full">
        <h4>Recently search</h4>
        <p className="text-red-800 text-sm">Clear</p>
      </div>
      <div className="flex flex-row flex-wrap gap-4 justify-start">
        <div className="flex flex-col gap-4 w-full">
          {MockRecentSearch.map((stop) => (
            <div className="flex flex-row justify-between" key={stop.id}>
              <div className="flex items-center gap-4">
                <History />
                <p>{stop.name}</p>
              </div>
              <div className="flex">
                <X />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RecentSearch;
