/**
 * dsh-kanban client build.
 *
 * Bundle React, TSX, dnd-kit and Radix into one CJS artifact with esbuild,
 * then wrap it in the official client-modules window.__ModuleLoader__.load({ id, factory }).
 * Inline namespaced kanban-* CSS as a string and inject it at runtime.
 */
import esbuild from 'esbuild'
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { resolve } from 'node:path'

const root = process.cwd()
const minify = !process.argv.includes('--no-minify')
const packageJson = JSON.parse(readFileSync(resolve(root, 'package.json'), 'utf8'))
if (typeof packageJson.name !== 'string' || packageJson.name.length === 0) {
  throw new Error('package.json must define a non-empty package name')
}
const moduleId = packageJson.name
mkdirSync(resolve(root, 'dist'), { recursive: true })
mkdirSync(resolve(root, 'lib'), { recursive: true })

const result = await esbuild.build({
  entryPoints: [resolve(root, 'src/client/entry.tsx')],
  bundle: true,
  outfile: resolve(root, 'dist/app.cjs'),
  format: 'cjs',
  platform: 'browser',
  jsx: 'automatic',
  jsxImportSource: 'react',
  target: ['es2020'],
  sourcemap: false,
  minify,
  logLevel: 'info',
  external: ['react', 'react-dom', 'react/jsx-runtime', 'react/jsx-dev-runtime', 'react-dom/client', '@deepseek-ai/dsh-client-ui-primitives', '@deepseek-ai/dsh-client-store'],
  // The native model seat exposes source subpaths; TypeScript uses the package's shipped declarations.
  alias: { '@': resolve(root, 'src/client'), '@deepseek-ai/dsh-client-ui-model-selection/src': resolve(root, 'node_modules/@deepseek-ai/dsh-client-ui-model-selection/src') },
  plugins: [
    {
      name: 'inline-native-css',
      setup(build) {
        build.onLoad({ filter: /\.css$/ }, (args) => args.path.endsWith(".module.css") ? undefined : ({
          contents: readFileSync(args.path, 'utf8'),
          loader: 'text',
        }))
      },
    },
  ],
})

if (result.errors.length > 0) {
  console.error(result.errors)
  process.exit(1)
}

const app = readFileSync(resolve(root, 'dist/app.cjs'), 'utf8')
const nativeCss = readFileSync(resolve(root, 'dist/app.css'), 'utf8')
const wrapped = [
  'window.__ModuleLoader__.load({',
  `  id: ${JSON.stringify(moduleId)},`,
  '  factory: function (require) {',
  '    var module = { exports: {} }',
  '    var exports = module.exports',
  `if (typeof document !== 'undefined') { var style = document.querySelector('style[data-dsh-workflow-model-style]') || document.head.appendChild(document.createElement('style')); style.setAttribute('data-dsh-workflow-model-style', ''); style.textContent = ${JSON.stringify(nativeCss)}; }`,
  app,
  '    return (module.exports && module.exports.default) || module.exports',
  '  },',
  '})',
].join('\n')
writeFileSync(resolve(root, 'lib/client.js'), wrapped)
console.log('✓ built lib/client.js (' + wrapped.length + ' bytes)')
