import { selectAnatomy } from "@ark-ui/react";
import { defineSlotRecipe } from "@pandacss/dev";

/**
 * Select recipe.
 */
const select = defineSlotRecipe({
  className: "select",
  description: "Select style recipes",
  slots: selectAnatomy.keys(),
  base: {
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
    label: {
      color: "foreground.emphasized",
      fontWeight: "medium",
    },
    trigger: {
      appearance: "none",
      alignItems: "center",
      backgroundColor: "background.default",
      borderColor: "border.emphasized",
      borderRadius: "sm",
      borderWidth: "1px",
      cursor: "pointer",
      display: "inline-flex",
      justifyContent: "space-between",
      outline: 0,
      position: "relative",
      transitionDuration: "normal",
      transitionProperty: "box-shadow, border-color",
      transitionTimingFunction: "default",
      width: "full",
      _focus: {
        borderColor: "border.accent",
        boxShadow: "accent",
      },
      _placeholderShown: {
        color: "foreground.subtle",
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
        label: { textStyle: "sm" },
        trigger: { px: 2.5, h: 9, minW: 9, fontSize: "sm", gap: 2 },
      },
      md: {
        content: { p: 1, gap: 1 },
        option: { textStyle: "md", px: 2, height: 10 },
        label: { textStyle: "sm" },
        trigger: { px: 3, h: 10, minW: 10, fontSize: "md", gap: 2 },
      },
      lg: {
        content: { p: 1.5, gap: 1 },
        option: { textStyle: "md", px: 2, height: 11 },
        label: { textStyle: "sm" },
        trigger: { px: 3.5, h: 11, minW: 11, fontSize: "md", gap: 2 },
      },
    },
  },
});

export default select;
