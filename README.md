<div align="center">

# dsh-kanban

### Plan with AI. Move work forward visually.

A collaborative kanban board where you and your AI agent plan, organize, and ship work together—without leaving DeepSeek Harness.

[![npm version](https://img.shields.io/npm/v/@alpacachen/dsh-kanban?color=5b8def&label=npm)](https://www.npmjs.com/package/@alpacachen/dsh-kanban)
![DeepSeek Harness Plugin](https://img.shields.io/badge/DeepSeek%20Harness-Plugin-7c5cff)
[![Awesome DSH Plugin](https://awesome-dsh-plugin.com/badge.svg)](https://awesome-dsh-plugin.com)
![License](https://img.shields.io/badge/license-MIT-22c55e)

[简体中文](README.zh.md) · **English**

</div>

<p align="center">
  <img src="./image.png" alt="dsh-kanban board inside DeepSeek Harness" width="100%">
</p>

## ✨ From conversation to action

Stop copying AI-generated plans into a separate project tracker. Tell your agent what you want to build, and watch it turn the plan into cards, priorities, labels, and workflow updates on the **Board** tab.

You can take over at any time—drag a card, refine a note, reorder a list—and the agent immediately works from the same board.

| 💬 Plan naturally | 🧭 Stay in control | ⚡ Start instantly |
| --- | --- | --- |
| Manage the board with 14 built-in `kanban_*` tools. | Edit, drag, prioritize, label, and filter from the UI. | Install the prebuilt plugin—no frontend setup required. |
| **🗂️ Keep work separate** | **🌓 Feel at home** | **🤝 Share one source of truth** |
| Every DSH workspace gets its own board. | Follows your DSH language, theme, and dark mode. | You and the agent always see the same tasks and status. |

## 🚀 Get started

### 1. Install

```sh
dsh plugin --profile web add @alpacachen/dsh-kanban
```

Restart `dsh web` so the plugin bundle is loaded. You can confirm the installation with:

```sh
dsh --profile web --dump-config
```

Look for a `dsh-kanban` layer in the output.

### 2. Open your board

Enter any workspace and choose the **Board** tab beside the conversation views. A fresh board starts with four familiar stages:

`Todo` → `In Progress` → `Review` → `Done`

### 3. Ask your agent to plan

Try this:

> Break the authentication feature into implementation tasks, create one card per step, and mark the security review as P0.

The cards appear directly on your board. Continue in conversation, or switch to the Board tab and shape the plan by hand.

## 🧩 Everything you need to keep work moving

### On the Board

- Create, edit, delete, and drag cards between lists
- Add notes, labels, and P0 / P1 / P2 priorities
- Open a card's activity timeline to see when it changed, what changed, and whether you or the agent made the change
- Track card creation, moves, title and note edits, label changes, and priority changes
- Send any card to the agent in your current conversation or a new one
- Create, rename, reorder, and remove workflow lists
- Create color-coded labels for fast visual scanning
- Filter the entire board by priority, or manually refresh it whenever needed

### Continue any card with your agent

Open a card and choose **Chat with agent**. dsh-kanban carries its ID, title, label, and notes into either the current conversation or a fresh one, so the agent has the context it needs immediately. The content is inserted as an editable draft—it is never sent until you choose to send it.

### In conversation

The plugin automatically gives the agent these tools in every workspace:

| Area | Tools |
| --- | --- |
| **Board** | `kanban_get` |
| **Cards** | `kanban_get_card`, `kanban_add_card`, `kanban_update_card`, `kanban_delete_card`, `kanban_move_card` |
| **Lists** | `kanban_add_column`, `kanban_rename_column`, `kanban_delete_column`, `kanban_move_column` |
| **Labels** | `kanban_get_label`, `kanban_add_label`, `kanban_update_label`, `kanban_delete_label` |

## 💡 Things to ask your agent

> “Summarize what is currently in progress.”

> “Move ‘Fix login redirect’ to In Progress and set it to P0.”

> “Add a Blocked list after In Progress.”

> “Create a red Urgent label and apply it to the release card.”

> “I'm a lawyer. Set up a board for my day-to-day casework, create the workflow stages and labels I’ll need, and keep them up to date as my work evolves.”

You do not need to design the workflow first. Tell the agent your role, situation, or goal, and it can create suitable stages and labels—then keep refining them as you work.

## License

MIT
