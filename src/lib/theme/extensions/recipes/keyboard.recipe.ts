import { defineRecipe } from "@pandacss/dev";

/**
 * Keyboard recipe.
 */
const keyboard = defineRecipe({
  className: "keyboard",
  description: "Keyboard style recipes",
  base: {
    alignItems: "center",
    color: "foreground.default",
    bgColor: "background.subtle",
    borderRadius: "sm",
    boxShadow:
      "0 -2px 0 0 inset var(--colors-border-muted), 0 0 0 1px inset var(--colors-border-muted)",
    display: "inline-flex",
    fontFamily: "var(--font-code)",
    fontWeight: "medium",
    whiteSpace: "pre",
  },
  defaultVariants: {
    size: "md",
  },
  variants: {
    variant: {
      ghost: {
        boxShadow: "none",
      },
    },
    size: {
      sm: {
        height: 5,
        px: 0.5,
        textStyle: "xs",
      },
      md: {
        height: 6,
        px: 1,
        py: "1px",
        textStyle: "sm",
      },
      lg: {
        height: 7,
        px: 1.5,
        py: "1px",
        textStyle: "md",
      },
    },
  },
});

export default keyboard;
