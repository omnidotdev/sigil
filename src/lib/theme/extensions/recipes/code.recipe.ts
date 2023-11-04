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
    color: "foreground.default",
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
        minHeight: 5,
        px: 0.5,
        textStyle: "xs",
      },
      md: {
        minHeight: 6,
        px: 1,
        py: "1px",
        textStyle: "sm",
      },
      lg: {
        minHeight: 7,
        px: 1.5,
        py: "1px",
        textStyle: "md",
      },
    },
  },
});

export default code;
