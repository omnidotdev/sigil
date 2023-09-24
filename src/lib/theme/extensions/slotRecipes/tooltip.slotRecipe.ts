import { tooltipAnatomy } from "@ark-ui/react";
import { defineSlotRecipe } from "@pandacss/dev";

/**
 * Tooltip recipe.
 */
const tooltip = defineSlotRecipe({
  className: "tooltip",
  description: "Tooltip style recipes",
  slots: tooltipAnatomy.keys(),
  base: {
    content: {
      bgColor: "foreground.default",
      borderRadius: "sm",
      boxShadow: "sm",
      color: "background.default",
      fontWeight: "semibold",
      px: 3,
      py: 2,
      textStyle: "xs",
      maxWidth: "2xs",
      _open: {
        animation: "fadeIn 0.25s ease-out",
      },
      _closed: {
        animation: "fadeOut 0.2s ease-out",
      },
    },
  },
});

export default tooltip;
