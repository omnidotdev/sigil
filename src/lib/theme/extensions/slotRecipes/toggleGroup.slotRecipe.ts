import { toggleGroupAnatomy } from "@ark-ui/react";
import { defineSlotRecipe } from "@pandacss/dev";

/**
 * Toggle group recipe.
 */
const toggleGroup = defineSlotRecipe({
  className: "toggleGroup",
  description: "Toggle group style recipes",
  slots: toggleGroupAnatomy.keys(),
  base: {
    root: {
      display: "flex",
      overflow: "hidden",
      position: "relative",
      _vertical: {
        flexDirection: "column",
      },
    },
    toggle: {
      alignItems: "center",
      appearance: "none",
      bgColor: "background.default",
      cursor: "pointer",
      color: "foreground.subtle",
      display: "inline-flex",
      fontWeight: "semibold",
      minWidth: 0,
      justifyContent: "center",
      outline: "none",
      position: "relative",
      transitionDuration: "normal",
      transitionProperty: "background, border-color, color, box-shadow",
      transitionTimingFunction: "default",
      userSelect: "none",
      verticalAlign: "middle",
      whiteSpace: "nowrap",
      zIndex: 1,
      _hover: {
        color: "foreground.emphasized",
        bgColor: "background.subtle",
      },
      _checked: {
        bgColor: "background.subtle",
        color: "foreground.emphasized",
      },
      _pressed: {
        bgColor: "background.subtle",
        color: "foreground.emphasized",
      },
      _disabled: {
        borderColor: "border.disabled",
        color: "foreground.disabled",
        cursor: "not-allowed",
        _hover: {
          bgColor: "transparent",
          borderColor: "border.disabled",
          color: "foreground.disabled",
        },
      },
    },
  },
  defaultVariants: {
    size: "md",
    variant: "outline",
  },
  variants: {
    variant: {
      outline: {
        root: {
          borderWidth: "1px",
          borderRadius: "sm",
          borderColor: "border.emphasized",
          _horizontal: {
            divideX: "1px",
          },
          _vertical: {
            divideY: "1px",
          },
        },
        toggle: {
          borderColor: "border.emphasized",
          _focusVisible: {
            color: "foreground.emphasized",
            bgColor: "background.subtle",
          },
        },
      },
      ghost: {
        root: {
          gap: 1,
        },
        toggle: {
          borderRadius: "sm",
          _focusVisible: {
            outlineOffset: "2px",
            outline: "2px solid",
            outlineColor: "border.outline",
          },
        },
      },
    },
    size: {
      sm: {
        toggle: {
          h: 9,
          minW: 9,
          textStyle: "sm",
          gap: 2,
          "& svg": {
            width: 4.5,
            height: 4.5,
          },
        },
      },
      md: {
        toggle: {
          h: 10,
          minW: 10,
          textStyle: "sm",
          gap: 2,
          "& svg": {
            width: 5,
            height: 5,
          },
        },
      },
      lg: {
        toggle: {
          h: 11,
          minW: 11,
          textStyle: "md",
          gap: 2,
          "& svg": {
            width: 5,
            height: 5,
          },
        },
      },
    },
  },
});

export default toggleGroup;
