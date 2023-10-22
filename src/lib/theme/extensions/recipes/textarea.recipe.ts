import { defineRecipe } from "@pandacss/dev";

/**
 * Textarea recipe.
 */
const textarea = defineRecipe({
  className: "textarea",
  description: "Textarea style recipes",
  base: {
    bgColor: "background.default",
    appearance: "none",
    borderColor: "border.default",
    borderRadius: "sm",
    borderWidth: "1px",
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
      borderColor: "border.accent",
      boxShadow: "accent",
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
