import { carouselAnatomy } from "@ark-ui/anatomy";
import { defineSlotRecipe } from "@pandacss/dev";

/**
 * Carousel recipe.
 */
const carousel = defineSlotRecipe({
  className: "carousel",
  description: "Carousel style recipes",
  slots: carouselAnatomy.keys(),
  base: {
    viewport: {
      overflowX: "hidden",
      position: "relative",
      borderRadius: "sm",
    },
    control: {
      alignItems: "center",
      bgColor: "background.default",
      borderRadius: "sm",
      bottom: 4,
      display: "flex",
      left: "50%",
      opacity: 0.9,
      position: "absolute",
      transform: "translateX(-50%)",
      zIndex: "docked",
    },
    indicatorGroup: {
      display: "flex",
    },
    indicator: {
      borderRadius: "full",
      bgColor: "neutral.400",
      cursor: "pointer",
      _current: {
        bgColor: "accent.default",
      },
      _focusVisible: {
        outlineOffset: "2px",
        outline: "2px solid",
        outlineColor: "border.outline",
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
  variants: {
    size: {
      sm: {
        control: {
          gap: 1,
          p: 1,
        },
        indicatorGroup: {
          gap: 2,
        },
        indicator: {
          width: 2,
          height: 2,
        },
      },
      md: {
        control: {
          gap: 2,
          p: 2.5,
        },
        indicatorGroup: {
          gap: 3,
        },
        indicator: {
          width: 2.5,
          height: 2.5,
        },
      },
    },
  },
});

export default carousel;
