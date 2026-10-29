import { forwardRef, useEffect, useId, useImperativeHandle, useRef, useState } from "react"
import { ImagePlus, LoaderCircle, RefreshCw, X } from "lucide-react"
import { Button } from "./ui/button"
import { ImageLightbox } from "@deepseek-ai/dsh-client-ui-primitives"
import { imageUrl } from "@/lib/api"
import { useT } from "@/lib/i18n"
import type { ImageLimits, ImageRef } from "@/lib/types"

type Draft = { key: number; file: File; state: "pending" | "uploading" | "error"; error?: string }
export interface CardImagesHandle {
  uploadPending(cardId: string): Promise<boolean>
  addFiles(files: File[]): void
}
interface CardImagesProps {
  workspaceId: string
  cardId?: string
  images: ImageRef[]
  limits: ImageLimits | null
  disabled: boolean
  onUpload: (cardId: string, file: File, signal: AbortSignal) => Promise<void>
  onRemove: (cardId: string, attachmentId: string) => Promise<boolean>
  onBusyChange: (busy: boolean) => void
  onPendingChange: (pending: boolean) => void
}

function DraftPreview({ file }: { file: File }) {
  const [url, setUrl] = useState("")
  useEffect(() => {
    const next = URL.createObjectURL(file)
    setUrl(next)
    return () => URL.revokeObjectURL(next)
  }, [file])
  return url ? <img src={url} alt="" /> : null
}

function SavedImage({ src, label, onOpen }: { src: string; label: string; onOpen: () => void }) {
  const t = useT()
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading")
  const [retry, setRetry] = useState(0)
  return <div className="kanban-image-preview">
    {status === "error" ? <div className="kanban-image-message" role="status">
      <span>{t("imageLoadFailed")}</span>
      <Button variant="ghost" size="sm" onClick={() => { setStatus("loading"); setRetry((n) => n + 1) }}><RefreshCw />{t("retry")}</Button>
    </div> : <>
      <button type="button" className="kanban-image-open" aria-label={label} disabled={status !== "ready"} onClick={onOpen}>
        <img src={`${src}&retry=${retry}`} alt={label} onLoad={() => setStatus("ready")} onError={() => setStatus("error")} />
      </button>
      {status === "loading" && <span className="kanban-image-message" role="status"><LoaderCircle className="kanban-animate-spin" />{t("loadingImage")}</span>}
    </>}
  </div>
}

export const CardImages = forwardRef<CardImagesHandle, CardImagesProps>(function CardImages({ workspaceId, cardId, images, limits, disabled, onUpload, onRemove, onBusyChange, onPendingChange }, ref) {
  const t = useT()
  const labelId = useId()
  const input = useRef<HTMLInputElement>(null)
  const [drafts, setDrafts] = useState<Draft[]>([])
  const draftsRef = useRef<Draft[]>([])
  const sequence = useRef(0)
  const alive = useRef(true)
  const controller = useRef(new AbortController())
  const busy = useRef(false)
  const [removing, setRemoving] = useState<string | null>(null)
  const [error, setError] = useState("")
  const [dragging, setDragging] = useState(false)
  const [preview, setPreview] = useState<ImageRef | null>(null)
  useEffect(() => {
    alive.current = true
    controller.current = new AbortController()
    return () => { alive.current = false; controller.current.abort() }
  }, [])
  const update = (next: Draft[]) => {
    if (!alive.current) return
    draftsRef.current = next
    setDrafts(next)
    onPendingChange(next.length > 0)
  }
  const uploadPending = async (id: string, selected = draftsRef.current): Promise<boolean> => {
    if (busy.current) return false
    busy.current = true
    onBusyChange(true)
    setError("")
    let ok = true
    try {
      for (const item of selected) {
        if (!alive.current) return false
        update(draftsRef.current.map((draft) => draft.key === item.key ? { ...draft, state: "uploading", error: undefined } : draft))
        try {
          await onUpload(id, item.file, controller.current.signal)
          update(draftsRef.current.filter((draft) => draft.key !== item.key))
        } catch (cause) {
          ok = false
          if (!alive.current) return false
          update(draftsRef.current.map((draft) => draft.key === item.key ? { ...draft, state: "error", error: String(cause instanceof Error ? cause.message : cause) } : draft))
        }
      }
      return ok
    } finally {
      busy.current = false
      if (alive.current) onBusyChange(false)
    }
  }
  const addFiles = (files: File[]) => {
    if (!limits || disabled || busy.current || !files.length) return
    setError("")
    if (images.length + draftsRef.current.length + files.length > limits.maxImagesPerCard) {
      setError(t("imageTooMany").replace("{count}", String(limits.maxImagesPerCard)))
      return
    }
    for (const file of files) {
      if (!limits.mediaTypes.includes(file.type)) { setError(t("imageInvalidType")); return }
      if (!file.size || file.size > limits.maxImageBytes) { setError(t("imageTooLarge").replace("{size}", String(Math.floor(limits.maxImageBytes / 1048576)))); return }
    }
    const added: Draft[] = files.map((file) => ({ key: ++sequence.current, file, state: "pending" }))
    update([...draftsRef.current, ...added])
    if (cardId) void uploadPending(cardId, added)
  }
  useImperativeHandle(ref, () => ({ uploadPending, addFiles }))
  const remove = async (image: ImageRef) => {
    if (!cardId || disabled || busy.current) return
    busy.current = true
    onBusyChange(true)
    setRemoving(image.attachmentId)
    setError("")
    try {
      if (!await onRemove(cardId, image.attachmentId)) throw new Error(t("imageRemoveFailed"))
    } catch (cause) {
      if (alive.current) setError(String(cause instanceof Error ? cause.message : cause))
    } finally {
      busy.current = false
      if (alive.current) { setRemoving(null); onBusyChange(false) }
    }
  }
  return <section className={`kanban-images${dragging ? " is-dragging" : ""}`} aria-labelledby={labelId}
    onDragOver={(event) => {
      if (!event.dataTransfer.types.includes("Files")) return
      event.preventDefault(); event.stopPropagation()
      if (limits && !disabled) setDragging(true)
    }}
    onDragLeave={(event) => { if (!(event.relatedTarget instanceof Node) || !event.currentTarget.contains(event.relatedTarget)) setDragging(false) }}
    onDrop={(event) => {
      if (!event.dataTransfer.types.includes("Files")) return
      event.preventDefault(); event.stopPropagation(); setDragging(false)
      addFiles(Array.from(event.dataTransfer.files))
    }}>
    <div className="kanban-field-label">
      <span id={labelId}>{t("images")} <span className="kanban-tabular">({images.length + drafts.length})</span></span>
      <Button variant="ghost" size="sm" disabled={disabled || !limits} onClick={() => input.current?.click()}><ImagePlus />{t("addImages")}</Button>
      <input ref={input} type="file" accept={limits?.mediaTypes.join(",") ?? "image/png,image/jpeg,image/webp"} multiple hidden disabled={disabled || !limits} aria-label={t("addImages")}
        onChange={(event) => { addFiles(Array.from(event.currentTarget.files ?? [])); event.currentTarget.value = "" }} />
    </div>
    {!limits && <p className="kanban-muted-small">{t("imagesUnavailable")}</p>}
    {limits && <p className="kanban-muted-small">{t("imagesHint").replace("{size}", String(Math.floor(limits.maxImageBytes / 1048576))).replace("{count}", String(limits.maxImagesPerCard))}</p>}
    {error && <p className="kanban-dialog-error" role="alert">{error}</p>}
    {!images.length && !drafts.length && limits && <div className="kanban-image-empty">{t("imagesEmpty")}</div>}
    {(images.length > 0 || drafts.length > 0) && <div className="kanban-image-grid">
      {images.map((image, index) => <div className="kanban-image-tile" key={image.attachmentId}>
        <SavedImage src={imageUrl(workspaceId, cardId!, image.attachmentId)} label={t("imagePreview").replace("{number}", String(index + 1))} onOpen={() => setPreview(image)} />
        <Button variant="ghost" size="sm" disabled={disabled || removing !== null} aria-label={t("imageRemove").replace("{number}", String(index + 1))} onClick={() => void remove(image)}>
          {removing === image.attachmentId ? <LoaderCircle className="kanban-animate-spin" /> : <X />}{removing === image.attachmentId ? t("imageRemoving") : t("remove")}
        </Button>
      </div>)}
      {drafts.map((draft) => <div className="kanban-image-tile" key={draft.key}>
        <div className="kanban-image-preview"><DraftPreview file={draft.file} /></div>
        <div className="kanban-image-draft-info">
          <span className="kanban-image-filename" title={draft.file.name}>{draft.file.name}</span>
          <span role={draft.state === "error" ? "alert" : "status"} className={draft.state === "error" ? "kanban-error" : "kanban-muted-small"}>
            {draft.state === "uploading" ? t("imageUploading") : draft.state === "error" ? `${t("imageUploadFailed")}: ${draft.error}` : t("imagePending")}
          </span>
          <div className="kanban-image-draft-actions">
            {draft.state === "error" && cardId && <Button size="sm" variant="ghost" disabled={disabled} onClick={() => void uploadPending(cardId, [draft])}><RefreshCw />{t("retry")}</Button>}
            <Button size="sm" variant="ghost" disabled={disabled} aria-label={`${t("remove")}: ${draft.file.name}`} onClick={() => update(draftsRef.current.filter((item) => item.key !== draft.key))}><X />{t("remove")}</Button>
          </div>
        </div>
      </div>)}
    </div>}
    {limits && <p className="kanban-muted-small">{t(cardId ? "imagesSaveHint" : "imagesDraftHint")}</p>}
    {preview && <ImageLightbox src={imageUrl(workspaceId, cardId!, preview.attachmentId)} alt={t("images")}
      labels={{ dialog: t("images"), close: t("close") }} onClose={() => setPreview(null)} />}
  </section>
})
