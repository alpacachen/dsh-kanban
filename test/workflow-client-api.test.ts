// @vitest-environment node
import { afterEach, describe, expect, it, vi } from "vitest"
import { spawnSync } from "node:child_process"
import { fileURLToPath } from "node:url"
import { createWorkflowApi, WorkflowApiError } from "../src/client/lib/workflow-api"

const api = createWorkflowApi()
afterEach(() => vi.unstubAllGlobals())

function reply(result: unknown) {
  return vi.fn(async (_url: unknown, init: RequestInit) => Response.json({
    type: "server-response", rpcId: JSON.parse(String(init.body)).rpcId, result,
  }))
}

describe("Workflow shared Gateway transport", () => {
  it("posts the exact correlated envelope using only same-origin browser authentication", async () => {
    const fetch = reply({ ok: true, value: [{ id: "task-1" }] })
    vi.stubGlobal("fetch", fetch)
    const signal = new AbortController().signal
    await expect(api.call("getTask", { taskId: "task-1" }, signal)).resolves.toEqual([{ id: "task-1" }])
    const [url, init] = fetch.mock.calls[0]
    expect(url).toBe("/api/workflowReview/getTask")
    expect(init).toMatchObject({ method: "POST", mode: "same-origin", credentials: "same-origin", redirect: "error", signal })
    expect(init.headers).toEqual({ "content-type": "application/json" })
    expect(JSON.parse(String(init.body))).toEqual({
      type: "client-request", rpcId: expect.any(String), method: "workflowReview/getTask",
      payload: { args: { taskId: "task-1" } },
    })
  })

  it("accepts the public void-result representation", async () => {
    vi.stubGlobal("fetch", reply({ ok: true }))
    await expect(api.call("listTasks", {})).resolves.toBeUndefined()
  })

  it("preserves safe domain code/message, never error details", async () => {
    vi.stubGlobal("fetch", reply({ ok: false, error: {
      code: "workflow/review-conflict", message: "This review has already been decided.", details: { code: "WF_REVIEW_CONFLICT", secret: "private" },
    } }))
    const error = await api.call("decideReview", {}).catch(error => error)
    expect(error).toBeInstanceOf(WorkflowApiError)
    expect(error).toMatchObject({ kind: "domain", code: "workflow/review-conflict", message: "This review has already been decided." })
    expect(error).not.toHaveProperty("details")
  })

  it.each([401, 403, 404, 500])("classifies HTTP %s without exposing its body", async status => {
    vi.stubGlobal("fetch", vi.fn(async () => new Response("secret SQL /private/profile", { status })))
    await expect(api.call("listTasks", {})).rejects.toMatchObject({ kind: "transport", code: `workflow/http-${status}`, status })
    await expect(api.call("listTasks", {})).rejects.not.toThrow("secret")
  })

  it("redacts network failures and unknown Remote errors", async () => {
    vi.stubGlobal("fetch", vi.fn(async () => { throw new Error("secret address") }))
    await expect(api.call("listTasks", {})).rejects.toMatchObject({ kind: "transport", code: "workflow/network", message: "Could not reach the Workflow service." })
    vi.stubGlobal("fetch", reply({ ok: false, error: { code: "gateway/internal", message: "secret stack", details: {} } }))
    await expect(api.call("listTasks", {})).rejects.toMatchObject({ kind: "transport", code: "workflow/remote-failure", message: "The Workflow request could not be completed." })
  })

  it.each([
    { code: "workflow/unknown", message: "secret unknown", details: {} },
    { code: "workflow/review-conflict", message: "secret mismatch", details: { code: "WF_OTHER" } },
    { code: "workflow/review-conflict", message: "x".repeat(2001), details: { code: "WF_REVIEW_CONFLICT" } },
  ])("does not trust unknown or malformed Workflow errors: $code", async error => {
    vi.stubGlobal("fetch", reply({ ok: false, error }))
    await expect(api.call("listTasks", {})).rejects.toMatchObject({ code: "workflow/remote-failure" })
  })

  it("uses fixed safe messages for boundary failures", async () => {
    vi.stubGlobal("fetch", reply({ ok: false, error: { code: "workflow/internal", message: "secret stack", details: {} } }))
    await expect(api.call("listTasks", {})).rejects.toMatchObject({ code: "workflow/internal", message: "The workflow operation could not be completed." })
  })

  it.each([null, [], {}, { ok: "true" }, { ok: false }, { ok: false, error: { code: "workflow/internal", message: "secret", details: [] } }])(
    "rejects malformed results safely: %j", async result => {
      vi.stubGlobal("fetch", reply(result))
      await expect(api.call("listTasks", {})).rejects.toMatchObject({ kind: "transport", code: "workflow/invalid-response" })
    },
  )

  it.each(["wrong-id", "wrong-envelope", "invalid-json"])("rejects %s", async failure => {
    vi.stubGlobal("fetch", vi.fn(async (_url: unknown, init: RequestInit) => failure === "invalid-json"
      ? new Response("secret invalid JSON")
      : Response.json({ type: failure === "wrong-envelope" ? "client-request" : "server-response",
        rpcId: failure === "wrong-id" ? "another-request" : JSON.parse(String(init.body)).rpcId,
        result: { ok: true, value: "must not leak" } })))
    await expect(api.call("listTasks", {})).rejects.toMatchObject({ code: "workflow/invalid-response" })
  })

  it.each(["../listTasks", "getTask?token=secret", "https://example.com", "", "a/b"])("rejects unsafe method %s before fetch", async method => {
    const fetch = vi.fn()
    vi.stubGlobal("fetch", fetch)
    await expect(api.call(method, {})).rejects.toMatchObject({ code: "workflow/invalid-method" })
    expect(fetch).not.toHaveBeenCalled()
  })

  it("preserves cancellation before fetch and during fetch or response decoding", async () => {
    const before = new AbortController()
    before.abort()
    const fetch = vi.fn()
    vi.stubGlobal("fetch", fetch)
    await expect(api.call("listTasks", {}, before.signal)).rejects.toBe(before.signal.reason)
    expect(fetch).not.toHaveBeenCalled()
    const during = new AbortController()
    vi.stubGlobal("fetch", vi.fn(async () => { during.abort(); throw during.signal.reason }))
    await expect(api.call("listTasks", {}, during.signal)).rejects.toBe(during.signal.reason)
    const decoding = new AbortController()
    vi.stubGlobal("fetch", vi.fn(async () => ({ ok: true, json: async () => { decoding.abort(); throw decoding.signal.reason } })))
    const pending = api.call("listTasks", {}, decoding.signal)
    await expect(pending).rejects.toMatchObject({ name: "AbortError" })
  })

  // Runs the real installed 0.2.2-rc.3 Connection + Gateway in a fresh Cordis root.
  // Only auth admission is a synthetic boolean fixture: no credentials/profile,
  // HTTP listener, live browser, or live workflow state is used or accessed.
  it.skipIf(!process.env.DSH_INSTALL_DIR || !process.env.DSH_NODE_EXECUTABLE)(
    "round-trips through the installed shared handler and refuses an independent API owner", async () => {
      const script = `
        const { createRequire } = require('node:module');
        const { pathToFileURL } = require('node:url');
        const assert = require('node:assert/strict');
        const r = createRequire(process.env.DSH_INSTALL_DIR + '/package.json');
        const load = name => import(pathToFileURL(r.resolve(name)).href);
        (async () => {
          const { Context } = await load('@deepseek-ai/cordis');
          const { HostConnectionService } = await load('@deepseek-ai/dsh-client-connection');
          const { TypertRegistry } = await load('@deepseek-ai/dsh-typert-registry');
          const { TypertGatewayService } = await load('@deepseek-ai/dsh-api-gateway');
          const { RemoteAccessService } = await load('@deepseek-ai/dsh-api-remote-access');
          const protocol = await load('@deepseek-ai/dsh-typert-protocol');
          const { mountWorkflowReviewApi } = await import(pathToFileURL(process.argv[3]).href);
          const root = new Context();
          let authenticated = true, calls = 0;
          try {
            await root.plugin({ apply(ctx) { new HostConnectionService(ctx, [], {
              isAuthenticated: () => authenticated, authenticateApi: () => undefined,
            }); } });
            await root.plugin(TypertRegistry);
            await root.plugin(RemoteAccessService);
            await root.plugin(TypertGatewayService, {});
            await mountWorkflowReviewApi(root, {
              getTask: async taskId => {
                calls++;
                if (taskId === 'conflict') throw Object.assign(new Error('Safe conflict.'), { code: 'WF_REVIEW_CONFLICT' });
                return { id: taskId };
              },
              listTasks: async () => [], decideReview: async () => ({}),
            }, protocol);
            const connection = root.get('connection');
            const trusted = { headers: { host: '127.0.0.1:60234', origin: 'http://127.0.0.1:60234' } };
            const admitted = connection.admit(trusted);
            assert.equal(admitted.peer, connection.browserPeer);
            assert.equal(connection.admit({ headers: { host: '127.0.0.1:60234', origin: 'https://evil.example' } }).rejection, 403);
            authenticated = false;
            assert.equal(connection.admit(trusted).rejection, 401);
            const handler = connection.createSharedFetchHandler('/api');
            const request = () => new Request('http://127.0.0.1:60234' + process.argv[2], {
              method: 'POST', headers: { 'content-type': 'application/json' }, body: process.argv[1],
            });
            const response = await handler.fetch(request(), admitted.peer);
            const envelope = await response.json();
            assert.equal(envelope.result.ok, true, JSON.stringify(envelope));
            assert.equal(calls, 1);
            const independent = connection.createPeer({ principal: { kind: 'owner' } });
            const rejected = await (await handler.fetch(request(), independent)).json();
            assert.equal(rejected.result.error.code, 'workflow/browser-required');
            assert.equal(calls, 1);
            const conflictBody = JSON.parse(process.argv[1]);
            conflictBody.payload.args.taskId = 'conflict';
            const conflict = await (await handler.fetch(new Request(request(), {
              body: JSON.stringify(conflictBody),
            }), admitted.peer)).json();
            assert.deepEqual(conflict.result.error, { code: 'workflow/review-conflict', message: 'Safe conflict.', details: { code: 'WF_REVIEW_CONFLICT' } });
            assert.equal(calls, 2);
            console.log(JSON.stringify(envelope));
          } finally { await root.fiber.dispose(); }
        })().catch(error => { console.error(error); process.exitCode = 1; });
      `
      vi.stubGlobal("fetch", vi.fn(async (url: string, init: RequestInit) => {
        const child = spawnSync(process.env.DSH_NODE_EXECUTABLE!, ["-e", script, String(init.body), url,
          fileURLToPath(new URL("../workflow/review-api.js", import.meta.url))], {
          env: { ...process.env, ELECTRON_RUN_AS_NODE: "1" }, encoding: "utf8", timeout: 15000,
        })
        expect(child.error).toBeUndefined()
        expect(child.status, child.stderr || child.stdout).toBe(0)
        return Response.json(JSON.parse(child.stdout.trim()))
      }))
      await expect(api.call("getTask", { taskId: "isolated-fixture" })).resolves.toEqual({ id: "isolated-fixture" })
    }, 20000,
  )
})
