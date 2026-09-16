// esbuild uses loader: 'text' for .css imports, returning a native CSS string.
declare module "*.css" {
  const css: string
  export default css
}
