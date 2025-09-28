import { Base64 } from "js-base64";
import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

export interface LoginRequest {
  email: string;
  password: string;
}

export interface UserPayload {
  email: string;
  password: string;
  userId: number;
  roleId: number;
  employeeId: number | null;
  firstName: string;
  lastName: string;
  createdAt: Date;
  updatedAt: Date;
  role: {
    roleId: number;
    createdAt: Date;
    updatedAt: Date;
    roleName: string;
  };
  employee: {
    employeeId: number;
    createdAt: Date;
    updatedAt: Date;
    departmentId: number | null;
    position: string;
  } | null;
}

export const validateAccessToken = (token: string) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
    if (typeof decoded === "string" || decoded === null) return null;
    const user = decoded as UserPayload;
    return user;
  } catch (error) {
    console.error("Invalid token:", error);
    return null;
  }
};

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
    expiresIn: "7d",
  });

  const cookie = await cookies();

  cookie.set({
    name: "accessToken",
    value: accessToken,
    httpOnly: true,
    sameSite: "strict",
  });

  return new NextResponse(JSON.stringify({ message: "Login successful" }), {
    status: 200,
  });
}
