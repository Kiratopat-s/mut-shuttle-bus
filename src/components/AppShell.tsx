"use client";

import { usePathname } from "next/navigation";
import Footer from "@/components/footer";
import { Upper } from "@/components/upper";
import { Suspense } from "react";
import { UpperSkeleton, LoadingSkeleton } from "@/components/skeletons";
import { useUserInformation } from "@/provider/UserProvider";

interface AppShellProps {
  children: React.ReactNode;
}

export default function AppShell({ children }: AppShellProps) {
  const pathname = usePathname();

  const info = useUserInformation();

  const authPages = [
    "/login",
    "/register",
    "/forgot-password",
    "/booking/search",
  ];
  const isAuthPage = authPages.includes(pathname);

  if (isAuthPage || !info.user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-200 flex items-center justify-center">
        {children}
      </div>
    );
  }

  if (!info.user) {
    return null;
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-4 gap-4">
      <Suspense fallback={<UpperSkeleton />}>
        <Upper user={info.user} />
      </Suspense>
      <Suspense fallback={<LoadingSkeleton />}>{children}</Suspense>
      <Footer />
    </div>
  );
}
