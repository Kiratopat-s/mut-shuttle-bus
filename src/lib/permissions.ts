/**
 * Permission and Role Utilities
 * 
 * This file contains all permission constants and utility functions
 * for checking user permissions and roles throughout the application.
 */

// ============================================================================
// PERMISSION CONSTANTS (matching database)
// ============================================================================

export const PERMISSIONS = {
    // User Management
    MANAGE_USERS: "manage_users",

    // Booking Management
    MANAGE_BOOKINGS: "manage_bookings",
    CREATE_BOOKING: "create_booking",
    CANCEL_BOOKING: "cancel_booking",

    // Vehicle Management
    MANAGE_VEHICLES: "manage_vehicles",

    // Route Management
    MANAGE_ROUTES: "manage_routes",

    // Schedule Management
    MANAGE_SCHEDULES: "manage_schedules",

    // Reports
    VIEW_REPORTS: "view_reports",

    // Permission Management
    MANAGE_PERMISSIONS: "manage_permissions",

    // Driver Specific
    DRIVE_VEHICLE: "drive_vehicle",
    UPDATE_VEHICLE_STATUS: "update_vehicle_status",
} as const;

// ============================================================================
// ROLE CONSTANTS
// ============================================================================

export const ROLES = {
    ADMIN: "admin",
    DRIVER: "driver",
    STUDENT: "student",
    EMPLOYEE: "employee",
    GUEST: "guest",
} as const;

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

export type Permission = typeof PERMISSIONS[keyof typeof PERMISSIONS];
export type Role = typeof ROLES[keyof typeof ROLES];

// ============================================================================
// PERMISSION GROUPS (for easier management)
// ============================================================================

export const PERMISSION_GROUPS = {
    ADMIN_PERMISSIONS: [
        PERMISSIONS.MANAGE_USERS,
        PERMISSIONS.MANAGE_BOOKINGS,
        PERMISSIONS.MANAGE_VEHICLES,
        PERMISSIONS.MANAGE_ROUTES,
        PERMISSIONS.MANAGE_SCHEDULES,
        PERMISSIONS.VIEW_REPORTS,
        PERMISSIONS.MANAGE_PERMISSIONS,
    ],

    DRIVER_PERMISSIONS: [
        PERMISSIONS.DRIVE_VEHICLE,
        PERMISSIONS.UPDATE_VEHICLE_STATUS,
        PERMISSIONS.VIEW_REPORTS,
    ],

    STUDENT_PERMISSIONS: [
        PERMISSIONS.CREATE_BOOKING,
        PERMISSIONS.CANCEL_BOOKING,
    ],

    BOOKING_PERMISSIONS: [
        PERMISSIONS.CREATE_BOOKING,
        PERMISSIONS.CANCEL_BOOKING,
        PERMISSIONS.MANAGE_BOOKINGS,
    ],

    VEHICLE_MANAGEMENT_PERMISSIONS: [
        PERMISSIONS.MANAGE_VEHICLES,
        PERMISSIONS.MANAGE_ROUTES,
        PERMISSIONS.MANAGE_SCHEDULES,
    ],
} as const;

// ============================================================================
// ROUTE PROTECTION CONFIGURATION
// ============================================================================

export const PROTECTED_ROUTES: Record<string, {
    requiredPermissions?: Permission[];
    requiredRoles?: Role[];
    requireAll?: boolean; // If true, user must have ALL permissions, else ANY
}> = {
    "/admin": {
        requiredPermissions: [
            PERMISSIONS.MANAGE_USERS,
            PERMISSIONS.MANAGE_BOOKINGS,
            PERMISSIONS.MANAGE_VEHICLES,
            PERMISSIONS.MANAGE_ROUTES,
            PERMISSIONS.MANAGE_SCHEDULES,
            PERMISSIONS.MANAGE_PERMISSIONS,
        ],
        requireAll: false, // User needs ANY of these permissions
    },

    "/schedule/management": {
        requiredPermissions: [
            PERMISSIONS.MANAGE_SCHEDULES,
            PERMISSIONS.MANAGE_VEHICLES,
            PERMISSIONS.MANAGE_ROUTES,
        ],
        requireAll: false,
    },

    "/driver": {
        requiredPermissions: [
            PERMISSIONS.DRIVE_VEHICLE,
            PERMISSIONS.UPDATE_VEHICLE_STATUS,
        ],
        requireAll: false,
    },

    "/booking": {
        requiredPermissions: [PERMISSIONS.CREATE_BOOKING],
        requireAll: true,
    },

    "/my-bookings": {
        requiredPermissions: [
            PERMISSIONS.CREATE_BOOKING,
            PERMISSIONS.CANCEL_BOOKING,
        ],
        requireAll: false,
    },

    "/check-in": {
        requiredPermissions: [PERMISSIONS.CREATE_BOOKING],
        requireAll: true,
    },

    "/report": {
        requiredPermissions: [
            PERMISSIONS.VIEW_REPORTS,
            PERMISSIONS.MANAGE_BOOKINGS,
        ],
        requireAll: false,
    },
};

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Check if user has any of the specified permissions
 */
export function hasAnyPermission(
    userPermissions: string[],
    requiredPermissions: Permission[]
): boolean {
    return requiredPermissions.some((permission) =>
        userPermissions.includes(permission)
    );
}

/**
 * Check if user has all of the specified permissions
 */
export function hasAllPermissions(
    userPermissions: string[],
    requiredPermissions: Permission[]
): boolean {
    return requiredPermissions.every((permission) =>
        userPermissions.includes(permission)
    );
}

/**
 * Check if user has a specific role
 */
export function hasRole(userRole: string, requiredRoles: Role[]): boolean {
    return requiredRoles.includes(userRole as Role);
}

/**
 * Check if user can access a specific route
 */
export function canAccessRoute(
    route: string,
    userPermissions: string[],
    userRole: string
): boolean {
    const routeConfig = PROTECTED_ROUTES[route];

    if (!routeConfig) {
        // Route not protected, allow access
        return true;
    }

    // Check role requirement
    if (routeConfig.requiredRoles) {
        if (!hasRole(userRole, routeConfig.requiredRoles)) {
            return false;
        }
    }

    // Check permission requirement
    if (routeConfig.requiredPermissions) {
        if (routeConfig.requireAll) {
            return hasAllPermissions(userPermissions, routeConfig.requiredPermissions);
        } else {
            return hasAnyPermission(userPermissions, routeConfig.requiredPermissions);
        }
    }

    return true;
}

/**
 * Get user's permission names from role data
 */
export function getUserPermissions(rolePermissions: Array<{
    permission: { permissionName: string };
}>): string[] {
    return rolePermissions.map((rp) => rp.permission.permissionName);
}

/**
 * Check if user is admin (has admin-level permissions)
 */
export function isAdmin(userPermissions: string[]): boolean {
    return hasAnyPermission(userPermissions, [
        PERMISSIONS.MANAGE_USERS,
        PERMISSIONS.MANAGE_PERMISSIONS,
    ]);
}

/**
 * Check if user is driver
 */
export function isDriver(userPermissions: string[]): boolean {
    return hasAnyPermission(userPermissions, [PERMISSIONS.DRIVE_VEHICLE]);
}

/**
 * Get human-readable permission name
 */
export function getPermissionLabel(permission: Permission): string {
    const labels: Record<Permission, string> = {
        [PERMISSIONS.MANAGE_USERS]: "จัดการผู้ใช้งาน",
        [PERMISSIONS.MANAGE_BOOKINGS]: "จัดการการจอง",
        [PERMISSIONS.CREATE_BOOKING]: "สร้างการจอง",
        [PERMISSIONS.CANCEL_BOOKING]: "ยกเลิกการจอง",
        [PERMISSIONS.MANAGE_VEHICLES]: "จัดการรถ",
        [PERMISSIONS.MANAGE_ROUTES]: "จัดการเส้นทาง",
        [PERMISSIONS.MANAGE_SCHEDULES]: "จัดการตารางเวลา",
        [PERMISSIONS.VIEW_REPORTS]: "ดูรายงาน",
        [PERMISSIONS.MANAGE_PERMISSIONS]: "จัดการสิทธิ์",
        [PERMISSIONS.DRIVE_VEHICLE]: "ขับรถ",
        [PERMISSIONS.UPDATE_VEHICLE_STATUS]: "อัพเดทสถานะรถ",
    };

    return labels[permission] || permission;
}

/**
 * Get human-readable role name
 */
export function getRoleLabel(role: Role): string {
    const labels: Record<Role, string> = {
        [ROLES.ADMIN]: "ผู้ดูแลระบบ",
        [ROLES.DRIVER]: "พนักงานขับรถ",
        [ROLES.STUDENT]: "นักศึกษา",
        [ROLES.EMPLOYEE]: "พนักงาน",
        [ROLES.GUEST]: "ผู้เยี่ยมชม",
    };

    return labels[role] || role;
}
