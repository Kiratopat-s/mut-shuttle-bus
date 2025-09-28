import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

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

export async function middleware(req: NextRequest) {
  if (req.nextUrl.pathname.startsWith("/api/secure")) {
    const accessToken = req.cookies.get("accessToken");

    if (!accessToken) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    try {
      const user = validateAccessToken(accessToken.value);
      if (!user) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
      }

      const res = NextResponse.next();
      res.headers.set("X-User-Id", user.userId.toString());
      res.headers.set("X-User-Role", user.role.roleId.toString());

      return res;
    } catch (error) {
      console.error(`👀 Middleware Error: ${error}`);
    }
  }
}

export const config = {
  matcher: ["/:path*"],
};
