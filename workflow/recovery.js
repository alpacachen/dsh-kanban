import { execFileSync } from 'node:child_process'

export const PROCESS_POLICY = 'single-process-journal/v1'
const fail = (code, message) => Object.assign(new Error(message), { code })
const validPid = pid => Number.isSafeInteger(pid) && pid > 1 && pid <= 2147483647

/** Read birth metadata only, never process arguments or environment. */
export function readProcessIdentity(pid) {
  if (!validPid(pid)) throw fail('WF_RECOVERY_UNCONFIRMED', '执行进程的记录无效，不能自动恢复。')
  const exists = () => {
    try { process.kill(pid, 0); return true }
    catch (error) { if (error.code === 'ESRCH') return false; throw fail('WF_RECOVERY_UNCONFIRMED', '无法确认原进程是否已经停止。') }
  }
  if (!exists()) return null
  try {
    const startedAt = execFileSync('/bin/ps', ['-p', String(pid), '-o', 'lstart='], {
      encoding: 'utf8', timeout: 1500, maxBuffer: 4096,
      env: { PATH: '/usr/bin:/bin', LANG: 'C', LC_ALL: 'C', TZ: 'UTC' },
      stdio: ['ignore', 'pipe', 'pipe'],
    }).trim()
    if (!/^[A-Za-z]{3}\s+[A-Za-z]{3}\s+\d{1,2}\s+\d{2}:\d{2}:\d{2}\s+\d{4}$/.test(startedAt)) {
      if (!exists()) return null
      throw new Error('Unrecognized process metadata')
    }
    return { pid, startedAt }
  } catch {
    if (!exists()) return null
    throw fail('WF_RECOVERY_UNCONFIRMED', '无法读取可靠的进程启动记录，未执行停止或解锁操作。')
  }
}

/** Only after the original Host is gone can its complete, pre-dispatch journal
 * prove that no additional worker can start. Never treat PID reuse as ownership. */
export async function confirmStoppedExecution({ attempt, processes, stop = false }, {
  identify = readProcessIdentity, signalProcess = (pid, signal) => process.kill(pid, signal),
} = {}) {
  const snapshot = attempt.executorSnapshot
  if (snapshot?.stopPolicy !== PROCESS_POLICY || !validPid(snapshot.hostProcess?.pid)
    || typeof snapshot.hostProcess.startedAt !== 'string' || !Array.isArray(processes) || processes.length > 256) {
    throw fail('WF_RECOVERY_UNSUPPORTED', '这次旧执行没有完整的进程安全记录，不能自动释放其工作区。')
  }
  const same = (current, expected) => current?.pid === expected.pid && current.startedAt === expected.startedAt
  if (same(identify(snapshot.hostProcess.pid), snapshot.hostProcess)) {
    throw fail('WF_RECOVERY_RESTART_REQUIRED', '原执行环境仍在运行。请先重启 DSH，再核对旧执行；不会据此直接重跑任务。')
  }
  const remaining = () => processes.filter(entry => {
    if (!validPid(entry.pid) || typeof entry.startedAt !== 'string' || !entry.startedAt) {
      throw fail('WF_RECOVERY_UNCONFIRMED', '进程记录不完整，不能自动恢复。')
    }
    return same(identify(entry.pid), entry)
  })
  const send = (entry, signal) => {
    if (entry.pid === process.pid) throw fail('WF_RECOVERY_UNCONFIRMED', '不能停止当前宿主进程。')
    // Recheck birth identity immediately before every signal, including SIGKILL.
    if (!same(identify(entry.pid), entry)) return
    try { signalProcess(entry.pid, signal) }
    catch (error) { if (error.code !== 'ESRCH') throw fail('WF_RECOVERY_UNCONFIRMED', '原进程暂时无法停止，工作区仍保持占用。') }
  }
  let running = remaining()
  if (running.length && !stop) throw fail('WF_RECOVERY_RUNNING', '原命令仍在运行。请先终止该任务，再重新核对；工作区尚未释放。')
  if (running.length) {
    running.forEach(entry => send(entry, 'SIGTERM'))
    const deadline = Date.now() + 2500
    const forceAt = Date.now() + 750
    let forced = false
    while ((running = remaining()).length && Date.now() < deadline) {
      if (!forced && Date.now() >= forceAt) { running.forEach(entry => send(entry, 'SIGKILL')); forced = true }
      await new Promise(resolve => setTimeout(resolve, 100))
    }
    if (running.length) throw fail('WF_RECOVERY_RUNNING', '原命令尚未确认停止，工作区仍保持占用。请稍后重新核对。')
  }
  return { kind: 'workflow-process-journal', attemptId: attempt.id, sessionId: attempt.sessionId, requestId: attempt.requestId,
    hostProcess: { ...snapshot.hostProcess }, processes: processes.map(item => ({ ...item })),
    hostStopped: true, processesStopped: true, quiescent: true, ownedJobCount: 0 }
}
