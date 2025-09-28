"use client";

import { usePathname } from "next/navigation";
import Footer from "@/components/footer";
import { Upper } from "@/components/upper";
import { Suspense } from "react";
import { UpperSkeleton, LoadingSkeleton } from "@/components/skeletons";

interface AppShellProps {
  children: React.ReactNode;
}

export default function AppShell({ children }: AppShellProps) {
  const pathname = usePathname();

  const authPages = ["/login", "/register", "/forgot-password"];
  const isAuthPage = authPages.includes(pathname);

  if (isAuthPage) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
        {children}
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-4 gap-4">
      <Suspense fallback={<UpperSkeleton />}>
        <Upper />
      </Suspense>
      <Suspense fallback={<LoadingSkeleton />}>{children}</Suspense>
      <Footer />
    </div>
  );
}
