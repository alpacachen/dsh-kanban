import { workflowErrorText } from "./lib/workflow-errors"
import { useEffect, useRef, useState } from "react"
import { FileText, FolderOpen, RotateCcw, ArrowUpRight, Trash2 } from "lucide-react"
import { Tooltip } from "@deepseek-ai/dsh-client-ui-primitives"
import { Button } from "./components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogBody, DialogFooter } from "./components/ui/dialog"
import { WorkflowFilePreview } from "./WorkflowFilePreview"
import { useT } from "./lib/i18n"
import type { WorkflowApi, WorkflowFileTarget, WorkflowTaskFiles as TaskFiles, WorkflowTaskFile } from "./lib/workflow-types"

export function WorkflowTaskFiles({ taskId, api, active = false, revision }: { taskId: string; api?: WorkflowApi; active?: boolean; revision?: number }) {
  const t = useT(), [data, setData] = useState<TaskFiles>(), [error, setError] = useState<string | Error>(""), [refresh, setRefresh] = useState(0), [opening, setOpening] = useState("")
  const [preview, setPreview] = useState<{ file: WorkflowTaskFile; target: WorkflowFileTarget }>()
  const [deleting, setDeleting] = useState<WorkflowTaskFile>(), [deleteError, setDeleteError] = useState<string | Error>(""), [deleteBusy, setDeleteBusy] = useState(false)
  const lifetime = useRef<AbortController | null>(null)
  useEffect(() => {
    const controller = new AbortController(); lifetime.current = controller
    return () => controller.abort()
  }, [taskId])
  useEffect(() => {
    const controller = new AbortController(); let timer: ReturnType<typeof setTimeout>
    async function load() {
      if (!api) return
      try {
        const files = await api.call<TaskFiles>("getTaskFiles", { taskId }, controller.signal)
        if (!files || typeof files.directory !== "string" || !Array.isArray(files.files)) throw Error(t("wfFilesUnavailable"))
        if (!controller.signal.aborted) { setData({ ...files, files: files.files.filter(file => file.kind !== "stage-result") }); setError("") }
      } catch (cause) { if (!controller.signal.aborted) setError(cause instanceof Error ? cause : t("wfFilesUnavailable")) }
      if (!controller.signal.aborted && active) timer = setTimeout(load, 10000)
    }
    void load()
    return () => { controller.abort(); clearTimeout(timer) }
  }, [taskId, api, refresh, t, active, revision])
  async function open(path?: string) {
    const signal = lifetime.current?.signal
    if (!signal || !api || !data || opening) return
    setOpening(path ?? ":directory"); setError("")
    try {
      if (path) {
        const file = await api.call<WorkflowFileTarget>("getTaskFile", { taskId, path }, signal)
        const item = data.files.find(item => item.path === path)
        if (item && !signal.aborted) setPreview({ file: item, target: file })
      } else {
        if (!api.openDirectory) throw Error(t("wfFilesOpenFailed"))
        await api.openDirectory(data.directory, signal)
      }
    } catch (cause) { if (!signal.aborted) setError(cause instanceof Error ? cause : t("wfFilesOpenFailed")) }
    finally { if (!signal.aborted) setOpening("") }
  }
  async function remove() {
    const signal = lifetime.current?.signal
    if (!api || !signal || !deleting?.version || deleteBusy) return
    setDeleteBusy(true); setDeleteError("")
    try {
      await api.call("deleteTaskFile", { request: { requestId: crypto.randomUUID(), taskId, path: deleting.path, expectedVersion: deleting.version } }, signal)
      if (!signal.aborted) {
        setData(previous => previous && ({ ...previous, files: previous.files.filter(file => file.path !== deleting.path) }))
        if (preview?.file.path === deleting.path) setPreview(undefined)
        setDeleting(undefined); setRefresh(value => value + 1)
      }
    } catch (cause) { if (!signal.aborted) setDeleteError(cause instanceof Error ? cause : t("wfActionFailed")) }
    finally { if (!signal.aborted) setDeleteBusy(false) }
  }
  return <section className="workflow-task-files" aria-label={t("wfFiles")}>
    <header><h3>{t("wfFiles")}{data && <span>{data.files.length}</span>}</h3><div className="workflow-actions">
      <Button size="sm" variant="ghost" disabled={!data || Boolean(opening)} onClick={() => void open()}><FolderOpen />{t("wfFilesOpenDirectory")}</Button>
      <Button size="icon" variant="ghost" aria-label={t("refresh")} onClick={() => setRefresh(value => value + 1)}><RotateCcw /></Button>
    </div></header>
    {error && <p role="alert" className="workflow-error">{workflowErrorText(error)}</p>}
    {!data ? <p className="workflow-note" role="status">{t("wfLoading")}</p> : data.files.length === 0 ? <p className="workflow-note">{t("wfFilesEmpty")}</p> : <ul>{data.files.map(file => <li key={file.path}>
      <Tooltip label={file.path} onlyWhenClipped portal side="top" maxWidth={420}><button type="button" className="workflow-file-name" disabled={Boolean(opening)} onClick={() => void open(file.path)}><FileText /><span>{file.stageTitle ? `${file.stageTitle} · ${t("wfFilesStageReply")}${file.effective === false ? ` · ${t("wfFilesPrevious")}` : ""}` : file.path}</span><ArrowUpRight /></button></Tooltip>
      <span className="workflow-file-size">{file.byteLength < 1024 ? `${file.byteLength} B` : file.byteLength < 1024 * 1024 ? `${(file.byteLength / 1024).toFixed(1)} KB` : `${(file.byteLength / 1024 / 1024).toFixed(1)} MB`}</span>
      <Button type="button" size="icon" variant="ghost" className="workflow-file-delete" disabled={deleteBusy || !file.version} aria-label={`${t("delete")} · ${file.path}`} onClick={() => { setDeleteError(""); setDeleting(file) }}><Trash2 /></Button>
    </li>)}</ul>}
    {preview && <WorkflowFilePreview key={preview.target.path} file={preview.file} target={preview.target} onClose={() => setPreview(undefined)} />}
    {deleting && <Dialog open onOpenChange={value => { if (!value && !deleteBusy) setDeleting(undefined) }}><DialogContent className="kanban-root kanban-dialog-medium"><DialogHeader><DialogTitle>{t("wfDeleteFile")}</DialogTitle><DialogDescription>{t("wfDeleteFileConfirm").replace("{name}", deleting.path)}</DialogDescription></DialogHeader>{deleteError && <DialogBody><p role="alert" className="workflow-error">{workflowErrorText(deleteError)}</p></DialogBody>}<DialogFooter><Button variant="outline" disabled={deleteBusy} onClick={() => setDeleting(undefined)}>{t("cancel")}</Button><Button variant="destructive" disabled={deleteBusy} onClick={() => void remove()}>{t("confirmDelete")}</Button></DialogFooter></DialogContent></Dialog>}
  </section>
}
