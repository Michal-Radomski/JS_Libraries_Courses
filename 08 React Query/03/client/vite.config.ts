import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // test: {
  //   globals: true,
  //   environment: "jsdom",
  //   setupFiles: "./src/setupTests.js",
  // },
  server: {
    port: 3000,
    host: true,
  },
  resolve: {
    alias: {
      "@shared": path.join(__dirname, "../shared/"),
      "@": path.join(__dirname, "src/"),
    },
  },
});
