import { Base64 } from "js-base64";
import { PrismaClient } from "../../../../../generated/prismaprisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

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
