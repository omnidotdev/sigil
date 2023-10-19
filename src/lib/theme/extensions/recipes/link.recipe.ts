import { defineRecipe } from "@pandacss/dev";

// ! NB: not documented in Panda, see https://discord.com/channels/1118988919804010566/1120305029056831548/1148028115373789267

/**
 * Link recipe.
 */
const link = defineRecipe({
  className: "link",
  description: "Link style recipes",
  base: {
    color: "foreground.subtle",
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    gap: 2,
    transitionDuration: "normal",
    transitionProperty: "color, font-weight",
    transitionTimingFunction: "default",
  },
  defaultVariants: {
    variant: "text",
  },
  variants: {
    variant: {
      text: {
        fontWeight: "medium",
        color: "foreground.default",
        textDecoration: "underline",
      },
      toc: {
        fontWeight: "medium",
        textStyle: "sm",
        _hover: {
          color: "foreground.muted",
        },
        _currentPage: {
          fontWeight: "semibold",
          color: "foreground.emphasized",
          _hover: {
            color: "foreground.emphasized",
          },
        },
      },
      navbar: {
        fontWeight: "semibold",
        textStyle: "md",
        _hover: {
          color: "foreground.muted",
        },
        _currentPage: {
          color: "foreground.emphasized",
          _hover: {
            color: "foreground.emphasized",
          },
        },
      },
    },
  },
});

export default link;
