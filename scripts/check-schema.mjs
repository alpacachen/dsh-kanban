/**
 * dsh-kanban schema migration checks: pure logic, no disk or DSH runtime.
 *
 * Run: node scripts/check-schema.mjs
 *
 * Coverage:
 * - Legacy unversioned files (v0): migration and field normalization
 * - v3 files pass unchanged; v1/v2 files migrate automatically
 * - Broken JSON is classified as corrupt
 * - Invalid structures are classified as invalid
 * - Future versions are unsupported and must not be migrated
 * - Missing migration steps or invalid migration results throw
 */
import { SCHEMA_VERSION, LEGACY_VERSION, MIGRATIONS, migrateBoard, validateBoard, parseBoardText } from '../index.js'

let failed = 0
const check = (name, cond, detail) => {
  if (cond) {
    console.log('  ✓ ' + name)
  } else {
    failed++
    console.log('  ✗ ' + name + (detail ? ' —— ' + detail : ''))
  }
}

console.log('schemaVersion = ' + SCHEMA_VERSION + ', legacy = ' + LEGACY_VERSION)

// ---- 1. Migrate unversioned v0 files ----
console.log('\n[1] Automatically migrate legacy v0 files')
{
  const legacy = JSON.stringify({
    columns: [{ id: 'c1', title: 'Todo' }],
    labels: [{ name: 'bug', color: '#F87171' }],
    cards: [{ id: 'k1', columnId: 'c1', title: 'Fix login', note: 'x', label: 'bug', priority: 'high' }],
  })
  const r = parseBoardText(legacy)
  check('v0 → ok', r.ok && r.kind === 'ok', JSON.stringify(r))
  check('Marked as migrated', r.ok && r.migrated === true)
  check('fromVersion = 0', r.ok && r.fromVersion === LEGACY_VERSION)
  check('Upgraded to the latest version', r.ok && r.data.schemaVersion === SCHEMA_VERSION)
  check('Migration warning emitted', r.ok && r.warnings.length >= 1)
  check('Card fields normalized', r.ok && r.data.cards[0].label === 'bug' && r.data.cards[0].note === 'x' && r.data.cards[0].priority === 'high')
  check('Colors normalized', r.ok && r.data.labels[0].color === '#f87171')
  check('Columns and cards preserved', r.ok && r.data.columns[0].id === 'c1' && r.data.cards[0].id === 'k1')
  check('Empty activities array added', r.ok && Array.isArray(r.data.activities) && r.data.activities.length === 0)
  check('Legacy cards default createdAt/createdBy to null', r.ok && r.data.cards[0].createdAt === null && r.data.cards[0].createdBy === null)
  check('Legacy cards get empty comments arrays', r.ok && Array.isArray(r.data.cards[0].comments) && r.data.cards[0].comments.length === 0)
}

// ---- 2. Fill optional fields in v0 files ----
console.log('\n[2] v0 files missing note/label/priority')
{
  const r = parseBoardText(JSON.stringify({ columns: [{ id: 'c1', title: 'Todo' }], cards: [{ id: 'k1', columnId: 'c1', title: 't' }] }))
  check('v0 with missing fields -> ok', r.ok, JSON.stringify(r))
  check('note defaults to an empty string', r.ok && r.data.cards[0].note === '')
  check('label defaults to null', r.ok && r.data.cards[0].label === null)
  check('priority defaults to null', r.ok && r.data.cards[0].priority === null)
}

// ---- 3. Accept v3 files unchanged ----
console.log('\n[3] v3 files pass unchanged')
{
  const r = parseBoardText(JSON.stringify({ schemaVersion: 3, columns: [], labels: [], cards: [], activities: [] }))
  check('v3 -> ok without migration', r.ok && r.migrated === false, JSON.stringify(r))
  check('v3 has no warnings', r.ok && r.warnings.length === 0)
}

// ---- 3a. Migrate v2 to v3 ----
console.log('\n[3a] Automatically migrate v2 to v3')
{
  const r = parseBoardText(JSON.stringify({
    schemaVersion: 2,
    columns: [{ id: 'c1', title: 'Todo' }],
    labels: [],
    cards: [{ id: 'k1', columnId: 'c1', title: 'Keep metadata', note: '', label: null, priority: null, createdAt: '2026-01-01T00:00:00.000Z', createdBy: 'human' }],
    activities: [{ id: 'e1', ts: '2026-01-01T00:00:00.000Z', cardId: 'k1', type: 'card_created', source: 'human' }],
  }))
  check('v2 -> ok and marked as migrated', r.ok && r.migrated === true, JSON.stringify(r))
  check('fromVersion = 2', r.ok && r.fromVersion === 2)
  check('v2 metadata preserved', r.ok && r.data.cards[0].createdBy === 'human' && r.data.activities.length === 1)
  check('Cards get empty comments arrays', r.ok && Array.isArray(r.data.cards[0].comments) && r.data.cards[0].comments.length === 0)
}

// ---- 3b. Migrate v1 to v3 ----
console.log('\n[3b] Automatically migrate v1 to v3')
{
  const r = parseBoardText(JSON.stringify({
    schemaVersion: 1,
    columns: [{ id: 'c1', title: 'Todo' }],
    labels: [{ name: 'bug', color: '#f87171' }],
    cards: [{ id: 'k1', columnId: 'c1', title: 'Fix', note: 'n', label: 'bug', priority: 'high' }],
  }))
  check('v1 -> ok and marked as migrated', r.ok && r.migrated === true, JSON.stringify(r))
  check('fromVersion = 1', r.ok && r.fromVersion === 1)
  check('Upgraded to v3', r.ok && r.data.schemaVersion === 3)
  check('Empty activities array', r.ok && Array.isArray(r.data.activities) && r.data.activities.length === 0)
  check('Cards default createdAt/createdBy to null', r.ok && r.data.cards[0].createdAt === null && r.data.cards[0].createdBy === null)
  check('Cards get empty comments arrays', r.ok && Array.isArray(r.data.cards[0].comments) && r.data.cards[0].comments.length === 0)
  check('Card data preserved', r.ok && r.data.cards[0].title === 'Fix' && r.data.cards[0].label === 'bug')
}

// ---- 4. Broken JSON ----
console.log('\n[4] Broken JSON')
{
  const r = parseBoardText('{"columns": [broken')
  check('Classified as corrupt', !r.ok && r.kind === 'corrupt', JSON.stringify(r))
  check('Readable corruption warning', !r.ok && r.warnings.length >= 1)
}

// ---- 5. Invalid structure ----
console.log('\n[5] Invalid structure')
{
  const r = parseBoardText(JSON.stringify({ schemaVersion: 3, columns: [], labels: [], cards: 'oops', activities: [] }))
  check('Classified as invalid', !r.ok && r.kind === 'invalid', JSON.stringify(r))
  const dup = parseBoardText(JSON.stringify({ schemaVersion: 3, columns: [{ id: 'c1', title: 'Todo' }], labels: [], cards: [{ id: 'k1', columnId: 'c1', title: 'a', comments: [] }, { id: 'k1', columnId: 'c1', title: 'b', comments: [] }], activities: [] }))
  check('Duplicate card ids -> invalid', !dup.ok && dup.kind === 'invalid', JSON.stringify(dup))
  const badComment = parseBoardText(JSON.stringify({ schemaVersion: 3, columns: [{ id: 'c1', title: 'Todo' }], labels: [], cards: [{ id: 'k1', columnId: 'c1', title: 'a', comments: [{ id: 'm1', content: ' ', source: 'human', createdAt: 'now' }] }], activities: [] }))
  check('Empty comment -> invalid', !badComment.ok && badComment.kind === 'invalid', JSON.stringify(badComment))
  const noAct = parseBoardText(JSON.stringify({ schemaVersion: 3, columns: [], labels: [], cards: [] }))
  check('Missing activities -> invalid', !noAct.ok && noAct.kind === 'invalid', JSON.stringify(noAct))
}

// ---- 6. Unsupported future version ----
console.log('\n[6] Future schema version from a newer plugin')
{
  const r = parseBoardText(JSON.stringify({ schemaVersion: 99, columns: [], labels: [], cards: [] }))
  check('Classified as unsupported', !r.ok && r.kind === 'unsupported', JSON.stringify(r))
  check('Version information preserved', !r.ok && r.version === 99)
  check('No migration attempted', !r.ok && r.warnings.every((w) => !w.includes('upgraded')))
}

// ---- 7. Migration chain ----
console.log('\n[7] Migration chain contract')
{
  const up = migrateBoard({ schemaVersion: 0, columns: [] }, 0)
  check('migrateBoard(v0) -> latest version', up.schemaVersion === SCHEMA_VERSION)
  check('Registry keys cover 0..SCHEMA_VERSION-1', Object.keys(MIGRATIONS).map(Number).sort((a, b) => a - b).join(',') === Array.from({ length: SCHEMA_VERSION }, (_, i) => i).join(','))

  // v0 -> v1 intentionally recovers missing schemaVersion without throwing.
  const lenient = migrateBoard({ columns: [] }, 0)
  check('v0 -> v1 recovers data without a version', lenient.schemaVersion === SCHEMA_VERSION)

  // Throw when a migration returns the wrong version.
  const saved = MIGRATIONS[0]
  MIGRATIONS[0] = () => ({ schemaVersion: 99, columns: [] })
  let threw = false
  try {
    migrateBoard({ schemaVersion: 0, columns: [] }, 0)
  } catch (e) {
    threw = true
  }
  MIGRATIONS[0] = saved
  check('Wrong migration output version throws', threw)

  // Throw when a migration step is missing.
  const saved2 = MIGRATIONS[0]
  MIGRATIONS[0] = undefined
  let threw2 = false
  try {
    migrateBoard({ columns: [] }, 0)
  } catch (e) {
    threw2 = true
  }
  MIGRATIONS[0] = saved2
  check('Missing migration step throws', threw2)
}

// ---- 8. validateBoard ----
console.log('\n[8] validateBoard')
{
  check('Valid v3 passes', validateBoard({ schemaVersion: 3, columns: [], labels: [], cards: [], activities: [] }).ok)
  check('Missing labels fails', !validateBoard({ schemaVersion: 3, columns: [], cards: [], activities: [] }).ok)
  check('Missing activities fails', !validateBoard({ schemaVersion: 3, columns: [], labels: [], cards: [] }).ok)
  check('Non-object data fails', !validateBoard(null).ok && !validateBoard('x').ok)
}

console.log('\n' + (failed === 0 ? 'All checks passed ✓' : failed + ' checks failed ✗'))
process.exit(failed === 0 ? 0 : 1)
