import { radioGroupAnatomy } from "@ark-ui/anatomy";
import { defineSlotRecipe } from "@pandacss/dev";

/**
 * Rounded rectangle radio button variant styles.
 */
const roundedRectangleStyles = {
  radioLabel: {
    _checked: {
      color: "background.default",
    },
  },
  radio: {
    px: "0!",
    appearance: "none",
    borderColor: "border.emphasized",
    borderRadius: "sm",
    borderWidth: "1px",
    color: "foreground.emphasized",
    display: "inline-flex",
    fontWeight: "semibold",
    justifyContent: "center",
    outline: "none",
    position: "relative",
    transitionDuration: "normal",
    transitionProperty: "background, border-color, color, box-shadow",
    transitionTimingFunction: "default",
    userSelect: "none",
    verticalAlign: "middle",
    whiteSpace: "nowrap",
    _hover: {
      background: "gray.50",
    },
    _checked: {
      cursor: "default",
      borderColor: "border.accent",
    },
    _disabled: {
      borderColor: "border.disabled",
      color: "foreground.disabled",
      cursor: "not-allowed",
      _hover: {
        bgColor: "initial",
        borderColor: "border.disabled",
        color: "foreground.disabled",
      },
    },
  },
};

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
      flexWrap: "wrap",
      flexDirection: {
        _vertical: "column",
        _horizontal: "row",
      },
    },
    radio: {
      alignItems: "center",
      cursor: "pointer",
      display: "flex",
      _disabled: {
        cursor: "not-allowed",
      },
    },
    radioLabel: {
      color: "foreground.emphasized",
      fontWeight: "medium",
      _disabled: {
        color: "foreground.disabled",
      },
    },
  },
  defaultVariants: {
    size: "md",
    variant: "regular",
  },
  variants: {
    variant: {
      regular: {
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
          _disabled: {
            borderColor: "border.disabled",
            color: "foreground.disabled",
            _hover: {
              bgColor: "initial",
              color: "foreground.disabled",
            },
          },
        },
      },
      solid: {
        ...roundedRectangleStyles,
        radio: {
          ...roundedRectangleStyles.radio,
          _checked: {
            ...roundedRectangleStyles.radio._checked,
            bgColor: "accent.default",
            color: "background.default",
            _hover: {
              color: "accent.foreground",
              bgColor: "accent.default",
            },
          },
        },
      },
      outline: {
        ...roundedRectangleStyles,
        radioLabel: {
          _checked: {
            color: "accent.default",
          },
        },
        radio: {
          ...roundedRectangleStyles.radio,
          _checked: {
            ...roundedRectangleStyles.radio._checked,
            boxShadow: "accent",
            _hover: {
              bgColor: "initial",
            },
          },
        },
      },
    },
    size: {
      sm: {
        root: {
          gap: 2,
        },
        radio: {
          h: 9,
          minW: 9,
          textStyle: "sm",
          px: 3.5,
          "& svg": {
            width: 4.5,
            height: 4.5,
          },
        },
        radioLabel: {
          gap: 2,
        },
      },
      md: {
        root: {
          gap: 3,
        },
        radio: {
          h: 10,
          minW: 10,
          textStyle: "sm",
          px: 4,
          "& svg": {
            width: 5,
            height: 5,
          },
        },
        radioLabel: {
          gap: 2,
        },
      },
      lg: {
        root: {
          gap: 3,
        },
        radio: {
          h: 11,
          minW: 11,
          textStyle: "md",
          px: 4.5,
          "& svg": {
            width: 5,
            height: 5,
          },
        },
        radioLabel: {
          gap: 2,
        },
      },
      xl: {
        root: {
          gap: 3,
        },
        radio: {
          h: 12,
          minW: 12,
          textStyle: "md",
          px: 5,
          "& svg": {
            width: 5,
            height: 5,
          },
        },
        radioLabel: {
          gap: 2.5,
        },
      },
    },
  },
  compoundVariants: [
    {
      variant: "regular",
      size: "sm",
      css: {
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
    },
    {
      variant: "regular",
      size: "md",
      css: {
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
    },
    {
      variant: "regular",
      size: "lg",
      css: {
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
  ],
});

export default radioGroup;
