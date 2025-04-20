import { toastAnatomy } from "@ark-ui/anatomy";
import { defineSlotRecipe } from "@pandacss/dev";

/**
 * Toast recipe.
 */
const toast = defineSlotRecipe({
  className: "toast",
  description: "Toast style recipes",
  slots: toastAnatomy.keys(),
  base: {
    root: {
      // TODO semantic keys (e.g. `success.default`, `error.default`)
      // TODO investigate/consider matching colors up with `Alert` variants
      // TODO wrap in conditions
      bgColor: {
        '&[data-type="base"]': "background.default",
        '&[data-type="info"]': { base: "blue.50", _dark: "blue.950" },
        '&[data-type="loading"]': { base: "cyan.50", _dark: "cyan.950" },
        '&[data-type="success"]': { base: "green.50", _dark: "green.950" },
        '&[data-type="warning"]': { base: "yellow.50", _dark: "yellow.950" },
        '&[data-type="error"]': { base: "red.50", _dark: "red.950" },
      },
      borderColor: {
        '&[data-type="info"]': { base: "blue.200", _dark: "blue.800" },
        '&[data-type="loading"]': { base: "cyan.200", _dark: "cyan.800" },
        '&[data-type="success"]': { base: "green.200", _dark: "green.800" },
        '&[data-type="warning"]': { base: "yellow.200", _dark: "yellow.800" },
        '&[data-type="error"]': { base: "red.200", _dark: "red.800" },
      },
      borderWidth: "1px",
      borderRadius: "md",
      boxShadow: "lg",
      minWidth: "xs",
      height: "var(--height)",
      opacity: "var(--opacity)",
      overflowWrap: "anywhere",
      p: 4,
      position: "relative",
      scale: "var(--scale)",
      translate: "var(--x) var(--y) 0",
      willChange: "translate, opacity, scale",
      zIndex: "var(--z-index)",
      transitionDuration: "slow",
      transitionProperty: "translate, scale, opacity, height",
      transitionTimingFunction: "default",
    },
    title: {
      color: "foreground.default",
      fontWeight: "semibold",
      textStyle: "sm",
      width: "90%",
    },
    description: {
      color: "foreground.muted",
      textStyle: "sm",
      width: "90%",
    },
    actionTrigger: {
      mt: 2,
    },
    closeTrigger: {
      position: "absolute",
      top: 2,
      right: 2,
    },
  },
});

export default toast;
