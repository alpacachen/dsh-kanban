import { cleanup } from "@testing-library/react"
import { afterEach, vi } from "vitest"

// The real Host renderer is exercised by the built-bundle browser tests.
vi.mock("@deepseek-ai/dsh-client-ui-primitives", async () => {
  const { createElement } = await import("react")
  return { MarkdownText: ({ text }: { text: string }) => createElement("div", null, text) }
})

afterEach(() => {
  cleanup()
})

if (!globalThis.ResizeObserver) {
  globalThis.ResizeObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  } as typeof ResizeObserver
}

if (typeof window !== "undefined" && !window.matchMedia) {
  window.matchMedia = (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener() {},
    removeListener() {},
    addEventListener() {},
    removeEventListener() {},
    dispatchEvent() { return false },
  }) as MediaQueryList
}
