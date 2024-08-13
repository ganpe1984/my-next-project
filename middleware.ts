import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  console.log("middleware: " + request.url);

  return NextResponse.next();
}

// matcher
export const config = {};
// export const config = {
//   matcher: ["/about/:path*", "/dashboard/:path*"],
// };
