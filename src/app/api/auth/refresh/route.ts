import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";
import { PrismaClient } from "../../../../../generated/prismaprisma/client";
import { cookies } from "next/headers";

const prisma = new PrismaClient();

export async function GET(): Promise<NextResponse> {
  const cookie = await cookies();

  const refreshToken = cookie.get("refreshToken")?.value;
  if (!refreshToken) {
    return new NextResponse(
      JSON.stringify({ message: "Refresh token is required" }),
      { status: 400 }
    );
  }

  const decoded = jwt.verify(
    refreshToken as string,
    process.env.JWT_SECRET as string
  ) as { userId: string };

  const user = await prisma.user.findUnique({
    where: { userId: Number(decoded.userId) },
    include: { role: true, employee: true },
  });

  if (!user) {
    return new NextResponse(JSON.stringify({ message: "User not found" }), {
      status: 404,
    });
  }

  const accessToken = jwt.sign(user, process.env.JWT_SECRET as string, {
    expiresIn: "15m",
  });

  const newRefreshToken = jwt.sign(user, process.env.JWT_SECRET as string, {
    expiresIn: "7d",
  });

  cookie.set({
    name: "accessToken",
    value: accessToken,
    httpOnly: true,
    sameSite: "strict",
  });

  cookie.set({
    name: "refreshToken",
    value: newRefreshToken,
    httpOnly: true,
    sameSite: "strict",
  });

  return new NextResponse(JSON.stringify({ message: "Token refreshed" }), {
    status: 200,
  });
}
