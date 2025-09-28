import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

// Get user by userId
export async function GET(req: NextRequest): Promise<NextResponse> {
  const auth = req.headers.get("X-User-Id");
  if (!auth) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const userId = req.nextUrl.searchParams.get("userId");
  if (!userId) {
    return NextResponse.json({ message: "Bad Request" }, { status: 400 });
  }

  const user = await prisma.user.findFirst({
    where: {
      userId: Number(userId),
    },
    include: {
      role: true,
      employee: true,
    },
    omit: { password: true },
  });

  return NextResponse.json(user, { status: 200 });
}

// Update user by userId
export async function PUT(req: NextRequest): Promise<NextResponse> {
  const auth = req.headers.get("X-User-Id");
  if (!auth) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const userId = req.nextUrl.searchParams.get("userId");
  if (!userId) {
    return NextResponse.json({ message: "Bad Request" }, { status: 400 });
  }

  const body = await req.json();
  const { firstName, lastName, email, roleId, employeeId } = body;
  if (!firstName || !lastName || !email || !roleId) {
    return NextResponse.json({ message: "Bad Request" }, { status: 400 });
  }

  const updatedUser = await prisma.user.update({
    where: {
      userId: Number(userId),
    },
    data: {
      firstName,
      lastName,
      email,
      roleId,
      employeeId,
    },
    omit: { password: true },
  });

  return NextResponse.json(updatedUser, { status: 200 });
}

// Delete user by userId
export async function DELETE(req: NextRequest): Promise<NextResponse> {
  const auth = req.headers.get("X-User-Id");
  if (!auth) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const userId = req.nextUrl.searchParams.get("userId");
  if (!userId) {
    return NextResponse.json({ message: "Bad Request" }, { status: 400 });
  }

  await prisma.user.delete({
    where: {
      userId: Number(userId),
    },
  });

  return NextResponse.json({ message: "User deleted" }, { status: 200 });
}
