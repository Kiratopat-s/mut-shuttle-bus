"use client";

import { usePathname, useRouter } from "next/navigation";
import Footer from "@/components/footer";
import { Upper } from "@/components/upper";
import { Suspense } from "react";
import { UpperSkeleton, LoadingSkeleton } from "@/components/skeletons";
import { UserInformation, useUserInformation } from "@/provider/UserProvider";
import Loading from "./loading/Loading";

interface AppShellProps {
  children: React.ReactNode;
}

export default function AppShell({ children }: AppShellProps) {
  const router = useRouter();
  const pathname = usePathname();

  const { user, isLoading } = useUserInformation();
  const MockUser: UserInformation = {
    userId: 1,
    roleId: 1,
    firstName: "John",
    lastName: "Doe",
    email: "john@gmail.com",
    password: "hashedpassword",
    createdAt: new Date(),
    updatedAt: new Date(),
    role: {
      roleId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
      roleName: "User",
    },
    employee: null,
  };

  const authPages = [
    "/auth/login",
    "/auth/register",
    "/auth/forgot-password",
    "/booking/search",
    "/booking/guest-details",
  ];
  const isAuthPage = authPages.includes(pathname);

  if (isAuthPage) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-200 flex items-center justify-center">
        {children}
      </div>
    );
  }

  if (isLoading) {
    return <Loading title="Loading..." />;
  }

  if (!user) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-between p-4 gap-4">
        <Suspense fallback={<UpperSkeleton />}>
          <Upper user={MockUser} />
        </Suspense>
        <Suspense fallback={<LoadingSkeleton />}>{children}</Suspense>
        <Footer />
      </div>
    );
    // router.push("/auth/login");
    // return null;
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-4 gap-4">
      <Suspense fallback={<UpperSkeleton />}>
        <Upper user={user} />
      </Suspense>
      <Suspense fallback={<LoadingSkeleton />}>{children}</Suspense>
      <Footer />
    </div>
  );
}
