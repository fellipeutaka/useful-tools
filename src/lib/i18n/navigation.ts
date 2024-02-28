import type createMiddleware from "next-intl/middleware";
import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { locales } from ".";

type LocalePrefix = Parameters<typeof createMiddleware>["0"]["localePrefix"];

export const localePrefix = "as-needed" satisfies LocalePrefix;

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales, localePrefix });
