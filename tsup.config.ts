import { spawnSync } from "child_process";

import { defineConfig as defineTsupConfig } from "tsup";

import type { SpawnSyncOptionsWithStringEncoding as SpawnSyncOptions } from "child_process";

/**
 * Options for spawning synchronous processes.
 */
const spawnProcessOptions: SpawnSyncOptions = {
  cwd: process.cwd(),
  env: process.env,
  stdio: "inherit",
  encoding: "utf-8",
};

/**
 * `tsup` configuration.
 * @see https://tsup.egoist.dev
 */
const tsupConfig = defineTsupConfig({
  tsconfig: "tsconfig.build.json",
  entry: {
    sigil: "src/index.ts",
  },
  // TODO enable Rollup tree-shaking, temporarily disabled to allow properly injecting `use client` directive banner (Rollup tree-shaking removes it); track https://github.com/egoist/tsup/issues/835
  // treeshake: true,
  sourcemap: true,
  minify: true,
  clean: true,
  splitting: false,
  onSuccess: async () => {
    console.log("Generating type declarations...");
    // NB: below is used as alternative to `tsup` config `dts: true` option to avoid race condition with local package publish (at the cost of less concurrency)
    spawnSync("bun", ["tsup", "--dts-only"], spawnProcessOptions);

    console.log("Publishing local package...");
    spawnSync("bun", ["knit", "push"], spawnProcessOptions);
  },
  format: ["cjs", "esm"],
  // NB: `peerDeps`, among others, are excluded (marked external) by default
  // see https://tsup.egoist.dev/#excluding-packages
  external: ["@ark-ui/react", "react-icons", "@zag-js/*"],
  outDir: "build",
  esbuildOptions: (opts, _ctx) => {
    // https://esbuild.github.io/api/#resolve-extensions
    const defaultExtensions = [".tsx", ".ts", ".jsx", ".js", ".css", ".json"];

    // extend recognized extensions to include explicit ESM extensions
    opts.resolveExtensions = [...defaultExtensions, ".mts", ".mjs"];

    opts.banner = {
      // TODO remove, necessary for e.g. context, most ark components, etc. but try to set at a more granular level or not set at all
      js: '"use client";',
    };
  },
});

export default tsupConfig;
