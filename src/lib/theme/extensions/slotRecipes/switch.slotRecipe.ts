import { switchAnatomy } from "@ark-ui/anatomy";
import { defineSlotRecipe } from "@pandacss/dev";

/**
 * Switch recipe.
 * ! NB: `switch` is a reserved keyword; so can't be named here
 */
const switchRecipe = defineSlotRecipe({
  className: "switch",
  description: "Switch style recipes",
  slots: switchAnatomy.keys(),
  // track usage of the `Switch` component since `switch` is a reserved keyword in JS
  jsx: ["Switch"],
  base: {
    // TODO apply cursor pointer to label as well? Research UX best practices
    root: {
      alignItems: "center",
      colorPalette: "accent",
      display: "flex",
      position: "relative",
    },
    control: {
      alignItems: "center",
      bgColor: "background.emphasized",
      borderRadius: "full",
      cursor: "pointer",
      display: "inline-flex",
      flexShrink: 0,
      transitionDuration: "normal",
      transitionProperty: "background",
      transitionTimingFunction: "default",
      _checked: {
        bgColor: "colorPalette.default",
      },
    },
    label: {
      color: "foreground.default",
      fontWeight: "medium",
    },
    thumb: {
      bgColor: "background.default",
      borderRadius: "full",
      boxShadow: "xs",
      transitionDuration: "normal",
      transitionProperty: "transform, background",
      transitionTimingFunction: "default",
      _checked: {
        transform: "translateX(100%)",
        bgColor: {
          base: "background.default",
          _dark: "colorPalette.foreground",
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
          width: 7,
          p: 0.5,
        },
        thumb: {
          width: 3,
          height: 3,
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
          width: 9,
          p: 0.5,
        },
        thumb: {
          width: 4,
          height: 4,
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
          width: 11,
          p: 0.5,
        },
        thumb: {
          width: 5,
          height: 5,
        },
        label: {
          textStyle: "lg",
        },
      },
    },
  },
});

export default switchRecipe;
