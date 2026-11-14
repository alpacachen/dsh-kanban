import { workflowErrorText } from "./lib/workflow-errors"
import { useEffect, useMemo, useState } from "react"
import { CodeBlock, MarkdownText, Modal } from "@deepseek-ai/dsh-client-ui-primitives"
import { useT } from "./lib/i18n"
import type { WorkflowFileTarget, WorkflowTaskFile } from "./lib/workflow-types"

const image = new Set(["png", "jpg", "jpeg", "gif", "webp", "bmp", "ico", "svg"])
const text = new Set(["md", "markdown", "txt", "log", "csv", "ts", "tsx", "js", "jsx", "json", "jsonl", "yaml", "yml", "toml", "xml", "html", "css", "scss", "py", "sh", "bash", "sql", "swift", "go", "rs", "java", "c", "cpp", "h", "diff", "ini"])
export function WorkflowFilePreview({ file, target, onClose }: { file: WorkflowTaskFile; target: WorkflowFileTarget; onClose: () => void }) {
  const t = useT(), ext = file.name.split(".").pop()?.toLowerCase() ?? ""
  const url = `/api/file?${new URLSearchParams({ path: target.path })}`
  const [content, setContent] = useState<string>(), [pdf, setPdf] = useState<string>(), [error, setError] = useState<string | Error>("")
  const markdownLabels = useMemo(() => ({ code: { copyLabel: t("copyCode"), copiedLabel: t("copiedCode") }, footnotes: t("footnotes") }), [t])
  useEffect(() => {
    const controller = new AbortController(); let objectUrl: string | undefined
    if (text.has(ext) || ext === "pdf") void (async () => {
      try {
        const response = await fetch(url, { signal: controller.signal, credentials: "same-origin" })
        if (!response.ok) throw Error(t(response.status === 413 ? "wfFileTooLarge" : "wfFilesUnavailable"))
        if (ext === "pdf") {
          const blob = await response.blob()
          if (!controller.signal.aborted) { objectUrl = URL.createObjectURL(new Blob([blob], { type: "application/pdf" })); setPdf(objectUrl) }
        } else {
          const value = await response.text()
          if (!controller.signal.aborted) setContent(value)
        }
      } catch (cause) { if (!controller.signal.aborted) setError(cause instanceof Error ? cause : t("wfFilesUnavailable")) }
    })()
    return () => { controller.abort(); if (objectUrl) URL.revokeObjectURL(objectUrl) }
  }, [ext, url, t])
  const unsupported = !image.has(ext) && !text.has(ext) && !["pdf", "mp3", "wav", "m4a", "ogg", "mp4", "webm", "mov"].includes(ext)
  return <Modal open title={file.stageTitle ? `${file.stageTitle} · ${t("wfFilesStageReply")}` : file.name} onClose={onClose} closeLabel={t("close")} className={`kanban-root workflow-shell workflow-stage-modal workflow-file-modal${ext === "pdf" ? " workflow-file-modal-wide" : ""}`} contentClassName="workflow-modal-content">
    <div className="workflow-file-path" title={file.path}>{file.path}</div>
    {error && <p role="alert" className="workflow-error">{workflowErrorText(error)}</p>}
    <div className="workflow-file-preview">
      {image.has(ext) ? <img src={url} alt={file.name} onError={() => setError(t("wfFilesUnavailable"))} />
        : ext === "pdf" ? pdf ? <iframe src={pdf} title={file.name} /> : !error && <p role="status">{t("wfLoading")}</p>
        : text.has(ext) ? content === undefined ? !error && <p role="status">{t("wfLoading")}</p> : ["md", "markdown"].includes(ext)
          ? <MarkdownText text={content} labels={markdownLabels} variant="compact" />
          : <CodeBlock code={content} lang={ext} lineNumbers copyLabel={t("copyCode")} copiedLabel={t("copiedCode")} />
        : ["mp3", "wav", "m4a", "ogg"].includes(ext) ? <audio src={url} controls onError={() => setError(t("wfFilesUnavailable"))} />
        : ["mp4", "webm", "mov"].includes(ext) ? <video src={url} controls onError={() => setError(t("wfFilesUnavailable"))} />
        : unsupported && <p className="workflow-note">{t("wfFileUnsupported")}</p>}
    </div>
  </Modal>
}
