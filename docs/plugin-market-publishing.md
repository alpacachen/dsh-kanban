# dsh-kanban 发布与市场上架指南

本文记录 `dsh-kanban` 的正式发布、社区市场投稿和后续升级流程。项目当前 npm 包标识为 **`@alpacachen/dsh-kanban@1.0.1`**，源码仓库为 <https://github.com/alpacachen/dsh-kanban>。

> 当前状态：本仓库的 `package.json` 已声明 `dsh.bundle`、公开 scoped npm 发布配置和 GitHub repository 映射，但本地仓库目前只有 **4 个 commits**。因此尚未满足 awesome-dsh-plugin 的 **至少 10 commits** 门槛，暂时不能提交该 registry 的上架 PR。不要为了凑数制造空提交；继续完成真实开发，达到门槛后再投稿。

## 1. 官方 DSH 发布方式

DSH 官方把可分发插件定义为 npm **bundle 包**：`package.json` 必须在 `dsh.bundle` 中声明配置补丁，补丁再把插件入口插入 profile。缺少 `dsh.bundle` 的包虽然能成为普通依赖，却不会激活任何 DSH 配置层。本项目已经采用该结构：

```json
{
  "name": "@alpacachen/dsh-kanban",
  "version": "1.0.1",
  "dsh": {
    "bundle": {
      "patch": "./cordis.patch.yml"
    },
    "client": {
      "platform": "web",
      "inject": ["slots"]
    }
  }
}
```

官方支持三种交付方式：

1. **npm（推荐）**：发布时把 `index.js`、`cordis.patch.yml` 和预构建的 `lib/client.js` 一并打入包中；用户安装到 profile：
   ```sh
   dsh plugin --profile web add @alpacachen/dsh-kanban
   ```
2. **GitHub 源码安装**：
   ```sh
   dsh plugin --profile web add github:alpacachen/dsh-kanban
   ```
   Git 安装拿到的是源码而非 npm 构建产物；若仓库依赖安装期构建，作者必须提供可独立运行的 `prepare`，而 pnpm 10+ 还要求用户显式允许该构建。建议锁定 commit。当前项目把预构建 `lib/client.js` 纳入仓库与包文件，仍应在发布前确认 GitHub checkout 可直接安装。
3. **预构建 tarball**：作者执行 `pnpm pack`，用户再通过 `dsh plugin add ./xxx.tgz` 安装。它也可作为 GitHub Release 资产。

安装后可检查组合层并启动 Web profile：

```sh
dsh --profile web --dump-config
dsh web
```

来源：[DSH 官方《打包与安装插件》](https://github.com/deepseek-ai/deepseek-harness/blob/master/docs/user/develop/basic/publish.zh.md)。

## 2. 发布 `@alpacachen/dsh-kanban@1.0.1` 到 npm

Scoped 包默认需要明确公开访问权限；本项目已设置 `publishConfig.access: "public"`，发布命令仍保留 `--access public`，使意图清楚。npm 登录和发布的官方说明见 [npm login](https://docs.npmjs.com/cli/v12/commands/npm-login)、[npm publish](https://docs.npmjs.com/cli/v11/commands/npm-publish)、[About scopes](https://docs.npmjs.com/about-scopes) 与 [About public packages](https://docs.npmjs.com/about-public-packages)。

发布前：

```sh
pnpm install
pnpm typecheck
pnpm build
npm pack --dry-run
```

检查 dry-run 清单至少包含：

- `index.js`
- `lib/client.js`
- `cordis.patch.yml`
- `package.json`
- `README.md`、`README.zh.md`
- `image.png`、`LICENSE`

登录并确认身份：

```sh
npm login
npm whoami
```

发布当前版本：

```sh
npm publish --access public
```

发布后验证：

```sh
npm view @alpacachen/dsh-kanban@1.0.1 name version repository dist-tags --json
dsh plugin --profile web add @alpacachen/dsh-kanban@1.0.1
dsh --profile web --dump-config
```

注意：npm 不允许覆盖已存在的同版本。一旦 `1.0.1` 成功发布，任何内容变更都必须先升级版本号再发包。发布凭据和一次性验证码只在终端/npm 官方页面输入，不写进仓库。

## 3. GitHub Release

npm 发布完成并验证后，为同一版本创建 Git tag 和 GitHub Release。GitHub 将 Release 定义为基于 tag 的可分发版本，可附带二进制或 tarball 资产；参见 [GitHub Docs：Managing releases](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository) 和 [`gh release create`](https://cli.github.com/manual/gh_release_create)。

```sh
git tag -a v1.0.1 -m "Release v1.0.1"
git push origin v1.0.1
gh release create v1.0.1 \
  --title "dsh-kanban v1.0.1" \
  --generate-notes
```

如需同时提供预构建 tarball：

```sh
pnpm pack
gh release upload v1.0.1 alpacachen-dsh-kanban-1.0.1.tgz
```

Release notes 至少说明用户可见变化、安装命令、兼容性或迁移事项，并确保 tag、npm 版本和 Release 标题一致。

## 4. dsh-market 的真实上架入口

这里所说的 `dsh-market` 是 [`dsh-market/dsh-market`](https://github.com/dsh-market/dsh-market)。它的插件目录**不是在市场仓库内维护**，而是由 [`awesome-dsh-plugin/awesome-dsh-plugin`](https://github.com/awesome-dsh-plugin/awesome-dsh-plugin) registry 驱动：市场每次打开会读取 `https://awesome-dsh-plugin.com/plugins.json`，并明确要求作者去 awesome-dsh-plugin 提交 PR；市场会在 registry 合并后自动收录。直接证据见 [dsh-market README 的“提交你的插件/数据源”](https://github.com/dsh-market/dsh-market/blob/master/README.zh.md#提交你的插件) 和 [registry 加载源码](https://github.com/dsh-market/dsh-market/blob/master/src/registry.ts)。

不要向 `dsh-market/dsh-market` 提交插件条目 PR；应向 awesome-dsh-plugin 投稿。

### 4.1 投稿 PR 文件示例

按照 [awesome-dsh-plugin 贡献指南](https://github.com/awesome-dsh-plugin/awesome-dsh-plugin/blob/main/contributing.md)，在其仓库新增：

```text
data/plugins/alpacachen__dsh-kanban.yml
```

建议内容：

```yaml
url: https://github.com/alpacachen/dsh-kanban
name: alpacachen/dsh-kanban
category: workflow
description:
  en: A shared kanban board that lets people and DSH agents manage workspace tasks through a Board tab and kanban tools.
  zh: 一个由用户与 DSH Agent 共同维护的工作区看板，通过看板标签页和 kanban 工具管理任务。
```

`description.en` 是必填项；描述必须准确、克制，不写无法由代码验证的营销词。随后按上游说明生成并提交 README 变更：

```sh
npm ci
node scripts/generate-readme.mjs
```

### 4.2 硬性条件和截图

投稿前逐项确认：

- GitHub 仓库创建已满 **1 天**；
- 仓库有 **至少 10 commits**；
- 仓库 topic 包含 [`dsh-plugin`](https://github.com/topics/dsh-plugin)；
- `package.json` 声明真实、可安装的 **`dsh.bundle`**，不能只有 `dsh.client`；
- 仓库包含真实可工作的代码，不是占位、抢名或纯 README 项目；
- 描述与实际代码、工具数量和 API 一致；
- 项目保持活跃，且没有明显可疑的混淆、凭据外传或异常安装期行为。

以上门槛和 CI 检查项来自 [awesome-dsh-plugin 贡献指南的 Requirements 与 CI checks](https://github.com/awesome-dsh-plugin/awesome-dsh-plugin/blob/main/contributing.md#requirements--要求)。**本项目当前只有 4 commits，所以现在不能投稿；至少还需产生 6 个真实开发提交，并同时满足仓库满 1 天。**

截图在上游规则中是“可选但推荐”，不是 1 天/10 commits 那样的硬门槛；但 dsh-kanban 是可视化插件，应随投稿提供真实界面截图。可在 awesome-dsh-plugin 的 `data/screenshots.json` 中，用仓库 URL 为 key 添加 1–8 个 GitHub 托管的 HTTPS 图片地址：

```json
{
  "https://github.com/alpacachen/dsh-kanban": [
    "https://raw.githubusercontent.com/alpacachen/dsh-kanban/main/image.png"
  ]
}
```

图片必须由 GitHub 托管，不能使用第三方图床；完整规则见 [Screenshots / 截图](https://github.com/awesome-dsh-plugin/awesome-dsh-plugin/blob/main/contributing.md#screenshots--截图optional-recommended--可选推荐)。截图应来自真实运行中的 DSH 页面，不使用与实际插件不符的 mockup。

npm 包不影响 registry 的基本收录资格，但发布 npm 后市场可显示下载量并优先使用预构建 tarball；npm `repository` 必须指回同一个 GitHub 仓库。映射由 registry 自动采集，不要在插件 YAML 中手写 `npm:`。来源：[awesome-dsh-plugin 的 npm package 说明](https://github.com/awesome-dsh-plugin/awesome-dsh-plugin/blob/main/contributing.md#npm-package--npm-包optional--可选)。

## 5. dsh-plugins-store 与其他已确认入口

仅列出能从项目自身 GitHub/文档直接确认的入口：

| 入口 | 已确认关系 | 上架动作 |
| --- | --- | --- |
| [`dsh-market/dsh-market`](https://github.com/dsh-market/dsh-market) | 直接读取 awesome-dsh-plugin registry；其 README 要求去 registry 投稿 | 向 awesome-dsh-plugin 提 PR |
| [`DshMarketPlace/dsh-plugins-store`](https://github.com/DshMarketPlace/dsh-plugins-store) / [dshmarketplace.dev](https://dshmarketplace.dev) | 项目 README 明确说明其目录以 awesome-dsh-plugin 社区 registry 为种子，并由同一公开 API 服务插件、网站和 CLI | 先进入 awesome-dsh-plugin；后续收录节奏由该项目维护方决定。来源见其 [README Acknowledgements](https://github.com/DshMarketPlace/dsh-plugins-store/blob/main/README.md#acknowledgements) |
| [`2BingLing/dsh-market`](https://github.com/2BingLing/dsh-market) | 这是另一个独立的同名市场；其自身 README 说明通过 topics、awesome 列表、组织扫描和 submission issue 自动采集 | 添加 `dsh-plugin` topic，或使用其官方 submission issue。来源见 [收录机制与提交方式](https://github.com/2BingLing/dsh-market/blob/master/README.md#收录机制) |

不要把搜索结果、非官方汇总页或未经项目方说明的“市场”写入发布清单；新增渠道前必须先找到该渠道自己的 GitHub 仓库、官方文档或公开 API 说明。

## 6. 后续升级流程

每次升级按以下顺序执行：

1. **开发与验证**
   ```sh
   pnpm install
   pnpm typecheck
   pnpm build
   npm pack --dry-run
   ```
   检查真实 DSH Web profile 中的看板 UI、13 个 `kanban_*` 工具、工作区隔离和持久化。
2. **升级版本**：按 [npm 官方语义化版本说明](https://docs.npmjs.com/about-semantic-versioning) 修改 `package.json`；修复用 patch、向后兼容功能用 minor、破坏性变化用 major。不要复用已发布版本。
3. **提交与推送源码**：提交版本和构建产物；项目要求把 `lib/client.js` 作为预构建客户端随包发布。
4. **发布 npm**
   ```sh
   npm login
   npm whoami
   npm publish --access public
   npm view @alpacachen/dsh-kanban@<新版本> version repository --json
   ```
5. **创建对应 GitHub Release**
   ```sh
   git tag -a v<新版本> -m "Release v<新版本>"
   git push origin v<新版本>
   gh release create v<新版本> --title "dsh-kanban v<新版本>" --generate-notes
   ```
6. **验证用户升级**：DSH 的 `plugin` 命令会把 pnpm 子命令转发到指定 profile，因此可执行：
   ```sh
   dsh plugin --profile web update @alpacachen/dsh-kanban
   dsh --profile web --dump-config
   ```
   然后按宿主加载方式刷新或重启 `dsh web`，再次做 UI 与工具 smoke test。转发机制见 [DSH 官方发布文档](https://github.com/deepseek-ai/deepseek-harness/blob/master/docs/user/develop/basic/publish.zh.md#安装进-profile)。
7. **同步市场信息**：普通版本更新通常不需要重新投稿；awesome-dsh-plugin 会根据 repository 映射自动关联 npm。只有仓库 URL、分类、描述或截图发生变化时，才修改自己的 `data/plugins/alpacachen__dsh-kanban.yml`/截图条目并提交 PR。

## 7. 首次发布检查单

- [ ] `pnpm typecheck`、`pnpm build` 通过
- [ ] `npm pack --dry-run` 的文件清单正确
- [ ] npm 登录账户有 `@alpacachen` scope 的发布权限
- [ ] `@alpacachen/dsh-kanban@1.0.1` 发布并可查询
- [ ] 从 npm 安装到干净 DSH `web` profile 后可加载
- [ ] GitHub tag 与 Release `v1.0.1` 已创建
- [ ] 仓库已添加 `dsh-plugin` topic
- [ ] 仓库已满 1 天且达到至少 10 commits（当前仅 4，尚未满足）
- [ ] awesome-dsh-plugin YAML、准确描述和真实截图准备完成
- [ ] registry PR 合并后，在 dsh-market 与其他以该 registry 为种子的入口中复核展示和安装命令
