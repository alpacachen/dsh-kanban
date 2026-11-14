import { useEffect, useState, type ReactNode } from "react"
import { Button } from "./components/ui/button"
import { Textarea } from "./components/ui/textarea"
import { useT } from "./lib/i18n"

export function WorkflowStageEditor({ prompt, required, disabled, onSave, onDirtyChange, children }: {
  prompt: string; required: boolean; disabled: boolean; onSave: (prompt: string, original: string) => Promise<void>
  onDirtyChange: (dirty: boolean) => void; children: ReactNode
}) {
  const t = useT()
  const [original, setOriginal] = useState(prompt), [draft, setDraft] = useState(prompt)
  const dirty = draft !== original
  useEffect(() => { if (!dirty) { setOriginal(prompt); setDraft(prompt) } }, [prompt, dirty])
  useEffect(() => { onDirtyChange(dirty); return () => onDirtyChange(false) }, [dirty, onDirtyChange])
  async function save() {
    if (disabled || !dirty || required && !draft.trim()) return
    try { await onSave(draft, original); setOriginal(draft) } catch { /* Keep the draft; the parent displays the save error. */ }
  }
  return <form className="workflow-stage-editor" onSubmit={event => { event.preventDefault(); void save() }}>
    <Textarea aria-label={t("wfPrompt")} placeholder={t("wfPromptHint")} value={draft} required={required} disabled={disabled} onChange={event => setDraft(event.target.value)} onKeyDown={event => { if ((event.metaKey || event.ctrlKey) && event.key === "Enter" && !event.nativeEvent.isComposing) { event.preventDefault(); event.currentTarget.form?.requestSubmit() } }} />
    <div className="workflow-stage-editor-toolbar">{children}{dirty && <div className="workflow-actions"><Button type="button" size="sm" variant="ghost" disabled={disabled} onClick={() => { setDraft(prompt); setOriginal(prompt) }}>{t("cancel")}</Button><Button type="submit" size="sm" disabled={disabled || required && !draft.trim()}>{t("save")}</Button></div>}</div>
  </form>
}
