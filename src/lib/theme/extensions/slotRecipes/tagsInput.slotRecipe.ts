import { tagsInputAnatomy } from "@ark-ui/anatomy";
import { defineSlotRecipe } from "@pandacss/dev";

/**
 * Tags input recipe.
 */
const tagsInput = defineSlotRecipe({
  className: "tagsInput",
  description: "Tags input style recipes",
  slots: tagsInputAnatomy.keys(),
  base: {
    root: {
      colorPalette: "accent",
      display: "flex",
      flexDirection: "column",
      gap: 1.5,
      width: "full",
    },
    control: {
      alignItems: "center",
      borderColor: "border.default",
      borderRadius: "sm",
      borderWidth: "1px",
      display: "flex",
      flexWrap: "wrap",
      outline: 0,
      transitionDuration: "normal",
      transitionProperty: "border-color, box-shadow",
      transitionTimingFunction: "default",
      _focusWithin: {
        borderColor: "colorPalette.default",
        boxShadow: "0 0 0 1px var(--colors-color-palette-default)",
      },
    },
    input: {
      bgColor: "transparent",
      color: "foreground.default",
      outline: "none",
    },
    itemPreview: {
      alignItems: "center",
      borderColor: "border.default",
      borderRadius: "xs",
      borderWidth: "1px",
      color: "foreground.default",
      display: "inline-flex",
      fontWeight: "medium",
      _highlighted: {
        borderColor: "colorPalette.default",
        boxShadow: "0 0 0 1px var(--colors-color-palette-default)",
      },
      _hidden: {
        display: "none",
      },
    },
    itemInput: {
      bgColor: "transparent",
      color: "foreground.default",
      outline: "none",
    },
    label: {
      color: "foreground.default",
      fontWeight: "medium",
      textStyle: "sm",
    },
  },
  defaultVariants: {
    size: "md",
  },
  variants: {
    size: {
      md: {
        root: {
          gap: 1.5,
        },
        control: {
          fontSize: "md",
          gap: 1.5,
          minW: 10,
          px: 3,
          py: "7px", // TODO line break
        },
        itemPreview: {
          gap: 1,
          h: 6,
          pe: 1,
          ps: 2,
          textStyle: "sm",
        },
      },
    },
  },
});

export default tagsInput;
