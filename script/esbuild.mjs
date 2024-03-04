import * as esbuild from "esbuild";
import fs from "node:fs";

const APP_DIR = "src/";
const HTML_DIR = "public/html/";
const JS_DIR = "public/js/";
const STATIC_DIR = "public/static/";
const OUT_DIR = "dist/";

fs.rmSync(OUT_DIR, { recursive: true, force: true });
fs.cpSync(HTML_DIR, OUT_DIR, { recursive: true });
fs.cpSync(JS_DIR, `${OUT_DIR}/js`, { recursive: true });
fs.cpSync(STATIC_DIR, `${OUT_DIR}/static`, { recursive: true });

var app_list = [];
fs.readdirSync(APP_DIR).forEach((file) => {
  if (/^(app).+(.jsx)?(.tsx)?(.js)?(.ts)?$/.test(file)) {
    app_list.push(APP_DIR + file);
  }
});

let ctx = await esbuild.context({
  entryPoints: app_list,
  bundle: true,
  minify: true,
  sourcemap: true,
  loader: { ".htm": "file" },
  outdir: `${OUT_DIR}/js`,
});

let { host, port } = await ctx.serve({
  servedir: OUT_DIR,
});
await ctx.watch();

console.log(`[serve] listening at http://${host}:${port}`);
