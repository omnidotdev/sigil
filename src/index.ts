// inject root cascade layers
import "lib/styles/main.css";

// export backfill of Ark components (overrides allowed below)
// eslint-disable-next-line import/export
export * from "@ark-ui/react";

// 🐼 export backfill of Panda components
export * from "generated/panda/css";
export * from "generated/panda/jsx";
export type { JsxStyleProps } from "generated/panda/types";

// NB: `jsxFactory` in Panda config can be specified to customize the styled factory export name, however the default (`styled`) is intended, and this alias is exported as well
export { styled as sigil } from "generated/panda/jsx";

// export Panda presets (to be used in downstream Panda configurations)
export { sigilPreset } from "lib/theme/presets";

export * from "lib/hooks";

// @ts-expect-error ts(2308): warns about duplicate exports, but intended for composable overrides
// eslint-disable-next-line import/export
export * from "components";

// @ts-expect-error ts(2308): warns about duplicate exports, but intended for composable overrides
// eslint-disable-next-line import/export
export * from "providers";
