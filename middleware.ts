import { createNextAuthMiddleware } from "nextjs-basic-auth-middleware";

export const middleware = createNextAuthMiddleware();

// matcher
export const config = {
  matcher: ["/(.*)"],
};
// export const config = {
//   matcher: ["/about/:path*", "/dashboard/:path*"],
// };
