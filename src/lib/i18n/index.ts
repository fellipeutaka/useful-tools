import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";

export const locales = ["en", "pt"] as const;

export type Locale = (typeof locales)[number];

/**
 * The generateStaticParams function can be used in combination with dynamic
 * route segments to statically generate routes at build time instead of
 * on-demand at request time.
 *
 * @see https://nextjs.org/docs/app/api-reference/functions/generate-static-params
 */
export function getStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as Locale)) notFound();

  return {
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
