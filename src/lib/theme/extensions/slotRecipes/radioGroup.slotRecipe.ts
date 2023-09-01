import { radioGroupAnatomy } from "@ark-ui/react";
import { defineSlotRecipe } from "@pandacss/dev";

/**
 * Radio group recipe.
 */
const radioGroup = defineSlotRecipe({
  className: "radioGroup",
  description: "Radio group style recipes",
  slots: radioGroupAnatomy.keys(),
  base: {
    root: {
      display: "flex",
      flexDirection: {
        _vertical: "column",
        _horizontal: "row",
      },
    },
    radioControl: {
      bgColor: "transparent",
      borderColor: "border.emphasized",
      borderRadius: "full",
      borderWidth: "1px",
      transitionDuration: "normal",
      transitionProperty: "background",
      transitionTimingFunction: "default",
      _hover: {
        bgColor: "background.subtle",
      },
      _checked: {
        bgColor: "accent.default",
        borderColor: "border.accent",
        outlineColor: "background.default",
        outlineStyle: "solid",
        _hover: {
          bgColor: "accent.default",
        },
      },
    },
    radio: {
      alignItems: "center",
      cursor: "pointer",
      display: "flex",
    },
    radioLabel: {
      color: "foreground.emphasized",
      fontWeight: "medium",
    },
  },
  defaultVariants: {
    size: "md",
  },
  variants: {
    size: {
      sm: {
        root: {
          gap: {
            _vertical: 3,
            _horizontal: 4,
          },
        },
        radio: {
          gap: 2,
        },
        radioControl: {
          width: 4,
          height: 4,
          _checked: {
            outlineWidth: "3px",
            outlineOffset: "-4px",
          },
        },
        radioLabel: {
          textStyle: "sm",
        },
      },
      md: {
        root: {
          gap: {
            _vertical: 4,
            _horizontal: 6,
          },
        },
        radio: {
          gap: 3,
        },
        radioControl: {
          width: 5,
          height: 5,
          _checked: {
            outlineWidth: "4px",
            outlineOffset: "-5px",
          },
        },
        radioLabel: {
          textStyle: "md",
        },
      },
      lg: {
        root: {
          gap: {
            _vertical: 5,
            _horizontal: 8,
          },
        },
        radio: {
          gap: 4,
        },
        radioControl: {
          width: 6,
          height: 6,
          _checked: {
            outlineWidth: "5px",
            outlineOffset: "-6px",
          },
        },
        radioLabel: {
          textStyle: "lg",
        },
      },
    },
  },
});

export default radioGroup;
