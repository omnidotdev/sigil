import { accordionAnatomy } from "@ark-ui/anatomy";
import { defineSlotRecipe } from "@pandacss/dev";

/**
 * Accordion recipe.
 */
const accordion = defineSlotRecipe({
  className: "accordion",
  description: "Accordion style recipes",
  slots: accordionAnatomy.keys(),
  base: {
    root: {
      divideY: "1px",
      width: "full",
      borderYWidth: "1px",
    },
    itemTrigger: {
      alignItems: "center",
      color: "foreground.default",
      cursor: "pointer",
      display: "flex",
      fontWeight: "semibold",
      gap: 3,
      justifyContent: "space-between",
      textStyle: "lg",
      textAlign: "left",
      width: "full",
      _disabled: {
        color: "foreground.disabled",
        cursor: "not-allowed",
      },
    },
    itemIndicator: {
      color: "foreground.muted",
      transformOrigin: "center",
      transitionDuration: "normal",
      transitionProperty: "transform",
      transitionTimingFunction: "default",
      _open: {
        transform: "rotate(-180deg)",
      },
    },
    itemContent: {
      color: "foreground.muted",
      overflow: "hidden",
      transitionProperty: "padding-bottom",
      transitionDuration: "normal",
      transitionTimingFunction: "default",
      _open: {
        animation: "collapse-in",
      },
      _closed: {
        animation: "collapse-out",
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
  variants: {
    size: {
      md: {
        itemTrigger: {
          py: 4,
        },
        itemContent: {
          pb: 6,
          pr: 8,
          _closed: {
            pb: 0,
          },
        },
      },
    },
  },
});

export default accordion;
