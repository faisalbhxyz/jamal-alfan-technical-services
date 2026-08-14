import { NextRequest, NextResponse } from "next/server";
import { DEFAULT_LOCALE, LOCALES } from "@/lib/types";

function pathnameHasLocale(pathname: string): boolean {
  return LOCALES.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
}

export function middleware(request: NextRequest): NextResponse {
  const { pathname } = request.nextUrl;

  if (pathnameHasLocale(pathname)) {
    return NextResponse.next();
  }

  const accept = request.headers.get("accept-language")?.toLowerCase() ?? "";
  const locale = accept.includes("ar") ? "ar" : DEFAULT_LOCALE;
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
