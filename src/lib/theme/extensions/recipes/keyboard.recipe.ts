import { defineRecipe } from "@pandacss/dev";

/**
 * Keyboard recipe.
 */
const keyboard = defineRecipe({
  className: "keyboard",
  description: "Keyboard style recipes",
  base: {
    alignItems: "center",
    bgColor: "background.subtle",
    borderRadius: "sm",
    borderWidth: "1px 1px 3px",
    display: "inline-flex",
    fontFamily: "var(--font-code)",
    fontWeight: "medium",
  },
  defaultVariants: {
    size: "md",
  },
  variants: {
    size: {
      sm: {
        height: 5,
        px: 0.5,
        textStyle: "xs",
      },
      md: {
        height: 6,
        px: 1,
        textStyle: "sm",
      },
      lg: {
        height: 7,
        px: 1.5,
        textStyle: "md",
      },
    },
  },
});

export default keyboard;
