<div align="center">

# dsh-kanban

### Plan with AI. Move work forward visually.

A collaborative kanban board where you and your AI agent plan, organize, and ship work together—without leaving DeepSeek Harness.

[![npm version](https://img.shields.io/npm/v/@alpacachen/dsh-kanban?color=5b8def&label=npm)](https://www.npmjs.com/package/@alpacachen/dsh-kanban)
![DeepSeek Harness Plugin](https://img.shields.io/badge/DeepSeek%20Harness-Plugin-7c5cff)
[![Awesome DSH Plugin](https://awesome-dsh-plugin.com/badge.svg)](https://awesome-dsh-plugin.com)
![License](https://img.shields.io/badge/license-MIT-22c55e)

[Simplified Chinese](README.zh.md) · **English**

</div>

<table>
  <tr>
    <td width="50%"><img src="./image.png" alt="Full dsh-kanban board in light mode with English tasks, labels and priorities" width="100%"></td>
    <td width="50%"><img src="./docs/screenshots/card-details-dark.png" alt="Full dsh-kanban board in dark mode with an open task drawer showing a Markdown description" width="100%"></td>
  </tr>
</table>

## ✨ From conversation to action

Stop copying AI-generated plans into a separate project tracker. Tell your agent what you want to build, and watch it turn the plan into cards, priorities, labels, and workflow updates on the **Board** tab.

You can take over at any time—drag a card, refine a note, reorder a list—and the agent immediately works from the same board.

| 💬 Plan naturally | 🧭 Stay in control | ⚡ Start instantly |
| --- | --- | --- |
| Manage the board with 15 built-in `kanban_*` tools. | Edit, comment, drag, prioritize, label, and filter from the UI. | Install the prebuilt plugin—no frontend setup required. |
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
- Read task details in a resizable side drawer that remembers its width and fills narrow screens
- Write descriptions as Markdown source with **Edit**; **Done editing** previews the result and **Save** applies changes
- Add labels and P0 / P1 / P2 priorities
- Exchange persistent card comments with the agent and see comment counts at a glance
- Open a card's activity timeline to see when it changed, what changed, and whether you or the agent made the change
- Track card creation, comments, moves, title and note edits, label changes, and priority changes
- Send any card to the agent in your current conversation or a new one
- Create, rename, reorder, and remove workflow lists
- Create color-coded labels for fast visual scanning
- Filter the entire board by priority and label from the left toolbar; combine both filters or show only unlabeled cards
- Clear either filter with **All**, or manually refresh the board whenever needed

### Continue any card with your agent

Open a card and choose **Chat with agent**. dsh-kanban carries its ID, title, label, and notes into either the current conversation or a fresh one, so the agent has the context it needs immediately. The content is inserted as an editable draft—it is never sent until you choose to send it.

### In conversation

The plugin automatically gives the agent these tools in every workspace:

| Area | Tools |
| --- | --- |
| **Board** | `kanban_get` |
| **Cards** | `kanban_get_card`, `kanban_add_comment`, `kanban_add_card`, `kanban_update_card`, `kanban_delete_card`, `kanban_move_card` |
| **Lists** | `kanban_add_column`, `kanban_rename_column`, `kanban_delete_column`, `kanban_move_column` |
| **Labels** | `kanban_get_label`, `kanban_add_label`, `kanban_update_label`, `kanban_delete_label` |

For `kanban_add_card` and `kanban_update_card`, the task description uses the existing `note` field: send raw Markdown with line breaks, not HTML. Headings, lists, tables and fenced code blocks are rendered in task details. Keep the source within 2,000 characters, including Markdown syntax and newlines; longer input is truncated with a warning. Before editing a description, read `kanban_get_card` for its complete Markdown source (`kanban_get` only returns a summary). Updating `note` replaces the whole description; omit it to preserve the current text, or pass an empty string to clear it. Comments remain plain text.

## 💡 Things to ask your agent

> “Summarize what is currently in progress.”

> “Move ‘Fix login redirect’ to In Progress and set it to P0.”

> “Add a Blocked list after In Progress.”

> “Create a red Urgent label and apply it to the release card.”

> “I'm a lawyer. Set up a board for my day-to-day casework, create the workflow stages and labels I’ll need, and keep them up to date as my work evolves.”

You do not need to design the workflow first. Tell the agent your role, situation, or goal, and it can create suitable stages and labels—then keep refining them as you work.

## License

MIT
