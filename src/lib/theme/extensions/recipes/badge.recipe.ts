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
        "& svg": {
          color: "foreground.muted",
        },
      },
      outline: {
        borderWidth: 1.5,
        borderColor: "border.emphasized",
      },
    },
    size: {
      sm: {
        textStyle: "xs",
        px: 2,
        h: 5,
        gap: 1,
        "& svg": {
          width: 3,
          height: 3,
        },
      },
      md: {
        textStyle: "sm",
        px: 2.5,
        h: 6,
        gap: 1.5,
        "& svg": {
          width: 4,
          height: 4,
        },
      },
      lg: {
        textStyle: "sm",
        px: 3,
        h: 7,
        gap: 1.5,
        "& svg": {
          width: 4,
          height: 4,
        },
      },
    },
  },
});

export default badge;
