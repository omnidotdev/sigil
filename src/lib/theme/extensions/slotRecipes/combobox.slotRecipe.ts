import { comboboxAnatomy } from "@ark-ui/react";
import { defineSlotRecipe } from "@pandacss/dev";

/**
 * Combobox recipe.
 */
const combobox = defineSlotRecipe({
  className: "combobox",
  description: "Combobox style recipes",
  slots: comboboxAnatomy.keys(),
  base: {
    root: {
      display: "flex",
      flexDirection: "column",
      gap: 1.5,
    },
    control: {
      position: "relative",
    },
    trigger: {
      position: "absolute!",
      right: 0,
      bottom: 0,
      top: 0,
    },
    content: {
      bgColor: "background.default",
      borderRadius: "sm",
      borderWidth: "1px",
      boxShadow: "sm",
      display: "flex",
      flexDirection: "column",
      _hidden: {
        display: "none",
      },
      _open: {
        animation: "fadeIn 0.25s ease-out",
      },
      _closed: {
        animation: "fadeOut 0.2s ease-out",
      },
      _focusVisible: {
        outlineOffset: "2px",
        outline: "2px solid",
        outlineColor: "border.outline",
      },
    },
    option: {
      alignItems: "center",
      borderRadius: "xs",
      cursor: "pointer",
      display: "flex",
      fontWeight: "medium",
      transitionDuration: "fast",
      transitionProperty: "background, color",
      transitionTimingFunction: "default",
      _hover: {
        bgColor: "background.subtle",
      },
      _highlighted: {
        bgColor: "background.subtle",
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
  variants: {
    size: {
      sm: {
        content: { p: 0.5, gap: 1 },
        option: { textStyle: "sm", px: 2, height: 9 },
      },
      md: {
        content: { p: 1, gap: 1 },
        option: { textStyle: "md", px: 2, height: 10 },
        trigger: { right: 4 },
      },
      lg: {
        content: { p: 1.5, gap: 1 },
        option: { textStyle: "md", px: 2, height: 11 },
      },
    },
  },
});

export default combobox;
