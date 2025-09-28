import {
  BrickWallShield,
  TicketPlus,
  TicketsPlane,
  WalletCards,
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

const MockMenu: HomeMenu[] = [
  {
    name: "Book a ride",
    icon: <TicketPlus />,
    link: "/booking",
  },
  {
    name: "My bookings",
    icon: <WalletCards />,
    link: "/my-bookings",
  },
  {
    name: "Check-in",
    icon: <TicketsPlane />,
    link: "/check-in",
  },
  {
    name: "System management",
    icon: <BrickWallShield />,
    link: "/admin",
  },
  {
    name: "Report",
    icon: <LayoutDashboard />,
    link: "/report",

  }
];

function HomeMainMenu() {
  return (
    <div className="flex flex-col gap-2 w-full">
      {MockMenu.map((menu) => (
        <Link
          href={menu.link}
          key={menu.name}
          className="flex flex-row gap-4 items-center border border-gray-300 rounded-lg p-4"
          onClick={menu.onclick}
        >
          {menu.icon}
          <p>{menu.name}</p>
        </Link>
      ))}
    </div>
  );
}

export default HomeMainMenu;
