import { fileUploadAnatomy } from "@ark-ui/anatomy";
import { defineSlotRecipe } from "@pandacss/dev";

/**
 * File upload recipe.
 */
const fileUpload = defineSlotRecipe({
  className: "fileUpload",
  description: "File upload style recipes",
  slots: fileUploadAnatomy.keys(),
  base: {
    root: {
      display: "flex",
      flexDirection: "column",
      gap: 4,
      width: "100%",
    },
    label: {
      fontWeight: "medium",
      textStyle: "sm",
    },
    dropzone: {
      alignItems: "center",
      bgColor: "background.default",
      borderRadius: "md",
      borderWidth: "1px",
      display: "flex",
      flexDirection: "column",
      gap: 3,
      justifyContent: "center",
      minH: "xs",
      px: 6,
      py: 4,
    },
    item: {
      animation: "fadeIn 0.25s ease-out",
      bgColor: "background.default",
      borderRadius: "md",
      borderWidth: "1px",
      columnGap: 3,
      display: "grid",
      gridTemplateColumns: "auto 1fr auto",
      gridTemplateAreas: `
        "preview name delete"
        "preview size delete"
        `,
      p: 4,
    },
    itemGroup: {
      display: "flex",
      flexDirection: "column",
      gap: 3,
    },
    itemName: {
      color: "foreground.default",
      fontWeight: "medium",
      gridArea: "name",
      textStyle: "sm",
    },
    itemSizeText: {
      color: "foreground.muted",
      gridArea: "size",
      textStyle: "sm",
    },
    itemDeleteTrigger: {
      alignSelf: "start",
      gridArea: "delete",
    },
    itemPreview: {
      gridArea: "preview",
    },
    itemPreviewImage: {
      aspectRatio: "1",
      height: 10,
      objectFit: "scale-down",
      width: 10,
    },
  },
});

export default fileUpload;
