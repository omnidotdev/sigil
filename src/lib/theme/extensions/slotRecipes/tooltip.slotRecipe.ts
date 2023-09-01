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
      boxShadow: "lg",
      color: "background.default",
      fontWeight: "semibold",
      px: 3,
      py: 2,
      textStyle: "xs",
    },
  },
});

export default tooltip;
