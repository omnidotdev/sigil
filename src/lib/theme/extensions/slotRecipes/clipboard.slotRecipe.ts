import { clipboardAnatomy } from "@ark-ui/anatomy";
import { defineSlotRecipe } from "@pandacss/dev";

/**
 * Clipboard recipe.
 */
const clipboard = defineSlotRecipe({
  className: "clipboard",
  description: "Clipboard style recipes",
  slots: clipboardAnatomy.keys(),
  base: {
    root: {
      display: "flex",
      flexDirection: "column",
      gap: 1.5,
    },
    control: {
      display: "flex",
      gap: 3,
    },
  },
});

export default clipboard;
