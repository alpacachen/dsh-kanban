import { act, render, screen } from "@testing-library/react"
import { useMemo } from "react"
import type { Context } from "@deepseek-ai/cordis"
import { describe, expect, it } from "vitest"
import { WorkflowTaskDetail } from "../src/client/WorkflowTaskDetail"
import { installLocale, t, useT } from "../src/client/lib/i18n"
import { workflowErrorText } from "../src/client/lib/workflow-errors"
import { WorkflowApiError } from "../src/client/lib/workflow-api"
import type { WorkflowTask } from "../src/client/lib/workflow-types"

function MemoizedLabel() {
  const translate = useT()
  const label = useMemo(() => translate("copyCode"), [translate])
  return <output data-testid="memoized-label">{label}</output>
}

describe("Workflow localization", () => {
  it("updates persisted failures and navigation labels when the Host language changes, preserving user content", () => {
    let language = "en"
    const dictionaries = new Map<string, Record<string, string>>(), listeners = new Set<() => void>()
    installLocale({ get: () => ({
      register: (_namespace: string, lang: string, entries: Record<string, string>) => { dictionaries.set(lang, entries); return () => dictionaries.delete(lang) },
      bind: () => (key: string) => dictionaries.get(language)?.[key] ?? key,
      subscribe: (listener: () => void) => { listeners.add(listener); return () => listeners.delete(listener) },
      getSnapshot: () => language,
    }), effect: (effect: () => unknown) => effect() } as unknown as Context)
    const task: WorkflowTask = {
      id: "localized-task", workspaceId: "workspace", workflowId: "flow", workflowName: "用户命名的流程", versionNumber: 1,
      title: "保留原始输入", input: { text: "保留原始输入" }, state: "needs_attention", revision: 2,
      stageTitle: "用户阶段", createdAt: 1, updatedAt: 1, currentStageId: "run", canRetry: true, review: null,
      stages: [{ id: "run", kind: "agent", title: "用户阶段", prompt: "保留阶段原文" }], outputs: [], attempts: [], reviews: [], feedback: [],
      attention: { code: "WORKFLOW_NETWORK_FAILED", message: "模型连接中断，旧的固定中文。" },
    }
    const view = render(<><MemoizedLabel /><WorkflowTaskDetail task={task} busy={false} disconnected={false} onBack={() => {}} onCopyTask={() => {}} onDirtyChange={() => {}} command={async () => task} onUpdated={() => {}} /></>)
    expect(screen.getByText(/The model connection was interrupted/)).toBeTruthy()
    expect(screen.queryByText(/旧的固定中文/)).toBeNull()
    expect(t("boardTab")).toBe("Kanban · Workflow")
    expect(screen.getByTestId("memoized-label").textContent).toBe(t("copyCode"))
    const failure = new WorkflowApiError("domain", "workflow/file-changed", "固定中文，不直接展示")
    expect(workflowErrorText(failure)).toContain("The file changed")
    act(() => { language = "zh"; listeners.forEach(listener => listener()) })
    expect(screen.getByText(/模型连接中断，请恢复网络/)).toBeTruthy()
    expect(screen.getByRole("heading", { name: "保留原始输入" })).toBeTruthy()
    expect(t("boardTab")).toBe("看板·工作流")
    expect(screen.getByTestId("memoized-label").textContent).toBe("复制代码")
    expect(workflowErrorText(failure)).toContain("文件已变化")
    expect(workflowErrorText("WORKFLOW_CANCELLED: historical message")).toContain("已按要求终止")
    expect(workflowErrorText({ code: "WF_NEW_ERROR", message: "untranslated internal message" })).not.toContain("untranslated")
    view.unmount()
  })
})
