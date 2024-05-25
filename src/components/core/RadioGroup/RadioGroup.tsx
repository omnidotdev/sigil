import { RadioGroup as ArkRadioGroup } from "@ark-ui/react/radio-group";

import { radioGroup } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type {} from "@zag-js/radio-group";
import type { ComponentProps } from "react";

const { withProvider, withContext } = createStyleContext(radioGroup);

export const RadioGroupRoot = withProvider(ArkRadioGroup.Root, "root");
export interface RadioGroupRootProps
  extends ComponentProps<typeof RadioGroupRoot> {}

export const RadioGroupIndicator = withContext(
  ArkRadioGroup.Indicator,
  "indicator",
);
export interface RadioGroupIndicatorProps
  extends ComponentProps<typeof RadioGroupIndicator> {}

export const RadioGroupItem = withContext(ArkRadioGroup.Item, "item");
export interface RadioGroupItemProps
  extends ComponentProps<typeof RadioGroupItem> {}

export const RadioGroupItemControl = withContext(
  ArkRadioGroup.ItemControl,
  "itemControl",
);
export interface RadioGroupItemControlProps
  extends ComponentProps<typeof RadioGroupItemControl> {}

export const RadioGroupItemText = withContext(
  ArkRadioGroup.ItemText,
  "itemText",
);
export interface RadioGroupItemTextProps
  extends ComponentProps<typeof RadioGroupItemText> {}

export const RadioGroupLabel = withContext(ArkRadioGroup.Label, "label");
export interface RadioGroupLabelProps
  extends ComponentProps<typeof RadioGroupLabel> {}

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
