import { pinInputAnatomy } from "@ark-ui/react";
import { defineSlotRecipe } from "@pandacss/dev";

/**
 * Pin input recipe.
 */
const pinInput = defineSlotRecipe({
  className: "pinInput",
  description: "PIN input style recipes",
  slots: pinInputAnatomy.keys(),
  base: {
    control: {
      display: "flex",
      gap: 2,
    },
  },
});

export default pinInput;
