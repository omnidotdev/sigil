import { defineTokens } from "@pandacss/dev";

import type { Tokens } from "@pandacss/dev";

/**
 * Easing function tokens.
 */
const easings: Tokens["easings"] = defineTokens.easings({
  default: { value: "cubic-bezier(0.4, 0, 0.2, 1)" },
  linear: { value: "linear" },
  pulse: { value: "cubic-bezier(0.4, 0.0, 0.6, 1.0)" },
  in: { value: "cubic-bezier(0.4, 0, 1, 1)" },
  out: { value: "cubic-bezier(0, 0, 0.2, 1)" },
  "in-out": { value: "cubic-bezier(0.4, 0, 0.2, 1)" },
  "emphasized-in": { value: "cubic-bezier(0.05, 0.7, 0.1, 1)" },
  "emphasized-out": { value: "cubic-bezier(0.3, 0, 0.8, 0.15)" },
});

export default easings;
