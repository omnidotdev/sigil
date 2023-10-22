import { dialogAnatomy } from "@ark-ui/anatomy";
import { defineSlotRecipe } from "@pandacss/dev";

/**
 * Dialog recipe.
 */
const dialog = defineSlotRecipe({
  className: "dialog",
  description: "Dialog style recipes",
  slots: [...dialogAnatomy.keys(), "root"],
  base: {
    backdrop: {
      backdropFilter: "blur(4px)",
      bgColor: {
        base: "whiteAlpha.800",
        _dark: "blackAlpha.800",
      },
      inset: 0,
      position: "fixed",
      zIndex: "overlay",
      _open: {
        animation: "backdrop-in",
      },
      _closed: {
        animation: "backdrop-out",
      },
    },
    container: {
      alignItems: "center",
      display: "flex",
      inset: 0,
      justifyContent: "center",
      position: "fixed",
      zIndex: "modal",
    },
    content: {
      bgColor: "background.default",
      borderRadius: "md",
      boxShadow: "lg",
      minW: "sm",
      position: "relative",
      _open: {
        animation: "dialog-in",
      },
      _closed: {
        animation: "dialog-out",
      },
    },
    title: {
      fontWeight: "semibold",
      textStyle: "lg",
    },
    description: {
      color: "foreground.muted",
      textStyle: "sm",
    },
  },
});

export default dialog;
