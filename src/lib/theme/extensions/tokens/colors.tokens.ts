import { defineTokens } from "@pandacss/dev";

/**
 * Color tokens. Default Panda colors: https://panda-css.com/docs/customization/theme#colors
 */
const colors = defineTokens.colors({
  // TODO implement real brand palette
  brand: {
    primary: {
      50: { value: "#C0E0DB" },
      100: { value: "#B2D9D3" },
      200: { value: "#97CBC3" },
      300: { value: "#7CBEB4" },
      400: { value: "#61B0A4" },
      500: { value: "#4D9B8F", description: "Primary brand color" },
      600: { value: "#3A766C" },
      700: { value: "#28504A" },
      800: { value: "#152B27" },
      900: { value: "#030505" },
      950: { value: "#000000" },
    },
    // secondary: {
    //   ...
    // },
    // tertiary: {
    //   ...
    // },
    // quaternary: {
    //   ...
    // },
  },
  neutral: {
    25: { value: "#fdfdfd" },
  },
});

export default colors;
