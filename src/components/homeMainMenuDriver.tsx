import {
  Bus,
  MapPin,
  Users,
  Clock,
  LayoutDashboard
} from "lucide-react";
import Link from "next/link";
import React from "react";

interface HomeMenu {
  name: string;
  icon: React.ReactNode;
  link: string;
  onclick?(): void;
}

const DriverMenu: HomeMenu[] = [
  {
    name: "Driver System",
    icon: <MapPin />,
    link: "/driver/",
  },
  
];

function HomeMainMenuDriver() {
  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
        <div className="flex items-center gap-2 text-blue-700">
          <Bus className="w-5 h-5" />
          <h2 className="font-semibold">Driver </h2>
        </div>
        <p className="text-blue-600 text-sm mt-1">
          จัดการเส้นทางและผู้โดยสารของคุณ
        </p>
      </div>
      
      {DriverMenu.map((menu) => (
        <Link
          href={menu.link}
          key={menu.name}
          className="flex flex-row gap-4 items-center border border-gray-300 rounded-lg p-4 hover:bg-blue-50 hover:border-blue-300 transition-colors"
          onClick={menu.onclick}
        >
          <div className="text-blue-600">
            {menu.icon}
          </div>
          <p className="text-gray-700">{menu.name}</p>
        </Link>
      ))}
    </div>
  );
}

export default HomeMainMenuDriver;