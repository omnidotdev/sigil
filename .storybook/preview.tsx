import type { Preview } from "@storybook/react";

import "lib/styles/main.css";

/**
 * Storybook preview.
 */
const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    // TODO fix not changing MDX files
    backgrounds: {
      default: "dark",
      values: [
        { name: "light", value: "#ffffff" },
        { name: "dark", value: "#161616" },
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
      classTarget: "html",
      stylePreview: true,
    },
    docs: {
      toc: true,
    },
    options: {
      storySort: {
        order: ["Introduction", "Components", "Hooks"],
      },
    },
  },
};

export default preview;
