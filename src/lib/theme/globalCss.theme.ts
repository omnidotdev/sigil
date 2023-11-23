import { defineGlobalStyles } from "@pandacss/dev";

// NB: relative path needed for Storybook
import fonts from "./extensions/semanticTokens/fonts.semantic";

/**
 * Global CSS.
 */
const globalCss = defineGlobalStyles({
  "html, body": {
    fontFamily: fonts!.primary.value as string,
  },
  html: {
    lineHeight: 1.5,
    MozOsxFontSmoothing: "grayscale",
    textRendering: "optimizeLegibility",
    WebkitFontSmoothing: "antialiased",
    WebkitTextSizeAdjust: "100%",
  },
  body: {
    color: "foreground.default",
    bgColor: "background.canvas",
    fontFamily: "var(--font-primary), sans-serif",
    _light: {
      colorScheme: "light",
    },
    _dark: {
      colorScheme: "dark",
    },
  },
  "*, *::before, *::after": {
    borderColor: "border.subtle",
    borderStyle: "solid",
    boxSizing: "border-box",
  },
  "*::placeholder": {
    opacity: 1,
    color: "foreground.subtle",
  },
  "*::selection": {
    color: "background.default",
    bgColor: "accent.default",
  },
});

export default globalCss;
