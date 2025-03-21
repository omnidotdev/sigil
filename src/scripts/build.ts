import { $ } from "bun";

/**
 * Operations before bundling.
 */
const preflight = async () => {
  await $`rm -rf build`;

  console.log("Generating Panda artifacts...");
  await $`bun panda codegen`;
  console.log("Panda artifacts generated.");
};

/**
 * Bundle the package.
 */
const bundle = async () => {
  // bundle
  console.log("Bundling...");
  await Bun.build({
    entrypoints: ["src/index.ts"],
    outdir: "build",
    external: [
      "@ark-ui/react",
      "@pandacss/dev",
      "@pandacss/types",
      "next",
      "react",
      "react-dom",
      "react-icons",
    ],
  });
  console.log("Bundling complete.");
};

/**
 * Operations after bundling.
 */
const postflight = async () => {
  console.log("Generating type declarations...");
  // TODO remove `tsup` dependency, should be able to use a Bun plugin or `tsc` directly (https://linear.app/omnidev/issue/OMNI-242/use-isolated-declarations-for-type-output-and-remove-tsup)
  await $`bun tsup src/index.ts --dts-only --tsconfig tsconfig.build.json --format esm --out-dir build`;
  console.log("Type declarations generated.");

  console.log("Publishing local package...");
  await $`bun knit push`;
  console.log("Publishing local package complete.");
};

/**
 * Build the library.
 */
const build = async () => {
  await preflight();
  await bundle();
  await postflight();
};

build().catch((err) => {
  console.error(err);
  process.exit(1);
});
