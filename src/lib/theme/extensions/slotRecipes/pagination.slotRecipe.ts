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
      borderColor: "border.subtle!",
      _hover: {
        bgColor: "background.emphasized!",
      },
      _selected: {
        _hover: {
          bgColor: "colorPalette.default!",
        },
        bgColor: "colorPalette.default!",
        borderColor: "colorPalette.default!",
      },
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
