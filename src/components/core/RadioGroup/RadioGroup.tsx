import * as Ark from "@ark-ui/react/radio-group";

import { styled } from "generated/panda/jsx";
import { radioGroup } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { RadioGroupVariantProps } from "generated/panda/recipes";

const { withProvider, withContext } = createStyleContext(radioGroup);

export interface RadioGroupProps
  extends Ark.RadioGroupProps,
    RadioGroupVariantProps {
  options: { value: string; label: string }[];
}

export const RadioGroupRoot = withProvider(styled(Ark.RadioGroup.Root), "root");

export const RadioGroupLabel = withContext(
  styled(Ark.RadioGroup.Label),
  "label",
);

export const Radio = withContext(styled(Ark.RadioGroup.Radio), "radio");

export const RadioLabel = withContext(
  styled(Ark.RadioGroup.RadioLabel),
  "radioLabel",
);

export const RadioControl = withContext(
  styled(Ark.RadioGroup.RadioControl),
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
    {options.map((option) => (
      <Radio key={option.value} value={option.value}>
        <RadioControl />

        <RadioLabel>{option.label}</RadioLabel>
      </Radio>
    ))}
  </RadioGroupRoot>
);

export default RadioGroup;
