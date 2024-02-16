import { defineSemanticTokens } from "@pandacss/dev";

import type { SemanticTokens } from "@pandacss/dev";

/**
 * Aspect ratio semantic tokens.
 */
const aspectRatios: SemanticTokens["aspectRatios"] =
  defineSemanticTokens.aspectRatios({
    square: { value: "1 / 1" },
    landscape: { value: "4 / 3" },
    portrait: { value: "3 / 4" },
    wide: { value: "16 / 9" },
    ultrawide: { value: "18 / 5" },
    golden: { value: "1.618 / 1" },
  });

export default aspectRatios;
