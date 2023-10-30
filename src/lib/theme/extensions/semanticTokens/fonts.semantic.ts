import { defineSemanticTokens } from "@pandacss/dev";

import type { SemanticTokens } from "@pandacss/dev";

/**
 * Font semantic tokens.
 */
const fonts: SemanticTokens["fonts"] = defineSemanticTokens.fonts({
  primary: {
    value: `var(--font-primary), "Helvetica Neue", Helvetica, Arial, sans-serif`,
    description: "Primary font",
  },
  code: {
    value: `var(--font-code), monospace`,
    description: "Code font",
  },
});

export default fonts;
