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
      colorPalette: "accent",
      display: "flex",
      flexDirection: "column",
      gap: 1,
      width: "full",
    },
    control: {
      position: "relative",
      display: "flex",
      alignItems: "center",
    },
    track: {
      bgColor: "background.emphasized",
      borderRadius: "full",
      overflow: "hidden",
      flex: 1,
      cursor: "pointer",
    },
    range: {
      bgColor: "colorPalette.default",
    },
    thumb: {
      bgColor: "background.default",
      borderColor: "colorPalette.default",
      borderRadius: "full",
      borderWidth: 3,
      boxShadow: "sm",
      outline: "none",
      zIndex: "foreground",
      cursor: "pointer",
    },
    label: {
      color: "foreground.default",
      fontWeight: "medium",
    },
    markerGroup: {
      mt: -1,
    },
    marker: {
      "--before-bgColor": {
        base: "colors.white",
        _dark: "colors.colorPalette.foreground",
      },
      color: "foreground.muted",
      _before: {
        bgColor: "white",
        borderRadius: "full",
        content: "''",
        display: "block",
        left: "50%",
        position: "relative",
        transform: "translateX(-50%)",
      },
      _underValue: {
        _before: {
          bgColor: "var(--before-bgColor)",
        },
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
          height: 4,
        },
        range: {
          height: 1.5,
        },
        track: {
          height: 1.5,
        },
        thumb: {
          height: 4,
          width: 4,
        },
        marker: {
          _before: {
            height: 1,
            top: -2.5,
            width: 1,
          },
          textStyle: "sm",
        },
        label: {
          textStyle: "sm",
        },
      },
      md: {
        control: {
          height: 5,
        },
        range: {
          height: 2,
        },
        track: {
          height: 2,
        },
        thumb: {
          height: 5,
          width: 5,
        },
        marker: {
          _before: {
            height: 1,
            top: -3,
            width: 1,
          },
          textStyle: "sm",
        },
        label: {
          textStyle: "sm",
        },
      },
      lg: {
        control: {
          height: 6,
        },
        range: {
          height: 2.5,
        },
        track: {
          height: 2.5,
        },
        thumb: {
          height: 6,
          width: 6,
        },
        marker: {
          _before: {
            height: 1.5,
            top: "-15px",
            width: 1.5,
          },
          textStyle: "md",
        },
        label: {
          textStyle: "md",
        },
      },
    },
  },
});

export default slider;
