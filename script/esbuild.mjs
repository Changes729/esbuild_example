import * as esbuild from "esbuild";
import fs from "node:fs";

const HTML_DIR = "public/html/";
const OUT_DIR = "dist/";

fs.rmSync(OUT_DIR, { recursive: true, force: true });
fs.cpSync(HTML_DIR, OUT_DIR, {recursive: true});

let ctx = await esbuild.context({
  entryPoints: ["src/app.jsx"],
  bundle: true,
  minify: true,
  sourcemap: true,
  loader: { ".htm": "file" },
  target: ["chrome58", "firefox57", "safari11", "edge16"],
  outdir: `${OUT_DIR}/js`,
});

let { host, port } = await ctx.serve({
  servedir: OUT_DIR,
});
await ctx.watch();

console.log(`[serve] listening at http://${host}:${port}`);
