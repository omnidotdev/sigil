import { splitterAnatomy } from "@ark-ui/react";
import { defineSlotRecipe } from "@pandacss/dev";

/**
 * Splitter recipe.
 */
const splitter = defineSlotRecipe({
  className: "splitter",
  description: "Splitter style recipes",
  slots: splitterAnatomy.keys(),
  base: {
    root: {
      display: "flex",
      gap: 2,
    },
    panel: {
      borderWidth: 1,
      bgColor: "background.subtle",
      borderRadius: "sm",
      color: "foreground.muted",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    resizeTrigger: {
      borderRadius: "full",
      transitionDuration: "normal",
      transitionProperty: "background",
      transitionTimingFunction: "default",
      outline: 0,
      bgColor: "background.muted",
      _hover: {
        bgColor: "accent.default",
      },
      _active: {
        bgColor: "accent.default",
      },
      _horizontal: {
        minWidth: 1,
      },
      _vertical: {
        minHeight: 1,
      },
    },
  },
});

export default splitter;
