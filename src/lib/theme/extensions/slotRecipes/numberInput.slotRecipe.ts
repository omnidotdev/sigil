import { numberInputAnatomy } from "@ark-ui/react";
import { defineSlotRecipe } from "@pandacss/dev";

/**
 * Number input recipe.
 */
const numberInput = defineSlotRecipe({
  className: "numberInput",
  description: "Number input style recipes",
  slots: numberInputAnatomy.keys(),
  base: {
    root: {
      borderColor: "border.emphasized",
      borderRadius: "sm",
      borderWidth: "1px",
      display: "flex",
      overflow: "hidden",
      width: "full",
      transitionDuration: "normal",
      transitionProperty: "border-color, box-shadow",
      transitionTimingFunction: "default",
      _focusWithin: {
        borderColor: "border.accent",
        boxShadow: "accent",
      },
    },
    control: {
      borderLeftWidth: "1px",
      borderColor: "border.emphasized",
      display: "flex",
      flexDirection: "column",
    },
    input: {
      outline: "none",
      bgColor: "transparent",
      width: "full",
    },
    decrementTrigger: {
      borderRadius: 0,
    },
    incrementTrigger: {
      borderRadius: 0,
    },
  },
  defaultVariants: {
    size: "md",
  },
  variants: {
    size: {
      md: {
        root: {
          ps: 3,
          h: 10,
          minW: 10,
          fontSize: "md",
        },
      },
      lg: {
        root: {
          ps: 3.5,
          h: 11,
          minW: 11,
          fontSize: "md",
        },
      },
      xl: {
        root: {
          ps: 4,
          h: 12,
          minW: 12,
          fontSize: "lg",
        },
      },
    },
  },
});

export default numberInput;
