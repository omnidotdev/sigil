import { defineRecipe } from "@pandacss/dev";

/**
 * Badge recipe.
 */
const badge = defineRecipe({
  className: "badge",
  description: "Badge style recipes",
  base: {
    alignItems: "center",
    borderRadius: "full",
    colorPalette: "accent",
    display: "inline-flex",
    fontWeight: "medium",
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
        bgColor: "colorPalette.default",
        color: "colorPalette.foreground",
      },
      subtle: {
        bgColor: "background.subtle",
        borderColor: "border.subtle",
        borderWidth: 1,
        color: "foreground.default",
        "& svg": {
          color: "foreground.muted",
        },
      },
      outline: {
        borderWidth: 1.5,
        borderColor: "border.default",
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
        textStyle: "xs",
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
