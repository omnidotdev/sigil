import { defineRecipe } from "@pandacss/dev";

/**
 * Textarea recipe.
 */
const textarea = defineRecipe({
  className: "textarea",
  description: "Textarea style recipes",
  base: {
    appearance: "none",
    background: "none",
    borderColor: "border.default",
    borderRadius: "sm",
    borderWidth: "1px",
    colorPalette: "accent",
    minWidth: 0,
    outline: 0,
    position: "relative",
    transitionDuration: "normal",
    transitionProperty: "border-color, box-shadow",
    width: "full",
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed",
    },
    _focus: {
      borderColor: "colorPalette.default",
      boxShadow: "0 0 0 1px var(--colors-color-palette-default)",
    },
  },
  defaultVariants: {
    size: "md",
  },
  variants: {
    size: {
      sm: { p: 2.5, fontSize: "sm" },
      md: { p: 3, fontSize: "md" },
      lg: { p: 3.5, fontSize: "md" },
      xl: { p: 4, fontSize: "md" },
    },
  },
});

export default textarea;
