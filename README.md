# dsh-kanban

[简体中文](README.zh.md) | English

A kanban board plugin for [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) that turns project planning into a conversation: the AI writes cards through `kanban_*` tools while a live **Board** tab renders them. Boards are isolated per workspace and persisted to disk.

This is an **official DSH bundle** plugin (`dsh.bundle` declaration + `cordis.patch.yml` patch layer), installed through the standard `dsh plugin` flow. The UI is built with **React + TypeScript + Tailwind CSS + shadcn/ui + dnd-kit**, and fully follows the DSH theme (dark mode included).

## Features

- **Board tab** in the conversation view (next to Chat / Trajectory), styled to match the DSH theme automatically.
- **13 AI tools** — the model can read, create, edit, delete and move cards, lists and labels directly on the current workspace's board.
- **Lists & labels** — create / rename / reorder / delete lists; create / rename / recolor / delete labels (a label's color is bound to it).
- **Cards** — title, note, label and priority (**P0 / P1 / P2**); drag & drop between lists (dnd-kit); click a card to view / edit / delete.
- **Priority filter** and a compact operations panel (settings + filter).
- **Per-workspace isolation** — each project has its own board; **disk persistence** (`kanban-board-<workspaceId>.json`), survives refresh and restart.
- **i18n** — the UI follows the DSH language (Chinese / English).

## Install

Prerequisites: the `dsh` CLI installed, and a target profile (web is the default for the browser UI).

```sh
# From GitHub (recommended)
dsh plugin --profile web add github:<your-username>/dsh-kanban

# From npm
dsh plugin --profile web add dsh-kanban

# From a local tarball
pnpm pack
dsh plugin --profile web add ./dsh-kanban-1.0.0.tgz

# From a local directory
dsh plugin --profile web add ./dsh-kanban
```

Verify, then restart:

```sh
dsh --profile web --dump-config   # output should end with a "# == dsh-kanban" layer
# restart `dsh web` — bundle rows load at startup
```

> The browser bundle is **pre-built** (`lib/client.js`), so no build step is needed on the consumer side, and the plugin has no native dependencies (no `allowBuilds` approval required).

Uninstall:

```sh
dsh plugin --profile web remove dsh-kanban
```

Board data files are kept on disk.

## Usage

### 1. Manual (browser UI)

1. Open the **Board** tab next to the conversation views.
2. **Operations panel** (far left): the ⚙ settings menu (Edit lists / Edit labels) and the priority filter (All / P0 / P1 / P2).
3. **Cards** — click a card to view / edit / delete it; drag it to another list; use "+ Add card" at the bottom of a list.
4. **Lists** — Settings → Edit lists: drag to reorder, rename, delete or add lists.
5. **Labels** — Settings → Edit labels: create, rename, recolor or delete labels.

### 2. AI operations (recommended)

Every conversation in the workspace gives the model the 13 `kanban_*` tools — **no extra setup**. The AI operates on the **current workspace's board** (resolved from the session's working directory) and reads/writes the same data as the browser tab.

Tool list:

| Tool | Purpose |
|---|---|
| `kanban_get` | read the whole board (lists, labels, cards) |
| `kanban_get_label` | read the label list (names + colors) |
| `kanban_add_card` / `kanban_update_card` / `kanban_delete_card` / `kanban_move_card` | card CRUD + move |
| `kanban_add_column` / `kanban_rename_column` / `kanban_delete_column` / `kanban_move_column` | list CRUD + reorder |
| `kanban_add_label` / `kanban_update_label` / `kanban_delete_label` | label CRUD (color bound) |

Example prompts (say them in any language):

- **Plan a project**: “Break the X feature into kanban cards, one card per step, and put them in Todo.”
- **Read the board**: “Read my kanban board and summarize what's in progress.”
- **Manage cards**: “Move the card 'Fix login bug' from Todo to In Progress and set it to P0.”
- **Manage lists**: “Add a 'Blocked' column after 'In Progress'.”
- **Manage labels**: “Create a red label 'Urgent' and tag the onboarding card with it.”
- **Query labels**: “What labels do I have?”

The model reads each tool's description and parameter schema to decide what to call; it usually calls `kanban_get` first to understand the current state before making changes.

## Technical implementation

**Bundle format** (official DSH bundle):

- `package.json` declares `dsh.bundle.patch` → `cordis.patch.yml` (the composition patch that inserts the plugin row) and `dsh.client` (web client module + injected services).
- `index.js` — the host plugin, a standard Cordis function plugin (`export const name / inject / apply`).
- `lib/client.js` — the pre-built browser bundle in the official client-modules closure (`window.__ModuleLoader__.load`).

**Host (`index.js`)**:

- Registers the 13 tools via `ctx.tools.register`.
- One shared `dispatch` data layer serves both the model tools and the browser HTTP route `/api/kanban` (via `ctx.get('webServer')`) — same logic, two entrances.
- Per-workspace boards persisted via `ctx.fs` to `<workspaceRoot>/kanban-board-<workspaceId>.json`.
- Workspace resolution: `exec.agent.session.header.cwd` → `workspaceRegistry.resolveByPath`.

**Client (`src/client/**` → `lib/client.js`)**:

- React + TypeScript bundled with **esbuild**; styles compiled by **Tailwind CSS v4** and inlined into the bundle.
- `react` / `react-dom` are **external** (provided by the DSH platform) to avoid a duplicate React; everything else (dnd-kit, Radix, shadcn components) is bundled inline.
- Drag & drop with **dnd-kit** (cards across lists; list reordering inside the edit dialog).
- Theme: semantic tokens map directly to DSH `--dsw-alias-*` variables, so dark mode and DSH theming are automatic.
- i18n: registers the `dsh-kanban` locale dictionaries and follows the DSH `locale` service (`locale/change` event) via a `useT()` hook built on `useSyncExternalStore`.

**Data model** (per workspace):

```json
{
  "columns": [{ "id": "c1", "title": "Todo" }],
  "labels":  [{ "name": "New Feature", "color": "#38bdf8" }],
  "cards":   [{ "id": "k1", "columnId": "c1", "title": "...", "note": "...", "label": "New Feature", "priority": "high" }]
}
```

## Development

```sh
pnpm install
node build.mjs                # build lib/client.js (esbuild + Tailwind)
./node_modules/.bin/tsc --noEmit   # typecheck
node build.mjs --no-minify     # unminified build for debugging
```

Layout:

```
index.js              # host plugin (13 tools + /api/kanban data layer)
cordis.patch.yml      # composition patch
build.mjs             # client build script (esbuild + Tailwind + wrapper)
src/client/           # React + TS source
  entry.tsx           # __ModuleLoader__ entry + style injection
  plugin.ts           # slot registration + locale install
  KanbanView.tsx      # board UI
  components/         # shadcn/ui components + dialogs + sortable cards/columns
  lib/                # api / types / constants / i18n / utils
lib/client.js         # built browser bundle (what gets published)
```

## License

MIT
