import { defineConfig } from "@pandacss/dev";

import { PREGENERATE_STATIC_CSS } from "lib/config";
import { sigilPreset } from "lib/theme/presets";

/**
 * 🐼 Panda configuration.
 */
const pandaConfig = defineConfig({
  // enable CSS reset
  preflight: true,
  lightningcss: true,
  // TODO set to "error" (default) ASAP
  validation: "warn",
  include: ["src/**/*.{ts,tsx,mdx}"],
  outdir: "src/generated/panda",
  presets: ["@pandacss/preset-base", sigilPreset],
  jsxFramework: "react",
  studio: {
    logo: "/img/logo.png",
  },
  staticCss: PREGENERATE_STATIC_CSS
    ? {
        // pregenerate recipe styles; allow Storybook stories to properly use `args` without needing to hint the extractor with `render` or other workarounds like `{fn}.raw`
        recipes: "*",
        css: [
          {
            properties: {
              backgroundColor: ["*"],
              colorPalette: ["*"],
            },
          },
        ],
      }
    : {},
});

export default pandaConfig;
