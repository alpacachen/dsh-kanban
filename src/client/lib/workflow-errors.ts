import { t } from "./i18n"

/** Translate owned error codes at render time; leave saved evidence unchanged. */
export function workflowErrorText(error: unknown, fallback = t("wfActionFailed")): string {
  const message = typeof error === "string" ? error : error instanceof Error ? error.message
    : error && typeof error === "object" && "message" in error ? String(error.message ?? "") : ""
  const rawCode = error && typeof error === "object" && "code" in error ? String(error.code ?? "")
    : /^(WF_[A-Z_]+|WORKFLOW_[A-Z_]+):/.exec(message)?.[1]
  const code = rawCode?.startsWith("workflow/") ? `WF_${rawCode.slice(9).replace(/-/g, "_").toUpperCase()}` : rawCode
  if (code) {
    const key = `wfError_${code}`, translated = t(key)
    return translated === key ? `${fallback} (${code})` : translated
  }
  return message || fallback
}
