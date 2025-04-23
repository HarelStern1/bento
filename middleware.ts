// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Change these to your desired credentials
const USER = "admin";
const PASS = "secret";
const basicAuth = Buffer.from(`${USER}:${PASS}`).toString("base64");

export function middleware(req: NextRequest) {
  const authHeader = req.headers.get("authorization");

  if (authHeader === `Basic ${basicAuth}`) {
    return NextResponse.next(); // Let the request through
  }

  return new NextResponse("Authentication required", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Secure Area"',
    },
  });
}

// This makes the middleware run on all paths
export const config = {
  matcher: "/:path*",
};
