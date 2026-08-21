// esbuild 以 `loader: 'text'` 处理 .css，导入结果为原生 CSS 字符串。
declare module "*.css" {
  const css: string
  export default css
}
