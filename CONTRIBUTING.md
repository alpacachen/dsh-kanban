# Contributing to dsh-kanban

Thanks for taking the time to contribute. Bug reports, feature ideas, documentation improvements, and pull requests are welcome.

## Before you start

- Search existing issues and pull requests to avoid duplicates.
- Open an issue before starting a large or behavior-changing contribution so the approach can be discussed first.
- Keep each pull request focused on one change.

## Local development

Use Node.js 26 and pnpm 11.8.0.

```sh
pnpm install
pnpm typecheck
pnpm build
```

The browser source lives in `src/client/`. The DSH Host entries are `index.ts` and `workflow/index.ts`. Run `pnpm build` after changing these sources. Commit the generated `index.js`, `workflow/index.js`, and `lib/client.js` so DSH can install from GitHub as well as npm.

For an unminified debugging build:

```sh
node build.mjs --no-minify
```

## Pull requests

Before opening a pull request:

1. Run `pnpm typecheck`.
2. Run `pnpm build`.
3. Run `pnpm check:client-bundle`.
4. Explain what changed, why it changed, and how you verified it.

By contributing, you agree that your contributions will be licensed under the MIT License.
