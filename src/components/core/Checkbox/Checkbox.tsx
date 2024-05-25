import { Checkbox as ArkCheckbox } from "@ark-ui/react/checkbox";

import { checkbox } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { ComponentProps } from "react";

const { withProvider, withContext } = createStyleContext(checkbox);

export const CheckboxRoot = withProvider(ArkCheckbox.Root, "root");
export interface CheckboxRootProps
  extends ComponentProps<typeof CheckboxRoot> {}

export const CheckboxControl = withContext(ArkCheckbox.Control, "control");
export interface CheckboxControlProps
  extends ComponentProps<typeof CheckboxControl> {}

const CheckboxIndicator = withContext(ArkCheckbox.Indicator, "indicator");

// TODO use in prebuilt `Checkbox` component
export interface CheckboxIndicatorProps
  extends ComponentProps<typeof CheckboxIndicator> {}

export const CheckboxLabel = withContext(ArkCheckbox.Label, "label");
export interface CheckboxLabelProps
  extends ComponentProps<typeof CheckboxLabel> {}

// TODO change to react-icons icon, and make sure can click icon to toggle state (add test)
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

// TODO change to react-icons icon, and make sure can click icon to toggle state (add test)
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

export interface CheckboxProps extends CheckboxRootProps {
  /** Checkbox label. */
  label: string;
}

/**
 * Interactive checkbox.
 */
const Checkbox = ({ label, ...rest }: CheckboxProps) => (
  <CheckboxRoot {...rest}>
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
