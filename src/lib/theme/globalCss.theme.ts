import { defineGlobalStyles } from "@pandacss/dev";

// NB: relative path needed for Storybook
import fonts from "./extensions/semanticTokens/fonts.semantic";

/**
 * Global CSS.
 */
const globalCss = defineGlobalStyles({
  "html, body": {
    fontFamily: fonts.primary.value,
  },
  html: {
    lineHeight: 1.5,
    MozOsxFontSmoothing: "grayscale",
    textRendering: "optimizeLegibility",
    WebkitFontSmoothing: "antialiased",
    WebkitTextSizeAdjust: "100%",
  },
  body: {
    bgColor: "background.canvas",
    color: "foreground.default",
    fontFamily: "var(--font-primary), sans-serif",
    _light: {
      colorScheme: "light",
    },
    _dark: {
      colorScheme: "dark",
    },
  },
  "*, *::before, *::after": {
    borderColor: "border.default",
    borderStyle: "solid",
    boxSizing: "border-box",
  },
  "*::placeholder": {
    opacity: 1,
    color: "foreground.subtle",
  },
});

export default globalCss;
