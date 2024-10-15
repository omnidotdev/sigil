// inject root cascade layers
import "lib/styles/main.css";

// export backfill of Ark components (overrides allowed below)
// eslint-disable-next-line import/export
export * from "@ark-ui/react";

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

// @ts-expect-error ts(2308): warns about duplicate exports, but intended for composable overrides
// eslint-disable-next-line import/export
export * from "components";

// TODO add `CheckboxGroup` component *maybe*, part of Ark UI v3.3.0+
// TODO add field component? https://ark-ui.com/react/docs/components/field
// TODO add fieldset component? https://ark-ui.com/react/docs/components/fieldset
// TODO add highlight component?
// TODO add steps component (https://ark-ui.com/react/docs/components/steps)
// TODO add timer component (https://ark-ui.com/react/docs/components/timer)
// TODO add frame component?
// TODO add toggle component? https://github.com/chakra-ui/ark/blob/main/packages/react/CHANGELOG.md#added
