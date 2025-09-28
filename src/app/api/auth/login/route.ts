import { Base64 } from "js-base64";
import { PrismaClient } from "../../../../../generated/prismaprisma/client";

const prisma = new PrismaClient();

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
}

export async function POST(req: Request): Promise<Response> {
  const { email, password }: LoginRequest = await req.json();
  if (!email || !password) {
    return new Response("Invalid request", { status: 400 });
  }

  const encryptedPassword = Base64.encode(password);

  console.log("Encrypted Password:", encryptedPassword);

  const user = await prisma.user.findFirst({
    where: { email, password: encryptedPassword },
  });

  if (!user) {
    return new Response("Invalid email or password", { status: 401 });
  }

  const accessToken = "some-access-token";
  const refreshToken = "some-refresh-token";

  return new Response(JSON.stringify({ accessToken, refreshToken }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
