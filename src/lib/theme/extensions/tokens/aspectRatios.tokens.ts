import { defineTokens } from "@pandacss/dev";

import type { Tokens } from "@pandacss/dev";

/**
 * Aspect ratio tokens.
 */
const aspectRatios: Tokens["aspectRatios"] = defineTokens.aspectRatios({
  "1:1": { value: "1" },
  "4:3": { value: "4 / 3" },
  "3:4": { value: "3 / 4" },
  "16:9": { value: "16 / 9" },
  "18:5": { value: "18 / 5" },
  "1.618:1": { value: "1.618 / 1" },
});

export default aspectRatios;
