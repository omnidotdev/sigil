import type { Preset } from "@pandacss/types";

/**
 * Conditions.
 * @see https://panda-css.com/docs/concepts/conditional-styles#reference for all available condition keys.
 */
const conditions: Preset["conditions"] = {
  extend: {
    current: "&:is([data-current])",
    hidden: "&:is([hidden])",
    hover: [
      "@media (hover: hover) and (pointer: fine)",
      "&:is(:hover, [data-hover])",
    ],
    indeterminate:
      "&:is(:indeterminate, [data-indeterminate], [aria-checked=mixed], [data-state=indeterminate])",
    off: '&:is([data-state="off"])',
    on: '&:is([data-state="on"])',
    today: "&:is([data-today])",
    underValue: '&:is([data-state="under-value"])',
  },
};

export default conditions;
