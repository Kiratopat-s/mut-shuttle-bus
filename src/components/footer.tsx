import { Bus, Waypoints, TicketCheck } from "lucide-react";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="flex flex-row py-2 justify-around w-full border-t border-gray-300">
      <Link href="/">
        <div className="flex flex-col justify-center items-center">
          <Bus />
          <p>Check-in</p>
        </div>
      </Link>
      <Link href="/routes">
        <div className="relative flex flex-col justify-center items-center">
          <div className="absolute flex rounded-full bg-red-500 p-3 -top-6">
            <Waypoints className=" scale-110 text-white" />
          </div>
          <Waypoints className=" opacity-0" />
          <p className="text-gray-500">Routes</p>
        </div>
      </Link>
      <Link href="/purchase">
        <div className="flex flex-col justify-center items-center text-gray-500">
          <TicketCheck />
          <p>Purchase</p>
        </div>
      </Link>
    </div>
  );
}

export default Footer;
