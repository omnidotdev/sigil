import { Checkbox as ArkCheckbox } from "@ark-ui/react/checkbox";

import { styled } from "generated/panda/jsx";
import { checkbox, type CheckboxVariantProps } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { CheckboxProps as ArkCheckboxProps } from "@ark-ui/react/checkbox";

const { withProvider, withContext } = createStyleContext(checkbox);

export interface CheckboxProps
  extends Omit<ArkCheckboxProps, "children">,
    CheckboxVariantProps {
  /** Checkbox label. */
  label: string;
}

export const CheckboxRoot = withProvider(styled(ArkCheckbox.Root), "root");

export const CheckboxControl = withContext(
  styled(ArkCheckbox.Control),
  "control",
);

export const CheckboxLabel = withContext(styled(ArkCheckbox.Label), "label");

// TODO change to react-icons icon, and make sure can click icon to toggle state
const CheckIcon = () => (
  <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M11.6666 3.5L5.24992 9.91667L2.33325 7"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// TODO change to react-icons icon, and make sure can click icon to toggle state
const MinusIcon = () => (
  <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M2.91675 7H11.0834"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Interactive checkbox.
 */
const Checkbox = ({ label, ...rest }: CheckboxProps) => (
  <CheckboxRoot defaultChecked {...rest}>
    {(ctx) => (
      <>
        <CheckboxControl>
          {ctx.isChecked && <CheckIcon />}

          {ctx.isIndeterminate && <MinusIcon />}
        </CheckboxControl>

        <CheckboxLabel>{label}</CheckboxLabel>
      </>
    )}
  </CheckboxRoot>
);

export default Checkbox;
