import { dialogAnatomy } from "@ark-ui/anatomy";
import { defineSlotRecipe } from "@pandacss/dev";

const anatomy = dialogAnatomy.extendWith("root", "header", "body", "footer");

/**
 * Drawer recipe.
 */
const drawer = defineSlotRecipe({
  className: "drawer",
  description: "Drawer style recipes",
  slots: anatomy.keys(),
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
      height: "100dvh",
      justifyContent: "center",
      position: "fixed",
      top: 0,
      width: { base: "100vw", sm: "sm" },
      zIndex: "dialog",
    },
    content: {
      bgColor: "background.default",
      boxShadow: "lg",
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
        positioner: {
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
        positioner: {
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
