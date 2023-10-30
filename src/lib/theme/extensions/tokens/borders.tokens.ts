import { defineTokens } from "@pandacss/dev";

import type { Tokens } from "@pandacss/dev";

/**
 * Border tokens.
 */
const borders: Tokens["borders"] = defineTokens.borders({
  none: { value: "none" },
});

export default borders;
