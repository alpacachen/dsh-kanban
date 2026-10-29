import { cleanup } from "@testing-library/react"
import { afterEach, vi } from "vitest"

// Host rendering is verified in the built-bundle browser/desktop checks.
vi.mock("@deepseek-ai/dsh-client-ui-primitives", async () => {
  const { createElement, useLayoutEffect, useRef } = await import("react")
  const { createPortal } = await import("react-dom")
  return {
    MarkdownText: ({ text }: { text: string }) => createElement("div", null, text),
    // Model the Host boundary for draft/focus tests; the desktop verifies the real layer.
    useModalLayer: (panel: { current: HTMLElement | null }, open: boolean, onClose: () => void) => {
      const close = useRef(onClose)
      close.current = onClose
      useLayoutEffect(() => {
        if (!open || !panel.current) return
        const previous = document.activeElement as HTMLElement | null
        (panel.current.querySelector<HTMLElement>("[data-modal-autofocus]") ?? panel.current.querySelector<HTMLElement>("button, input"))?.focus()
        const keydown = (event: KeyboardEvent) => {
          if (event.key === "Escape" && !event.defaultPrevented) { event.preventDefault(); close.current() }
        }
        document.addEventListener("keydown", keydown)
        return () => { document.removeEventListener("keydown", keydown); previous?.focus() }
      }, [panel, open])
    },
    ImageLightbox: ({ src, alt, labels, onClose }: { src: string; alt: string; labels: { dialog: string; close: string }; onClose: () => void }) => createPortal(
      createElement("div", { role: "dialog", "aria-label": labels.dialog },
        createElement("img", { src, alt }), createElement("button", { onClick: onClose }, labels.close)), document.body),
  }
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

// JSDOM lacks the native pointer/scroll APIs used by Radix Select.
if (typeof HTMLElement !== "undefined") {
  if (!HTMLElement.prototype.hasPointerCapture) HTMLElement.prototype.hasPointerCapture = () => false
  if (!HTMLElement.prototype.scrollIntoView) HTMLElement.prototype.scrollIntoView = () => {}
}
