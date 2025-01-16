import { defineConfig } from "@rslib/core";

// TODO research tree shaking: https://rsbuild.dev/guide/faq/exceptions#tree-shaking-does-not-take-effect
// TODO research code splitting: https://rsbuild.dev/guide/optimization/code-splitting
// TODO research other optimizations nested under "Optimization" category of https://rsbuild.dev/guide/start/index

/**
 * Rslib configuration.
 * @see https://lib.rsbuild.dev/guide/basic/configure-rslib
 */
const rslibConfig = defineConfig({
  lib: [
    {
      banner: {
        // TODO remove, necessary for e.g. React context, most Ark components, etc. but try to set at a more granular level or not set at all
        js: '"use client";',
        // css:
        // dts:
      },
      // bundle: true,
      dts: true,
      // autoExternal: true,
      format: "esm",
      // footer: ...
      // shims: true
      source: {
        // define: {},
        tsconfigPath: "tsconfig.build.json",
        entry: {
          sigil: "./src/index.ts",
          // ? change to src/components etc (better practice to provide entry points for each component?)
        },
      },
    },
    // ? CJS bundle as well?
  ],
  output: {
    distPath: {
      root: "build",
    },
    cleanDistPath: true,
    externals: ["@ark-ui/react", "next", "react-icons"],
    // ? false?
    // minify: true,
    // TODO research if this is good practice
    // sourceMap: true,
  },
  // TODO make sure [".tsx", ".ts", ".jsx", ".js", ".css", ".json", ".mts", ".mjs"] are all resolved
  // plugins: [],
  // TODO knit push on build success
});

export default rslibConfig;
