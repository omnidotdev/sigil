import { popoverAnatomy } from "@ark-ui/anatomy";
import { defineSlotRecipe } from "@pandacss/dev";

/**
 * Popover recipe.
 */
const popover = defineSlotRecipe({
  className: "popover",
  description: "Popover style recipes",
  slots: popoverAnatomy.keys(),
  base: {
    positioner: {
      position: "relative",
      zIndex: "popover",
    },
    content: {
      bgColor: "background.default",
      borderRadius: "md",
      borderWidth: "1px",
      boxShadow: "md",
      display: "flex",
      flexDirection: "column",
      maxWidth: "sm",
      p: 4,
      _open: {
        animation: "fadeIn 0.25s ease-out",
      },
      _closed: {
        animation: "fadeOut 0.2s ease-out",
      },
      _hidden: {
        display: "none",
      },
    },
    title: {
      fontWeight: "medium",
      textStyle: "sm",
    },
    description: {
      color: "foreground.muted",
      textStyle: "sm",
    },
    closeTrigger: {
      color: "foreground.muted",
    },
    arrow: {
      "--arrow-size": "var(--sizes-3)",
      "--arrow-background": "var(--colors-background-default)",
    },
    arrowTip: {
      borderTopWidth: "1px",
      borderLeftWidth: "1px",
    },
  },
});

export default popover;
