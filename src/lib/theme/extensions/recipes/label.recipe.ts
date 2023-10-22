import { defineRecipe } from "@pandacss/dev";

/**
 * Label recipe.
 */
const label = defineRecipe({
  className: "label",
  description: "Label style recipes",
  base: {
    color: "foreground.default",
    fontWeight: "medium",
  },
  defaultVariants: {
    size: "md",
  },
  variants: {
    size: {
      sm: {
        textStyle: "sm",
      },
      md: {
        textStyle: "sm",
      },
      lg: {
        textStyle: "sm",
      },
      xl: {
        textStyle: "md",
      },
    },
  },
});

export default label;
