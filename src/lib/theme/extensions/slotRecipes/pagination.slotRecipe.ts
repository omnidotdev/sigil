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
      justifyContent: "space-between",
      gap: 4,
    },
    list: {
      display: "flex",
      gap: 2,
    },
    pageTrigger: {
      fontVariantNumeric: "tabular-nums",
    },
    ellipsis: {
      alignItems: "center",
      color: "foreground.emphasized",
      display: "inline-flex",
      fontWeight: "semibold",
      px: 2,
    },
  },
});

export default pagination;
