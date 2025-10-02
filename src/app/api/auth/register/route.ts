import { Base64 } from "js-base64";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export interface RegisterRequest {
  roleId: number;
  employeeId?: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  const {
    roleId,
    employeeId,
    firstName,
    lastName,
    email,
    password,
  }: RegisterRequest = await req.json();
  if (!firstName || !lastName || !email || !password) {
    return new NextResponse(JSON.stringify({ message: "Invalid request" }), {
      status: 400,
    });
  }

  const encryptedPassword = Base64.encode(password);

  const created = await prisma.user.create({
    data: {
      roleId: roleId,
      employeeId: employeeId ?? null,
      firstName,
      lastName,
      email,
      password: encryptedPassword,
    },
  });

  if (!created) {
    return new NextResponse(
      JSON.stringify({ message: "Failed to create user" }),
      {
        status: 500,
      }
    );
  }

  return new NextResponse(JSON.stringify(created), {
    status: 201,
  });
}
