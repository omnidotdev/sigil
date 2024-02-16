import {
  definePreset,
  defineSemanticTokens,
  defineTokens,
} from "@pandacss/dev";

import { conditions, globalCss } from "lib/theme";
import * as baseExtensions from "lib/theme/extensions";
import * as recipes from "lib/theme/extensions/recipes";
import * as _semanticTokens from "lib/theme/extensions/semanticTokens";
import * as slotRecipes from "lib/theme/extensions/slotRecipes";
import * as _tokens from "lib/theme/extensions/tokens";

// TODO auto-spread tokens
const tokens = defineTokens({
  animations: _tokens.animations,
  aspectRatios: _tokens.aspectRatios,
  assets: _tokens.assets,
  blurs: _tokens.blurs,
  borders: _tokens.borders,
  // TODO
  // borderWidths: _tokens.borderWidths,
  colors: _tokens.colors,
  // TODO
  // containerNames: _tokens.containerNames,
  // containerSizes: _tokens.containerSizes,
  durations: _tokens.durations,
  easings: _tokens.easings,
  fonts: _tokens.fonts,
  fontSizes: _tokens.fontSizes,
  fontWeights: _tokens.fontWeights,
  gradients: _tokens.gradients,
  letterSpacings: _tokens.letterSpacings,
  lineHeights: _tokens.lineHeights,
  opacity: _tokens.opacity,
  radii: _tokens.radii,
  shadows: _tokens.shadows,
  sizes: _tokens.sizes,
  spacing: _tokens.spacing,
  zIndex: _tokens.zIndex,
});

// TODO auto-spread semantic tokens
const semanticTokens = defineSemanticTokens({
  animations: _semanticTokens.animations,
  aspectRatios: _semanticTokens.aspectRatios,
  assets: _semanticTokens.assets,
  blurs: _semanticTokens.blurs,
  borders: _semanticTokens.borders,
  // TODO
  // borderWidths: _tokens.borderWidths,
  colors: _semanticTokens.colors,
  // TODO
  // containerNames: _tokens.containerNames,
  // containerSizes: _tokens.containerSizes,
  durations: _semanticTokens.durations,
  easings: _semanticTokens.easings,
  fonts: _semanticTokens.fonts,
  fontSizes: _semanticTokens.fontSizes,
  fontWeights: _semanticTokens.fontWeights,
  gradients: _semanticTokens.gradients,
  letterSpacings: _semanticTokens.letterSpacings,
  lineHeights: _semanticTokens.lineHeights,
  opacity: _semanticTokens.opacity,
  radii: _semanticTokens.radii,
  shadows: _semanticTokens.shadows,
  sizes: _semanticTokens.sizes,
  spacing: _semanticTokens.spacing,
  zIndex: _semanticTokens.zIndex,
});

/**
 * Sigil Panda CSS preset.
 */
const sigilPreset = definePreset({
  // TODO extend full theme
  // eject,
  // patterns,
  // presets,
  // staticCss,
  // utilities,
  conditions,
  globalCss,
  theme: {
    // extend theme configuration
    extend: {
      ...baseExtensions,
      recipes,
      semanticTokens,
      slotRecipes,
      tokens,
    },
  },
});

export default sigilPreset;
