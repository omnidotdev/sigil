import { mergeConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

import type { StorybookConfig } from "@storybook/react-vite";

/**
 * Storybook configuration.
 */
const storybookConfig: StorybookConfig = {
  core: {
    disableTelemetry: true,
  },
  framework: "@storybook/react-vite",
  stories: [
    // NB: intentional pattern duplication (with capture group below) to ensure introduction page is loaded first
    "../src/stories/introduction.stories.mdx",
    "../src/**/*.stories.@(ts|tsx|mdx)",
  ],
  // inject CSS into Storybook UI
  managerHead: (head) => `
    ${head}
    <link rel="stylesheet" href=${
      process.env.NODE_ENV === "production"
        ? "./styles/main.css"
        : "../src/lib/styles/main.css"
    } />
  `,
  typescript: {
    // typecheck stories during Storybook build
    check: true,
  },
  addons: [
    "@storybook/addon-a11y",
    "@storybook/addon-links",
    // https://storybook.js.org/docs/react/essentials/introduction
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-storysource",
    "storybook-dark-mode",
  ],
  staticDirs: [
    "../public",
    // copy static CSS into static Storybook build
    // NB: this is a hack to get custom styles (e.g. custom fonts) rendering in the Storybook manager UI. This *does* duplicate some static CSS already in the build, but is a convenient workaround
    { from: "../src/lib/styles", to: "styles" },
  ],
  viteFinal: (config) =>
    // recursively merge Vite options
    mergeConfig(config, {
      // https://github.com/storybookjs/storybook/issues/18920#issuecomment-1342865124
      define: { "process.env": {} },
      plugins: [tsconfigPaths()],
      // https://github.com/storybookjs/builder-vite/issues/409#issuecomment-1295495352
      build: {
        sourcemap: false,
      },
      // dependencies to pre-optimize
      optimizeDeps: {
        include: ["storybook-dark-mode"],
      },
    }),
};

export default storybookConfig;
