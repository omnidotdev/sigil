import { dialogAnatomy } from "@ark-ui/anatomy";
import { defineSlotRecipe } from "@pandacss/dev";

/**
 * Drawer recipe.
 */
const drawer = defineSlotRecipe({
  className: "drawer",
  description: "Drawer style recipes",
  slots: [...dialogAnatomy.keys(), "root"],
  base: {
    backdrop: {
      backdropFilter: "blur(4px)",
      bgColor: {
        // TODO replace when supported in Panda: `background.canvas/80`
        // TODO extract colors to tokens
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
      top: 0,
      bottom: 0,
      justifyContent: "center",
      position: "fixed",
      zIndex: "modal",
    },
    content: {
      bgColor: "background.default",
      boxShadow: "xl",
      display: "flex",
      flexDirection: "column",
      height: "full",
      width: { base: "full", sm: "sm" },
      overflowY: "auto",
      position: "relative",
      _hidden: {
        display: "none",
      },
      px: {
        base: 4,
        md: 6,
      },
      py: 6,
    },
    title: {
      fontWeight: "semibold",
      textStyle: "xl",
    },
    description: {
      color: "foreground.muted",
      textStyle: "sm",
    },
  },
  defaultVariants: {
    placement: "right",
  },
  variants: {
    placement: {
      left: {
        container: {
          left: 0,
        },
        content: {
          _open: {
            animation: "drawer-in-left",
          },
          _closed: {
            animation: "drawer-out-left",
          },
        },
      },
      right: {
        container: {
          right: 0,
        },
        content: {
          _open: {
            animation: "drawer-in-right",
          },
          _closed: {
            animation: "drawer-out-right",
          },
        },
      },
    },
  },
});

export default drawer;
