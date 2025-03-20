import { $ } from "bun";

/**
 * Operations before bundling.
 */
const preflight = async () => {
  await $`rm -rf build/*`;

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
  console.log("Generating TypeScript declarations...");
  await $`tsc -d --declarationDir build --declarationMap --emitDeclarationOnly --project tsconfig.build.json`;
  console.log("TypeScript declarations generated.");

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
