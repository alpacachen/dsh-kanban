import { constants } from 'node:fs'
import { randomUUID } from 'node:crypto'
import { lstat, mkdir, open, readdir, realpath, rename, rm, unlink } from 'node:fs/promises'
import { join, relative, resolve, sep } from 'node:path'

const fail = () => { throw Object.assign(new Error('任务产物目录或文件不可用，请检查目录后重试。'), { code: 'WF_TASK_FILES_UNAVAILABLE' }) }
const fileVersion = stat => `${stat.dev}:${stat.ino}:${stat.size}:${stat.mtimeMs}:${stat.ctimeMs}`
const safeId = value => typeof value === 'string' && /^[a-zA-Z0-9_-]{1,200}$/.test(value)

/** Only clean directories after the durable deletion receipt has stopped and hidden the Task. */
export async function deleteTaskDirectory(task) {
  if (!safeId(task.id)) fail()
  try {
    if (await realpath(task.rootPath) !== task.rootPath) fail()
    let directory = task.rootPath
    for (const name of ['.dsh', 'workflow-artifacts', task.id]) {
      directory = join(directory, name)
      let stat
      try { stat = await lstat(directory) } catch (error) { if (error.code === 'ENOENT') return; throw error }
      if (!stat.isDirectory() || stat.isSymbolicLink() || await realpath(directory) !== directory) fail()
    }
    await rm(directory, { recursive: true, force: true })
  } catch { fail() }
}

/** Task identities come from the store, never from a caller-supplied filesystem root. */
export async function ensureTaskDirectory(task) {
  if (!safeId(task.id)) fail()
  try {
    const root = await realpath(task.rootPath)
    if (root !== task.rootPath) fail()
    let current = root
    for (const name of ['.dsh', 'workflow-artifacts', task.id]) {
      current = join(current, name)
      try { await mkdir(current) } catch (error) { if (error.code !== 'EEXIST') throw error }
      const stat = await lstat(current)
      if (!stat.isDirectory() || stat.isSymbolicLink() || await realpath(current) !== current) fail()
    }
    return current
  } catch { fail() }
}

/** Do not follow directory links into another Task or out of the project. */
export async function taskFilePath(task, filePath) {
  const directory = await ensureTaskDirectory(task)
  if (typeof filePath !== 'string' || !filePath || filePath.includes('\\') || filePath.includes('\0')) fail()
  const path = resolve(directory, filePath), local = relative(directory, path)
  if (!local || local.startsWith(`..${sep}`) || local === '..' || local !== filePath.split('/').join(sep)) fail()
  try {
    let current = directory
    for (const name of local.split(sep)) {
      current = join(current, name)
      if ((await lstat(current)).isSymbolicLink()) fail()
    }
    if (!(await lstat(path)).isFile() || await realpath(path) !== path) fail()
    return { directory, path }
  } catch { fail() }
}

export async function listTaskFiles(task, { includeStageResults = false } = {}) {
  const directory = await ensureTaskDirectory(task), files = []
  async function walk(path) {
    for (const entry of await readdir(path, { withFileTypes: true })) {
      const child = join(path, entry.name)
      if (!includeStageResults && path === directory && entry.name === '.workflow-results') continue
      if (entry.isSymbolicLink()) continue
      if (entry.isDirectory()) {
        if ((await lstat(child)).isSymbolicLink() || await realpath(child) !== child) continue
        await walk(child)
      } else if (entry.isFile()) {
        try {
          const stat = await lstat(child)
          if (!stat.isFile() || stat.isSymbolicLink()) continue
          const name = relative(directory, child).split(sep).join('/')
          const stageResult = name.startsWith('.workflow-results/')
          const attempt = stageResult && task.attempts?.find(attempt => `${attempt.id}.md` === entry.name)
          const visit = attempt && task.visits?.find(visit => visit.id === attempt.visitId)
          const stage = visit && task.definition?.stages.find(stage => stage.id === visit.stageId)
          files.push({ path: name, name: entry.name, version: fileVersion(stat), byteLength: stat.size, updatedAt: stat.mtimeMs, kind: stageResult ? 'stage-result' : 'file', ...(stage ? { stageTitle: stage.title, effective: task.effectiveArtifacts?.some(artifact => artifact.attemptId === attempt.id) ?? false } : {}) })
        } catch (error) { if (error.code !== 'ENOENT') throw error }
      }
    }
  }
  try { await walk(directory) } catch { fail() }
  return { directory, files: files.sort((a, b) => a.path.localeCompare(b.path)) }
}

/** The attachment is immutable; this reserved copy can be repaired from verified bytes. */
export async function saveStageResult(task, attemptId, text) {
  if (!safeId(attemptId)) fail()
  const directory = await ensureTaskDirectory(task), results = join(directory, '.workflow-results')
  try {
    try { await mkdir(results) } catch (error) { if (error.code !== 'EEXIST') throw error }
    if ((await lstat(results)).isSymbolicLink() || await realpath(results) !== results) fail()
    const relativePath = `.workflow-results/${attemptId}.md`
    let file
    try { file = await open(join(results, `${attemptId}.md`), constants.O_WRONLY | constants.O_CREAT | constants.O_EXCL | constants.O_NOFOLLOW, 0o600) }
    catch (error) {
      if (error.code !== 'EEXIST') throw error
      const { path } = await taskFilePath(task, relativePath)
      const existing = await open(path, constants.O_RDONLY | constants.O_NOFOLLOW)
      let matches
      try { matches = await existing.readFile('utf8') === text } finally { await existing.close() }
      if (matches) return relativePath
      const temporary = join(results, `.${attemptId}-${randomUUID()}.tmp`)
      try {
        const replacement = await open(temporary, constants.O_WRONLY | constants.O_CREAT | constants.O_EXCL | constants.O_NOFOLLOW, 0o600)
        try { await replacement.writeFile(text, 'utf8'); await replacement.sync() } finally { await replacement.close() }
        await rename(temporary, path)
      } finally { await rm(temporary, { force: true }) }
      return relativePath
    }
    try { await file.writeFile(text, 'utf8'); await file.sync() } finally { await file.close() }
    return relativePath
  } catch { fail() }
}


/** Conditional deletion of a single regular file; canonical history attachments stay intact. */
export async function deleteTaskFile(task, filePath, expectedVersion) {
  if (typeof filePath === 'string' && filePath.split('/')[0] === '.workflow-results') {
    throw Object.assign(new Error('阶段执行报告是只读历史，请在阶段详情中查看。'), { code: 'WF_FILE_READ_ONLY' })
  }
  const { path } = await taskFilePath(task, filePath)
  if (typeof expectedVersion !== 'string' || !expectedVersion) fail()
  try {
    const stat = await lstat(path)
    if (!stat.isFile() || stat.isSymbolicLink()) fail()
    if (fileVersion(stat) !== expectedVersion) throw Object.assign(new Error('文件已更新，请刷新产物列表后重新确认删除。'), { code: 'WF_FILE_CHANGED' })
    await unlink(path)
  } catch (error) { if (error.code === 'WF_FILE_CHANGED') throw error; fail() }
  return { path: filePath, deleted: true }
}
