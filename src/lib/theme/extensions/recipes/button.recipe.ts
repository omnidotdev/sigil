import { defineRecipe } from "@pandacss/dev";

// TODO some option for button groups with flattened borders, maybe can genericize togglegroup

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
    colorPalette: "neutral",
    cursor: "pointer",
    display: "inline-flex",
    fontWeight: "semibold",
    minWidth: 0,
    justifyContent: "center",
    outline: "none",
    transitionDuration: "normal",
    transitionProperty: "background, border-color, color, box-shadow",
    transitionTimingFunction: "default",
    userSelect: "none",
    verticalAlign: "middle",
    whiteSpace: "nowrap",
    _hidden: {
      display: "none",
    },
  },
  defaultVariants: {
    variant: "solid",
    size: "md",
  },
  variants: {
    variant: {
      solid: {
        bgColor: "colorPalette.default",
        color: "colorPalette.foreground",
        colorPalette: "accent",
        _hover: {
          bgColor: "colorPalette.emphasized",
        },
        _focusVisible: {
          outline: "2px solid",
          outlineColor: "colorPalette.default",
          outlineOffset: "2px",
        },
        _disabled: {
          color: "foreground.disabled",
          bgColor: "background.disabled",
          cursor: "not-allowed",
          _hover: {
            color: "foreground.disabled",
            bgColor: "background.disabled",
          },
        },
      },
      muted: {
        bgColor: "colorPalette.100a",
        color: "colorPalette.text",
        colorPalette: "accent",
        _hover: {
          bgColor: "colorPalette.500a",
        },
        _focusVisible: {
          outlineOffset: "2px",
          outline: "2px solid",
          outlineColor: "colorPalette.default",
        },
        _disabled: {
          bgColor: "background.disabled",
          color: "foreground.disabled",
          cursor: "not-allowed",
          _hover: {
            bgColor: "background.disabled",
            color: "foreground.disabled",
          },
        },
      },
      outline: {
        borderWidth: 1.5,
        borderColor: "colorPalette.600a",
        _hover: {
          bgColor: "colorPalette.50a",
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
          outline: "2px solid",
          outlineColor: "colorPalette.default",
          outlineOffset: "2px",
        },
        _selected: {
          bgColor: "accent.default",
          borderColor: "accent.default",
          color: "accent.foreground",
          _hover: {
            bgColor: "accent.emphasized",
            borderColor: "accent.emphasized",
          },
        },
      },
      ghost: {
        _hover: {
          bgColor: "colorPalette.100a",
        },
        _selected: {
          bgColor: "colorPalette.100a",
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
          outlineColor: "colorPalette.default",
          outlineOffset: "2px",
        },
      },
      // TODO remove `link` variant, discussion: https://github.com/cschroeter/park-ui/issues/118#issuecomment-1856872877
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
        bgColor: "colorPalette.default",
        color: "colorPalette.foreground",
        _hover: {
          bgColor: "colorPalette.emphasized",
        },
        _focusVisible: {
          outlineOffset: "2px",
          outline: "2px solid",
          outlineColor: "colorPalette.default",
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
          textStyle: "md",
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
