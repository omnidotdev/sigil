import { collapsibleAnatomy } from "@ark-ui/anatomy";
import { defineSlotRecipe } from "@pandacss/dev";

/**
 * Collapsible recipe.
 */
const collapsible = defineSlotRecipe({
  className: "collapsible",
  description: "Collapsible style recipes",
  slots: collapsibleAnatomy.keys(),
  base: {
    root: {
      alignItems: "flex-start",
      display: "flex",
      flexDirection: "column",
      width: "full",
    },
    content: {
      overflow: "hidden",
      width: "full",
      _open: {
        animation: "collapse-in",
      },
      _closed: {
        animation: "collapse-out",
      },
    },
  },
});

export default collapsible;
