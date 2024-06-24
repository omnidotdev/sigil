---
"@omnidev/sigil": patch
---

Fix `Combobox` input value change handler composition. Previously, passing `onInputValueChange` would override the built-in handler, causing filtering to not work correctly. This update combines the logic of the built-in handler and any passed in handler.
