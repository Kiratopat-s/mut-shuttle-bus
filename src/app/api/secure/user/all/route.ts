import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// List users
export async function GET(req: NextRequest): Promise<NextResponse> {
  const auth = req.headers.get("X-User-Id");
  if (!auth) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const userId = req.nextUrl.searchParams.get("userId");
  if (!userId) {
    return NextResponse.json({ message: "Bad Request" }, { status: 400 });
  }

  const users = await prisma.user.findMany({
    where: {
      userId: Number(userId),
    },
    include: {
      role: true,
      employee: true,
    },
    omit: { password: true },
  });

  return NextResponse.json(users, { status: 200 });
}
