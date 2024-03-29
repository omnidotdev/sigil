import { tabsAnatomy } from "@ark-ui/anatomy";
import { defineSlotRecipe } from "@pandacss/dev";

/**
 * Tabs recipe.
 */
const tabs = defineSlotRecipe({
  className: "tabs",
  description: "Tabs style recipes",
  slots: tabsAnatomy.keys(),
  base: {
    root: {
      colorPalette: "accent",
      display: "flex",
      width: "full",
      _horizontal: {
        flexDirection: "column",
      },
      _vertical: {
        flexDirection: "row",
      },
    },
    list: {
      display: "flex",
      flexShrink: 0,
      _horizontal: {
        flexDirection: "row",
      },
      _vertical: {
        flexDirection: "column",
      },
      overflow: "auto",
      position: "relative",
      scrollbarWidth: "none",
      "&::-webkit-scrollbar": {
        display: "none",
      },
    },
    trigger: {
      alignItems: "center",
      color: "foreground.muted",
      cursor: "pointer",
      display: "inline-flex",
      flexShrink: 0,
      fontWeight: "semibold",
      gap: 2,
      justifyContent: "center",
      transitionDuration: "normal",
      transitionProperty: "color, background, border-color",
      transitionTimingFunction: "default",
      whiteSpace: "nowrap",
      zIndex: "foreground",
      _disabled: {
        color: "foreground.disabled",
        cursor: "not-allowed",
        _hover: {
          color: "foreground.disabled",
        },
      },
      _hover: {
        color: "foreground.muted",
      },
      _selected: {
        color: "foreground.default",
        _hover: {
          color: "foreground.default",
        },
      },
      _vertical: {
        justifyContent: "flex-start",
      },
    },
  },
  defaultVariants: {
    size: "md",
    variant: "line",
  },
  variants: {
    variant: {
      enclosed: {
        list: {
          borderRadius: "md",
          borderWidth: "1px",
          px: 1,
          bgColor: {
            base: "neutral.50a",
            _dark: "background.canvas",
          },
          _horizontal: {
            alignItems: "center",
          },
          _vertical: {
            h: "fit-content!",
            py: 1,
          },
        },
        indicator: {
          bgColor: {
            base: "background.default",
            _dark: "background.subtle",
          },
          boxShadow: "xs",
          borderRadius: "sm",
          // TODO this should be easier to change
          "--transition-duration": "200ms!",
          width: "var(--width)",
          height: "var(--height)",
        },
      },
      line: {
        list: {
          _horizontal: {
            boxShadow: "0 -1px 0 0 inset var(--colors-border-default)",
            gap: 4,
          },
          _vertical: {
            boxShadow: "1px 0 0 0 inset var(--colors-border-default)",
            gap: 1,
          },
        },
        indicator: {
          bgColor: "colorPalette.default",
          _horizontal: {
            bottom: 0,
            height: "2px",
            width: "var(--width)",
          },
          _vertical: {
            height: "var(--height)",
            left: 0,
            width: "2px",
          },
        },
        content: {
          pt: 4,
        },
        trigger: {
          _horizontal: {
            pb: 2.5,
          },
        },
      },
      outline: {
        list: {
          _horizontal: {
            mb: "-1px",
          },
          _vertical: {
            mr: "-1px",
          },
        },
        trigger: {
          borderColor: "transparent",
          borderWidth: "1px",
          _horizontal: {
            borderTopRadius: "sm",
          },
          _vertical: {
            borderTopLeftRadius: "sm",
            borderBottomLeftRadius: "sm",
          },
          _selected: {
            bgColor: "background.default",
            borderColor: "border.subtle",
            _horizontal: {
              borderBottomColor: "transparent",
            },
            _vertical: {
              borderRightColor: "transparent",
            },
          },
        },
        content: {
          borderWidth: "1px",
          borderColor: "border.subtle",
          bgColor: "background.default",
          width: "full",
        },
      },
    },
    size: {
      sm: {
        trigger: {
          "& svg": {
            width: 4,
            height: 4,
          },
        },
      },
      md: {
        trigger: {
          "& svg": {
            width: 5,
            height: 5,
          },
        },
      },
      lg: {
        trigger: {
          "& svg": {
            width: 5,
            height: 5,
          },
        },
      },
    },
  },
  compoundVariants: [
    {
      size: "sm",
      variant: "enclosed",
      css: {
        list: {
          h: 10,
        },
        trigger: {
          h: 8,
          minW: 8,
          textStyle: "sm",
          px: 3,
        },
        content: {
          p: 3.5,
        },
      },
    },
    {
      size: "md",
      variant: "enclosed",
      css: {
        list: {
          h: 11,
        },
        trigger: {
          h: 9,
          minW: 9,
          textStyle: "sm",
          px: 3.5,
        },
        content: {
          p: 4,
        },
      },
    },
    {
      size: "lg",
      variant: "enclosed",
      css: {
        list: {
          h: 12,
        },
        trigger: {
          h: 10,
          minW: 10,
          textStyle: "sm",
          px: 4,
        },
        content: {
          p: 4.5,
        },
      },
    },
    {
      size: "sm",
      variant: "outline",
      css: {
        trigger: {
          h: 9,
          minW: 9,
          textStyle: "sm",
          px: 3.5,
        },
        content: {
          p: 3.5,
        },
      },
    },
    {
      size: "md",
      variant: "outline",
      css: {
        trigger: {
          h: 10,
          minW: 10,
          textStyle: "sm",
          px: 4,
        },
        content: {
          p: 4,
        },
      },
    },
    {
      size: "lg",
      variant: "outline",
      css: {
        trigger: {
          h: 11,
          minW: 11,
          textStyle: "md",
          px: 4.5,
        },
        content: {
          p: 4.5,
        },
      },
    },
    {
      size: "sm",
      variant: "line",
      css: {
        trigger: {
          fontSize: "sm",
          h: 9,
          minW: 9,
          px: 2.5,
        },
        content: {
          pt: 3,
        },
      },
    },
    {
      size: "md",
      variant: "line",
      css: {
        trigger: {
          fontSize: "md",
          h: 10,
          minW: 10,
          px: 3,
        },
        content: {
          pt: 4,
        },
      },
    },
    {
      size: "lg",
      variant: "line",
      css: {
        trigger: {
          px: 3.5,
          h: 11,
          minW: 11,
          fontSize: "md",
        },
        content: {
          pt: 5,
        },
      },
    },
  ],
});

export default tabs;
