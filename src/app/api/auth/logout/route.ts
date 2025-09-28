import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(): Promise<NextResponse> {
  const cookie = await cookies();

  cookie.delete("accessToken");

  return new NextResponse(
    JSON.stringify({ message: "Logged out successfully" }),
    { status: 200 }
  );
}
