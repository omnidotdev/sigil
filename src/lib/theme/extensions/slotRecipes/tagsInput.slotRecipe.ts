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
      width: "full",
      display: "flex",
      flexDirection: "column",
    },
    control: {
      alignItems: "center",
      borderColor: "border.emphasized",
      borderRadius: "sm",
      borderWidth: "1px",
      display: "flex",
      flexWrap: "wrap",
      outline: 0,
      transitionDuration: "normal",
      transitionProperty: "border-color, box-shadow",
      transitionTimingFunction: "default",
      _focusWithin: {
        borderColor: "border.accent",
        boxShadow: "accent",
      },
    },
    input: {
      outline: "none",
      bgColor: "transparent",
    },
    tag: {
      alignItems: "center",
      borderColor: "border.emphasized",
      borderRadius: "xs",
      borderWidth: "1px",
      color: "foreground.emphasized",
      bgColor: "background.subtle",
      display: "inline-flex",
      fontWeight: "medium",
      _highlighted: {
        borderColor: "border.accent",
        boxShadow: "accent",
      },
      _hidden: {
        display: "none",
      },
    },
    tagInput: {
      bgColor: "transparent",
      outline: "none",
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
        tag: {
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
