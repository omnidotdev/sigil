import { defineTokens } from "@pandacss/dev";

import type { Tokens } from "@pandacss/dev";

/**
 * Animation tokens.
 */
const animations: Tokens["animations"] = defineTokens.animations({
  spin: { value: "spin 1s linear infinite" },
  ping: { value: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite" },
  pulse: { value: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite" },
  bounce: { value: "bounce 1s infinite" },
  "backdrop-in": {
    value: "fade-in 250ms {easings.emphasized-in}",
  },
  "backdrop-out": {
    value: "fade-out 200ms {easings.emphasized-out}",
  },
  "modal-in": {
    value: "slide-in 400ms {easings.emphasized-in}",
  },
  "modal-out": {
    value: "slide-out 200ms {easings.emphasized-out}",
  },
  "drawer-in-left": {
    value: "slide-in-left 400ms {easings.emphasized-in}",
  },
  "drawer-out-left": {
    value: "slide-out-left 200ms {easings.emphasized-out}",
  },
  "drawer-in-right": {
    value: "slide-in-right 400ms {easings.emphasized-in}",
  },
  "drawer-out-right": {
    value: "slide-out-right 200ms {easings.emphasized-out}",
  },
  "drawer-in-bottom": {
    value: "slide-in-bottom 400ms {easings.emphasized-in}",
  },
  "drawer-out-bottom": {
    value: "slide-out-bottom 200ms {easings.emphasized-out}",
  },
  "fade-in": {
    value: "fade-in 400ms {easings.emphasized-in}",
  },
  "skeleton-pulse": {
    value: "skeleton-pulse 2s {easings.pulse} infinite",
  },
});

export default animations;
