"use client";

import { Employee, Role, User } from "@/generated/prisma";
import { createContext, useContext, useEffect, useState } from "react";

export type UserInformation = Omit<User, "employeeId"> & {
  role: Role;
  employee?: Employee | null;
};

interface UserContext {
  user: UserInformation | null;
  isLoading: boolean;
  clearUser: () => void;
}

const UserContext = createContext<UserContext>({
  user: null,
  isLoading: true,
  clearUser: () => {},
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

  return (
    <UserContext.Provider value={{ user, isLoading, clearUser }}>
      {children}
    </UserContext.Provider>
  );
}
