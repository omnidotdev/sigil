# @omnidev/sigil

## 0.10.5

### Patch Changes

- [#95](https://github.com/omnidotdev/sigil/pull/95) [`bd9628a`](https://github.com/omnidotdev/sigil/commit/bd9628aa8d0405a5a04449c6b9577db705cc97d0) Thanks [@coopbri](https://github.com/coopbri)! - Remove default placeholder on `Select` and `Combobox`

- [#95](https://github.com/omnidotdev/sigil/pull/95) [`bd9628a`](https://github.com/omnidotdev/sigil/commit/bd9628aa8d0405a5a04449c6b9577db705cc97d0) Thanks [@coopbri](https://github.com/coopbri)! - Fix Panda style props not being injected into component props

- [#95](https://github.com/omnidotdev/sigil/pull/95) [`bd9628a`](https://github.com/omnidotdev/sigil/commit/bd9628aa8d0405a5a04449c6b9577db705cc97d0) Thanks [@coopbri](https://github.com/coopbri)! - Fix `Combobox` input value change handler composition. Previously, passing `onInputValueChange` would override the built-in handler, causing filtering to not work correctly. This update combines the logic of the built-in handler and any passed in handler.

## 0.10.4

### Patch Changes

- [#93](https://github.com/omnidotdev/sigil/pull/93) [`17b32f1`](https://github.com/omnidotdev/sigil/commit/17b32f117ae6463514a80685506c3e1a9f49262f) Thanks [@coopbri](https://github.com/coopbri)! - Remove close trigger wrapper on `Drawer` and `Popover`

- [#93](https://github.com/omnidotdev/sigil/pull/93) [`17b32f1`](https://github.com/omnidotdev/sigil/commit/17b32f117ae6463514a80685506c3e1a9f49262f) Thanks [@coopbri](https://github.com/coopbri)! - Allow overriding `TagsInput` clear trigger render

## 0.10.3

### Patch Changes

- [#91](https://github.com/omnidotdev/sigil/pull/91) [`b95a097`](https://github.com/omnidotdev/sigil/commit/b95a09789fafeafada277d2a80ec9e83c594b22b) Thanks [@coopbri](https://github.com/coopbri)! - Removed "Add tag" placeholder from `TagsInput` input field

- [#91](https://github.com/omnidotdev/sigil/pull/91) [`b95a097`](https://github.com/omnidotdev/sigil/commit/b95a09789fafeafada277d2a80ec9e83c594b22b) Thanks [@coopbri](https://github.com/coopbri)! - Added subcomponent prop composition to `TagsInput`

## 0.10.2

### Patch Changes

- [#89](https://github.com/omnidotdev/sigil/pull/89) [`cb907ec`](https://github.com/omnidotdev/sigil/commit/cb907eca7db8a94c845a0fb48659f198f79fbaf1) Thanks [@coopbri](https://github.com/coopbri)! - Allow overriding `Popover` close trigger render via the `closeTrigger` prop

## 0.10.1

### Patch Changes

- [#87](https://github.com/omnidotdev/sigil/pull/87) [`c5bb92f`](https://github.com/omnidotdev/sigil/commit/c5bb92ff9bb4614a46ef664f01fa2d447684feae) Thanks [@coopbri](https://github.com/coopbri)!
  - Updated Popover
    - Added subcomponent prop composition
    - Added children support
    - Made title and description props optional

## 0.10.0

### Minor Changes

- [#84](https://github.com/omnidotdev/sigil/pull/84) [`f30bc13`](https://github.com/omnidotdev/sigil/commit/f30bc13dd689f484879e4370cdf896af0720ce0f) Thanks [@coopbri](https://github.com/coopbri)!
  - **BREAKING:** Change `Switch` `children` prop to `label`
  - **BREAKING:** Change `TreeView` child and `MenuItem` `id` prop to `value` to match Ark upstream
  - Make `label` prop optional on `TabsInput`
  - Refine `Toaster` API and added styled variants (`base`, `info` (default), `loading`, `success`, `warning`, `error`)
  - Add `Keyboard` `ghost` variant
  - Add `colorPalette` support to `Combobox`, `PINInput`, `Pagination`, `Select`, and `TreeView`
  - Add `displayFieldLabel`, `displayGroupLabel`, and `displayClearTrigger` props to `Combobox` and `Select`
  - Add subcomponent prop composition to `Accordion`, `Checkbox`, `ColorPicker`, `Combobox`, `Dialog`, `Drawer`, `Menu`, `NumberInput`, `Pagination`, `RadioGroup`, `Select`
  - Add clear triggers to `Combobox` and `Select` which clear the selected/entered value
  - Update `Skeleton` color to be easier to see on both light and dark modes
  - Add margin to `Alert` icon
  - Set pointer cursor on `ColorPicker` swatch trigger
  - Tighten `RadioGroup` styles (reduce spacing)
  - Set default cursor when `readOnly` is passed to `Rating`
  - Fix `Dialog` animations not working
  - Prevent text wrapping in `code` and `keyboard` recipes

## 0.9.1

### Patch Changes

- [#77](https://github.com/omnidotdev/sigil/pull/77) [`7ac917d`](https://github.com/omnidotdev/sigil/commit/7ac917dd10012e386b75223d72b0ce5bacfdf909) Thanks [@coopbri](https://github.com/coopbri)! - Fix `Dialog` DOM nesting validation by adding `asChild` prop to triggers

## 0.9.0

### Minor Changes

- [#66](https://github.com/omnidotdev/sigil/pull/66) [`ed5b1f1`](https://github.com/omnidotdev/sigil/commit/ed5b1f1e6ab844ac24d66fb439949b38c748d353) Thanks [@coopbri](https://github.com/coopbri)! - Add `Collapsible` component

### Patch Changes

- [#66](https://github.com/omnidotdev/sigil/pull/66) [`ed5b1f1`](https://github.com/omnidotdev/sigil/commit/ed5b1f1e6ab844ac24d66fb439949b38c748d353) Thanks [@coopbri](https://github.com/coopbri)! - Implement `DatePicker` prop overrides

## 0.8.0

### Minor Changes

- [#61](https://github.com/omnidotdev/sigil/pull/61) [`aa53720`](https://github.com/omnidotdev/sigil/commit/aa53720e8a2202e066b981194410f54bac0a427a) Thanks [@coopbri](https://github.com/coopbri)! - Add `aspectRatios` tokens (regular and semantic)

- [#61](https://github.com/omnidotdev/sigil/pull/61) [`aa53720`](https://github.com/omnidotdev/sigil/commit/aa53720e8a2202e066b981194410f54bac0a427a) Thanks [@coopbri](https://github.com/coopbri)! - Add `Clipboard` component

- [#61](https://github.com/omnidotdev/sigil/pull/61) [`aa53720`](https://github.com/omnidotdev/sigil/commit/aa53720e8a2202e066b981194410f54bac0a427a) Thanks [@coopbri](https://github.com/coopbri)! - Add `TreeView` component

## 0.7.0

### Minor Changes

- [#56](https://github.com/omnidotdev/sigil/pull/56) [`7248948`](https://github.com/omnidotdev/sigil/commit/724894853eac3e8196e2e29202fdd7a9a4b24664) Thanks [@coopbri](https://github.com/coopbri)! - Add `Skeleton` component

### Patch Changes

- [#58](https://github.com/omnidotdev/sigil/pull/58) [`170fe00`](https://github.com/omnidotdev/sigil/commit/170fe00e53c8f157b370830574f92f8ea0af0f66) Thanks [@coopbri](https://github.com/coopbri)! - Add text recipe with size variant

- [#58](https://github.com/omnidotdev/sigil/pull/58) [`170fe00`](https://github.com/omnidotdev/sigil/commit/170fe00e53c8f157b370830574f92f8ea0af0f66) Thanks [@coopbri](https://github.com/coopbri)! - Add enclosed Tab variant

- [#58](https://github.com/omnidotdev/sigil/pull/58) [`170fe00`](https://github.com/omnidotdev/sigil/commit/170fe00e53c8f157b370830574f92f8ea0af0f66) Thanks [@coopbri](https://github.com/coopbri)! - Add item input to tags input to allow editing tags with correct styles

## 0.6.0

### Minor Changes

- [#52](https://github.com/omnidotdev/sigil/pull/52) [`0ef465c`](https://github.com/omnidotdev/sigil/commit/0ef465c1d59ac028f0e0645179d7cc69d30eb674) Thanks [@coopbri](https://github.com/coopbri)! - Add `Progress` component

- [#50](https://github.com/omnidotdev/sigil/pull/50) [`6665dd0`](https://github.com/omnidotdev/sigil/commit/6665dd0e12dc0beca2d33ffbb09feeb6d4462af7) Thanks [@coopbri](https://github.com/coopbri)! - Add `length`, `controlProps`, and `inputProps` props to `PINInput`

### Patch Changes

- [#50](https://github.com/omnidotdev/sigil/pull/50) [`6665dd0`](https://github.com/omnidotdev/sigil/commit/6665dd0e12dc0beca2d33ffbb09feeb6d4462af7) Thanks [@coopbri](https://github.com/coopbri)! - Update `Avatar` fallback recipe styles"

- [#50](https://github.com/omnidotdev/sigil/pull/50) [`6665dd0`](https://github.com/omnidotdev/sigil/commit/6665dd0e12dc0beca2d33ffbb09feeb6d4462af7) Thanks [@coopbri](https://github.com/coopbri)! - Set disabled color when disabled `Select` is hovered"

- [#50](https://github.com/omnidotdev/sigil/pull/50) [`6665dd0`](https://github.com/omnidotdev/sigil/commit/6665dd0e12dc0beca2d33ffbb09feeb6d4462af7) Thanks [@coopbri](https://github.com/coopbri)! - Update `Tabs` width and height styles"

- [#50](https://github.com/omnidotdev/sigil/pull/50) [`6665dd0`](https://github.com/omnidotdev/sigil/commit/6665dd0e12dc0beca2d33ffbb09feeb6d4462af7) Thanks [@coopbri](https://github.com/coopbri)! - Update `SegmentGroup` recipe styles

- [#52](https://github.com/omnidotdev/sigil/pull/52) [`0ef465c`](https://github.com/omnidotdev/sigil/commit/0ef465c1d59ac028f0e0645179d7cc69d30eb674) Thanks [@coopbri](https://github.com/coopbri)! - Hide overflow on `Card`

- [#50](https://github.com/omnidotdev/sigil/pull/50) [`6665dd0`](https://github.com/omnidotdev/sigil/commit/6665dd0e12dc0beca2d33ffbb09feeb6d4462af7) Thanks [@coopbri](https://github.com/coopbri)! - Update `PINInput` variant and input styles"

- [#50](https://github.com/omnidotdev/sigil/pull/50) [`6665dd0`](https://github.com/omnidotdev/sigil/commit/6665dd0e12dc0beca2d33ffbb09feeb6d4462af7) Thanks [@coopbri](https://github.com/coopbri)! - Update `Switch` label recipe styles

## 0.5.0

### Minor Changes

- [#44](https://github.com/omnidotdev/sigil/pull/44) [`d42b7a3`](https://github.com/omnidotdev/sigil/commit/d42b7a30448112328b8fbcef1759e7ac52e9fdf4) Thanks [@coopbri](https://github.com/coopbri)! - **BREAKING:** Remove `HoverCard` component in favor of `Tooltip`

### Patch Changes

- [#44](https://github.com/omnidotdev/sigil/pull/44) [`d42b7a3`](https://github.com/omnidotdev/sigil/commit/d42b7a30448112328b8fbcef1759e7ac52e9fdf4) Thanks [@coopbri](https://github.com/coopbri)! - **BREAKING:** Rename `Avatar` `imageSource` prop to `imageSrc`

- [#44](https://github.com/omnidotdev/sigil/pull/44) [`d42b7a3`](https://github.com/omnidotdev/sigil/commit/d42b7a30448112328b8fbcef1759e7ac52e9fdf4) Thanks [@coopbri](https://github.com/coopbri)! - **BREAKING:** Rename `Icon` `as` prop to `src`

- [#44](https://github.com/omnidotdev/sigil/pull/44) [`d42b7a3`](https://github.com/omnidotdev/sigil/commit/d42b7a30448112328b8fbcef1759e7ac52e9fdf4) Thanks [@coopbri](https://github.com/coopbri)! - Fix Panda props not being able to be applied to all components (e.g. `colorPalette` on `Switch`)

- [#44](https://github.com/omnidotdev/sigil/pull/44) [`d42b7a3`](https://github.com/omnidotdev/sigil/commit/d42b7a30448112328b8fbcef1759e7ac52e9fdf4) Thanks [@coopbri](https://github.com/coopbri)! - Export prop types for all component parts

- [#44](https://github.com/omnidotdev/sigil/pull/44) [`d42b7a3`](https://github.com/omnidotdev/sigil/commit/d42b7a30448112328b8fbcef1759e7ac52e9fdf4) Thanks [@coopbri](https://github.com/coopbri)! - Set smooth scrolling in preset

- [#44](https://github.com/omnidotdev/sigil/pull/44) [`d42b7a3`](https://github.com/omnidotdev/sigil/commit/d42b7a30448112328b8fbcef1759e7ac52e9fdf4) Thanks [@coopbri](https://github.com/coopbri)! - `Avatar`: make `name` and `imageSrc` optional

## 0.4.0

### Minor Changes

- [#38](https://github.com/omnidotdev/sigil/pull/38) [`dd60117`](https://github.com/omnidotdev/sigil/commit/dd601176832ff0e433896b33e45f50c6ca124cff) Thanks [@coopbri](https://github.com/coopbri)! - Add virtual color palette support

### Patch Changes

- [#38](https://github.com/omnidotdev/sigil/pull/38) [`dd60117`](https://github.com/omnidotdev/sigil/commit/dd601176832ff0e433896b33e45f50c6ca124cff) Thanks [@coopbri](https://github.com/coopbri)! - Correct `Card` and `Checkbox` props interface to allow Panda props

- [#38](https://github.com/omnidotdev/sigil/pull/38) [`dd60117`](https://github.com/omnidotdev/sigil/commit/dd601176832ff0e433896b33e45f50c6ca124cff) Thanks [@coopbri](https://github.com/coopbri)! - Correct ordering of `th` and `thead` elements in `Table`

## 0.3.0

### Minor Changes

- [#28](https://github.com/omnidotdev/sigil/pull/28) [`1c25e59`](https://github.com/omnidotdev/sigil/commit/1c25e593051d197950588b3ffbd07f81047266a0) Thanks [@coopbri](https://github.com/coopbri)! - Add `FileUpload` component for uploading files in a dropzone

### Patch Changes

- [#29](https://github.com/omnidotdev/sigil/pull/29) [`431d0ec`](https://github.com/omnidotdev/sigil/commit/431d0ec39403187945c44f8ae5ed213f439f048a) Thanks [@coopbri](https://github.com/coopbri)! - Make trigger-enabled components conditionally render trigger only if passed (`Drawer`, `HoverCard`, `Menu`, `Popover`, `Tooltip`)

- [#26](https://github.com/omnidotdev/sigil/pull/26) [`ba71618`](https://github.com/omnidotdev/sigil/commit/ba71618cf7e9f66abdb445705fe22b4e4def30a5) Thanks [@coopbri](https://github.com/coopbri)! - Improve legibility of text selection (highlight) styles

- [#29](https://github.com/omnidotdev/sigil/pull/29) [`431d0ec`](https://github.com/omnidotdev/sigil/commit/431d0ec39403187945c44f8ae5ed213f439f048a) Thanks [@coopbri](https://github.com/coopbri)! - Update style recipes for accordion, checkbox, dialog, and drawer

- [#29](https://github.com/omnidotdev/sigil/pull/29) [`431d0ec`](https://github.com/omnidotdev/sigil/commit/431d0ec39403187945c44f8ae5ed213f439f048a) Thanks [@coopbri](https://github.com/coopbri)! - Improve ability to customize and compose `Accordion`

## 0.2.1

### Patch Changes

- [#20](https://github.com/omnidotdev/sigil/pull/20) [`dc54771`](https://github.com/omnidotdev/sigil/commit/dc54771644ce4f4d312d4d3536feeb69f6ec25d6) Thanks [@coopbri](https://github.com/coopbri)! - Fix type errors in breakpoint hooks preventing type declaration file emission

## 0.2.0

### Minor Changes

- [#16](https://github.com/omnidotdev/sigil/pull/16) [`5a7cb87`](https://github.com/omnidotdev/sigil/commit/5a7cb87206be8615dacb4510d30266f62b805bd9) Thanks [@coopbri](https://github.com/coopbri)!
  - Add `Link` component
  - Update brand colors and semantic tokens
  - Add default color token to each color scale
  - Add styles for indeterminate checkbox state
  - Update accordion and code style recipes

## 0.1.1

### Patch Changes

- [#10](https://github.com/omnidotdev/sigil/pull/10) [`13968e2`](https://github.com/omnidotdev/sigil/commit/13968e27fbc959b34b9afc747385c76c1f574b7b) Thanks [@coopbri](https://github.com/coopbri)! - Migrate `react-icons` imports from CJS to ESM

## 0.1.0

### Minor Changes

- [#1](https://github.com/omnidotdev/sigil/pull/1) [`35fd074`](https://github.com/omnidotdev/sigil/commit/35fd074d53df932620f5e5ca03909ddd8ca7f504) Thanks [@coopbri](https://github.com/coopbri)! - Initial release
