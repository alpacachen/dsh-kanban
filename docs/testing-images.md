# Validation

Use Node.js 26 and pnpm 11.8.0. The committed `lib/client.js` is the distributable client bundle.

```sh
pnpm install --frozen-lockfile
pnpm typecheck
pnpm test
pnpm build
pnpm check:client-bundle
pnpm check:package
git diff --exit-code -- lib/client.js
```

`pnpm test` covers unit/component contracts, schema migration and the persistence pipeline. Component tests substitute the Host UI boundary; they do not establish native desktop behavior. `pnpm build` must reproduce the committed bundle after source changes have been built and committed.

## Native image storage

With an installed DSH runtime that provides `@deepseek-ai/dsh-fs-local`, `@deepseek-ai/dsh-attachment-local`, and `sharp`:

```sh
DSH_RUNTIME_ROOT=/path/to/dsh/node_modules node scripts/test-agent-images-native.mjs
```

This test creates its own temporary workspace and attachment store. It covers decoding and persistence, five-field references, real image content blocks, symlink/cross-card rejection and reloading after a fresh Cordis context. The current-session authorization controller is a fixture; no model is called.

## Optional isolated Host checks

- `scripts/test-images-integration.mjs`: real HTTP upload/read/remove and native persistence. Requires an explicitly supplied temporary `DSH_TEST_HOME`, loopback `DSH_TEST_URL`, temporary `DSH_TEST_WORKSPACE_ID`, `DSH_TEST_LOG`, and `DSH_RUNTIME_ROOT`. Set `PLAYWRIGHT_MODULE` if Playwright is not locally resolvable. Never point it at a personal profile.
- `scripts/test-search-images-browser.mjs`: actual client bundle and Host theme with intercepted API fixtures for upload failures, retries, search, and responsive screenshots. Configure `DSH_TEST_URL`, `PLAYWRIGHT_MODULE`, and optionally `CHROME_PATH`, `DSH_TEST_LOG`, and `UI_SCREENSHOT_DIR`. It is not a real-backend test.

Keep authentication logs, generated reports, and personal-workspace screenshots out of commits.

## Desktop acceptance

Verify the actual installed plugin: search and the three adjacent filters, Settings actions, image selection/paste/drop, native full-size preview, Escape/close/backdrop behavior, and task-draft preservation. Check both current- and new-conversation handoff: saved task images must appear as removable composer attachments without submitting the message. Use disposable test tasks for writes.
