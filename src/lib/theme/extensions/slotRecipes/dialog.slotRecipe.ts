import { dialogAnatomy } from "@ark-ui/react";
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
        // TODO replace when supported in Panda: background.canvas/80
        base: "rgba(250, 250, 250, 0.8)",
        _dark: "rgba(10, 10, 10, 0.8)",
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
      borderWidth: 1,
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
