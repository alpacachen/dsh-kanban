import type { Context } from "@deepseek-ai/cordis"
import { describe, expect, it, vi } from "vitest"

describe("locale lifecycle", () => {
  it("releases both dictionaries on disposal so a reloaded plugin registers its current text", async () => {
    const dictionaries = new Map<string, Record<string, string>>()
    let language = "zh"
    const locale = {
      register(namespace: string, language: string, entries: Record<string, string>) {
        const key = `${namespace}:${language}`
        if (dictionaries.has(key)) throw new Error(`Duplicate dictionary: ${key}`)
        dictionaries.set(key, entries)
        return () => dictionaries.delete(key)
      },
      bind: (namespace: string) => (key: string) => dictionaries.get(`${namespace}:${language}`)?.[key] ?? key,
    }
    const context = () => {
      const disposers: (() => void)[] = []
      return {
        ctx: {
          get: () => locale,
          effect: (effect: () => () => void) => disposers.push(effect()),
        } as unknown as Context,
        dispose: () => disposers.reverse().forEach((dispose) => dispose()),
      }
    }

    vi.resetModules()
    const initial = await import("../src/client/lib/i18n")
    const first = context()
    initial.installLocale(first.ctx)
    expect(dictionaries.size).toBe(2)
    expect(initial.t("taskDetails")).toBe("任务详情")
    language = "en"
    expect(initial.t("taskDetails")).toBe("Task details")
    first.dispose()
    expect(dictionaries.size).toBe(0)

    vi.resetModules()
    const reloaded = await import("../src/client/lib/i18n")
    const second = context()
    expect(() => reloaded.installLocale(second.ctx)).not.toThrow()
    expect(dictionaries.size).toBe(2)
    expect(reloaded.t("editNote")).toBe("Edit")
    second.dispose()
    expect(dictionaries.size).toBe(0)
  })
})
