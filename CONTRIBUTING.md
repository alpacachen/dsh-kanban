# Contributing to dsh-kanban

Thanks for taking the time to contribute. Bug reports, feature ideas, documentation improvements, and pull requests are welcome.

## Before you start

- Search existing issues and pull requests to avoid duplicates.
- Open an issue before starting a large or behavior-changing contribution so the approach can be discussed first.
- Keep each pull request focused on one change.

## Local development

You need Node.js 22 or later and pnpm.

```sh
pnpm install
pnpm typecheck
pnpm build
```

The browser client source lives in `src/client/`. The generated `lib/client.js` is ignored by Git; CI builds and validates it, and the release workflow includes it in the npm package. Do not add the generated bundle to pull requests.

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
