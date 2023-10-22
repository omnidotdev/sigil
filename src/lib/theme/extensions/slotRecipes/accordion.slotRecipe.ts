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
    },
    trigger: {
      alignItems: "center",
      color: "foreground.default",
      cursor: "pointer",
      display: "flex",
      fontWeight: "semibold",
      justifyContent: "space-between",
      textStyle: "lg",
      width: "full",
    },
    content: {
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
        trigger: {
          py: 4,
        },
        content: {
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
