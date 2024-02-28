import { createShadcnPreset, overrideShadcnTheme } from "mizuhara/plugins";
import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  content: ["./src/{app,components}/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)"].concat(fontFamily.sans),
        mono: ["var(--font-geist-mono)"].concat(fontFamily.mono),
      },
      keyframes: {
        check: {
          from: {
            "stroke-dasharray": "0px, 100%",
          },
          to: {
            "stroke-dasharray": "100%, 100%",
          },
        },
      },
      animation: {
        check: "check 150ms cubic-bezier(0.65, 0, 1, 1) forwards",
      },
    },
  },
  presets: [
    createShadcnPreset({
      applyBase: false,
      theme: overrideShadcnTheme({
        light: {
          background: "hsl(0, 0%, 100%)",
          foreground: "hsl(240, 10%, 4%)",
          muted: "hsl(240, 5%, 96%)",
          mutedForeground: "hsl(240, 4%, 46%)",
          popover: "hsl(0, 0%, 100%)",
          popoverForeground: "hsl(240, 10%, 4%)",
          card: "hsl(0, 0%, 100%)",
          cardForeground: "hsl(240, 10%, 4%)",
          border: "hsl(240, 6%, 90%)",
          input: "hsl(240, 6%, 90%)",
          primary: "hsl(273, 100%, 61%)",
          primaryForeground: "hsl(0, 0%, 98%)",
          secondary: "hsl(240, 5%, 96%)",
          secondaryForeground: "hsl(240, 6%, 10%)",
          accent: "hsl(240, 5%, 96%)",
          accentForeground: "hsl(240, 6%, 10%)",
          destructive: "hsl(0, 84%, 60%)",
          destructiveForeground: "hsl(0, 0%, 98%)",
          ring: "hsl(240, 5%, 65%)",
        },
        dark: {
          background: "hsl(240, 10%, 4%)",
          foreground: "hsl(0, 0%, 98%)",
          muted: "hsl(240, 4%, 16%)",
          mutedForeground: "hsl(240, 5%, 65%)",
          popover: "hsl(240, 10%, 4%)",
          popoverForeground: "hsl(0, 0%, 98%)",
          card: "hsl(240, 10%, 4%)",
          cardForeground: "hsl(0, 0%, 98%)",
          border: "hsl(240, 4%, 16%)",
          input: "hsl(240, 4%, 16%)",
          primary: "hsl(273, 100%, 60%)",
          primaryForeground: "hsl(0, 0%, 99%)",
          secondary: "hsl(240, 4%, 16%)",
          secondaryForeground: "hsl(0, 0%, 98%)",
          accent: "hsl(240, 4%, 16%)",
          accentForeground: "hsl(0, 0%, 98%)",
          destructive: "hsl(0, 63%, 31%)",
          destructiveForeground: "hsl(0, 86%, 97%)",
          ring: "hsl(240, 4%, 16%)",
        },
      }),
    }),
  ],
};

export default config;
