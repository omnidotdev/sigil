import { treeViewAnatomy } from "@ark-ui/anatomy";
import { defineSlotRecipe } from "@pandacss/dev";

/**
 * Tree view recipe.
 */
const treeView = defineSlotRecipe({
  className: "treeView",
  description: "Tree view style recipes",
  slots: treeViewAnatomy.keys(),
  base: {
    root: {
      width: "full",
    },
    branch: {
      "&[data-depth='1'] > [data-part='branch-content']": {
        _before: {
          bgColor: "border.default",
          content: '""',
          height: "full",
          left: 3,
          position: "absolute",
          width: "1px",
          zIndex: 1,
        },
      },
    },
    branchContent: {
      position: "relative",
    },
    branchControl: {
      alignItems: "center",
      borderRadius: "sm",
      color: "foreground.muted",
      cursor: "pointer",
      display: "flex",
      fontWeight: "medium",
      gap: 1.5,
      ps: "calc((var(--depth) - 1) * 22px)",
      py: 1.5,
      textStyle: "sm",
      transitionDuration: "normal",
      transitionProperty: "background, color",
      transitionTimingFunction: "default",
      "&[data-depth='1']": {
        ps: 1,
      },
      "&[data-depth='1'] > [data-part='branch-text']": {
        fontWeight: "semibold",
        color: "foreground.default",
      },
      _hover: {
        bgColor: "neutral.100a",
        color: "foreground.default",
      },
    },
    branchIndicator: {
      color: "accent.default",
      transformOrigin: "center",
      transitionDuration: "normal",
      transitionProperty: "transform",
      transitionTimingFunction: "default",
      "& svg": {
        fontSize: "md",
        width: 4,
        height: 4,
      },
      _open: {
        transform: "rotate(90deg)",
      },
    },
    item: {
      borderRadius: "sm",
      color: "foreground.muted",
      cursor: "pointer",
      fontWeight: "medium",
      position: "relative",
      ps: "calc(((var(--depth) - 1) * 22px) + 22px)",
      py: 1.5,
      textStyle: "sm",
      transitionDuration: "normal",
      transitionProperty: "background, color",
      transitionTimingFunction: "default",
      "&[data-depth='1']": {
        ps: 6,
        fontWeight: "semibold",
        color: "foreground.default",
      },
      _hover: {
        bgColor: "neutral.100a",
        color: "foreground.default",
      },
      _selected: {
        bgColor: "accent.100a",
        color: "accent.default",
        _hover: {
          bgColor: "accent.100a",
          color: "accent.default",
        },
        _before: {
          content: '""',
          position: "absolute",
          left: 3,
          top: 0,
          width: "1px",
          height: "full",
          bgColor: "accent.default",
          zIndex: 1,
        },
      },
    },
    tree: {
      display: "flex",
      flexDirection: "column",
      gap: 3,
    },
  },
});

export default treeView;
