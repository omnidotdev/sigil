import { selectAnatomy } from "@ark-ui/anatomy";
import { defineSlotRecipe } from "@pandacss/dev";

/**
 * Select recipe.
 */
const select = defineSlotRecipe({
  className: "select",
  description: "Select style recipes",
  slots: selectAnatomy.keys(),
  base: {
    root: {
      display: "flex",
      flexDirection: "column",
      gap: 1.5,
      width: "full",
    },
    content: {
      bgColor: "background.default",
      borderRadius: "sm",
      boxShadow: "lg",
      display: "flex",
      flexDirection: "column",
      zIndex: "dropdown",
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
    item: {
      alignItems: "center",
      borderRadius: "xs",
      cursor: "pointer",
      display: "flex",
      justifyContent: "space-between",
      transitionDuration: "fast",
      transitionProperty: "background, color",
      transitionTimingFunction: "default",
      _hover: {
        color: "foreground.default",
        bgColor: "neutral.100a",
      },
      _highlighted: {
        color: "foreground.default",
        bgColor: "neutral.100a",
      },
      _selected: {
        color: "foreground.default",
      },
      _disabled: {
        color: "foreground.disabled",
        cursor: "not-allowed",
        _hover: {
          bgColor: "transparent",
        },
      },
    },
    itemGroupLabel: {
      fontWeight: "semibold",
      textStyle: "sm",
    },
    itemIndicator: {
      color: "accent.default",
    },
    label: {
      color: "foreground.default",
      fontWeight: "medium",
    },
    trigger: {
      appearance: "none",
      alignItems: "center",
      borderColor: "border.default",
      borderRadius: "sm",
      cursor: "pointer",
      display: "inline-flex",
      justifyContent: "space-between",
      outline: 0,
      position: "relative",
      transitionDuration: "normal",
      transitionProperty: "background, box-shadow, border-color",
      transitionTimingFunction: "default",
      width: "full",
      _placeholderShown: {
        color: "foreground.subtle",
      },
      "& :where(svg)": {
        color: "foreground.subtle",
      },
    },
  },
  defaultVariants: {
    size: "md",
    variant: "outline",
  },
  variants: {
    variant: {
      outline: {
        trigger: {
          borderWidth: "1px",
          _focus: {
            borderColor: "border.accent",
            boxShadow: "accent",
          },
        },
      },
      ghost: {
        trigger: {
          _hover: {
            bgColor: "neutral.100a",
          },
          _focus: {
            bgColor: "neutral.100a",
          },
        },
      },
    },
    size: {
      sm: {
        content: { p: 0.5, gap: 1 },
        item: { textStyle: "sm", px: 2, height: 9 },
        itemIndicator: {
          "& :where(svg)": {
            width: 4,
            height: 4,
          },
        },
        itemGroupLabel: {
          px: 2,
          py: 1.5,
        },
        label: { textStyle: "sm" },
        trigger: {
          px: 2.5,
          h: 9,
          minW: 9,
          fontSize: "sm",
          gap: 2,
          "& :where(svg)": {
            width: 4,
            height: 4,
          },
        },
      },
      md: {
        content: { p: 1, gap: 1 },
        item: { textStyle: "md", px: 2, height: 10 },
        itemIndicator: {
          "& :where(svg)": {
            width: 4,
            height: 4,
          },
        },
        itemGroupLabel: {
          px: 2,
          py: 1.5,
        },
        label: { textStyle: "sm" },
        trigger: {
          px: 3,
          h: 10,
          minW: 10,
          fontSize: "md",
          gap: 2,
          "& :where(svg)": {
            width: 4,
            height: 4,
          },
        },
      },
      lg: {
        content: { p: 1.5, gap: 1 },
        item: { textStyle: "md", px: 2, height: 11 },
        itemIndicator: {
          "& :where(svg)": {
            width: 5,
            height: 5,
          },
        },
        itemGroupLabel: {
          px: 2,
          py: 1.5,
        },
        label: { textStyle: "sm" },
        trigger: {
          px: 3.5,
          h: 11,
          minW: 11,
          fontSize: "md",
          gap: 2,
          "& :where(svg)": {
            width: 5,
            height: 5,
          },
        },
      },
    },
  },
});

export default select;
