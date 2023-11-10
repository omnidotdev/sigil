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
      display: "grid",
      gridTemplateRows: "0fr",
      transitionProperty: "grid-template-rows, padding-bottom",
      transitionDuration: "normal",
      transitionTimingFunction: "default",
      _open: {
        gridTemplateRows: "1fr",
      },
      "& > div": {
        overflow: "hidden",
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
