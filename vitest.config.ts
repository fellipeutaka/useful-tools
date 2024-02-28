import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: "./__tests__/setup.ts",
  },
  resolve: {
    conditions: mode === "test" ? ["browser"] : [],
    alias: {
      "~/tests": new URL("./__tests__", import.meta.url).pathname,
      "~": new URL("./src", import.meta.url).pathname,
    },
  },
}));
