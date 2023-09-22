import { defineRecipe } from "@pandacss/dev";

/**
 * Code recipe.
 */
const code = defineRecipe({
  className: "code",
  description: "Code style recipes",
  base: {
    alignItems: "center",
    bgColor: "background.subtle",
    borderRadius: "sm",
    color: "foreground.emphasized",
    display: "inline-flex",
    fontFamily: "var(--font-code)",
    fontWeight: "medium",
  },
  defaultVariants: {
    size: "md",
    variant: "outline",
  },
  variants: {
    variant: {
      outline: {
        borderWidth: "1px",
      },
      ghost: {},
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

export default code;
