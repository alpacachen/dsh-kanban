<div align="center">

# dsh-kanban

### 和 AI 一起规划，让每一步进展清晰可见。

一块真正由你和 AI Agent 共同维护的项目看板——从想法、任务拆解到推进交付，全程无需离开 DeepSeek Harness。

[![npm version](https://img.shields.io/npm/v/@alpacachen/dsh-kanban?color=5b8def&label=npm)](https://www.npmjs.com/package/@alpacachen/dsh-kanban)
![DeepSeek Harness Plugin](https://img.shields.io/badge/DeepSeek%20Harness-Plugin-7c5cff)
[![Awesome DSH Plugin](https://awesome-dsh-plugin.com/badge.svg)](https://awesome-dsh-plugin.com)
![License](https://img.shields.io/badge/license-MIT-22c55e)

**简体中文** · [English](README.md)

</div>

<table>
  <tr>
    <td width="50%"><img src="./image.png" alt="浅色模式下的完整 dsh-kanban 看板，展示英文任务、标签与优先级" width="100%"></td>
    <td width="50%"><img src="./docs/screenshots/card-details-dark.png" alt="深色模式下的完整 dsh-kanban 看板，打开的任务详情抽屉展示 Markdown 描述" width="100%"></td>
  </tr>
</table>

## 💡 你可以直接这样说

从你正在做的事开始。把下面例子里的项目名称和背景换成自己的，就可以直接发给 Agent。

**把需求拆成可验收的任务**

> 下周要上线手机号登录。先看看已有卡片，再为缺少的接口、验证码、防刷、前端交互和测试工作建卡。写清依赖关系，并在描述里用 Markdown 列出实现步骤和验收标准。影响上线的任务标为 P0，其余排好优先级。

**接手一项正在做的工作**

> 接着处理「登录后跳回登录页」。先读完整描述和评论，梳理已有结论与下一步，移到 In Progress。推进过程和测试结果记到评论，完成后移到 Review 等我验收。

**跟进被外部依赖卡住的事项**

> 「支付联调」还在等对方提供测试账号。建一个 Blocked 列表（已有就复用），把任务移过去，并在评论里记录阻塞原因、待确认的联系人，以及拿到账号后的下一步。

**用现有看板准备周会**

> 根据当前卡片的状态、描述和评论，整理周会提纲：已完成什么、哪些工作还在推进、有哪些阻塞需要协调。引用相关卡片，给出接下来最值得推进的三件事；信息不全的地方列成待确认项。

**为自己的职业建立工作流**

> 我是一名律师，要同时跟进合同审查和案件材料准备。帮我整理适合的阶段列表与标签，把我下面提供的事项逐一建卡，在描述里记录交付要求、材料清单和约定时间；缺少材料的放到「等待补充」。

## ✨ 从一句话，到一块能执行的看板

不必再把 AI 生成的计划手动搬进项目管理工具。告诉 Agent 你想完成什么，它就能在 **「看板」** 标签页中拆分任务、创建卡片、设置优先级和更新进度。

你也可以随时接手：拖动卡片、补充备注、调整列表。你和 Agent 始终面对同一块看板、同一份进度。

| 💬 自然对话 | 🧭 随时掌控 | ⚡ 开箱即用 |
| --- | --- | --- |
| 通过 16 个 `kanban_*` 工具直接管理任务。 | 在界面中编辑、评论、拖拽、标记和筛选卡片。 | 浏览器端已预构建，无需配置前端环境。 |
| **🗂️ 项目隔离** | **🌓 原生体验** | **🤝 实时协作** |
| 每个 DSH 工作区都有自己的独立看板。 | 自动跟随 DSH 的语言、主题与暗色模式。 | 你做的调整，Agent 立即可见；反之亦然。 |

## 🚀 三步开始使用

### 1. 安装

```sh
dsh plugin --profile web add @alpacachen/dsh-kanban
```

安装后重启 `dsh web`，让插件 bundle 完成加载。你可以用下面的命令确认安装结果：

```sh
dsh --profile web --dump-config
```

如果输出中包含 `dsh-kanban` 配置层，就说明安装成功。

### 2. 打开看板

进入任意工作区，点击会话视图旁的 **「看板」** 标签页。新看板已经准备好四个常用阶段：

`Todo` → `In Progress` → `Review` → `Done`

### 3. 让 Agent 开始规划

试试这样说：

> 把登录功能拆成具体的实现任务，每一步创建一张卡片，并把安全审查标为 P0。

任务会直接出现在看板中。你可以继续通过对话推进，也可以切换到看板，用拖拽和编辑完善计划。

## 🧩 推进工作需要的能力，都在这里

### 在「看板」标签页中

- 创建、编辑、删除卡片，并将卡片拖到其他列表
- 在侧边抽屉中查看任务详情，可拖动调整宽度并记忆，窄屏自动铺满
- 描述支持 Markdown：点击**「编辑」**修改原文，**「完成编辑」**切回预览，点击**「保存」**后生效
- 为卡片添加标签和 P0 / P1 / P2 优先级
- 设置可选的截止日期，快速查看今天到期和已逾期任务；在列编辑中指定完成列，让已完成任务停止显示到期提示
- 与 Agent 在卡片下持续评论，并在看板上快速查看评论数量
- 打开卡片活动时间线，查看变更时间、具体内容，以及操作来自你还是 Agent
- 追踪卡片创建、评论、移动、标题与备注编辑、标签变化、优先级变化和截止日期变化
- 从任意卡片发起对话，在当前会话或新会话中让 Agent 接着处理
- 创建、重命名、排序和删除工作流列表
- 创建彩色标签，让不同任务一眼可辨
- 在工具栏按优先级、标签和截止日期筛选整个看板，可组合筛选或只看无标签卡片
- 选择「全部」清除对应筛选，也可以随时手动刷新
- 点击工具栏底部的「反馈与建议 · GitHub」，提交问题或功能建议

### 从任意卡片继续与 Agent 协作

打开卡片并选择 **「与 Agent 聊一聊」**，dsh-kanban 会把卡片 ID、标题、标签、截止日期和备注带入当前会话或一个新会话，让 Agent 立即获得完整上下文。内容只会填入输入框作为可编辑草稿，由你确认后发送，不会自动提交。

### 在对话中

插件会自动为每个工作区中的 Agent 提供以下工具：

| 范围 | 工具 |
| --- | --- |
| **看板** | `kanban_get`、`kanban_set_completed_column` |
| **卡片** | `kanban_get_card`、`kanban_add_comment`、`kanban_add_card`、`kanban_update_card`、`kanban_delete_card`、`kanban_move_card` |
| **列表** | `kanban_add_column`、`kanban_rename_column`、`kanban_delete_column`、`kanban_move_column` |
| **标签** | `kanban_get_label`、`kanban_add_label`、`kanban_update_label`、`kanban_delete_label` |

`kanban_add_card` 和 `kanban_update_card` 的任务描述仍使用 `note` 字段，传入保留换行的 Markdown 原文，不传 HTML。任务详情会渲染标题、列表、表格和代码块。原文最多 2,000 字符，Markdown 标记和换行也计入长度，超出会截断并返回警告。修改已有描述前，应先调用 `kanban_get_card` 读取完整原文（`kanban_get` 只返回摘要）。传入 `note` 会替换整段描述；省略则保留原文，传空字符串则清空。评论仍为纯文本。

完成日期在卡片进入完成列时自动记录（包括直接在完成列创建），移出时清空，再次完成时记录新时间。修改内容、评论、同列排序和列改名／排序不影响完成日期。卡片详情在截止日期旁以本地时区只读展示；两个读取工具均返回 UTC ISO 时间戳 `completedAt` 或 `null`，已完成卡片的 `null` 表示时间未知。更换或清除完成列会重置完成时间，新完成列中已有卡片显示未知；删除列引发自动移动时也遵循进入／离开完成状态的规则。升级至数据格式 v5 时会备份原文件，历史完成时间保留未知，不依据可能被截断、按列名记录的活动日志推测。

`kanban_add_card` 和 `kanban_update_card` 可通过 `dueDate` 设置截止日期，值为真实有效的 `YYYY-MM-DD` 日期。省略则保留原日期（新卡片默认为无日期），传 `null` 或空字符串则清空。日期不含时间和时区：今天到期的任务到本地次日才算逾期。「本周五」等相对日期应由 Agent 按用户本地日期换算，并向用户确认具体日期，不要直接传相对文本或 UTC 时间戳。`kanban_get` 和 `kanban_get_card` 都会返回截止日期与看板的 `completedColumnId`。

使用 `kanban_set_completed_column`，传已有的 `columnId` 指定完成列，传 `null` 清除设置。新看板默认使用 Done，已有看板需要明确选择一次。设置跟随列 ID，改名和排序不影响；删除完成列会清除设置。完成列中的卡片保留日期，但不计入「今天到期」和「已逾期」筛选，移回其他列后恢复判断。暂不包含自动提醒和按日期自动排序。

> 把「支付联调」的截止日期设为本周五，再列出今天到期和已经逾期的未完成任务，方便我安排先做哪几件事。

## 开源许可

MIT
