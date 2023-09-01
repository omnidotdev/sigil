import { defineConfig } from "@pandacss/dev";

import { PREGENERATE_STATIC_CSS } from "lib/config";
import * as recipes from "lib/theme/extensions/recipes";
import * as slotRecipes from "lib/theme/extensions/slotRecipes";
import { sigilPreset } from "lib/theme/presets";
import { mapArrayToObject } from "lib/util";

const recipeKeys = Object.keys(recipes);
const slotRecipeKeys = Object.keys(slotRecipes);

/**
 * 🐼 Panda configuration.
 */
const pandaConfig = defineConfig({
  // enable CSS reset
  preflight: true,
  include: ["src/**/*.{ts,tsx,mdx}"],
  outdir: "src/generated/panda",
  presets: ["@pandacss/dev/presets", sigilPreset],
  jsxFramework: "react",
  studio: {
    logo: "/img/logo.png",
  },
  staticCss: PREGENERATE_STATIC_CSS
    ? {
        // pregenerate recipe styles; allow Storybook stories to properly use `args` without needing to hint the extractor with `render` or other workarounds like `{fn}.raw`
        // TODO PurgeCSS
        recipes: {
          ...mapArrayToObject(recipeKeys, ["*"]),
          ...mapArrayToObject(slotRecipeKeys, ["*"]),
        },
      }
    : {},
});

export default pandaConfig;
