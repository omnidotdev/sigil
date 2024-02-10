import type { Preset } from "@pandacss/types";

/**
 * Conditions.
 * @see https://panda-css.com/docs/concepts/conditional-styles#reference for all available condition keys.
 */
const conditions: Preset["conditions"] = {
  extend: {
    checked:
      "&:is(:checked, [data-checked], [aria-checked=true], [data-state=checked])",
    indeterminate:
      "&:is(:indeterminate, [data-indeterminate], [aria-checked=mixed], [data-state=indeterminate])",
    closed: "&:is([data-state=closed])",
    open: "&:is([open], [data-state=open])",
    hidden: "&:is([hidden])",
    current: "&:is([data-current])",
    today: "&:is([data-today])",
    placeholderShown: "&:is(:placeholder-shown, [data-placeholder-shown])",
    collapsed:
      '&:is([aria-collapsed=true], [data-collapsed], [data-state="collapsed"])',
    underValue: '&:is([data-state="under-value"])',
  },
};

export default conditions;
