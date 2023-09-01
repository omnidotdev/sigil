import { rangeSliderAnatomy } from "@ark-ui/react";
import { defineSlotRecipe } from "@pandacss/dev";

/**
 * Range slider recipe.
 */
const rangeSlider = defineSlotRecipe({
  className: "range-slider",
  description: "Range slider style recipes",
  slots: rangeSliderAnatomy.keys(),
  base: {
    root: {
      width: "full",
    },
    control: {
      position: "relative",
      display: "flex",
      alignItems: "center",
    },
    track: {
      backgroundColor: "background.muted",
      borderRadius: "sm",
      flex: 1,
      cursor: "pointer",
    },
    range: {
      bgColor: "accent.default",
      borderRadius: "sm",
    },
    thumb: {
      bgColor: "background.default",
      borderColor: "border.accent",
      borderRadius: "full",
      borderWidth: "2px",
      boxShadow: "sm",
      outline: "none",
      cursor: "pointer",
    },
    label: {
      color: "foreground.emphasized",
      fontWeight: "semibold",
    },
  },
  defaultVariants: {
    size: "md",
  },
  variants: {
    size: {
      md: {
        control: {
          py: 2,
        },
        range: {
          height: 2,
        },
        track: {
          height: 2,
        },
        thumb: {
          height: 6,
          width: 6,
        },
        marker: {
          mt: 2,
          textStyle: "sm",
        },
        label: {
          textStyle: "sm",
        },
      },
    },
  },
});

export default rangeSlider;
