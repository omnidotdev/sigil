import { treeViewAnatomy } from "@ark-ui/anatomy";
import { defineSlotRecipe } from "@pandacss/dev";

/**
 * Tree view recipe.
 */
const treeView = defineSlotRecipe({
  className: "treeView",
  description: "Tree view style recipes",
  // TODO remove this manual slot, Ark currently doesn't correctly export anatomy `branchIndentGuide` slot upstream but it should in the future
  slots: [...treeViewAnatomy.keys(), "branchIndentGuide"],
  base: {
    root: {
      width: "full",
      colorPalette: "accent",
    },
    label: {
      fontSize: "sm",
      fontWeight: "semibold",
    },
    branchText: {
      display: "flex",
      alignItems: "center",
      gap: 2,
    },
    branchContent: {
      position: "relative",
      overflow: "hidden",
      _open: {
        animation: "collapse-in",
      },
      _closed: {
        animation: "collapse-out",
      },
    },
    branchControl: {
      alignItems: "center",
      justifyContent: "space-between",
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
    branchIndentGuide: {
      position: "absolute",
      content: "",
      borderLeft: "1px solid",
      borderColor: "border.subtle",
      height: "100%",
      translate: "10px",
    },
    branchIndicator: {
      color: "colorPalette.default",
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
      display: "flex",
      alignItems: "center",
      gap: 2,
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
        _selected: {
          _before: {
            bgColor: "transparent",
          },
        },
      },
      _hover: {
        bgColor: "neutral.100a",
        color: "foreground.default",
      },
      _selected: {
        bgColor: "colorPalette.100a",
        color: "colorPalette.default",
        _hover: {
          bgColor: "colorPalette.100a",
          color: "colorPalette.default",
        },
        _before: {
          content: '""',
          position: "absolute",
          left: 3,
          top: 0,
          width: "2px",
          height: "full",
          bgColor: "colorPalette.default",
        },
      },
    },
    itemText: {
      display: "flex",
      alignItems: "center",
      gap: 2,
    },
    tree: {
      display: "flex",
      flexDirection: "column",
      w: "240px",
      gap: 1,
    },
  },
});

export default treeView;
