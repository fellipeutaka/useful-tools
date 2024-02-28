"use client";

import { ThemeProvider } from "next-themes";
import { Toaster } from "./ui/toast";

export function Providers(props: React.PropsWithChildren) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {props.children}
      <Toaster />
    </ThemeProvider>
  );
}
