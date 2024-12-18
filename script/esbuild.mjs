import * as esbuild from "esbuild";
import http from "node:http";
import fs from "node:fs";

const HTML_DIR = "public/html/";
const OUT_DIR = "dist/";

fs.rmSync(OUT_DIR, { recursive: true, force: true });
fs.cpSync(HTML_DIR, OUT_DIR, { recursive: true });

let ctx = await esbuild.context({
  entryPoints: ["src/index.tsx"],
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

http
  .createServer((req, res) => {
    const options = {
      hostname: host,
      port: port,
      path: req.url,
      method: req.method,
      headers: req.headers,
    };

    let proxyReq = http.request(options, (proxyRes) => {
      if (proxyRes.statusCode != 200) {
        console.log(
          `request failed with url ${options.url} code: ${proxyRes.statusCode}`
        );

        options.path = "";
        let _req = http.request(options, (anotherRes) => {
          if (anotherRes.statusCode === 200) {
            res.writeHead(anotherRes.statusCode, anotherRes.headers);
            anotherRes.pipe(res, { end: true });
          } else {
            console.log(
              `request failed with url ${options.url} code: ${proxyRes.statusCode}`
            );
            res.end();
          }
        });
        req.pipe(_req, { end: true });
      } /** if code == 200 */ else {
        res.writeHead(proxyRes.statusCode, proxyRes.headers);
        proxyRes.pipe(res, { end: true });
      }
    });

    req.pipe(proxyReq, { end: true });
  })
  .listen(3000);
console.log(`[serve] listening at http://${host}:3000`);
