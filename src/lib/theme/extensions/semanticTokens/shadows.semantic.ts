import { defineSemanticTokens } from "@pandacss/dev";

import type { SemanticTokens } from "@pandacss/dev";

/**
 * Shadow semantic tokens.
 */
const shadows: SemanticTokens["shadows"] = defineSemanticTokens.shadows({
  accent: {
    value: "0 0 0 1px {colors.border.accent}",
  },
  outline: {
    value: "0 0 0 1px {colors.border.outline}",
  },
  xs: {
    value: {
      base: "0px 1px 2px {colors.neutral.300a}, 0px 0px 1px {colors.neutral.700a}",
      _dark:
        "0px 1px 2px {colors.black.800a}, 0px 0px 1px inset {colors.neutral.700a}",
    },
  },
  sm: {
    value: {
      base: "0px 2px 4px {colors.neutral.300a}, 0px 0px 1px {colors.neutral.700a}",
      _dark:
        "0px 2px 4px {colors.black.800a}, 0px 0px 1px inset {colors.neutral.700a}",
    },
  },
  md: {
    value: {
      base: "0px 4px 8px {colors.neutral.300a}, 0px 0px 1px {colors.neutral.700a}",
      _dark:
        "0px 4px 8px {colors.black.800a}, 0px 0px 1px inset {colors.neutral.700a}",
    },
  },
  lg: {
    value: {
      base: "0px 8px 16px {colors.neutral.300a}, 0px 0px 1px {colors.neutral.700a}",
      _dark:
        "0px 8px 16px {colors.black.800a}, 0px 0px 1px inset {colors.neutral.700a}",
    },
  },
  xl: {
    value: {
      base: "0px 16px 24px {colors.neutral.300a}, 0px 0px 1px {colors.neutral.700a}",
      _dark:
        "0px 16px 24px {colors.black.800a}, 0px 0px 1px inset {colors.neutral.700a}",
    },
  },
  "2xl": {
    value: {
      base: "0px 24px 40px {colors.neutral.300a}, 0px 0px 1px {colors.neutral.700a}",
      _dark:
        "0px 24px 40px {colors.black.800a}, 0px 0px 1px inset {colors.neutral.700a}",
    },
  },
});

export default shadows;
