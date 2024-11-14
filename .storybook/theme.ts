import { create as createStorybookTheme } from "@storybook/theming";

import { app } from "../src/lib/config";
import { fonts } from "../src/lib/theme/extensions/semanticTokens";

import type { ThemeVars } from "@storybook/theming";

const typography: Pick<ThemeVars, "fontBase" | "fontCode"> = {
  fontBase: fonts!["primary"].value as string,
  fontCode: fonts!["code"].value as string,
};

/**
 * Custom Storybook theme.
 */
const storybookTheme = createStorybookTheme({
  ...typography,
  // set dark theme default
  base: "dark",
  brandUrl: app.organization.url,
  brandTitle: `<div style="display: flex; gap: 0.5rem; align-items: center; justify-content: center;"><img src="/img/logo-gradient.png" width="40px" height="40px" /> ${app.organization.name} ${app.name.short}</div>`,
  brandTarget: "_self",
});

export default storybookTheme;
