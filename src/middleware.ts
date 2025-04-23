import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  console.log("[MIDDLEWARE] running");

  const auth = req.headers.get("authorization");
  if (auth) {
    const b64auth = auth.split(" ")[1];
    const [user, pass] = Buffer.from(b64auth, "base64").toString().split(":");
    if (user === "admin" && pass === "secret") {
      return NextResponse.next();
    }
  }

  return new NextResponse("Authentication required", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Secure Area"',
    },
  });
}

export const config = {
  matcher: ["/", "/(.*)"], // Match everything
};
