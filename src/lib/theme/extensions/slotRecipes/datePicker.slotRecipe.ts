import { datePickerAnatomy } from "@ark-ui/react";
import { defineSlotRecipe } from "@pandacss/dev";

/**
 * Date picker recipe.
 */
const datePicker = defineSlotRecipe({
  className: "datePicker",
  description: "Date picker style recipes",
  slots: [...datePickerAnatomy.keys()],
  base: {
    cellTrigger: {
      _today: {
        _before: {
          content: "'−'",
          color: "accent.default",
          position: "absolute",
          marginTop: 6,
        },
      },
      "&[data-in-range]": {
        bgColor: "background.subtle",
      },
      _selected: {
        _before: {
          color: "accent.foreground",
        },
      },
    },
    content: {
      bgColor: "background.default",
      borderRadius: "md",
      borderWidth: "1px",
      p: 4,
      width: "fit-content",
    },
    grid: {
      display: "flex",
      flexDirection: "column",
      gap: 1,
      '&[data-type="day"] [data-part="row"]': {
        gridTemplateColumns: "repeat(7, 1fr)",
      },
      '&[data-type="month"] [data-part="row"]': {
        gridTemplateColumns: "repeat(4, 1fr)",
      },
      '&[data-type="year"] [data-part="row"]': {
        gridTemplateColumns: "repeat(4, 1fr)",
      },
    },
    rowGroup: {
      display: "flex",
      flexDirection: "column",
      gap: 1,
    },
    row: {
      display: "grid",
    },
    rowHeader: {
      display: "grid",
      gridTemplateColumns: "repeat(7, 1fr)",
    },
    columnHeader: {
      alignItems: "center",
      color: "foreground.subtle",
      display: "inline-flex",
      fontWeight: "semibold",
      height: 10,
      justifyContent: "center",
      textStyle: "sm",
      width: 10,
    },
  },
});

export default datePicker;
