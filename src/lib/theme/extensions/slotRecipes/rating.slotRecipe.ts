import { ratingGroupAnatomy } from "@ark-ui/anatomy";
import { defineSlotRecipe } from "@pandacss/dev";

/**
 * Rating group recipe.
 */
const rating = defineSlotRecipe({
  className: "rating",
  description: "Rating style recipes",
  slots: ratingGroupAnatomy.keys(),
  base: {
    root: {
      display: "flex",
      flexDirection: "column",
      gap: 1.5,
    },
    label: {
      color: "foreground.default",
      fontWeight: "medium",
    },
    control: {
      display: "flex",
    },
    item: {
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
        label: {
          textStyle: "sm",
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
        label: {
          textStyle: "sm",
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
        label: {
          textStyle: "sm",
        },
      },
    },
  },
});

export default rating;
