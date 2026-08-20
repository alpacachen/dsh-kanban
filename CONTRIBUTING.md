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

The browser client source lives in `src/client/`. Its generated bundle, `lib/client.js`, is committed and published with the package. If you change client code, run `pnpm build` and include the updated bundle in your pull request.

For an unminified debugging build:

```sh
node build.mjs --no-minify
```

## Pull requests

Before opening a pull request:

1. Run `pnpm typecheck`.
2. Run `pnpm build`.
3. Confirm `git diff --exit-code -- lib/client.js` produces no output after the build.
4. Explain what changed, why it changed, and how you verified it.

By contributing, you agree that your contributions will be licensed under the MIT License.
