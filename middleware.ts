import { type NextRequest, NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  const xForwardedFor = request.headers.get("x-forwarded-for");
  const ip = xForwardedFor ? xForwardedFor.split(",")[0].trim() : null;

  // eslint-disable-next-line no-console
  console.log(request);
  // eslint-disable-next-line no-console
  console.log(request.headers.get("x-real-ip"));
  // eslint-disable-next-line no-console
  console.log(request.headers.get("x-forwarded-for"));
  // eslint-disable-next-line no-console
  console.log("Gelen IP:", ip);
  return response;
}

export const config = {
  matcher: [
    "/",
    "/((?!api|_next/static|_next/image|images|favicon.ico|landingpage-bg.png|landingpage-devices.png).*)",
  ],
};
// export const config = {
//   matcher: ["/", "/((?!api|_next/static|_next/image|images|favicon.ico).*)"],
// };
