import { defineRecipe } from "@pandacss/dev";

/**
 * Icon recipe.
 */
const icon = defineRecipe({
  className: "icon",
  description: "Icon style recipes",
  base: {
    display: "inline-block",
    flexShrink: 0,
    verticalAlign: "middle",
    lineHeight: "1em",
  },
  defaultVariants: {
    size: "md",
  },
  variants: {
    size: {
      xs: {
        w: 4,
        h: 4,
      },
      sm: {
        w: 5,
        h: 5,
      },
      md: {
        w: 6,
        h: 6,
      },
      lg: {
        w: 7,
        h: 7,
      },
      xl: {
        w: 8,
        h: 8,
      },
    },
  },
});

export default icon;
