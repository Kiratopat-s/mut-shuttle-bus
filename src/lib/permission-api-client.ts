/**
 * Permission API Client
 * Type-safe API client for permission management operations
 */

export interface Permission {
    permissionId: number;
    permissionName: string;
    roles: Record<string, boolean>;
}

export interface RoleInfo {
    roleId: number;
    roleName: string;
}

export interface PermissionsResponse {
    permissions: Permission[];
    roles: RoleInfo[];
}

export class PermissionApiClient {
    private baseUrl: string;

    constructor(baseUrl: string = "/api/admin/permissions") {
        this.baseUrl = baseUrl;
    }

    /**
     * Get all permissions with role assignments
     */
    async getPermissions(): Promise<PermissionsResponse> {
        const response = await fetch(this.baseUrl, {
            credentials: "include",
        });

        if (!response.ok) {
            if (response.status === 401) {
                throw new Error("Unauthorized. Please login first.");
            }
            if (response.status === 403) {
                throw new Error("Forbidden. Admin access required.");
            }
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();
    }

    /**
     * Update role permission assignment
     */
    async updateRolePermission(
        roleId: number,
        permissionId: number,
        granted: boolean
    ): Promise<void> {
        const response = await fetch(`${this.baseUrl}/roles`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify({ roleId, permissionId, granted }),
        });

        if (!response.ok) {
            if (response.status === 404) {
                throw new Error("Role or permission not found");
            }
            throw new Error(`HTTP error! status: ${response.status}`);
        }
    }

    /**
     * Create a new permission
     */
    async createPermission(permissionName: string): Promise<Permission> {
        const response = await fetch(this.baseUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify({ permissionName }),
        });

        if (!response.ok) {
            if (response.status === 409) {
                throw new Error("Permission already exists");
            }
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();
    }
}

// Singleton instance
export const permissionApi = new PermissionApiClient();
