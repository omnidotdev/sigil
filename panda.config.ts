import { defineConfig } from "@pandacss/dev";

import { PREGENERATE_STATIC_CSS } from "lib/config";
import * as recipes from "lib/theme/extensions/recipes";
import * as slotRecipes from "lib/theme/extensions/slotRecipes";
import { sigilPreset } from "lib/theme/presets";
import { mapArrayToObject } from "lib/util";

const recipeKeys = Object.keys(recipes);
const slotRecipeKeys = Object.keys(slotRecipes).filter(
  // ! NB: `switch` is a reserved keyword, so the switch recipe is exported as `switchRecipe` and switch static CSS generation is manually specified below
  (key) => key !== "switchRecipe",
);

/**
 * 🐼 Panda configuration.
 */
const pandaConfig = defineConfig({
  // enable CSS reset
  preflight: true,
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
        // TODO PurgeCSS (https://panda-css.com/docs/guides/static#removing-unused-css)
        recipes: {
          ...mapArrayToObject(recipeKeys, ["*"]),
          ...mapArrayToObject(slotRecipeKeys, ["*"]),
          // manually declare `switch` recipe generation, since `switch` is a reserved keyword
          switch: ["*"],
        },
        css: [
          {
            properties: {
              backgroundColor: ["*"],
            },
          },
        ],
      }
    : {},
});

export default pandaConfig;
