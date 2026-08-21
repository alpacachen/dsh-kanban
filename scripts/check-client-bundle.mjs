import assert from "node:assert/strict"
import { readFile } from "node:fs/promises"
import vm from "node:vm"

const packageJson = JSON.parse(await readFile(new URL("../package.json", import.meta.url), "utf8"))
const clientBundle = await readFile(new URL("../lib/client.js", import.meta.url), "utf8")
const registrations = []

vm.runInNewContext(clientBundle, {
  window: {
    __ModuleLoader__: {
      load(handoff) {
        registrations.push(handoff)
      },
    },
  },
})

assert.equal(registrations.length, 1, "client bundle must register exactly one module factory")
assert.equal(
  registrations[0].id,
  packageJson.name,
  `client bundle must register the npm package name ${JSON.stringify(packageJson.name)}`,
)
assert.equal(typeof registrations[0].factory, "function", "client bundle registration must provide a factory")

// The client style is injected into the host document, so keep the bundle
// free of Tailwind/PostCSS output and require the native CSS namespace.
assert.doesNotMatch(clientBundle, /tailwindcss|preflight|@theme|@layer/, "client bundle must not contain Tailwind CSS")
assert.doesNotMatch(clientBundle, /-webkit-text-size-adjust:\s*100%/, "client bundle must not contain a global reset")
assert.match(clientBundle, /\.kanban-root/, "client CSS must use the plugin root scope")
assert.match(clientBundle, /\.kanban-button/, "client bundle must contain native primitive styles")

console.log(`client bundle registers ${packageJson.name}`)
