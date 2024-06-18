import { toggleGroupAnatomy } from "@ark-ui/anatomy";
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
      width: "fit-content",
      overflow: "hidden",
      position: "relative",
      _vertical: {
        flexDirection: "column",
      },
    },
    item: {
      alignItems: "center",
      appearance: "none",
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
      _on: {
        color: "foreground.default",
        bgColor: "neutral.300a",
        _hover: {
          bgColor: "neutral.300a",
        },
      },
      _hover: {
        background: "neutral.200a",
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
          borderColor: "border.default",
          _horizontal: {
            divideX: "1px",
          },
          _vertical: {
            divideY: "1px",
          },
        },
        item: {
          borderColor: "border.default",
          _focusVisible: {
            color: "foreground.default",
            bgColor: "gray.300a",
          },
        },
      },
      ghost: {
        root: {
          gap: 1,
        },
        item: {
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
        item: {
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
        item: {
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
        item: {
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
