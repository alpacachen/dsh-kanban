import { cleanup } from "@testing-library/react"
import { afterEach, vi } from "vitest"

// Host rendering is verified in the built-bundle browser/desktop checks.
vi.mock("@deepseek-ai/dsh-client-ui-primitives", async () => {
  const { createElement, useLayoutEffect, useRef, forwardRef } = await import("react")
  const { createPortal } = await import("react-dom")
  const useLayer = (panel: { current: HTMLElement | null }, open: boolean, onClose: () => void) => {
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
  }
  const icon = (props: any) => createElement("svg", props)
  return {
    Tooltip: ({ children }: any) => children,
    MenuSurface: forwardRef(({ children, compact, ...props }: any, ref) => createElement("div", { ...props, ref }, children)),
    MenuGroup: ({ children, label }: any) => createElement("div", null, label, children),
    Input: forwardRef((props: any, ref) => createElement("input", { ...props, ref })),
    StateDot: () => null, Tag: ({ children }: any) => createElement("span", null, children), Toast: () => null,
    IconCheckOutlineRegular: icon, IconChevronDownOutlineRegular: icon, IconChevronRightOutlineRegular: icon, IconCloseFillRegular: icon, IconDataOutlineRegular: icon, IconWarningOutlineRegular: icon,
    observeStickyMenuGroups: () => () => {}, isMobileDevice: () => false,
    rankByName: (items: any[], query: string) => items.filter(item => item.name.toLowerCase().includes(query.toLowerCase())),
    Modal: ({ open, onClose, title, closeLabel, children, className, contentClassName }: any) => {
      const panel = useRef<HTMLDivElement>(null)
      useLayer(panel, open, onClose)
      return open ? createPortal(createElement("div", { ref: panel, role: "dialog", "aria-modal": true, "aria-label": title, className }, createElement("div", { className: contentClassName }, createElement("div", null, createElement("h2", null, title), createElement("button", { onClick: onClose, "aria-label": closeLabel }, closeLabel)), createElement("div", null, children))), document.body) : null
    },
    CodeBlock: ({ code }: { code: string }) => createElement("pre", null, code),
    MarkdownText: ({ text }: { text: string }) => createElement("div", null, text),
    // Model the Host boundary for draft/focus tests; the desktop verifies the real layer.
    useModalLayer: useLayer,
    ImageLightbox: ({ src, alt, labels, onClose }: { src: string; alt: string; labels: { dialog: string; close: string }; onClose: () => void }) => createPortal(
      createElement("div", { role: "dialog", "aria-label": labels.dialog },
        createElement("img", { src, alt }), createElement("button", { onClick: onClose }, labels.close)), document.body),
  }
})

vi.mock("@deepseek-ai/dsh-client-store", () => ({
  createSnapshotStore: (initial: any) => {
    let state = initial
    const listeners = new Set<() => void>()
    return { getSnapshot: () => state, subscribe: (fn: () => void) => { listeners.add(fn); return () => listeners.delete(fn) }, update: (mutate: (value: any) => void) => { state = structuredClone(state); mutate(state); listeners.forEach(fn => fn()) } }
  },
}))

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
