import { RadioGroup as ArkRadioGroup } from "@ark-ui/react/radio-group";

import { styled } from "generated/panda/jsx";
import { radioGroup } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { RadioGroupProps as ArkRadioGroupProps } from "@ark-ui/react/radio-group";
import type { RadioGroupVariantProps } from "generated/panda/recipes";

// https://github.com/microsoft/TypeScript/issues/47663
import type {} from "@zag-js/radio-group";

const { withProvider, withContext } = createStyleContext(radioGroup);

export interface RadioGroupProps
  extends ArkRadioGroupProps,
    RadioGroupVariantProps {
  options: { value: string; label: string; isDisabled?: boolean }[];
}

export const RadioGroupRoot = withProvider(styled(ArkRadioGroup.Root), "root");

export const RadioGroupLabel = withContext(
  styled(ArkRadioGroup.Label),
  "label",
);

export const Radio = withContext(styled(ArkRadioGroup.Radio), "radio");

export const RadioLabel = withContext(
  styled(ArkRadioGroup.RadioLabel),
  "radioLabel",
);

export const RadioControl = withContext(
  styled(ArkRadioGroup.RadioControl),
  "radioControl",
);

/**
 * Radio group.
 */
const RadioGroup = ({ options, ...rest }: RadioGroupProps) => (
  <RadioGroupRoot
    orientation="horizontal"
    defaultValue={options[0].value}
    {...rest}
  >
    {options.map(({ label, value, isDisabled }) => (
      <Radio key={value} value={value} disabled={isDisabled}>
        <RadioControl />

        <RadioLabel>{label}</RadioLabel>
      </Radio>
    ))}
  </RadioGroupRoot>
);

export default RadioGroup;
