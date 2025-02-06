// inject root cascade layers
import "lib/styles/main.css";

export * from "components";
export * from "lib/hooks";

// 🐼 export backfill of Panda components
// TODO: determine if this causes named export issue
export * from "generated/panda/css";
export * from "generated/panda/jsx";

export type { JsxStyleProps } from "generated/panda/types";

// NB: `jsxFactory` in Panda config can be specified to customize the styled factory export name, however the default (`styled`) is intended, and this alias is exported as well
export { styled as sigil } from "generated/panda/jsx";

// export Panda presets (to be used in downstream Panda configurations)
export { sigilPreset } from "lib/theme/presets";
