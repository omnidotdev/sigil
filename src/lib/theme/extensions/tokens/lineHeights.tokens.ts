import { defineTokens } from "@pandacss/dev";

import type { Tokens } from "@pandacss/dev";

/**
 * Line height tokens.
 */
const lineHeights: Tokens["lineHeights"] = defineTokens.lineHeights({
  none: { value: 1 },
  tight: { value: 1.25 },
  snug: { value: 1.375 },
  normal: { value: 1.5 },
  relaxed: { value: 1.75 },
  loose: { value: 2 },
});

export default lineHeights;
