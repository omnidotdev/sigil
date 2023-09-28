import { checkboxAnatomy } from "@ark-ui/anatomy";
import { defineSlotRecipe } from "@pandacss/dev";

/**
 * Checkbox recipe.
 */
const checkbox = defineSlotRecipe({
  className: "checkbox",
  description: "Checkbox style recipes",
  slots: checkboxAnatomy.keys(),
  base: {
    // TODO apply cursor pointer to label as well, + space between label and control
    root: {
      alignItems: "center",
      display: "flex",
    },
    label: {
      color: "foreground.emphasized",
      fontWeight: "medium",
    },
    control: {
      alignItems: "center",
      borderColor: "border.emphasized",
      borderWidth: "1px",
      color: "accent.foreground",
      cursor: "pointer",
      display: "flex",
      justifyContent: "center",
      transitionDuration: "normal",
      transitionProperty: "border-color, background",
      transitionTimingFunction: "default",
      _hover: {
        bgColor: "background.subtle",
      },
      _checked: {
        bgColor: "accent.default",
        borderColor: "border.accent",
        _hover: {
          bgColor: "accent.default",
        },
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
  variants: {
    size: {
      sm: {
        root: {
          gap: 2,
        },
        control: {
          width: 4,
          height: 4,
          borderRadius: "xs",
          "& svg": {
            width: 3,
            height: 3,
          },
        },
        label: {
          textStyle: "sm",
        },
      },
      md: {
        root: {
          gap: 3,
        },
        control: {
          width: 5,
          height: 5,
          borderRadius: "xs",
          "& svg": {
            width: 3.5,
            height: 3.5,
          },
        },
        label: {
          textStyle: "md",
        },
      },
      lg: {
        root: {
          gap: 4,
        },
        control: {
          width: 6,
          height: 6,
          borderRadius: "xs",
          "& svg": {
            width: 4,
            height: 4,
          },
        },
        label: {
          textStyle: "lg",
        },
      },
    },
  },
});

export default checkbox;
