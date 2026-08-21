/**
 * dsh-kanban 客户端构建脚本
 *
 * 用 esbuild 把 React + TSX + dnd-kit + Radix 组件打包成单个 CJS 产物，
 * 再包进官方 client-modules 的 `window.__ModuleLoader__.load({ id, factory })` 闭包。
 * CSS 使用插件自己的 kanban-* 命名空间，以字符串内联并在运行时注入。
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
  external: ['react', 'react-dom', 'react/jsx-runtime', 'react/jsx-dev-runtime', 'react-dom/client'],
  alias: { '@': resolve(root, 'src/client') },
  plugins: [
    {
      name: 'inline-native-css',
      setup(build) {
        build.onLoad({ filter: /\.css$/ }, (args) => ({
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
const wrapped = [
  'window.__ModuleLoader__.load({',
  `  id: ${JSON.stringify(moduleId)},`,
  '  factory: function (require) {',
  '    var module = { exports: {} }',
  '    var exports = module.exports',
  app,
  '    return (module.exports && module.exports.default) || module.exports',
  '  },',
  '})',
].join('\n')
writeFileSync(resolve(root, 'lib/client.js'), wrapped)
console.log('✓ built lib/client.js (' + wrapped.length + ' bytes)')
