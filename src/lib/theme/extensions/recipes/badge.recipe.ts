import { defineRecipe } from "@pandacss/dev";

/**
 * Badge recipe.
 */
const badge = defineRecipe({
  className: "badge",
  description: "Badge style recipes",
  base: {
    borderRadius: "full",
    fontWeight: "medium",
    display: "inline-flex",
    alignItems: "center",
    userSelect: "none",
    whiteSpace: "nowrap",
  },
  defaultVariants: {
    variant: "subtle",
    size: "md",
  },
  variants: {
    variant: {
      solid: {
        bgColor: "accent.default",
        color: "accent.foreground",
      },
      subtle: {
        bgColor: "background.subtle",
        borderColor: "border.default",
        borderWidth: 1,
        color: "foreground.emphasized",
      },
      outline: {
        borderWidth: 1.5,
        borderColor: "border.emphasized",
      },
    },
    size: {
      sm: { textStyle: "xs", px: 2, h: 5, gap: 1 },
      md: { textStyle: "sm", px: 2.5, h: 6, gap: 1.5 },
      lg: { textStyle: "sm", px: 3, h: 7, gap: 1.5 },
    },
  },
});

export default badge;
