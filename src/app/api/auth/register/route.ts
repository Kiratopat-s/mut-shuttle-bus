import { PrismaClient } from "../../../../../generated/prismaprisma/client";

const prisma = new PrismaClient();

export interface RegisterRequest {
  email: string;
  password: string;
}

export interface RegisterResponse {
  accessToken: string;
  refreshToken: string;
}

export async function POST(req: Request): Promise<Response> {
  void req;
  void prisma;

  return new Response("Auth POST endpoint");
  // const { email, password }: RegisterRequest = await req.json();
  // if (!email || !password) {
  //   return new Response("Invalid request", { status: 400 });
  // }
  // const user = await prisma.user.findFirst({
  //   where: { email, password },
  // });
  // return new Response("Auth POST endpoint");
}
