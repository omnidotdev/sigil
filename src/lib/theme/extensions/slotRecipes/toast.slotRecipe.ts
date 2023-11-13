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
      p: 4,
      position: "relative",
      _open: {
        animation: "slideInFromBottom 0.2s ease-out",
      },
      _closed: {
        animation: "slideOutFromBottom 0.2s ease-out",
      },
    },
    group: {
      p: 4,
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
    closeTrigger: {
      position: "absolute",
      top: 3,
      right: 3,
    },
  },
});

export default toast;
