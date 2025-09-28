"use client";

import Loading from "@/components/loading/Loading";
import { useUserInformation } from "@/provider/UserProvider";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
  const router = useRouter();
  const { clearUser } = useUserInformation();

  useEffect(() => {
    fetchLogout();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchLogout = async () => {
    try {
      const res = await fetch("/api/auth/logout", { method: "GET" });
      if (res.ok) {
        clearUser();
        router.push("/auth/login");
      }
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return <Loading title="Logging out..." />;
}
