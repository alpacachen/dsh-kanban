<div align="center">

# dsh-kanban

**和 AI 一起规划，在看板上看到进展。**

一个为 [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) 打造、由你和 Agent 共同维护的项目看板。

简体中文 · [English](README.md)

</div>

不用再把 AI 给出的计划手动搬进项目管理工具。让 Agent 拆解功能、调整优先级或推进任务，变更会立即出现在 **「看板」**标签页；你也可以随时接手，通过拖拽和编辑继续整理工作。

<p align="center">
  <img src="./image.png" alt="DeepSeek Harness 中的 dsh-kanban 看板界面" width="100%">
</p>

## 为什么是 dsh-kanban？

- **在对话里完成规划**：14 个 `kanban_*` 工具让 Agent 能直接管理卡片、列表和标签。
- **一切仍由你掌控**：编辑卡片、跨列拖拽、调整工作流，或按优先级筛选任务。
- **项目之间互不干扰**：每个 DSH 工作区都有独立看板，并自动持久化数据。
- **自然融入 DSH**：界面跟随当前语言和主题，也支持暗色模式。
- **安装后即可使用**：浏览器端已预构建，不需要额外配置前端工具链，也没有原生构建步骤。

## 快速开始

### 1. 安装插件

从 npm 安装已发布的包：

```sh
dsh plugin --profile web add @alpacachen/dsh-kanban
```

项目不支持从 GitHub 源码安装，因为生成的浏览器 bundle 只会由 CI 构建并放入 npm 包。

安装后重启 `dsh web`，让插件 bundle 在启动时加载。可以通过下面的命令确认配置：

```sh
dsh --profile web --dump-config
```

如果安装成功，输出中会包含 `dsh-kanban` 配置层。

### 2. 打开看板

进入任意工作区，在会话视图旁打开**「看板」**标签页。新看板默认包含 **Todo**、**In Progress**、**Review** 和 **Done** 四个列表。

### 3. 让 Agent 开始规划

试试这样说：

> 把登录功能拆成具体的实现任务，每一步建一张卡片，并把安全审查标为 P0。

Agent 会直接更新当前看板。之后你可以在界面中继续调整，也可以留在对话里推进任务。

## 你可以做什么

### 在「看板」标签页中

- 创建、编辑、删除卡片，并将卡片拖到其他列表
- 为卡片补充备注、标签和 P0 / P1 / P2 优先级
- 创建、重命名、排序和删除列表
- 创建标签并自定义颜色
- 按优先级筛选整个看板

### 在对话中

插件会自动为工作区内的对话提供以下工具：

| 范围 | 工具 |
| --- | --- |
| 看板 | `kanban_get` |
| 卡片 | `kanban_get_card`、`kanban_add_card`、`kanban_update_card`、`kanban_delete_card`、`kanban_move_card` |
| 列表 | `kanban_add_column`、`kanban_rename_column`、`kanban_delete_column`、`kanban_move_column` |
| 标签 | `kanban_get_label`、`kanban_add_label`、`kanban_update_label`、`kanban_delete_label` |

你还可以这样使用：

- 「总结一下目前正在进行的任务。」
- 「把『修复登录跳转』移到进行中，并设为 P0。」
- 「在进行中后面新增一个阻塞列表。」
- 「创建一个红色的『紧急』标签，并加到发布卡片上。」

## 数据与持久化

看板按工作区隔离，并通过 DSH 文件系统服务保存为 `kanban-board-<workspaceId>.json`。刷新页面或重启 DSH 都不会丢失数据；卸载插件时，已有的看板数据也会保留。

### 版本化与安全迁移

持久化文件带 `schemaVersion` 字段（当前为 `1`）。旧版本插件写入的文件（无版本字段）按 `v0` 处理，在**该工作区看板首次打开时自动升级**——先复制出 `kanban-board-<workspaceId>.json.bak-v0` 备份，再写回升级后的文件。后续格式演进只需递增 `SCHEMA_VERSION` 并在 `MIGRATIONS`（`index.js`）里注册逐版本迁移函数。

#### 新增一个格式版本（以 v2 为例）

迁移函数写在 `index.js` 的 `MIGRATIONS` 注册表里，必须是**纯函数**——只做数据变换，不触碰文件系统或运行时状态。每步只升级一个版本，`migrateBoard` 会自动串联，v0 文件会依次走 `v0 → v1 → v2`；备份与写回由加载管线处理，无需手写脚本。

```js
export const SCHEMA_VERSION = 2 // 1) 递增版本号

export const MIGRATIONS = {
  0: (data) => ({ /* 现有 v0 → v1，保持不变 */ }),
  1: (data) => ({
    schemaVersion: 2, // 2) 输出必须声明新版本号
    columns: data.columns,
    labels: data.labels,
    cards: data.cards.map((c) => ({ ...c, labelId: c.label ?? null })), // 例如 label → labelId
  }),
}
```

如果磁盘形状发生变化，同步更新 `index.js` 里的 `validateBoard` 与 `src/client/lib/types.ts` 的客户端类型，并在 `scripts/check-schema.mjs` / `scripts/check-pipeline.mjs` 中补充自检用例。

异常数据不会让看板不可用：

- **损坏/无法解析的文件**：备份为 `kanban-board-<workspaceId>.json.corrupt-<时间戳>`，看板以空板打开，并给出清晰提示。
- **来自更新版本插件的文件**（`schemaVersion` 更高）：备份为 `kanban-board-<workspaceId>.json.unsupported-v<版本>` 且不改动原文件，避免降级插件破坏新数据。
- 插件启动时会执行**全量校验扫描**：逐一检查看板文件（解析 + 版本 + 结构），损坏文件立即备份并汇总记录。

迁移、损坏或版本超前的提示会同时出现在 Agent 工具结果（`warnings`）和「看板」标签页的提示横幅中。

## 工作原理

`dsh-kanban` 使用标准的 DSH bundle 格式：

- `index.js` 注册 Agent 工具和浏览器端使用的 `/api/kanban` 接口。
- Agent 与「看板」标签页共享同一套数据层，双方看到的始终是同一块看板。
- `cordis.patch.yml` 将插件加入指定的 DSH profile。
- `lib/client.js` 是由 DSH 直接加载的预构建 Web 客户端。

客户端使用 React、TypeScript、Tailwind CSS、shadcn/ui、Radix UI 和 dnd-kit 构建。React 由 DSH 提供，以减少发布体积并避免重复运行时。

## 本地开发

需要准备 Node.js 和 pnpm。

```sh
pnpm install
pnpm build
pnpm typecheck
```

调试时可以生成未压缩的客户端 bundle：

```sh
node build.mjs --no-minify
```

项目结构：

```text
index.js              # 宿主插件、Agent 工具、持久化与 HTTP 接口
cordis.patch.yml      # DSH bundle 补丁
build.mjs             # 客户端构建脚本
src/client/           # React 与 TypeScript 源码
lib/client.js         # 本地或 CI 生成，仅随 npm 包发布
```

## 参与贡献

欢迎提交 Issue 和 Pull Request。如果准备进行较大的改动，建议先开一个 Issue 讨论目标和实现方式，避免重复工作。

## 卸载

```sh
dsh plugin --profile web remove @alpacachen/dsh-kanban
```

## 开源许可

MIT
