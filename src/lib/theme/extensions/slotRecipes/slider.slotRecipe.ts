import { sliderAnatomy } from "@ark-ui/anatomy";
import { defineSlotRecipe } from "@pandacss/dev";

/**
 * Slider recipe.
 */
const slider = defineSlotRecipe({
  className: "slider",
  description: "Slider style recipes",
  slots: sliderAnatomy.keys(),
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
      bgColor: "background.emphasized",
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
      borderWidth: 3,
      boxShadow: "sm",
      outline: "none",
      cursor: "pointer",
    },
    label: {
      color: "foreground.default",
      fontWeight: "medium",
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

export default slider;
