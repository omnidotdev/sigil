import { toastAnatomy } from "@ark-ui/anatomy";
import { defineSlotRecipe } from "@pandacss/dev";

/**
 * Toast recipe.
 */
const toast = defineSlotRecipe({
  className: "toast",
  description: "Toast style recipes",
  slots: toastAnatomy.keys(),
  base: {
    root: {
      bgColor: "background.default",
      borderRadius: "md",
      boxShadow: "lg",
      minWidth: "xs",
      height: "var(--height)",
      opacity: "var(--opacity)",
      overflowWrap: "anywhere",
      p: 4,
      position: "relative",
      scale: "var(--scale)",
      translate: "var(--x) var(--y) 0",
      willChange: "translate, opacity, scale",
      zIndex: "var(--z-index)",
      transitionDuration: "slow",
      transitionProperty: "translate, scale, opacity, height",
      transitionTimingFunction: "default",
    },
    title: {
      color: "foreground.default",
      fontWeight: "semibold",
      textStyle: "sm",
    },
    description: {
      color: "foreground.muted",
      textStyle: "sm",
    },
    actionTrigger: {
      mt: 2,
    },
    closeTrigger: {
      position: "absolute",
      top: 3,
      right: 3,
    },
  },
});

export default toast;
