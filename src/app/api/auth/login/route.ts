import { Base64 } from "js-base64";
import { PrismaClient } from "../../../../../generated/prismaprisma/client";
import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

const prisma = new PrismaClient();

export interface LoginRequest {
  email: string;
  password: string;
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  const { email, password }: LoginRequest = await req.json();
  if (!email || !password) {
    return new NextResponse(JSON.stringify({ message: "Invalid request" }), {
      status: 400,
    });
  }

  const encryptedPassword = Base64.encode(password);

  const user = await prisma.user.findFirst({
    where: { email, password: encryptedPassword },
    include: { role: true, employee: true },
  });

  if (!user) {
    return new NextResponse(
      JSON.stringify({ message: "Invalid email or password" }),
      {
        status: 401,
      }
    );
  }

  const accessToken = jwt.sign(user, process.env.JWT_SECRET as string, {
    expiresIn: "15m",
  });

  const refreshToken = jwt.sign(user, process.env.JWT_SECRET as string, {
    expiresIn: "7d",
  });

  const cookie = await cookies();

  cookie.set({
    name: "accessToken",
    value: accessToken,
    httpOnly: true,
    sameSite: "strict",
  });

  cookie.set({
    name: "refreshToken",
    value: refreshToken,
    httpOnly: true,
    sameSite: "strict",
  });

  return new NextResponse(JSON.stringify({ message: "Login successful" }), {
    status: 200,
  });
}
