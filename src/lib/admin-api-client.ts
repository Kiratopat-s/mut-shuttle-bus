/**
 * Admin API Client
 * Type-safe API client for admin operations
 */

export interface ApiResponse<T> {
    success: boolean;
    data?: T;
    message?: string;
    error?: string;
}

export interface Role {
    roleId: number;
    roleName: string;
    createdAt: string;
    updatedAt: string;
}

export interface Department {
    departmentId: number;
    departmentName: string;
}

export interface Employee {
    employeeId: number;
    position: string;
    department?: string;
    departmentId?: number;
}

export interface User {
    userId: number;
    firstName: string;
    lastName: string;
    email: string;
    role: string;
    roleId: number;
    employeeId?: number | null;
    employee?: Employee | null;
    createdAt: string;
    updatedAt?: string;
}

export interface CreateUserRequest {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    roleId: number;
    employeeId?: number | null;
}

export interface UpdateUserRequest {
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
    roleId?: number;
    employeeId?: number | null;
}

export interface CreateEmployeeRequest {
    position: string;
    departmentId?: number | null;
}


export class AdminApiClient {
    private baseUrl: string;

    constructor(baseUrl: string = "/api/admin") {
        this.baseUrl = baseUrl;
    }

    /**
     * Get all users
     */
    async getUsers(roleFilter?: string): Promise<User[]> {
        const params = new URLSearchParams();
        if (roleFilter) params.append("role", roleFilter);

        const response = await fetch(
            `${this.baseUrl}/users?${params}`,
            {
                credentials: "include",
            }
        );

        if (!response.ok) {
            if (response.status === 401) {
                throw new Error("Unauthorized. Please login first.");
            }
            if (response.status === 403) {
                throw new Error("Forbidden. Admin access required.");
            }
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result: ApiResponse<{ users: User[]; count: number }> =
            await response.json();

        if (!result.success || !result.data) {
            throw new Error(result.error || "Failed to fetch users");
        }

        return result.data.users;
    }

    /**
     * Get a specific user
     */
    async getUser(userId: number): Promise<User> {
        const response = await fetch(`${this.baseUrl}/users/${userId}`, {
            credentials: "include",
        });

        if (!response.ok) {
            if (response.status === 404) {
                throw new Error("User not found");
            }
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result: ApiResponse<User> = await response.json();

        if (!result.success || !result.data) {
            throw new Error(result.error || "Failed to fetch user");
        }

        return result.data;
    }

    /**
     * Create a new user
     */
    async createUser(data: CreateUserRequest): Promise<User> {
        const response = await fetch(`${this.baseUrl}/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            if (response.status === 409) {
                throw new Error("Email already exists");
            }
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result: ApiResponse<User> = await response.json();

        if (!result.success || !result.data) {
            throw new Error(result.error || "Failed to create user");
        }

        return result.data;
    }

    /**
     * Update a user
     */
    async updateUser(userId: number, data: UpdateUserRequest): Promise<User> {
        const response = await fetch(`${this.baseUrl}/users/${userId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            if (response.status === 404) {
                throw new Error("User not found");
            }
            if (response.status === 409) {
                throw new Error("Email already exists");
            }
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result: ApiResponse<User> = await response.json();

        if (!result.success || !result.data) {
            throw new Error(result.error || "Failed to update user");
        }

        return result.data;
    }

    /**
     * Delete a user
     */
    async deleteUser(userId: number): Promise<void> {
        const response = await fetch(`${this.baseUrl}/users/${userId}`, {
            method: "DELETE",
            credentials: "include",
        });

        if (!response.ok) {
            if (response.status === 404) {
                throw new Error("User not found");
            }
            if (response.status === 400) {
                throw new Error("Cannot delete your own account");
            }
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result: ApiResponse<{ userId: number }> = await response.json();

        if (!result.success) {
            throw new Error(result.error || "Failed to delete user");
        }
    }

    /**
     * Get all roles
     */
    async getRoles(): Promise<Role[]> {
        const response = await fetch(`${this.baseUrl}/roles`, {
            credentials: "include",
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result: ApiResponse<{ roles: Role[]; count: number }> =
            await response.json();

        if (!result.success || !result.data) {
            throw new Error(result.error || "Failed to fetch roles");
        }

        return result.data.roles;
    }

    /**
     * Get all employees
     */
    async getEmployees(): Promise<Employee[]> {
        const response = await fetch(`${this.baseUrl}/employees`, {
            credentials: "include",
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result: ApiResponse<{ employees: Employee[]; count: number }> =
            await response.json();

        if (!result.success || !result.data) {
            throw new Error(result.error || "Failed to fetch employees");
        }

        return result.data.employees;
    }

    /**
     * Get all departments
     */
    async getDepartments(): Promise<Department[]> {
        const response = await fetch(`${this.baseUrl}/departments`, {
            credentials: "include",
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();
    }

    /**
     * Create a new department
     */
    async createDepartment(departmentName: string): Promise<Department> {
        const response = await fetch(`${this.baseUrl}/departments`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify({ departmentName }),
        });

        if (!response.ok) {
            if (response.status === 409) {
                throw new Error("Department already exists");
            }
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();
    }

    /**
     * Get all unique positions
     */
    async getPositions(): Promise<string[]> {
        const response = await fetch(`${this.baseUrl}/positions`, {
            credentials: "include",
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();
    }

    /**
     * Create a new employee
     */
    async createEmployee(data: CreateEmployeeRequest): Promise<Employee> {
        const response = await fetch(`${this.baseUrl}/employees`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();
    }
}

// Singleton instance
export const adminApi = new AdminApiClient();
