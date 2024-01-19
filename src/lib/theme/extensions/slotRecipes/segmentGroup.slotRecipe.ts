import { segmentGroupAnatomy } from "@ark-ui/anatomy";
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
      alignItems: "flex-start",
      colorPalette: "accent",
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
      borderColor: "colorPalette.default",
      _horizontal: {
        borderBottomWidth: "2px",
        transform: "translateY(1px)",
        width: "var(--width)",
      },
      _vertical: {
        borderLeftWidth: "2px",
        height: "var(--height)",
        transform: "translateX(-1px)",
      },
    },
    item: {
      color: "foreground.muted",
      cursor: "pointer",
      fontWeight: "medium",
      transitionDuration: "normal",
      transitionProperty: "color",
      transitionTimingFunction: "default",
      _hover: {
        color: "foreground.default",
      },
      _checked: {
        fontWeight: "semibold",
        color: "foreground.default",
        _hover: {
          color: "foreground.default",
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
        item: {
          textStyle: "sm",
        },
      },
      md: {
        item: {
          textStyle: "md",
        },
      },
    },
  },
});

export default segmentGroup;
