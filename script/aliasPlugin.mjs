import * as path from "node:path";

const aliasPlugin = (alias) => ({
  name: "alias",
  setup(build) {
    build.onResolve({ filter: /.*/ }, (args) => {
      for (const aliasKey in alias) {
        if (args.path.startsWith(aliasKey)) {
          const resolvedPath = path.resolve(
            args.resolveDir,
            alias[aliasKey],
            args.path.slice(aliasKey.length + 1)
          );
          return { path: resolvedPath };
        }
      }
      return null; // let esbuild handle it default way
    });
  },
});

export default aliasPlugin;
