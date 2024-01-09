# @omnidev/sigil

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

- [#29](https://github.com/omnidotdev/sigil/pull/29) [`431d0ec`](https://github.com/omnidotdev/sigil/commit/431d0ec39403187945c44f8ae5ed213f439f048a) Thanks [@coopbri](https://github.com/coopbri)! - Made trigger-enabled components conditionally render trigger only if passed (`Drawer`, `HoverCard`, `Menu`, `Popover`, `Tooltip`)

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
