# dsh-kanban publishing and marketplace guide

This guide records npm publishing, community registry submission and subsequent updates for `dsh-kanban`. The historical package version used in the examples is **`@alpacachen/dsh-kanban@1.3.2`**; source: <https://github.com/alpacachen/dsh-kanban>. Use the current package version for a new release.

> `package.json` declares `dsh.bundle`, public scoped npm publishing and the GitHub repository mapping. Before submitting to awesome-dsh-plugin, verify its current requirements, including repository age of at least one day and at least ten commits. Do not create empty commits to inflate the count.

## 1. Official DSH packaging

DSH distributes plugins as npm **bundle packages**. `package.json` declares a configuration patch under `dsh.bundle`, and that patch inserts the plugin into the profile. Without `dsh.bundle`, installing a dependency does not activate a DSH configuration layer. This project uses that structure:

```json
{
  "name": "@alpacachen/dsh-kanban",
  "version": "1.3.2",
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

The project supports both npm and GitHub source installation. Commit the prebuilt Web client `lib/client.js` so GitHub installation, used by the marketplace, can load it directly. Release CI builds and checks the artifact, then packages it with `index.js` and `cordis.patch.yml`:

```sh
dsh plugin --profile web add @alpacachen/dsh-kanban
dsh plugin --profile web add github:alpacachen/dsh-kanban
```

GitHub installation uses the committed artifact instead of an installation-time `prepare` build. After changing client source, run `pnpm build` and include the artifact in the commit.

Inspect the composition and start the Web profile:

```sh
dsh --profile web --dump-config
dsh web
```

Source: [Official DSH packaging and installation guide](https://github.com/deepseek-ai/deepseek-harness/blob/master/docs/user/develop/basic/publish.zh.md).

## 2. Publish to npm

Scoped packages require explicit public access. This project sets `publishConfig.access: "public"`; the command also uses `--access public` to make the intent explicit. References: [npm login](https://docs.npmjs.com/cli/v12/commands/npm-login), [npm publish](https://docs.npmjs.com/cli/v11/commands/npm-publish), [scopes](https://docs.npmjs.com/about-scopes) and [public packages](https://docs.npmjs.com/about-public-packages).

Before publishing:

```sh
pnpm install
pnpm typecheck
pnpm build
npm pack --dry-run
```

The package must include at least:

- `index.js`
- `lib/client.js`
- `cordis.patch.yml`
- `package.json`
- `README.md` and `README.zh.md`
- `image.png` and `LICENSE`

Sign in and confirm the account:

```sh
npm login
npm whoami
```

Publish the current version:

```sh
npm publish --access public
```

Verify the published version, using `1.3.2` only for this historical example:

```sh
npm view @alpacachen/dsh-kanban@1.3.2 name version repository dist-tags --json
dsh plugin --profile web add @alpacachen/dsh-kanban@1.3.2
dsh --profile web --dump-config
```

npm does not allow overwriting an existing version. Any changes after a successful release require a new version. Enter publishing credentials and one-time codes only in the terminal or official npm pages; never store them in the repository.

## 3. GitHub Release

Keep the tag, npm version and GitHub Release title aligned. The tagged commit must include the latest `lib/client.js` for source installation. Release notes should explain user-visible changes, installation commands and compatibility or migration requirements.

## 4. The dsh-market submission route

Here, `dsh-market` refers to [`dsh-market/dsh-market`](https://github.com/dsh-market/dsh-market). Its plugin catalog comes from [`awesome-dsh-plugin/awesome-dsh-plugin`](https://github.com/awesome-dsh-plugin/awesome-dsh-plugin), rather than entries maintained in the market repository. The market reads `https://awesome-dsh-plugin.com/plugins.json` when opened and directs authors to submit PRs to that registry. Entries appear after registry changes merge. See the [market README](https://github.com/dsh-market/dsh-market/blob/master/README.zh.md) and [registry loader](https://github.com/dsh-market/dsh-market/blob/master/src/registry.ts).

Submit the plugin entry to awesome-dsh-plugin, not to dsh-market/dsh-market.

### 4.1 Registry entry

Follow the [contribution guide](https://github.com/awesome-dsh-plugin/awesome-dsh-plugin/blob/main/contributing.md) and add:

```text
data/plugins/alpacachen__dsh-kanban.yml
```

Suggested content:

```yaml
url: https://github.com/alpacachen/dsh-kanban
name: alpacachen/dsh-kanban
category: workflow
description:
  en: A shared kanban board that lets people and DSH agents manage workspace tasks through a Board tab and kanban tools.
```

`description.en` is required. Keep descriptions accurate and restrained, with no claims that the code cannot substantiate. Generate and include the upstream README changes:

```sh
npm ci
node scripts/generate-readme.mjs
```

### 4.2 Requirements and screenshots

Before submitting, verify:

- The GitHub repository is at least one day old.
- It contains at least ten commits.
- Its topics include [`dsh-plugin`](https://github.com/topics/dsh-plugin).
- `package.json` declares a real, installable `dsh.bundle`, not only `dsh.client`.
- The repository contains working code, rather than a placeholder, reserved name or README-only project.
- The description matches the implementation, tool count and API.
- The project remains active and contains no suspicious obfuscation, credential exfiltration or unusual installation behavior.

These requirements came from the upstream [contribution guide](https://github.com/awesome-dsh-plugin/awesome-dsh-plugin/blob/main/contributing.md). Recheck them before submitting, along with the actual GitHub creation date and commit count; both age and commit requirements must be satisfied.

Screenshots are optional but recommended by upstream, unlike the age and commit thresholds. As a visual plugin, dsh-kanban should provide screenshots of the actual running UI. In the registry's `data/screenshots.json`, add one to eight GitHub-hosted HTTPS image URLs under the repository URL:

```json
{
  "https://github.com/alpacachen/dsh-kanban": [
    "https://raw.githubusercontent.com/alpacachen/dsh-kanban/main/image.png"
  ]
}
```

Use GitHub-hosted images, not third-party image hosting. Consult the screenshot section of the contribution guide. Screenshots must match the real plugin running in DSH; do not substitute a mockup.

An npm package is not required for basic registry inclusion. Publishing one enables download counts and preferred installation from a prebuilt tarball. Its `repository` must point to the same GitHub repository. The registry collects this mapping automatically; do not add a manual `npm:` field to the plugin YAML. See the npm-package section of the contribution guide.

## 5. Other confirmed discovery routes

Only include routes documented by the projects themselves.

| Entry point | Documented relationship | Submission action |
| --- | --- | --- |
| [`dsh-market/dsh-market`](https://github.com/dsh-market/dsh-market) | Reads the awesome-dsh-plugin registry; its README directs submissions there | Submit a registry PR |
| [`DshMarketPlace/dsh-plugins-store`](https://github.com/DshMarketPlace/dsh-plugins-store) / [dshmarketplace.dev](https://dshmarketplace.dev) | Its catalog is seeded from the community registry and served through a shared public API for the plugin, website and CLI | Enter the community registry first; downstream import timing belongs to its maintainers. See [Acknowledgements](https://github.com/DshMarketPlace/dsh-plugins-store/blob/main/README.md#acknowledgements) |
| [`2BingLing/dsh-market`](https://github.com/2BingLing/dsh-market) | A separate project with the same name, collecting entries through topics, awesome lists, organization scans and submission issues | Add the `dsh-plugin` topic or use its official submission issue; see its [README](https://github.com/2BingLing/dsh-market/blob/master/README.md) |

Do not add search results, unofficial aggregators or unverified marketplaces to the release checklist. First find the channel's own repository, official documentation or public API description.

## 6. Automated releases and upgrades

`package.json` version is the single source of truth. [`.github/workflows/release.yml`](../.github/workflows/release.yml) keeps npm, the Git tag and GitHub Release aligned.

### 6.1 Configure npm Trusted Publisher once

In the npm package settings for `@alpacachen/dsh-kanban`, add a GitHub Actions Trusted Publisher:

- Owner/organization: `alpacachen`
- Repository: `dsh-kanban`
- Workflow filename: `release.yml`
- Environment: leave blank; the workflow does not use a GitHub Environment

The workflow proves its identity to npm through GitHub OIDC (`id-token: write`). It needs neither a long-lived npm token in GitHub Secrets nor an interactive OTP during automated publishing.

### 6.2 Change the version and merge the reviewed PR

1. Complete implementation and validation:

   ```sh
   pnpm install
   pnpm typecheck
   pnpm build
   npm pack --dry-run
   ```

2. Update `package.json` following [semantic versioning](https://docs.npmjs.com/about-semantic-versioning): patch for fixes, minor for compatible features and major for breaking changes. Never reuse a published version.
3. Include the version change, corresponding source and rebuilt `lib/client.js` in the PR.
4. Once CI passes and the PR merges into `main`, the package.json push triggers the release workflow. It publishes only if version changed relative to the previous main commit; dependency or metadata changes alone are skipped.
5. The workflow validates SemVer and the version change; installs with a frozen lockfile; typechecks, builds and checks client registration; rejects uncommitted artifact drift; creates one npm tarball containing the client; publishes with Trusted Publishing; tags the same main commit as `v<version>`; and creates matching GitHub Release notes without uploading the tarball.

Retries are supported. If npm already contains the version, the workflow compares registry integrity. Identical content skips publishing and continues to create a missing tag/release; different content fails, preventing two code states from sharing a version. Manual recovery runs from GitHub Actions retain the same version and integrity checks.

After publishing, verify upgrades:

```sh
npm view @alpacachen/dsh-kanban@<new-version> version repository dist.integrity --json
dsh plugin --profile web update @alpacachen/dsh-kanban
dsh --profile web --dump-config
```

Refresh or restart DSH according to its loading behavior, then smoke-test the UI and tools. Routine version updates usually do not need a new registry submission: the repository mapping connects npm automatically. Update the registry entry when the repository URL, category, description or screenshots change.

## 7. Release checklist

- [ ] npm Trusted Publisher points to `alpacachen/dsh-kanban` and `release.yml`
- [ ] Typecheck and build pass
- [ ] `npm pack --dry-run` contains the expected files
- [ ] The PR uses a previously unpublished package version
- [ ] The PR includes corresponding source and current `lib/client.js`
- [ ] GitHub installation loads in a clean DSH Web profile
- [ ] The release workflow succeeds after merge
- [ ] npm, Git tag and GitHub Release show the same version
- [ ] npm installation loads in a clean DSH Web profile
- [ ] The repository has the `dsh-plugin` topic
- [ ] The repository meets current registry requirements
- [ ] After registry merge, verify display and installation commands in dsh-market and other registry consumers
