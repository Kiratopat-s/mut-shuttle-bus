"use client";

import { useUserInformation } from "@/provider/UserProvider";

export default function Page() {
  const { user } = useUserInformation();

  if (!user) {
    return null;
  }

  return <div>{JSON.stringify(user)}</div>;
}
