import { defineTokens } from "@pandacss/dev";

import type { Tokens } from "@pandacss/dev";

/**
 * Font weight tokens.
 */
const fontWeights: Tokens["fontWeights"] = defineTokens.fontWeights({
  thin: { value: 100 },
  extralight: { value: 200 },
  light: { value: 300 },
  normal: { value: 400 },
  medium: { value: 500 },
  semibold: { value: 600 },
  bold: { value: 700 },
  extrabold: { value: 800 },
  black: { value: 900 },
});

export default fontWeights;
