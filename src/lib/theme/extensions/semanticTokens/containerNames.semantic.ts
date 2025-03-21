import { defineSemanticTokens } from "@pandacss/dev";

import type { Tokens } from "@pandacss/dev";

/**
 * Container name semantic tokens.
 */
const containerNames: Tokens["containerNames"] =
  defineSemanticTokens.containerNames({});

export default containerNames;
