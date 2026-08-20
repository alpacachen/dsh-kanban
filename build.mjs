/**
 * dsh-kanban 客户端构建脚本
 *
 * 用 esbuild 把 React + TSX + dnd-kit + Radix/shadcn 组件打包成单个 CJS 产物，
 * 再包进官方 client-modules 的 `window.__ModuleLoader__.load({ id, factory })` 闭包。
 *
 * 关键点：
 *  - react / react-dom / react/jsx-runtime 必须 external：DSH 平台提供它们，
 *    闭包内的 `require('react')` 由 module loader 的 require 参数解析，避免「两个 React」。
 *  - 其余依赖（dnd-kit、Radix、cva、clsx、tailwind-merge、lucide、Tailwind 产物）全部内联。
 *  - CSS 经 @tailwindcss/postcss 编译后以字符串内联，运行时注入 <style>（带去重标记）。
 */
import esbuild from 'esbuild'
import postcss from 'postcss'
import tailwindcss from '@tailwindcss/postcss'
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { resolve } from 'node:path'

const root = process.cwd()
const minify = !process.argv.includes('--no-minify')
mkdirSync(resolve(root, 'dist'), { recursive: true })

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
      name: 'tailwind-css',
      setup(build) {
        build.onLoad({ filter: /\.css$/ }, async (args) => {
          const css = readFileSync(args.path, 'utf8')
          const processed = await postcss([tailwindcss()]).process(css, { from: args.path })
          return { contents: processed.css, loader: 'text' }
        })
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
  "  id: 'dsh-kanban',",
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
