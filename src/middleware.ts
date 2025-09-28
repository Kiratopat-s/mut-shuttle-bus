import { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const accessToken = req.cookies.get("accessToken");

  if (!accessToken) {
    const url = req.nextUrl.clone();
    url.pathname = "/auth/login";
    return Response.redirect(url);
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder files
     */
    "/((?!api|_next/static|_next/image|favicon.ico|json/|images/|auth/|health|.*\\.(?:svg|png|jpg|jpeg|gif|webp|json)$).*)",
  ],
};
