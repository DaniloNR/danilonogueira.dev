import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { i18n } from "../i18n-config";

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

  return "en-US";
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  if (
    [
      "/icon.png",
      "/apple-icon.png",
      "/favicon.ico",
      "/next.svg",
      "/profile.png",
      "/react.png",
      "/typescript.png",
      "/vercel.svg",
      "/vue.png",
      "/br-flag.png",
      "/us-flag.png",
      "/uk-flag.png",
    ].includes(pathname)
  )
    return;

  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    const locale = getPreferredLocale(request);

    return NextResponse.redirect(
      new URL(
        `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
        request.url
      )
    );
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
