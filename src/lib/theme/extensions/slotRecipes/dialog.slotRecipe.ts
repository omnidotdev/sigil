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
        base: "white.800a",
        _dark: "black.800a",
      },
      height: "100vh",
      left: 0,
      position: "fixed",
      top: 0,
      width: "100vw",
      zIndex: "overlay",
      _open: {
        animation: "backdrop-in",
      },
      _closed: {
        animation: "backdrop-out",
      },
    },
    positioner: {
      alignItems: "center",
      display: "flex",
      justifyContent: "center",
      left: 0,
      overflow: "auto",
      position: "fixed",
      top: 0,
      width: "100vw",
      height: "100dvh",
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
