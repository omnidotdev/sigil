import { ratingGroupAnatomy } from "@ark-ui/react";
import { defineSlotRecipe } from "@pandacss/dev";

/**
 * Rating group recipe.
 */
const rating = defineSlotRecipe({
  className: "rating",
  description: "Rating style recipes",
  slots: ratingGroupAnatomy.keys(),
  base: {
    control: {
      display: "flex",
    },
    rating: {
      cursor: "pointer",
      transitionDuration: "normal",
      transitionProperty: "color, fill",
      transitionTimingFunction: "default",

      color: "var(--colors-background-emphasized)",
      fill: "var(--colors-background-emphasized)",
      _highlighted: {
        color: "var(--colors-accent-default)",
        fill: "var(--colors-accent-default)",
      },
      _focusVisible: {
        outline: "2px solid",
        outlineColor: "border.accent",
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
  variants: {
    size: {
      sm: {
        control: {
          gap: 0,
        },
        rating: {
          "& svg": {
            width: 4,
            height: 4,
          },
        },
      },
      md: {
        control: {
          gap: 0.5,
        },
        rating: {
          "& svg": {
            width: 5,
            height: 5,
          },
        },
      },
      lg: {
        control: {
          gap: 0.5,
        },
        rating: {
          "& svg": {
            width: 6,
            height: 6,
          },
        },
      },
    },
  },
});

export default rating;
