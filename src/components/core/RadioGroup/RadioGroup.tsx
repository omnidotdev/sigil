import { RadioGroup as ArkRadioGroup } from "@ark-ui/react/radio-group";

import { styled } from "generated/panda/jsx";
import { radioGroup } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { HTMLStyledProps } from "generated/panda/jsx";

// https://github.com/microsoft/TypeScript/issues/47663
import type {} from "@zag-js/radio-group";

const { withProvider, withContext } = createStyleContext(radioGroup);

export const RadioGroupRoot = withProvider(styled(ArkRadioGroup.Root), "root");
export interface RadioGroupRootProps
  extends HTMLStyledProps<typeof RadioGroupRoot> {}

export const RadioGroupIndicator = withContext(
  styled(ArkRadioGroup.Indicator),
  "indicator",
);
export interface RadioGroupIndicatorProps
  extends HTMLStyledProps<typeof RadioGroupIndicator> {}

export const RadioGroupItem = withContext(styled(ArkRadioGroup.Item), "item");
export interface RadioGroupItemProps
  extends HTMLStyledProps<typeof RadioGroupItem> {}

export const RadioGroupItemControl = withContext(
  styled(ArkRadioGroup.ItemControl),
  "itemControl",
);
export interface RadioGroupItemControlProps
  extends HTMLStyledProps<typeof RadioGroupItemControl> {}

export const RadioGroupItemText = withContext(
  styled(ArkRadioGroup.ItemText),
  "itemText",
);
export interface RadioGroupItemTextProps
  extends HTMLStyledProps<typeof RadioGroupItemText> {}

export const RadioGroupLabel = withContext(
  styled(ArkRadioGroup.Label),
  "label",
);
export interface RadioGroupLabelProps
  extends HTMLStyledProps<typeof RadioGroupLabel> {}

export interface RadioGroupProps extends RadioGroupRootProps {
  options: { value: string; label: string; isDisabled?: boolean }[];
}

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
