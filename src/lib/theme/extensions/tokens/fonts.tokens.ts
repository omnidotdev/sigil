import { defineTokens } from "@pandacss/dev";

/**
 * Font tokens.
 */
const fonts = defineTokens.fonts({
  assistant: {
    value: `var(--font-assistant), "Helvetica Neue", Helvetica, Arial, sans-serif`,
    description: "Assistant (sans-serif) font",
  },
  firaCode: {
    value: `var(--font-fira-code), monospace`,
    description: "Fira Code (mono) font",
  },
});

export default fonts;
