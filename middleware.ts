/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: any) {
  const response = NextResponse.next();

  const xForwardedFor = request.headers.get("x-forwarded-for");
  const ipisi = xForwardedFor ? xForwardedFor.split(",")[0].trim() : null;

  console.log(request);

  console.log(request.headers.get("x-real-ip"));

  console.log(request.headers.get("x-forwarded-for"));

  console.log("ipisi: ", ipisi);

  const forwarded = request.headers["x-forwarded-for"];

  const ip =
    typeof forwarded === "string"
      ? forwarded.split(/, /)[0]
      : request.socket.remoteAddress;

  let yolla = "https://google.com";

  if (ip == "::1") {
    // talha
    yolla = "https://facebook.com";
  } else if (ip == "31.223.84.129") {
    // erel
    yolla = "https://topluyoruz.com";
  } else if (ip == "2a02:ff0:609:ee6e:7d24:73a6:5b8:3df8") {
    // metecan
    yolla = "https://www.blackhatworld.com";
  } else {
    return response;
  }

  return NextResponse.redirect(new URL(yolla).toString());
}

export const config = {
  matcher: ["*"],
};
