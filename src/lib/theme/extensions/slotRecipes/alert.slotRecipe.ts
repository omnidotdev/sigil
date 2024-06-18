import { defineSlotRecipe } from "@pandacss/dev";

// TODO semantic keys for type (e.g. `success.200`)

/**
 * Alert recipe.
 */
const alert = defineSlotRecipe({
  className: "alert",
  slots: ["root", "content", "description", "icon", "title"],
  description: "Alert style recipes",
  base: {
    root: {
      bgColor: "background.default",
      borderWidth: "1px",
      borderRadius: "md",
      display: "flex",
      gap: 3,
      p: 4,
      width: "full",
    },
    content: {
      display: "flex",
      flexDirection: "column",
      gap: 1,
    },
    description: {
      color: "foreground.muted",
      textStyle: "sm",
    },
    icon: {
      color: "foreground.default",
      flexShrink: 0,
      width: 5,
      height: 5,
      mt: 0.5,
    },
    title: {
      color: "foreground.default",
      fontWeight: "semibold",
    },
  },
  variants: {
    variant: {
      info: {
        root: {
          bgColor: "blue.100",
          borderColor: "blue.200",
        },
        title: {
          color: "blue.800!",
        },
        description: {
          color: "blue.800",
        },
        icon: {
          color: "blue.800",
        },
      },
      warning: {
        root: {
          bgColor: "yellow.100",
          borderColor: "yellow.200",
        },
        title: {
          color: "yellow.800!",
        },
        description: {
          color: "yellow.800",
        },
        icon: {
          color: "yellow.800",
        },
      },
      error: {
        root: {
          bgColor: "red.100",
          borderColor: "red.200",
        },
        title: {
          color: "red.800!",
        },
        description: {
          color: "red.800",
        },
        icon: {
          color: "red.800",
        },
      },
      success: {
        root: {
          bgColor: "green.100",
          borderColor: "green.200",
        },
        title: {
          color: "green.800!",
        },
        description: {
          color: "green.800",
        },
        icon: {
          color: "green.800",
        },
      },
    },
  },
});

export default alert;
