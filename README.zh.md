# dsh-kanban

[English](README.md) | 简体中文

一个为 [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) 打造的项目看板插件：把「项目规划」变成对话的一部分——Agent 通过 `kanban_*` 工具直接写卡，浏览器里有一个实时渲染的「看板」标签页。看板按工作区（项目）隔离，并持久化到磁盘。

这是**官方 bundle 格式**的插件包（`dsh.bundle` 声明 + `cordis.patch.yml` 补丁层），通过官方 `dsh plugin` 流程安装。UI 基于 **React + TypeScript + Tailwind CSS + shadcn/ui + dnd-kit** 构建，完全契合 DSH 主题（暗黑模式自动适配）。

## 功能

- **「看板」标签页**：在会话视图区（对话 / 轨迹旁边），样式自动跟随 DSH 主题。
- **13 个 AI 工具**：模型可以直接对当前工作区的看板进行卡片 / 列表 / 标签的增删改查与移动。
- **列表与标签**：列表可创建 / 重命名 / 排序 / 删除；标签可创建 / 改名 / 改色 / 删除（颜色与标签绑定）。
- **卡片**：标题、备注、标签、优先级（**P0 / P1 / P2**）；跨列拖拽（dnd-kit）；点击卡片可查看 / 编辑 / 删除。
- **优先级筛选** + 精简操作面板（设置 + 筛选）。
- **按工作区隔离**：每个项目一块独立看板；**磁盘持久化**（`kanban-board-<workspaceId>.json`），刷新与重启不丢失。
- **国际化**：UI 跟随 DSH 语言（中文 / 英文）。

## 安装

前置条件：已安装 `dsh` CLI，并选定目标 profile（web 是浏览器界面的默认 profile）。

```sh
# 从 GitHub 安装（推荐）
dsh plugin --profile web add github:<你的用户名>/dsh-kanban

# 从 npm 安装
dsh plugin --profile web add dsh-kanban

# 从本地 tarball 安装
pnpm pack
dsh plugin --profile web add ./dsh-kanban-1.0.0.tgz

# 从本地目录安装
dsh plugin --profile web add ./dsh-kanban
```

校验后重启：

```sh
dsh --profile web --dump-config   # 输出末尾应出现 "# == dsh-kanban" 这一层
# 重启 `dsh web` —— bundle 行在启动时装载
```

> 浏览器 bundle 是**预构建产物**（`lib/client.js`），使用者无需任何构建步骤；插件无原生依赖（无需 `allowBuilds` 审批）。

卸载：

```sh
dsh plugin --profile web remove dsh-kanban
```

看板数据文件会保留在磁盘上。

## 使用方法

### 一、手动操作（浏览器 UI）

1. 打开会话视图区旁的**「看板」**标签页。
2. **操作面板**（最左侧）：⚙ 设置菜单（列编辑 / 标签编辑）与优先级筛选（全部 / P0 / P1 / P2）。
3. **卡片**——点击卡片可查看 / 编辑 / 删除；拖拽到其他列表；列表底部有「+ 添加卡片」。
4. **列表**——设置 → 列编辑：拖拽排序、重命名、删除、新增。
5. **标签**——设置 → 标签编辑：创建、改名、改色、删除。

### 二、AI 操作（推荐）

工作区的每个对话都会自动给模型挂上 13 个 `kanban_*` 工具——**无需任何额外配置**。AI 操作的是**当前工作区的看板**（根据会话所在目录自动定位），与浏览器标签页读写的是同一份数据。

工具一览：

| 工具 | 用途 |
|---|---|
| `kanban_get` | 读取整个看板（列表、标签、卡片） |
| `kanban_get_label` | 读取标签列表（名称 + 颜色） |
| `kanban_add_card` / `kanban_update_card` / `kanban_delete_card` / `kanban_move_card` | 卡片增删改 + 移动 |
| `kanban_add_column` / `kanban_rename_column` / `kanban_delete_column` / `kanban_move_column` | 列表增删改 + 排序 |
| `kanban_add_label` / `kanban_update_label` / `kanban_delete_label` | 标签增删改（颜色绑定） |

示例提示词（用任何语言说都可以）：

- **拆解项目**：「把 X 功能拆成看板卡片，一步一张，放进待办。」
- **读取看板**：「读一下我的看板，总结一下正在进行的任务。」
- **管理卡片**：「把『修复登录 bug』这张卡从待办移到进行中，并设为 P0。」
- **管理列表**：「在『进行中』后面加一列『阻塞』。」
- **管理标签**：「新建一个红色标签『紧急』，并给新手引导卡片打上。」
- **查询标签**：「我有哪些标签？」

模型会读取每个工具的描述和参数定义来决定如何调用；它通常会先调用 `kanban_get` 了解当前状态，再做修改。

## 技术实现

**Bundle 格式**（官方 DSH bundle）：

- `package.json` 声明 `dsh.bundle.patch` → `cordis.patch.yml`（组合补丁层，插入插件行）与 `dsh.client`（web 客户端模块 + 注入的服务）。
- `index.js`——宿主插件，标准 Cordis 函数插件（`export const name / inject / apply`）。
- `lib/client.js`——预构建的浏览器 bundle，官方 client-modules 闭包格式（`window.__ModuleLoader__.load`）。

**宿主（`index.js`）**：

- 通过 `ctx.tools.register` 注册 13 个工具。
- 一份共享的 `dispatch` 数据层同时服务模型工具与浏览器 HTTP 路由 `/api/kanban`（经 `ctx.get('webServer')`）——同一套逻辑，两个入口。
- 按工作区分板，经 `ctx.fs` 持久化到 `<workspaceRoot>/kanban-board-<workspaceId>.json`。
- 工作区定位：`exec.agent.session.header.cwd` → `workspaceRegistry.resolveByPath`。

**客户端（`src/client/**` → `lib/client.js`）**：

- React + TypeScript，用 **esbuild** 打包；样式由 **Tailwind CSS v4** 编译后内联进产物。
- `react` / `react-dom` 走 **external**（由 DSH 平台提供），避免出现「两个 React」；其余依赖（dnd-kit、Radix、shadcn 组件）全部内联。
- 用 **dnd-kit** 做拖拽（卡片跨列；列在编辑弹窗里排序）。
- 主题：语义 token 直接映射到 DSH 的 `--dsw-alias-*` 变量，暗黑模式与 DSH 主题自动适配。
- 国际化：注册 `dsh-kanban` 语言词典，跟随 DSH 的 `locale` 服务（`locale/change` 事件），通过基于 `useSyncExternalStore` 的 `useT()` hook 实现。

**数据模型**（每工作区）：

```json
{
  "columns": [{ "id": "c1", "title": "待办" }],
  "labels":  [{ "name": "新功能", "color": "#38bdf8" }],
  "cards":   [{ "id": "k1", "columnId": "c1", "title": "...", "note": "...", "label": "新功能", "priority": "high" }]
}
```

## 开发

```sh
pnpm install
node build.mjs                # 构建 lib/client.js（esbuild + Tailwind）
./node_modules/.bin/tsc --noEmit   # 类型检查
node build.mjs --no-minify     # 未压缩构建，便于调试
```

目录结构：

```
index.js              # 宿主插件（13 个工具 + /api/kanban 数据层）
cordis.patch.yml      # 组合补丁层
build.mjs             # 客户端构建脚本（esbuild + Tailwind + 闭包包装）
src/client/           # React + TS 源码
  entry.tsx           # __ModuleLoader__ 入口 + 样式注入
  plugin.ts           # 槽位注册 + locale 安装
  KanbanView.tsx      # 看板 UI
  components/         # shadcn/ui 组件 + 弹窗 + 可排序卡片/列
  lib/                # api / types / constants / i18n / utils
lib/client.js         # 构建好的浏览器 bundle（随包发布）
```

## License

MIT
