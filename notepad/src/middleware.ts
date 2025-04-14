import { NextResponse, NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  if (!req) {
    return NextResponse.redirect(new URL("/api/auth/login"));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/homePage", "/api/auth/[...nextauth]:path*"],
};
