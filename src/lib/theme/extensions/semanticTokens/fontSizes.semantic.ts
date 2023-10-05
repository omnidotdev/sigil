import { defineSemanticTokens } from "@pandacss/dev";

import type { SemanticTokens } from "@pandacss/dev";

/**
 * Font size semantic tokens.
 */
const fontSizes: SemanticTokens["fontSizes"] = defineSemanticTokens.fontSizes(
  {},
);

export default fontSizes;
