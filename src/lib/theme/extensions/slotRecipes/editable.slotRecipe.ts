import { editableAnatomy } from "@ark-ui/react";
import { defineSlotRecipe } from "@pandacss/dev";

/**
 * Editable recipe.
 */
const editable = defineSlotRecipe({
  className: "editable",
  description: "Editable style recipes",
  slots: editableAnatomy.keys(),
  base: {
    root: {
      display: "flex",
      flexDirection: "column",
      gap: 1.5,
      width: "100%",
    },
    control: {
      display: "flex",
      gap: 2,
    },
  },
});

export default editable;
