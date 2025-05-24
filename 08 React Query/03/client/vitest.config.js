import { defineConfig } from "vitest/config";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.js",
  },
  resolve: {
    alias: {
      "@shared": path.join(__dirname, "../shared/"),
      "@": path.join(__dirname, "src/"),
    },
  },
});
