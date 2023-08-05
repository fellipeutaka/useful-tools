import { createI18nMiddleware } from "next-international/middleware";
import { NextRequest } from "next/server";

import { localeList } from "./locales";

const I18nMiddleware = createI18nMiddleware(localeList, "en", {
  urlMappingStrategy: "rewrite",
});

export function middleware(request: NextRequest) {
  return I18nMiddleware(request);
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
