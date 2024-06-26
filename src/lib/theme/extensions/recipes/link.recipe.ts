import { defineRecipe } from "@pandacss/dev";

/**
 * Link recipe.
 */
const link = defineRecipe({
  className: "link",
  description: "Link style recipes",
  base: {
    alignItems: "center",
    // ? only color this if text? see https://github.com/cschroeter/park-ui/issues/118#issuecomment-1856872877
    color: "colorPalette.default",
    colorPalette: "accent",
    cursor: "pointer",
    display: "inline-flex",
    fontWeight: "medium",
    gap: 2,
    textDecoration: "underline 0.1em transparent",
    textUnderlineOffset: "0.125em",
    transitionDuration: "normal",
    transitionProperty: "text-decoration-color",
    transitionTimingFunction: "default",
    _hover: {
      textDecorationColor: "colorPalette.default",
    },
    "& svg": {
      width: "1em",
      height: "1em",
    },
  },
});

export default link;
