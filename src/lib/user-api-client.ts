/**
 * User API Client
 * Type-safe API client for user operations
 */

export interface UserSearchResult {
    message: string;
    user: {
        userId: number;
        email: string;
        firstName: string;
        lastName: string;
        role: string;
        department: string | null;
        position: string | null;
    } | null;
}

/**
 * Search for a user by email address
 * @param email - Email address to search for
 * @returns User information if found, null otherwise
 */
export async function searchUserByEmail(
    email: string
): Promise<UserSearchResult> {
    const response = await fetch(
        `/api/secure/user/search-by-email?email=${encodeURIComponent(email)}`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
        }
    );

    if (!response.ok) {
        if (response.status === 401) {
            throw new Error("Unauthorized - Please log in");
        }
        if (response.status === 400) {
            const data = await response.json();
            throw new Error(data.message || "Invalid request");
        }
        throw new Error("Failed to search user");
    }

    const data: UserSearchResult = await response.json();
    return data;
}

export const userApi = {
    searchUserByEmail,
};
