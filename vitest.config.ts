import react from "@vitejs/plugin-react";
import path from "node:path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
  },
  resolve: {
    alias: {
      "~/testing": path.resolve(__dirname, "./__tests__/"),
      "~": path.resolve(__dirname, "./src/"),
    },
  },
});
