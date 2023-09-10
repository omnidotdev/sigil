import { menuAnatomy } from "@ark-ui/react";
import { defineSlotRecipe } from "@pandacss/dev";

const itemStyle = {
  alignItems: "center",
  borderRadius: "xs",
  color: "foreground.emphasized",
  cursor: "pointer",
  display: "flex",
  fontWeight: "medium",
  textStyle: "sm",
  transitionDuration: "fast",
  transitionProperty: "background, color",
  transitionTimingFunction: "default",
  _hover: {
    color: "foreground.default",
    bgColor: "background.subtle",
  },
  _highlighted: {
    color: "foreground.default",
    bgColor: "background.subtle",
  },
} as const;

/**
 * Menu recipe.
 */
const menu = defineSlotRecipe({
  className: "menu",
  description: "Menu style recipes",
  slots: menuAnatomy.keys(),
  base: {
    itemGroupLabel: {
      fontWeight: "semibold",
      textStyle: "sm",
    },
    content: {
      bgColor: "background.default",
      borderRadius: "sm",
      borderWidth: "1px",
      boxShadow: "lg",
      display: "flex",
      flexDirection: "column",
      outline: "none",
      _hidden: {
        display: "none",
      },
      _open: {
        animation: "fadeIn 0.25s ease-out",
      },
      _closed: {
        animation: "fadeOut 0.2s ease-out",
      },
    },
    itemGroup: {
      display: "flex",
      flexDirection: "column",
    },
    item: itemStyle,
    optionItem: itemStyle,
    triggerItem: itemStyle,
  },
  defaultVariants: {
    size: "md",
  },
  variants: {
    size: {
      xs: {
        itemGroup: {
          gap: 1,
        },
        itemGroupLabel: {
          py: 1.5,
          px: 1.5,
          mx: 1,
        },
        content: {
          py: 1,
          gap: 1,
          minW: 24,
        },
        item: {
          h: 8,
          px: 1.5,
          mx: 1,
        },
        optionItem: {
          h: 8,
          px: 1.5,
          mx: 1,
        },
        triggerItem: {
          h: 8,
          px: 1.5,
          mx: 1.5,
        },
      },
      sm: {
        itemGroup: {
          gap: 1,
        },
        itemGroupLabel: {
          py: 2,
          px: 2,
          mx: 1,
        },
        content: {
          py: 1,
          gap: 1,
          minW: 32,
        },
        item: {
          h: 9,
          px: 2,
          mx: 1,
        },
        optionItem: {
          h: 9,
          px: 2,
          mx: 1,
        },
        triggerItem: {
          h: 9,
          px: 2,
          mx: 1.5,
        },
      },
      md: {
        itemGroup: {
          gap: 1,
        },
        itemGroupLabel: {
          p: 2.5,
          mx: 1,
        },
        content: {
          py: 1,
          gap: 1,
          minW: 44,
        },
        item: {
          h: 10,
          px: 2.5,
          mx: 1,
        },
        optionItem: {
          h: 10,
          px: 2.5,
          mx: 1,
        },
        triggerItem: {
          h: 10,
          px: 2.5,
          mx: 1.5,
        },
      },
    },
  },
});

export default menu;
