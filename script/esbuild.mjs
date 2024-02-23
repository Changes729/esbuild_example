import * as esbuild from 'esbuild'

let ctx = await esbuild.context({
  entryPoints: ['src/app.jsx'],
  bundle: true,
  minify: true,
  sourcemap: true,
  target: ['chrome58', 'firefox57', 'safari11', 'edge16'],
  outdir: 'dist',
  // outfile: 'out.js',
})

await ctx.watch()
let { host, port } = await ctx.serve()

console.debug("http://" + host + ':' + port)