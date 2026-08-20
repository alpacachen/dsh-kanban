<div align="center">

# dsh-kanban

**Plan with your AI. See the work move.**

A shared kanban board for [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness), built for both people and agents.

[简体中文](README.zh.md) · English

</div>

Turn a conversation into an actionable plan without copying tasks between your AI assistant and a project tracker. Ask the agent to break down a feature, prioritize a bug, or move finished work—the same changes appear instantly in the **Board** tab, where you can continue organizing everything by hand.

<p align="center">
  <img src="./image.png" alt="dsh-kanban board inside DeepSeek Harness" width="100%">
</p>

## Why dsh-kanban?

- **Plan in conversation** — 13 `kanban_*` tools let the agent create and manage cards, lists, and labels.
- **Stay in control** — edit cards, drag work between lists, reorder your workflow, and filter by priority from the UI.
- **Keep projects separate** — every DSH workspace gets its own board and persisted data.
- **Feel at home in DSH** — the board follows the active language and theme, including dark mode.
- **Install and go** — the browser bundle is prebuilt; no frontend toolchain or native build step is required.

## Quick start

### 1. Install the plugin

```sh
# From GitHub
dsh plugin --profile web add github:alpacachen/dsh-kanban
```

You can also install the published npm package or a local checkout:

```sh
dsh plugin --profile web add dsh-kanban
dsh plugin --profile web add ./dsh-kanban
```

Restart `dsh web` after installation so the plugin bundle is loaded. To confirm that it was added successfully:

```sh
dsh --profile web --dump-config
```

The output should include a `dsh-kanban` layer.

### 2. Open the board

Open a workspace and select the **Board** tab next to the conversation views. A new board starts with **Todo**, **In Progress**, **Review**, and **Done**.

### 3. Plan with the agent

Try a prompt like:

> Break the authentication feature into implementation tasks, add one card per step, and mark the security review as P0.

The agent updates the board directly. You can then refine the plan in the UI, or keep working through conversation.

## What you can do

### From the Board tab

- Create, edit, delete, and drag cards between lists
- Add notes, labels, and P0 / P1 / P2 priorities
- Create, rename, reorder, and remove lists
- Create labels and customize their colors
- Filter the board by priority

### From a conversation

The plugin makes these tools available automatically in every workspace conversation:

| Area | Tools |
| --- | --- |
| Board | `kanban_get` |
| Cards | `kanban_add_card`, `kanban_update_card`, `kanban_delete_card`, `kanban_move_card` |
| Lists | `kanban_add_column`, `kanban_rename_column`, `kanban_delete_column`, `kanban_move_column` |
| Labels | `kanban_get_label`, `kanban_add_label`, `kanban_update_label`, `kanban_delete_label` |

A few more things you can ask:

- “Summarize what is currently in progress.”
- “Move ‘Fix login redirect’ to In Progress and set it to P0.”
- “Add a Blocked list after In Progress.”
- “Create a red Urgent label and apply it to the release card.”

## Data and persistence

Boards are isolated by workspace and stored through the DSH filesystem service as `kanban-board-<workspaceId>.json`. They survive browser refreshes and DSH restarts, and uninstalling the plugin does not delete existing board data.

## How it works

`dsh-kanban` uses the standard DSH bundle format:

- `index.js` registers the agent tools and the `/api/kanban` browser endpoint.
- Both interfaces share one data layer, so the agent and the Board tab always operate on the same board.
- `cordis.patch.yml` adds the plugin to the selected DSH profile.
- `lib/client.js` is the prebuilt web client loaded by DSH.

The client is built with React, TypeScript, Tailwind CSS, shadcn/ui, Radix UI, and dnd-kit. React itself is provided by DSH, keeping the distributed bundle smaller and avoiding duplicate runtimes.

## Development

Requirements: Node.js and pnpm.

```sh
pnpm install
pnpm build
pnpm typecheck
```

For an unminified client bundle while debugging:

```sh
node build.mjs --no-minify
```

Project layout:

```text
index.js              # Host plugin, tools, persistence, and HTTP endpoint
cordis.patch.yml      # DSH bundle patch
build.mjs             # Client build script
src/client/           # React and TypeScript source
lib/client.js         # Prebuilt browser bundle published with the package
```

## Contributing

Issues and pull requests are welcome. If you are planning a larger change, opening an issue first is a good way to align on the approach before implementation.

## Uninstall

```sh
dsh plugin --profile web remove dsh-kanban
```

## License

MIT
