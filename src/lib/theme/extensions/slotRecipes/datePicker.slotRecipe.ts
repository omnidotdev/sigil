import { datePickerAnatomy } from "@ark-ui/anatomy";
import { defineSlotRecipe } from "@pandacss/dev";

/**
 * Date picker recipe.
 */
const datePicker = defineSlotRecipe({
  className: "datePicker",
  description: "Date picker style recipes",
  slots: datePickerAnatomy.keys(),
  base: {
    root: {
      colorPalette: "accent",
      display: "flex",
      flexDirection: "column",
      gap: 1.5,
    },
    label: {
      color: "foreground.default",
      fontWeight: "medium",
      textStyle: "sm",
    },
    control: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: 2,
    },
    clearTrigger: {
      color: "foreground.muted",
      position: "absolute",
      cursor: "pointer",
      right: 20.5,
    },
    content: {
      bgColor: "background.default",
      borderRadius: "md",
      boxShadow: "lg",
      display: "flex",
      flexDirection: "column",
      gap: 3,
      p: 4,
      width: "344px",
      minW: "fit-content",
      zIndex: "dropdown",
      _open: {
        animation: "fadeIn 0.25s ease-out",
      },
      _closed: {
        animation: "fadeOut 0.2s ease-out",
      },
      _hidden: {
        display: "none",
      },
    },
    tableHeader: {
      color: "foreground.muted",
      fontWeight: "semibold",
      height: 10,
      textStyle: "sm",
    },
    viewControl: {
      display: "flex",
      gap: 2,
      justifyContent: "space-between",
    },
    table: {
      width: "full",
      borderCollapse: "separate",
      borderSpacing: 1,
      m: -1,
    },
    tableCell: {
      textAlign: "center",
    },
    tableCellTrigger: {
      width: "100%",
      _today: {
        _before: {
          content: "'−'",
          color: "colorPalette.default",
          position: "absolute",
          marginTop: 6,
        },
      },
      "&[data-in-range]": {
        bgColor: "background.muted",
      },
      _selected: {
        _before: {
          color: "colorPalette.foreground",
        },
      },
    },
    view: {
      display: "flex",
      flexDirection: "column",
      gap: 3,
      _hidden: {
        display: "none",
      },
    },
  },
});

export default datePicker;
