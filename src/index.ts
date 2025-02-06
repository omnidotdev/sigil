// inject root cascade layers
import "lib/styles/main.css";

export { createListCollection } from "@ark-ui/react";

// 🐼 export backfill of Panda components
export * from "generated/panda/css";
// eslint-disable-next-line import/export
export * from "generated/panda/jsx";
export type { JsxStyleProps } from "generated/panda/types";

// NB: `jsxFactory` in Panda config can be specified to customize the styled factory export name, however the default (`styled`) is intended, and this alias is exported as well
export { styled as sigil } from "generated/panda/jsx";

// export Panda presets (to be used in downstream Panda configurations)
export { sigilPreset } from "lib/theme/presets";

// NB: lint disable line due to `useToggle` conflict between `usehooks-ts` and `@ark-ui/react`
// eslint-disable-next-line import/export
export * from "lib/hooks";

// NB: below resolves `useToggle` conflict between `usehooks-ts` and `@ark-ui/react`
// eslint-disable-next-line import/export
export { useToggle } from "usehooks-ts";
export { useToggle as useToggleButton } from "@ark-ui/react";

export * from "components";
