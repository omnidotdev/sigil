---
"@omnidev/sigil": patch
---

**BREAKING:** Change `Switch` `children` prop to `label`
**BREAKING:** Change `TreeView` child and `MenuItem` `id` prop to `value` to match Ark upstream
Make `label` prop optional on `TabsInput`
Refine `Toaster` API and added styled variants (`base`, `info` (default), `loading`, `success`, `warning`, `error`)
Add `Keyboard` `ghost` variant
Add `colorPalette` support to `Combobox`, `PINInput`, `Pagination`, `Select`, and `TreeView`
Add `displayFieldLabel`, `displayGroupLabel`, and `displayClearTrigger` props to `Combobox` and `Select`
Add subcomponent prop composition to `Accordion`, `Checkbox`, `ColorPicker`, `Combobox`, `Dialog`, `Drawer`, `Menu`, `NumberInput`, `Pagination`, `RadioGroup`, `Select`
Add clear triggers to `Combobox` and `Select` which clear the selected/entered value
Update `Skeleton` color to be easier to see on both light and dark modes
Add margin to `Alert` icon
Set pointer cursor on `ColorPicker` swatch trigger
Tighten `RadioGroup` styles (reduce spacing)
Set default cursor when `readOnly` is passed to `Rating`
Fix `Dialog` animations not working
Prevent text wrapping in `code` and `keyboard` recipes
