import { radioGroupAnatomy } from "@ark-ui/anatomy";
import { defineSlotRecipe } from "@pandacss/dev";

// TODO fix "flashing" whole item control background of previous selection when value changes

/**
 * Rounded rectangle radio button variant styles.
 */
// TODO type
const roundedRectangleStyles = {
  root: {
    colorPalette: "accent",
    display: "flex",
    flexWrap: "wrap",
  },
  item: {
    alignItems: "center",
    appearance: "none",
    borderColor: "border.default",
    borderRadius: "sm",
    borderWidth: "1px",
    color: "foreground.default",
    cursor: "pointer",
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
      bgColor: "background.subtle",
    },
    _checked: {
      cursor: "default",
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
  itemControl: {
    display: "none",
  },
  itemText: {
    display: "inline-flex",
    alignItems: "center",
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
      colorPalette: "accent",
      display: "flex",
      flexDirection: {
        _vertical: "column",
      },
      gap: {
        _vertical: 2,
        _horizontal: 4,
      },
    },
    itemControl: {
      borderColor: "border.default",
      borderRadius: "full",
      borderWidth: "1px",
      transitionDuration: "normal",
      transitionProperty: "background",
      transitionTimingFunction: "default",
      _hover: {
        bgColor: "background.subtle",
      },
      _checked: {
        bgColor: "colorPalette.default",
        borderColor: "colorPalette.default",
        outlineColor: "background.default",
        outlineStyle: "solid",
        _hover: {
          bgColor: "colorPalette.default",
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
    item: {
      alignItems: "center",
      cursor: "pointer",
      display: "flex",
      gap: 2,
      _disabled: {
        cursor: "not-allowed",
      },
    },
    itemText: {
      color: "foreground.default",
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
        itemControl: {
          bgColor: "transparent",
          borderColor: "border.default",
          borderRadius: "full",
          borderWidth: "1px",
          _hover: {
            bgColor: "background.subtle",
          },
          _checked: {
            bgColor: "colorPalette.default",
            borderColor: "colorPalette.default",
            outlineColor: "background.default",
            outlineStyle: "solid",
            _hover: {
              bgColor: "colorPalette.default",
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
        item: {
          ...roundedRectangleStyles.item,
          _checked: {
            ...roundedRectangleStyles.item._checked,
            bgColor: "colorPalette.default",
            color: "colorPalette.foreground",
            _hover: {
              bgColor: "colorPalette.default",
            },
          },
        },
        itemText: {
          _checked: {
            color: "colorPalette.foreground",
          },
        },
      },
      outline: {
        ...roundedRectangleStyles,
        item: {
          ...roundedRectangleStyles.item,
          _checked: {
            ...roundedRectangleStyles.item._checked,
            boxShadow: "0 0 0 1px var(--colors-color-palette-default)",
            _hover: {
              bgColor: "initial",
            },
          },
        },
      },
    },
    size: {
      sm: {
        itemControl: {
          width: 4,
          height: 4,
          _checked: {
            outlineWidth: "3px",
            outlineOffset: "-4px",
          },
        },
        itemText: {
          textStyle: "sm",
        },
      },
      md: {
        itemControl: {
          width: 5,
          height: 5,
          _checked: {
            outlineWidth: "4px",
            outlineOffset: "-5px",
          },
        },
        itemText: {
          textStyle: "md",
        },
      },
      lg: {
        itemControl: {
          width: 6,
          height: 6,
          _checked: {
            outlineWidth: "5px",
            outlineOffset: "-6px",
          },
        },
        itemText: {
          textStyle: "lg",
        },
      },
    },
  },
  compoundVariants: [
    {
      variant: ["solid", "outline"],
      size: "sm",
      css: {
        root: {
          gap: 2,
        },
        item: {
          p: 4,
          width: 4,
          height: 4,
        },
      },
    },
    {
      variant: ["solid", "outline"],
      size: "md",
      css: {
        root: {
          gap: 2,
        },
        item: {
          p: 5,
          width: 7,
          height: 7,
        },
      },
    },
    {
      variant: ["solid", "outline"],
      size: "lg",
      css: {
        root: {
          gap: 2,
        },
        item: {
          p: 6,
          width: 8,
          height: 8,
        },
      },
    },
  ],
});

export default radioGroup;
