"use client";

import type { ComponentProps } from "react";

import { ThemeProvider as NextThemeProvider } from "next-themes";

import { Toaster } from "~/components/ui/toast/toaster";

export function ThemeProvider({
  children,
  ...props
}: WithChildren<ComponentProps<typeof NextThemeProvider>>) {
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

export function Providers({ children }: WithChildren) {
  return (
    <ThemeProvider>
      {children}
      <Toaster />
    </ThemeProvider>
  );
}
