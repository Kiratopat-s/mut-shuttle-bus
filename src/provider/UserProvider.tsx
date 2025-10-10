"use client";

import {
  Employee,
  Permission,
  Role,
  RolePermission,
  User,
} from "@/generated/prisma";
import { createContext, useContext, useEffect, useState } from "react";

export type UserRole = Role & {
  RolePermission: (RolePermission & {
    permission: Permission;
  })[];
};

export type UserInformation = Omit<User, "employeeId"> & {
  role: UserRole;
  employee?: Employee | null;
};

interface UserContext {
  user: UserInformation | null;
  isLoading: boolean;
  clearUser: () => void;
  hasPermission: (permissionName: string) => boolean;
  hasAnyPermission: (permissionNames: string[]) => boolean;
}

const UserContext = createContext<UserContext>({
  user: null,
  isLoading: true,
  clearUser: () => {},
  hasPermission: () => false,
  hasAnyPermission: () => false,
});

export const useUserInformation = () => useContext(UserContext);

export default function UserProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<UserInformation | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/secure/user/information", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });

      if (res.ok) {
        const data = await res.json();
        setUser(data);
      } else {
        setUser(null);
      }
    } catch (error) {
      void error;
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  const clearUser = () => setUser(null);

  const hasPermission = (permissionName: string): boolean => {
    if (!user) return false;
    return user.role.RolePermission.some(
      (rp) => rp.permission.permissionName === permissionName
    );
  };

  const hasAnyPermission = (permissionNames: string[]): boolean => {
    if (!user) return false;
    return permissionNames.some((permissionName) =>
      user.role.RolePermission.some(
        (rp) => rp.permission.permissionName === permissionName
      )
    );
  };

  return (
    <UserContext.Provider
      value={{ user, isLoading, clearUser, hasPermission, hasAnyPermission }}
    >
      {children}
    </UserContext.Provider>
  );
}
