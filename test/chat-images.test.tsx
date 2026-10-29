import React, { StrictMode } from "react"
import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { afterEach, expect, it, vi } from "vitest"
import { KanbanView } from "../src/client/KanbanView"
import { ChatDraftInjector } from "../src/client/components/ChatDraftInjector"
import { consumeDraft, fillChatDraft, queueDraft } from "../src/client/lib/chat-bridge"
import { t } from "../src/client/lib/i18n"

const image = { attachmentId: `sha256:${"a".repeat(64)}`, mediaType: "image/png", bytes: 3, width: 20, height: 10 }
const card = { id: "k1", title: "Image handoff", note: "Check screenshot", columnId: "todo", comments: [], images: [image] }
const board = { columns: [{ id: "todo", title: "Todo" }], cards: [card], labels: [], activities: [] }
const store = () => ({ createDrafts: vi.fn((_id, files) => files.map((file, i) => ({ id: `draft-${i}`, file, kind: "image" }))), releaseDraftAttachments: vi.fn() })
const input = () => ({ setDraft: vi.fn(), addAttachments: vi.fn(() => true), submit: vi.fn() })
afterEach(() => { consumeDraft("next-image-session"); vi.restoreAllMocks() })

it.each(["current", "new"])("attaches saved image bytes to the %s composer without sending", async target => {
  const user = userEvent.setup(), attachmentDrafts = store(), actions = input()
  const fetchMock = vi.spyOn(globalThis, "fetch").mockImplementation(async (url) => String(url).startsWith('/api/kanban/image?')
    ? { ok: true, blob: async () => new Blob(["png"], { type: "image/png" }) } as Response
    : { ok: true, json: async () => ({ board }) } as Response)
  const openWorkspace = vi.fn(async (_id, cb) => cb("next-image-session"))
  render(<KanbanView {...{ sessionId: "current", inputActions: actions, attachmentDrafts, uiWorkspace: { openWorkspace } } as any} />)
  await user.click(await screen.findByText(card.title))
  await user.click(screen.getByRole("button", { name: t("chatWithAgent") }))
  await user.click(screen.getByRole("menuitem", { name: t(target === 'current' ? 'chatCurrentSession' : 'chatNewSession') }))
  if (target === 'new') {
    expect(actions.setDraft).not.toHaveBeenCalled()
    render(<StrictMode><ChatDraftInjector {...{ sessionId: "next-image-session", inputActions: actions, attachmentDrafts } as any} /></StrictMode>)
  }
  await waitFor(() => expect(actions.addAttachments).toHaveBeenCalledExactlyOnceWith(["draft-0"]))
  expect(attachmentDrafts.createDrafts).toHaveBeenCalledTimes(1)
  expect(attachmentDrafts.createDrafts.mock.calls[0][0]).toBe(target === 'current' ? 'current' : 'next-image-session')
  const file = attachmentDrafts.createDrafts.mock.calls[0][1][0]
  expect([file.name, file.type, file.size]).toEqual(['k1-1.png', 'image/png', 3])
  expect(actions.setDraft.mock.calls[0][0]).toContain(card.note)
  expect(actions.submit).not.toHaveBeenCalled()
  expect(fetchMock.mock.calls.some(([url]) => String(url).includes('attachmentId=sha256%3A'))).toBe(true)
})

it('keeps the task dialog and composer unchanged when an image cannot be read', async () => {
  const user = userEvent.setup(), actions = input(), attachmentDrafts = store(), openWorkspace = vi.fn()
  vi.spyOn(globalThis, 'fetch').mockImplementation(async url => String(url).startsWith('/api/kanban/image?')
    ? { ok: false, status: 404 } as Response : { ok: true, json: async () => ({ board }) } as Response)
  render(<KanbanView {...{ sessionId: 'current', inputActions: actions, attachmentDrafts, uiWorkspace: { openWorkspace } } as any} />)
  await user.click(await screen.findByText(card.title))
  await user.click(screen.getByRole('button', { name: t('chatWithAgent') }))
  await user.click(screen.getByRole('menuitem', { name: t('chatNewSession') }))
  expect(await screen.findByText(/Image 1: HTTP 404/)).toBeTruthy()
  expect(screen.getByRole('dialog')).toBeTruthy()
  expect(openWorkspace).not.toHaveBeenCalled()
  expect(actions.setDraft).not.toHaveBeenCalled()
  expect(attachmentDrafts.createDrafts).not.toHaveBeenCalled()
})

it('releases rejected draft objects, retains a retryable new-session handoff, and never duplicates accepted attachments', async () => {
  const actions = input(), attachmentDrafts = store()
  actions.addAttachments.mockReturnValueOnce(false)
  queueDraft('next-image-session', 'Task text', [new File(['png'], 'task.png', { type: 'image/png' })])
  render(<StrictMode><ChatDraftInjector {...{ sessionId: 'next-image-session', inputActions: actions, attachmentDrafts } as any} /></StrictMode>)
  expect((await screen.findByRole('alert')).textContent).toContain(t('chatImagesBusy'))
  expect(actions.setDraft).not.toHaveBeenCalled()
  expect(attachmentDrafts.releaseDraftAttachments).toHaveBeenCalledTimes(1)
  fireEvent.click(screen.getByRole('button', { name: t('retry') }))
  await waitFor(() => expect(actions.setDraft).toHaveBeenCalledExactlyOnceWith('Task text'))
  expect(screen.queryByRole('alert')).toBeNull()
  expect(actions.addAttachments).toHaveBeenCalledTimes(2)
  expect(actions.submit).not.toHaveBeenCalled()
})

it('keeps text-only handoff working without the image service', () => {
  const actions = input()
  fillChatDraft('current', actions as any, { text: 'Text task', files: [] })
  expect(actions.setDraft).toHaveBeenCalledWith('Text task')
  expect(actions.addAttachments).not.toHaveBeenCalled()
})
