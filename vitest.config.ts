import { resolve } from "node:path"
import { fileURLToPath } from "node:url"
import { defineConfig } from "vitest/config"

const root = fileURLToPath(new URL(".", import.meta.url))

export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(root, "src/client"),
    },
  },
  test: {
    include: ["test/**/*.{test,spec}.{mjs,ts,tsx}"],
    environment: "jsdom",
    setupFiles: ["./test/setup.ts"],
  },
})
