import { defineSlotRecipe } from "@pandacss/dev";

/**
 * Card recipe.
 */
const card = defineSlotRecipe({
  className: "card",
  description: "Card style recipes",
  slots: ["root", "header", "content", "footer", "title", "description"],
  base: {
    root: {
      bgColor: "background.default",
      borderRadius: "md",
      borderWidth: "1px",
      boxShadow: "xs",
      display: "flex",
      flexDirection: "column",
      position: "relative",
    },
    header: {
      display: "flex",
      flexDirection: "column",
      gap: 1,
      p: 6,
    },
    content: {
      display: "flex",
      flex: 1,
      flexDirection: "column",
      px: 6,
      pb: 6,
    },
    footer: {
      display: "flex",
      justifyContent: "flex-end",
      pt: 2,
      pb: 6,
      px: 6,
    },
    title: {
      textStyle: "lg",
      fontWeight: "semibold",
    },
    description: {
      color: "foreground.muted",
      textStyle: "sm",
    },
  },
});

export default card;
