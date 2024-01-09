import { tooltipAnatomy } from "@ark-ui/anatomy";
import { defineSlotRecipe } from "@pandacss/dev";

/**
 * Tooltip recipe.
 */
const tooltip = defineSlotRecipe({
  className: "tooltip",
  description: "Tooltip style recipes",
  slots: tooltipAnatomy.extendWith("root").keys(),
  base: {
    content: {
      "--tooltip-background": "colors.background.default",
      bgColor: "var(--tooltip-background)",
      borderRadius: "md",
      boxShadow: "lg",
      maxW: 80,
      p: 2,
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
      "--arrow-background": "var(--tooltip-background)",
    },
    arrowTip: {
      borderTopWidth: "1px",
      borderLeftWidth: "1px",
    },
  },
});

export default tooltip;
