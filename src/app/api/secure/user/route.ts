import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

export async function GET(req: NextRequest): Promise<NextResponse> {
  const userId = req.headers.get("X-User-Id");
  if (!userId) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const users = await prisma.user.findMany();

  return NextResponse.json(users, { status: 200 });
}
