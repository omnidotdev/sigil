import { comboboxAnatomy } from "@ark-ui/anatomy";
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
      width: "full",
    },
    control: {
      display: "flex",
      alignItems: "center",
      position: "relative",
    },
    label: {
      color: "foreground.default",
      fontWeight: "medium",
    },
    clearTrigger: {
      color: "foreground.muted",
      position: "absolute",
      cursor: "pointer",
      right: 7,
    },
    trigger: {
      color: "foreground.muted",
      bgColor: "background.default",
      position: "absolute",
      right: 1,
      bottom: 1,
      top: 1,
    },
    content: {
      bgColor: "background.default",
      borderRadius: "sm",
      boxShadow: "lg",
      display: "flex",
      flexDirection: "column",
      overflowY: "auto",
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
        outlineColor: "colorPalette.outline",
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
        bgColor: "background.muted",
      },
      _highlighted: {
        bgColor: "background.muted",
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
      color: "colorPalette.default",
    },
  },
  defaultVariants: {
    size: "md",
  },
  variants: {
    // TODO fix sizes not working
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
      },
    },
  },
});

export default combobox;
