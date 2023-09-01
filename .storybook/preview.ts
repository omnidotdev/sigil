import type { Preview } from "@storybook/react";

import "lib/styles/main.css";

/**
 * Storybook preview.
 */
const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    backgrounds: {
      default: "dark",
      values: [
        { name: "light", value: "#ffffff" },
        { name: "dark", value: "#161616" },
        {
          name: "twitter",
          value: "#00aced",
        },
        {
          name: "facebook",
          value: "#3b5998",
        },
        // TODO allow custom color selection, with automatic calculation of light/dark mode
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    darkMode: {
      default: true,
      classTarget: "html",
      stylePreview: true,
    },
    docs: {
      toc: true,
    },
  },
};

export default preview;
