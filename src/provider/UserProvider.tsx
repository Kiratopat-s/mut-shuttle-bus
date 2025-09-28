"use client";

import { Employee, Role, User } from "@/generated/prisma";
import { createContext, useContext, useEffect, useState } from "react";

export type UserInformation = Omit<User, "employeeId"> & {
  role: Role;
  employee?: Employee | null;
};

interface UserContext {
  user: UserInformation | null;
  clearUser: () => void;
}

const UserContext = createContext<UserContext>({
  user: null,
  clearUser: () => {},
});

export const useUserInformation = () => useContext(UserContext);

export default function UserProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<UserInformation | null>(null);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
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
    }
  };

  const clearUser = () => setUser(null);

  return (
    <UserContext.Provider value={{ user, clearUser }}>
      {children}
    </UserContext.Provider>
  );
}
