import { defineSlotRecipe } from "@pandacss/dev";

/**
 * Table recipe.
 */
const table = defineSlotRecipe({
  className: "table",
  description: "Table style recipes",
  slots: ["root", "body", "cell", "footer", "head", "header", "row", "caption"],
  base: {
    root: {
      captionSide: "bottom",
      width: "full",
    },
    body: {
      "& tr:last-child": {
        borderBottomWidth: 0,
      },
    },
    caption: {
      color: "foreground.subtle",
    },
    cell: {
      verticalAlign: "middle",
    },
    footer: {
      fontWeight: "medium",
      borderTopWidth: "1px",
      "& tr:last-child": {
        borderBottomWidth: 0,
      },
    },
    head: {
      color: "foreground.muted",
      fontWeight: "medium",
      textAlign: "left",
      verticalAlign: "middle",
    },
    row: {
      borderBottomWidth: "1px",
      transitionDuration: "normal",
      transitionProperty: "background, color",
      transitionTimingFunction: "default",
    },
  },
  defaultVariants: {
    size: "md",
    variant: "plain",
  },
  variants: {
    variant: {
      plain: {
        row: {
          _hover: {
            bgColor: "background.subtle",
          },
          _selected: {
            bgColor: "background.muted",
          },
        },
      },
      outline: {
        root: {
          borderWidth: "1px",
        },
        header: {
          bgColor: "background.subtle",
        },
      },
    },
    size: {
      sm: {
        root: {
          textStyle: "sm",
        },
        caption: {
          mt: 4,
        },
        cell: {
          height: 11,
          px: 3,
        },
        head: {
          height: 11,
          px: 3,
        },
      },
      md: {
        root: {
          textStyle: "sm",
        },
        caption: {
          mt: 4,
        },
        cell: {
          height: 14,
          px: 4,
        },
        head: {
          height: 11,
          px: 4,
        },
      },
    },
  },
});

export default table;
