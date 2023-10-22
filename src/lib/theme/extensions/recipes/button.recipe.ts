import { defineRecipe } from "@pandacss/dev";

/**
 * Button recipe.
 */
const button = defineRecipe({
  className: "button",
  description: "Button style recipes",
  base: {
    alignItems: "center",
    appearance: "none",
    borderRadius: "sm",
    cursor: "pointer",
    display: "inline-flex",
    fontWeight: "semibold",
    minWidth: 0,
    justifyContent: "center",
    outline: "none",
    position: "relative",
    transitionDuration: "normal",
    transitionProperty: "background, border-color, color, box-shadow",
    transitionTimingFunction: "default",
    userSelect: "none",
    verticalAlign: "middle",
    whiteSpace: "nowrap",
  },
  defaultVariants: {
    variant: "solid",
    size: "md",
  },
  variants: {
    variant: {
      solid: {
        bgColor: "accent.default",
        color: "accent.foreground",
        _hover: {
          bgColor: "accent.emphasized",
        },
        _focusVisible: {
          outlineOffset: "2px",
          outline: "2px solid",
          outlineColor: "border.accent",
        },
        _disabled: {
          color: "foreground.disabled",
          bgColor: "gray.100",
          cursor: "not-allowed",
          _hover: {
            color: "foreground.disabled",
            bgColor: "gray.100",
          },
        },
      },
      muted: {
        color: "background.muted",
        bgColor: "foreground.muted",
        _hover: {
          bgColor: "accent.emphasized",
        },
        _focusVisible: {
          outlineOffset: "2px",
          outline: "2px solid",
          outlineColor: "border.accent",
        },
        _disabled: {
          bgColor: "background.disabled",
          cursor: "not-allowed",
          _hover: {
            bgColor: "background.disabled",
          },
        },
      },
      outline: {
        borderWidth: 1.5,
        borderColor: "gray.500",
        _hover: {
          background: "gray.50",
        },
        _disabled: {
          borderColor: "border.disabled",
          color: "foreground.disabled",
          cursor: "not-allowed",
          _hover: {
            bgColor: "transparent",
            borderColor: "border.disabled",
            color: "foreground.disabled",
          },
        },
        _focusVisible: {
          outlineOffset: "2px",
          outline: "2px solid",
          outlineColor: "border.outline",
        },
      },
      ghost: {
        _hover: {
          background: "gray.100",
        },
        _disabled: {
          color: "foreground.disabled",
          cursor: "not-allowed",
          _hover: {
            bgColor: "transparent",
            color: "foreground.disabled",
          },
        },
        _focusVisible: {
          outline: "2px solid",
          outlineColor: "border.outline",
        },
      },
      link: {
        verticalAlign: "baseline",
        _disabled: {
          color: "border.disabled",
          cursor: "not-allowed",
          _hover: {
            color: "border.disabled",
          },
        },
        height: "auto!",
        px: "0!",
        minW: "0!",
      },
      icon: {
        px: 0,
        bgColor: "accent.default",
        color: "accent.foreground",
        _hover: {
          bgColor: "accent.emphasized",
        },
        _focusVisible: {
          outlineOffset: "2px",
          outline: "2px solid",
          outlineColor: "border.accent",
        },
        _disabled: {
          bgColor: "background.disabled",
          cursor: "not-allowed",
          _hover: {
            bgColor: "background.disabled",
          },
        },
      },
    },
    size: {
      xs: {
        h: 8,
        minW: 8,
        textStyle: "xs",
        px: 3,
        gap: 2,
        "& svg": {
          fontSize: "md",
          width: 4,
          height: 4,
        },
      },
      sm: {
        h: 9,
        minW: 9,
        textStyle: "sm",
        px: 3.5,
        gap: 2,
        "& svg": {
          width: 4,
          height: 4,
        },
      },
      md: {
        h: 10,
        minW: 10,
        textStyle: "sm",
        px: 4,
        gap: 2,
        "& svg": {
          width: 5,
          height: 5,
        },
      },
      lg: {
        h: 11,
        minW: 11,
        textStyle: "md",
        px: 4.5,
        gap: 2,
        "& svg": {
          width: 5,
          height: 5,
        },
      },
      xl: {
        h: 12,
        minW: 12,
        textStyle: "md",
        px: 5,
        gap: 2.5,
        "& svg": {
          width: 5,
          height: 5,
        },
      },
      "2xl": {
        h: 16,
        minW: 16,
        textStyle: "lg",
        px: 7,
        gap: 3,
        "& svg": {
          width: 6,
          height: 6,
        },
      },
    },
  },
});

export default button;
