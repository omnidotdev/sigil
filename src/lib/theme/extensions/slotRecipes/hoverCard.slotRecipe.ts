import { hoverCardAnatomy } from "@ark-ui/anatomy";
import { defineSlotRecipe } from "@pandacss/dev";

/**
 * Hover card recipe.
 */
const hoverCard = defineSlotRecipe({
  className: "hoverCard",
  description: "Hover card style recipes",
  slots: hoverCardAnatomy.keys(),
  base: {
    content: {
      "--hover-card-background": "colors.background.default",
      bgColor: "var(--hover-card-background)",
      borderRadius: "md",
      borderWidth: "1px",
      boxShadow: "lg",
      maxW: 80,
      p: 4,
      position: "relative",
      _open: {
        animation: "fadeIn 0.25s ease-out",
      },
      _closed: {
        animation: "fadeOut 0.2s ease-out",
      },
    },
    arrow: {
      "--arrow-size": "12px",
      "--arrow-background": "var(--hover-card-background)",
    },
    arrowTip: {
      borderTopWidth: "1px",
      borderLeftWidth: "1px",
    },
  },
});

export default hoverCard;
