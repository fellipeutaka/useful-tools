"use client";

import type { ComponentProps, PropsWithChildren } from "react";

import { QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider as NextThemeProvider } from "next-themes";

import { Toaster } from "~/components/ui/toast/toaster";
import { I18nProviderClient } from "~/lib/next-international/client";
import { queryClient } from "~/lib/react-query";
import en from "~/locales/en";

export function ThemeProvider({
  children,
  ...props
}: PropsWithChildren<ComponentProps<typeof NextThemeProvider>>) {
  return (
    <NextThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      {...props}
    >
      {children}
    </NextThemeProvider>
  );
}

export function Providers({
  children,
  locale,
}: PropsWithChildren<{ locale: string }>) {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <I18nProviderClient locale={locale} fallbackLocale={en}>
          {children}
        </I18nProviderClient>
      </QueryClientProvider>
      <Toaster />
    </ThemeProvider>
  );
}
