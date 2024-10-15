import { colorPickerAnatomy } from "@ark-ui/anatomy";
import { defineSlotRecipe } from "@pandacss/dev";

/**
 * Color picker recipe.
 */
const colorPicker = defineSlotRecipe({
  className: "colorPicker",
  description: "Color picker style recipes",
  slots: [
    ...colorPickerAnatomy.keys(),
    // TODO remove this manual slot, Ark currently doesn't correctly export anatomy `valueSwatch` slot upstream but it should in the future
    "valueSwatch",
  ],
  base: {
    root: {
      display: "flex",
      flexDirection: "column",
      gap: 1.5,
    },
    label: {
      color: "foreground.default",
      fontWeight: "medium",
      textStyle: "sm",
    },
    control: {
      display: "flex",
      flexDirection: "row",
      gap: 2,
    },
    content: {
      bgColor: "background.default",
      borderRadius: "md",
      boxShadow: "lg",
      display: "flex",
      flexDirection: "column",
      maxWidth: "sm",
      p: 4,
      zIndex: "dropdown",
      _open: {
        animation: "fadeIn 0.25s ease-out",
      },
      _closed: {
        animation: "fadeOut 0.2s ease-out",
      },
      _hidden: {
        display: "none",
      },
    },
    area: {
      height: 36,
      borderRadius: "sm",
      overflow: "hidden",
    },
    areaThumb: {
      borderRadius: "full",
      height: 2.5,
      width: 2.5,
      boxShadow: "white 0px 0px 0px 2px, black 0px 0px 2px 1px",
      outline: "none",
    },
    areaBackground: {
      height: "full",
    },
    channelSlider: {
      borderRadius: "sm",
    },
    channelSliderTrack: {
      height: 3,
      borderRadius: "sm",
    },
    swatchGroup: {
      display: "grid",
      gridTemplateColumns: "repeat(7, 1fr)",
      gap: 2,
      bgColor: "background.default",
    },
    swatchTrigger: {
      cursor: "pointer",
    },
    swatch: {
      height: 6,
      width: 6,
      borderRadius: "sm",
      boxShadow:
        "0 0 0 1px var(--colors-border-emphasized), 0 0 0 2px var(--colors-background-default) inset",
    },
    channelSliderThumb: {
      borderRadius: "full",
      height: 2.5,
      width: 2.5,
      boxShadow: "white 0px 0px 0px 2px, black 0px 0px 2px 1px",
      transform: "translate(-50%, -50%)",
      outline: "none",
    },
    transparencyGrid: {
      borderRadius: "sm",
    },
  },
});

export default colorPicker;
