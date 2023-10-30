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
      fontWeight: "semibold",
      textStyle: "sm",
    },
    description: {
      color: "foreground.muted",
      textStyle: "sm",
    },
  },
});

export default toast;
