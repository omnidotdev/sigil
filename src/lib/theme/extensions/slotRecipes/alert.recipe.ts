import { defineSlotRecipe } from "@pandacss/dev";

// TODO add variants (e.g. MUI: https://mui.com/material-ui/react-alert/)

/**
 * Alert recipe.
 */
const alert = defineSlotRecipe({
  className: "alert",
  slots: ["root", "content", "description", "icon", "title"],
  description: "Alert style recipes",
  base: {
    root: {
      background: "background.default",
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
      color: "foreground.emphasized",
      flexShrink: 0,
      width: 5,
      height: 5,
    },
    title: {
      fontWeight: "semibold",
      textStyle: "sm",
    },
  },
});

export default alert;
