"use client";

import {
  BrickWallShield,
  TicketPlus,
  TicketsPlane,
  WalletCards,
  LayoutDashboard,
  MapPin,
  Bus,
  Calendar,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { useUserInformation } from "@/provider/UserProvider";

interface MenuItem {
  name: string;
  icon: React.ReactNode;
  link: string;
  requiredPermissions?: string[]; // If any of these permissions exist, show the menu
  requireAllPermissions?: string[]; // All of these permissions must exist
  requireRole?: string[]; // Show only for specific roles
  onclick?(): void;
}

// Define all possible menu items with their permission requirements
const ALL_MENU_ITEMS: MenuItem[] = [
  // Booking related
  {
    name: "Book a ride",
    icon: <TicketPlus />,
    link: "/booking",
    requiredPermissions: ["create_booking"],
  },
  {
    name: "My bookings",
    icon: <WalletCards />,
    link: "/my-bookings",
    requiredPermissions: ["create_booking", "cancel_booking"],
  },
  {
    name: "Check-in",
    icon: <TicketsPlane />,
    link: "/check-in",
    requiredPermissions: ["create_booking"],
  },

  // Driver specific
  {
    name: "Driver System",
    icon: <MapPin />,
    link: "/driver/",
    requiredPermissions: ["drive_vehicle", "update_vehicle_status"],
  },

  // Admin/Management
  {
    name: "System management",
    icon: <BrickWallShield />,
    link: "/admin",
    requiredPermissions: [
      "manage_users",
      "manage_vehicle",
      "manage_routes",
      "manage_vehicle_routes",
      "manage_bookings",
      "manage_buss_stops",
      "manage_roles",
      "manage_employees",
      "manage_permissions",
    ],
  },
  {
    name: "Schedule Management",
    icon: <Calendar />,
    link: "/schedule/management",
    requiredPermissions: [
      "manage_vehicle_routes",
      "manage_vehicle",
      "manage_routes",
    ],
  },
  {
    name: "Report",
    icon: <LayoutDashboard />,
    link: "/report",
    requiredPermissions: ["view_reports", "manage_bookings"],
  },
];

function PermissionBasedMenu() {
  const { user, hasAnyPermission } = useUserInformation();

  if (!user) {
    return null;
  }

  // Filter menu items based on user permissions
  const visibleMenuItems = ALL_MENU_ITEMS.filter((item) => {
    // If no permissions required, show to everyone (shouldn't happen, but safe default)
    if (
      !item.requiredPermissions &&
      !item.requireAllPermissions &&
      !item.requireRole
    ) {
      return true;
    }

    // Check role requirement
    if (item.requireRole && !item.requireRole.includes(user.role.roleName)) {
      return false;
    }

    // Check if user has any of the required permissions
    if (item.requiredPermissions) {
      return hasAnyPermission(item.requiredPermissions);
    }

    // Check if user has all required permissions
    if (item.requireAllPermissions) {
      return item.requireAllPermissions.every((permission) =>
        hasAnyPermission([permission])
      );
    }

    return false;
  });

  // If no visible items, return null
  if (visibleMenuItems.length === 0) {
    return (
      <div className="flex flex-col gap-2 w-full">
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <p className="text-yellow-800 text-sm">
            No menu items available for your role.
          </p>
        </div>
      </div>
    );
  }

  // Check if user is a driver to show special header
  const isDriver = hasAnyPermission(["drive_vehicle"]);

  return (
    <div className="flex flex-col gap-2 w-full">
      {/* Driver specific header */}
      {isDriver && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
          <div className="flex items-center gap-2 text-blue-700">
            <Bus className="w-5 h-5" />
            <h2 className="font-semibold">Driver Dashboard</h2>
          </div>
          <p className="text-blue-600 text-sm mt-1">
            จัดการเส้นทางและผู้โดยสารของคุณ
          </p>
        </div>
      )}

      {/* Render filtered menu items */}
      {visibleMenuItems.map((menu) => (
        <Link
          href={menu.link}
          key={menu.name}
          className={`flex flex-row gap-4 items-center border rounded-lg p-4 transition-colors ${
            isDriver
              ? "border-gray-300 hover:bg-blue-50 hover:border-blue-300"
              : "border-gray-300 hover:bg-gray-50"
          }`}
          onClick={menu.onclick}
        >
          <div className={isDriver ? "text-blue-600" : ""}>{menu.icon}</div>
          <p className="text-gray-700">{menu.name}</p>
        </Link>
      ))}

      {/* Role and permission info (for debugging, can be removed in production) */}
      {process.env.NODE_ENV === "development" && (
        <div className="mt-4 p-3 bg-gray-100 rounded-lg text-xs text-gray-600">
          <p className="font-semibold mb-1">Debug Info:</p>
          <p>Role: {user.role.roleName}</p>
          <p>
            Permissions:{" "}
            {user.role.RolePermission.map(
              (rp) => rp.permission.permissionName
            ).join(", ")}
          </p>
          <p>Visible Items: {visibleMenuItems.length}</p>
        </div>
      )}
    </div>
  );
}

export default PermissionBasedMenu;
