export const locales = {
  en: () => import("~/locales/en"),
  pt: () => import("~/locales/pt"),
} as const;

type LocalesKeys = keyof typeof locales;

export const localeList = Object.keys(locales) as LocalesKeys[];
