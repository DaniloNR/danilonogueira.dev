import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { i18n } from "../i18n-config";

const PUBLIC_FILE = /\.(.*)$/;

function getPreferredLocale(req: NextRequest): string {
  const url = new URL(req.url);

  const queryLocale = url.searchParams.get("locale");
  if (queryLocale) {
    return queryLocale;
  }

  if (req.headers && req.headers.get("accept-language")) {
    const acceptLanguageHeader = req.headers.get("accept-language") as string;
    const acceptedLanguages = acceptLanguageHeader
      .split(",")
      .map((language) => language.split(";")[0]);
    return acceptedLanguages[0];
  }

  return req.nextUrl.defaultLocale || "en-US";
}

export function middleware(req: NextRequest) {
  if (
    req.nextUrl.pathname.startsWith("/_next") ||
    req.nextUrl.pathname.includes("/api/") ||
    PUBLIC_FILE.test(req.nextUrl.pathname)
  ) {
    return;
  }

  const pathname = req.nextUrl.pathname;

  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    const locale = getPreferredLocale(req);

    return NextResponse.redirect(
      new URL(
        `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
        req.url
      )
    );
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
