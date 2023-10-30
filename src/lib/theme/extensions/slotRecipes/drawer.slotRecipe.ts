import { dialogAnatomy } from "@ark-ui/anatomy";
import { defineSlotRecipe } from "@pandacss/dev";

const anatomy = dialogAnatomy.extendWith("root", "header", "body", "footer");

/**
 * Drawer recipe.
 */
const drawer = defineSlotRecipe({
  className: "drawer",
  description: "Drawer style recipes",
  slots: [...anatomy.keys()],
  base: {
    backdrop: {
      backdropFilter: "blur(4px)",
      bgColor: {
        base: "white.800a",
        _dark: "black.800a",
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
      width: { base: "full", sm: "sm" },
      zIndex: "modal",
    },
    content: {
      bgColor: "background.default",
      boxShadow: "xl",
      display: "grid",
      divideY: "1px",
      gridTemplateColumns: "1fr",
      gridTemplateRows: "auto 1fr auto",
      gridTemplateAreas: `
        "header"
        "body"
        "footer"
      `,
      height: "full",
      width: "full",
      _hidden: {
        display: "none",
      },
    },
    header: {
      display: "flex",
      flexDirection: "column",
      gap: 1,
      gridArea: "header",
      pt: { base: 4, md: 6 },
      pb: 4,
      px: { base: 4, md: 6 },
    },
    body: {
      display: "flex",
      flexDirection: "column",
      gridArea: "body",
      overflow: "auto",
      p: { base: 4, md: 6 },
    },
    footer: {
      display: "flex",
      gridArea: "footer",
      justifyContent: "flex-end",
      py: 4,
      px: { base: 4, md: 6 },
    },
    title: {
      color: "foreground.default",
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
