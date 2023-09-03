import { segmentGroupAnatomy } from "@ark-ui/react";
import { defineSlotRecipe } from "@pandacss/dev";

/**
 * Segment group recipe.
 */
const segmentGroup = defineSlotRecipe({
  className: "segmentGroup",
  description: "Segment group style recipes",
  slots: segmentGroupAnatomy.keys(),
  base: {
    root: {
      display: "flex",
      flexDirection: {
        _horizontal: "row",
        _vertical: "column",
      },
      gap: {
        _horizontal: 4,
        _vertical: 1,
      },
      borderBottomWidth: {
        _horizontal: "1px",
      },
      borderLeftWidth: {
        _vertical: "1px",
      },
    },
    indicator: {
      borderBottomWidth: {
        _horizontal: "2px",
      },
      borderLeftWidth: {
        _vertical: "2px",
      },
      borderColor: "accent.default",
      transform: {
        _horizontal: "translateY(1px)",
        _vertical: "translateX(-1px)",
      },
    },
    radio: {
      color: "foreground.subtle",
      cursor: "pointer",
      fontWeight: "medium",
      transitionDuration: "normal",
      transitionProperty: "color",
      transitionTimingFunction: "default",
      _hover: {
        color: "foreground.muted",
      },
      _checked: {
        fontWeight: "semibold",
        color: "foreground.emphasized",
        _hover: {
          color: "foreground.emphasized",
        },
      },
      _disabled: {
        color: "foreground.disabled",
        cursor: "not-allowed",
        _hover: {
          color: "foreground.disabled",
        },
      },
      px: {
        _horizontal: 1,
        _vertical: 3,
      },
      pb: {
        _horizontal: 3,
      },
      py: {
        _vertical: 1.5,
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
  variants: {
    size: {
      sm: {
        radio: {
          textStyle: "sm",
        },
      },
      md: {
        radio: {
          textStyle: "md",
        },
      },
    },
  },
});

export default segmentGroup;
