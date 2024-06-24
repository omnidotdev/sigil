import type { KnipConfig } from "knip";

// TODO integrate `knip` into CI

/**
 * Knip configuration.
 * @see https://knip.dev/overview/configuration
 */
const knipConfig: KnipConfig = {
  ignoreDependencies: [
    // used for local packaging
    "@omnidev/knit",
    // used in MDX
    "@storybook/addon-docs",
    // used in MDX
    "@storybook/blocks",
    // used in Storybook test CI
    "http-server",
  ],
  ignore: [
    "panda.config.ts",
    "*.config.*",
    ".github/**",
    "examples/**",
    // `ComponentVariants` marked as unused, but it is required for downstream type mapping
    "src/lib/util/createStyleContext.tsx",
    // theme extensions are used in barrels
    "src/lib/theme/extensions/**",
    "src/lib/config/env.config.ts",
  ],
};

export default knipConfig;
