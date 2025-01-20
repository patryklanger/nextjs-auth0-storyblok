import { NextRequest, NextResponse } from "next/server";
import { getSession, withMiddlewareAuthRequired } from "@auth0/nextjs-auth0/edge";

export default withMiddlewareAuthRequired(async (req: NextRequest) => {
  const session = await getSession();

  if (session && Date.now() > session.accessTokenExpiresAt * 1000) {
    return NextResponse.redirect(new URL("/api/auth/logout", req.url));
  }

  return NextResponse.next();
});
export const config = { matcher: "/((?!api|static|.*\\..*|_next|preview).*)" };
