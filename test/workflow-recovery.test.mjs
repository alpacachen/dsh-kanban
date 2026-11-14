import { describe, it, expect, vi } from 'vitest'
import { spawn } from 'node:child_process'
import { once } from 'node:events'
import { randomUUID } from 'node:crypto'
import { PROCESS_POLICY, readProcessIdentity, confirmStoppedExecution } from '../workflow/recovery.js'

const attempt = () => ({ id: randomUUID(), sessionId: randomUUID(), requestId: randomUUID(),
  executorSnapshot: { stopPolicy: PROCESS_POLICY, hostProcess: { pid: 2147483647, startedAt: 'previous-host' } } })
const worker = { pid: 42424, startedAt: 'original-worker' }

describe('journaled process recovery', () => {
  it('requires original Host shutdown even when no workers are listed', async () => {
    const item = attempt(), signalProcess = vi.fn()
    await expect(confirmStoppedExecution({ attempt: item, processes: [] }, {
      identify: () => item.executorSnapshot.hostProcess, signalProcess,
    })).rejects.toMatchObject({ code: 'WF_RECOVERY_RESTART_REQUIRED' })
    expect(signalProcess).not.toHaveBeenCalled()
  })
  it('refuses an unsupported legacy snapshot', async () => {
    await expect(confirmStoppedExecution({ attempt: { ...attempt(), executorSnapshot: {} }, processes: [] }))
      .rejects.toMatchObject({ code: 'WF_RECOVERY_UNSUPPORTED' })
  })
  it('does not stop a live worker during a read-only reconciliation', async () => {
    const signalProcess = vi.fn()
    await expect(confirmStoppedExecution({ attempt: attempt(), processes: [worker] }, {
      identify: pid => pid === worker.pid ? worker : null, signalProcess,
    })).rejects.toMatchObject({ code: 'WF_RECOVERY_RUNNING' })
    expect(signalProcess).not.toHaveBeenCalled()
  })
  it('never signals a reused PID with a different birth identity', async () => {
    const signalProcess = vi.fn(), item = attempt()
    const evidence = await confirmStoppedExecution({ attempt: item, processes: [worker], stop: true }, {
      identify: pid => pid === worker.pid ? { ...worker, startedAt: 'unrelated-new-process' } : null, signalProcess,
    })
    expect(signalProcess).not.toHaveBeenCalled()
    expect(evidence).toMatchObject({ kind: 'workflow-process-journal', attemptId: item.id, sessionId: item.sessionId,
      requestId: item.requestId, hostStopped: true, processesStopped: true, quiescent: true, ownedJobCount: 0, processes: [worker] })
  })
  it('signals only the matching worker after explicit termination', async () => {
    let alive = true
    const signalProcess = vi.fn(() => { alive = false })
    const evidence = await confirmStoppedExecution({ attempt: attempt(), processes: [worker], stop: true }, {
      identify: pid => pid === worker.pid && alive ? worker : null, signalProcess,
    })
    expect(signalProcess).toHaveBeenCalledExactlyOnceWith(worker.pid, 'SIGTERM')
    expect(evidence.quiescent).toBe(true)
  })
  it('fails closed when identity lookup throws, without sending a signal', async () => {
    const signalProcess = vi.fn()
    await expect(confirmStoppedExecution({ attempt: attempt(), processes: [worker], stop: true }, {
      identify() { throw new Error('metadata unavailable') }, signalProcess,
    })).rejects.toThrow('metadata unavailable')
    expect(signalProcess).not.toHaveBeenCalled()
  })
  it('never stops the current Host itself', async () => {
    const self = { pid: process.pid, startedAt: 'self' }, signalProcess = vi.fn()
    await expect(confirmStoppedExecution({ attempt: attempt(), processes: [self], stop: true }, {
      identify: pid => pid === self.pid ? self : null, signalProcess,
    })).rejects.toMatchObject({ code: 'WF_RECOVERY_UNCONFIRMED' })
    expect(signalProcess).not.toHaveBeenCalled()
  })
  it.skipIf(process.platform !== 'darwin')('reads birth metadata and terminates only its own isolated fixture process', async () => {
    expect(readProcessIdentity(process.pid)).toMatchObject({ pid: process.pid, startedAt: expect.any(String) })
    const child = spawn(process.execPath, ['-e', 'setInterval(()=>{},1000)'], {
      env: { PATH: '/usr/bin:/bin', ELECTRON_RUN_AS_NODE: '1' }, stdio: 'ignore',
    })
    const ended = once(child, 'exit')
    try {
      await once(child, 'spawn')
      const identity = readProcessIdentity(child.pid)
      expect(identity).toMatchObject({ pid: child.pid, startedAt: expect.any(String) })
      const evidence = await confirmStoppedExecution({ attempt: attempt(), processes: [identity], stop: true })
      await ended
      expect(evidence.quiescent).toBe(true)
      expect(readProcessIdentity(child.pid)).toBeNull()
    } finally {
      if (child.exitCode === null && child.signalCode === null) child.kill('SIGKILL')
      await ended
    }
  })
})
