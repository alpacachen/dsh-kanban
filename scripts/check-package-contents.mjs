import assert from "node:assert/strict"
import { execFile } from "node:child_process"
import { mkdir } from "node:fs/promises"
import { join } from "node:path"
import { promisify } from "node:util"

const execFileAsync = promisify(execFile)
const npmCache = join(process.cwd(), ".npm-cache")
await mkdir(npmCache, { recursive: true })
const { stdout } = await execFileAsync("npm", ["pack", "--dry-run", "--json"], {
  encoding: "utf8",
  env: { ...process.env, npm_config_cache: npmCache },
})
const result = JSON.parse(stdout)
assert.equal(result.length, 1, "npm pack must produce exactly one package manifest")

const files = result[0].files.map(({ path }) => path).sort()
const expected = [
  "LICENSE",
  "README.md",
  "README.zh.md",
  "cordis.patch.yml",
  "image.png",
  "docs/screenshots/card-details-dark.png",
  "docs/testing-images.md",
  "docs/guide.md",
  "docs/guide.zh.md",
  "docs/readme/board-en.png",
  "docs/readme/board-zh.png",
  "index.js",
  "search.js",
  "workflow/index.js",
  "workflow/store.js",
  "workflow/dsh-adapter.js",
  "workflow/runner.js",
  "workflow/review-api.js",
  "workflow/management-tools.js",
  "workflow/recovery.js",
  "workflow/task-files.js",
  "workflow/stage-trace.js",
  "workflow/locale/en.json",
  "workflow/locale/zh.json",
  "docs/workflow-model.schema.sql",
  "docs/workflow-validation.md",
  "docs/workflow-guide.md",
  "docs/workflow-guide.en.md",
  "docs/readme/workflow-en.svg",
  "docs/readme/workflow-zh.svg",
  "docs/readme/workflow-en-mobile.svg",
  "docs/readme/workflow-zh-mobile.svg",
  "lib/client.js",
  "package.json",
].sort()

assert.deepEqual(files, expected, "npm package contents changed; update the allowlist deliberately")
assert.equal(result[0].entryCount, expected.length, "npm package entry count must match the allowlist")
assert.ok(result[0].size > 0, "npm package must contain bytes")

console.log(`npm package contents are valid (${files.length} files, ${result[0].size} bytes)`)
