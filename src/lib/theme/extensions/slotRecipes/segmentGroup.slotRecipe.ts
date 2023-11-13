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
      display: "flex",
      flexDirection: {
        _horizontal: "row",
        _vertical: "column",
      },
      alignItems: "flex-start",
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
    item: {
      color: "foreground.muted",
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
