import { paginationAnatomy } from "@ark-ui/anatomy";
import { defineSlotRecipe } from "@pandacss/dev";

/**
 * Pagination recipe.
 */
const pagination = defineSlotRecipe({
  className: "pagination",
  description: "Pagination style recipes",
  slots: paginationAnatomy.keys(),
  base: {
    root: {
      display: "flex",
      gap: 2.5,
    },
    item: {
      fontVariantNumeric: "tabular-nums",
    },
    ellipsis: {
      alignItems: "center",
      color: "foreground.default",
      display: "inline-flex",
      fontWeight: "semibold",
      px: 2,
    },
  },
});

export default pagination;
