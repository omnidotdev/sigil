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

export const RadioGroupIndicator = withContext(
  styled(ArkRadioGroup.Indicator),
  "indicator",
);

export const RadioGroupItem = withContext(styled(ArkRadioGroup.Item), "item");

export const RadioGroupItemControl = withContext(
  styled(ArkRadioGroup.ItemControl),
  "itemControl",
);

export const RadioGroupItemText = withContext(
  styled(ArkRadioGroup.ItemText),
  "itemText",
);

export const RadioGroupLabel = withContext(
  styled(ArkRadioGroup.Label),
  "label",
);

/**
 * Radio group.
 */
const RadioGroup = ({ options, ...rest }: RadioGroupProps) => (
  <RadioGroupRoot defaultValue={options[0].value} {...rest}>
    {options.map(({ label, value, isDisabled }) => (
      <RadioGroupItem key={value} value={value} disabled={isDisabled}>
        <RadioGroupItemControl />

        <RadioGroupItemText>{label}</RadioGroupItemText>
      </RadioGroupItem>
    ))}
  </RadioGroupRoot>
);

export default RadioGroup;
