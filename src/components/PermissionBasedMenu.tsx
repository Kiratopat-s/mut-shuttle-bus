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
import { PERMISSIONS } from "@/lib/permissions";

interface MenuItem {
  name: string;
  icon: React.ReactNode;
  link: string;
  requiredPermissions?: string[]; // If user has ANY of these permissions, show the menu
  requireAllPermissions?: string[]; // User must have ALL of these permissions
  requireRole?: string[]; // Show only for specific roles
  onclick?(): void;
}

// Define all possible menu items with their permission requirements
const ALL_MENU_ITEMS: MenuItem[] = [
  // Booking related (for students and employees)
  {
    name: "Book a ride",
    icon: <TicketPlus />,
    link: "/booking",
    requiredPermissions: [PERMISSIONS.CREATE_BOOKING],
  },
  {
    name: "My bookings",
    icon: <WalletCards />,
    link: "/my-bookings",
    requiredPermissions: [
      PERMISSIONS.CREATE_BOOKING,
      PERMISSIONS.CANCEL_BOOKING,
    ],
  },
  {
    name: "Check-in",
    icon: <TicketsPlane />,
    link: "/check-in",
    requiredPermissions: [PERMISSIONS.CREATE_BOOKING],
  },

  // Driver specific
  {
    name: "Driver System",
    icon: <MapPin />,
    link: "/driver/",
    requiredPermissions: [
      PERMISSIONS.DRIVE_VEHICLE,
      PERMISSIONS.UPDATE_VEHICLE_STATUS,
    ],
  },

  // Admin/Management (show if user has ANY of these permissions)
  {
    name: "System management",
    icon: <BrickWallShield />,
    link: "/admin",
    requiredPermissions: [
      PERMISSIONS.MANAGE_USERS,
      PERMISSIONS.MANAGE_VEHICLES,
      PERMISSIONS.MANAGE_ROUTES,
      PERMISSIONS.MANAGE_SCHEDULES,
      PERMISSIONS.MANAGE_BOOKINGS,
      PERMISSIONS.MANAGE_PERMISSIONS,
    ],
  },
  {
    name: "Schedule Management",
    icon: <Calendar />,
    link: "/schedule/management",
    requiredPermissions: [
      PERMISSIONS.MANAGE_SCHEDULES,
      PERMISSIONS.MANAGE_VEHICLES,
      PERMISSIONS.MANAGE_ROUTES,
    ],
  },
  {
    name: "Report",
    icon: <LayoutDashboard />,
    link: "/report",
    requiredPermissions: [
      PERMISSIONS.VIEW_REPORTS,
      PERMISSIONS.MANAGE_BOOKINGS,
    ],
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
  const isDriver = hasAnyPermission([PERMISSIONS.DRIVE_VEHICLE]);

  return (
    <div className="flex flex-col gap-2 w-full">
      {/* Driver specific header - only show if user has driver permissions */}
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
          <div className={isDriver ? "text-blue-600" : "text-gray-600"}>
            {menu.icon}
          </div>
          <p className="text-gray-700 font-medium">{menu.name}</p>
        </Link>
      ))}

      {/* Debug info - only in development mode */}
      {process.env.NODE_ENV === "development" && (
        <div className="mt-4 p-3 bg-gray-100 rounded-lg text-xs text-gray-600 border border-gray-300">
          <p className="font-semibold mb-2 text-gray-800">🔍 Debug Info:</p>
          <div className="space-y-1">
            <p>
              <span className="font-medium">Role:</span>{" "}
              <span className="text-blue-600">{user.role.roleName}</span>
            </p>
            <p>
              <span className="font-medium">Permissions:</span>{" "}
              <span className="text-green-600">
                {user.role.RolePermission.map(
                  (rp) => rp.permission.permissionName
                ).join(", ") || "None"}
              </span>
            </p>
            <p>
              <span className="font-medium">Visible Menu Items:</span>{" "}
              <span className="text-purple-600">{visibleMenuItems.length}</span>
            </p>
            <p className="pt-1 mt-1 border-t border-gray-300">
              <span className="font-medium">Menu Items:</span>{" "}
              {visibleMenuItems.map((item) => item.name).join(", ")}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default PermissionBasedMenu;
