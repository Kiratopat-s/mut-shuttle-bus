import { NextRequest, NextResponse } from "next/server";
import { validateAccessToken } from "../auth/login/route";

export async function GET(req: NextRequest): Promise<NextResponse> {
  const cookie = req.cookies.get("accessToken");
  if (!cookie) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const user = validateAccessToken(cookie.value);

  if (!user) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  return NextResponse.json(user, { status: 200 });
}
