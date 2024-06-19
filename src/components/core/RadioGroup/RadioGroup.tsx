import { RadioGroup as ArkRadioGroup } from "@ark-ui/react/radio-group";

import { styled } from "generated/panda/jsx";
import { radioGroup } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { ComponentProps } from "react";

const { withProvider, withContext } = createStyleContext(radioGroup);

export const RadioGroupRoot = withProvider(styled(ArkRadioGroup.Root), "root");
export interface RadioGroupRootProps
  extends ComponentProps<typeof RadioGroupRoot> {}

export const RadioGroupIndicator = withContext(
  styled(ArkRadioGroup.Indicator),
  "indicator",
);
export interface RadioGroupIndicatorProps
  extends ComponentProps<typeof RadioGroupIndicator> {}

export const RadioGroupItem = withContext(styled(ArkRadioGroup.Item), "item");
export interface RadioGroupItemProps
  extends ComponentProps<typeof RadioGroupItem> {}

export const RadioGroupItemControl = withContext(
  styled(ArkRadioGroup.ItemControl),
  "itemControl",
);
export interface RadioGroupItemControlProps
  extends ComponentProps<typeof RadioGroupItemControl> {}

export const RadioGroupItemText = withContext(
  styled(ArkRadioGroup.ItemText),
  "itemText",
);
export interface RadioGroupItemTextProps
  extends ComponentProps<typeof RadioGroupItemText> {}

export const RadioGroupLabel = withContext(
  styled(ArkRadioGroup.Label),
  "label",
);
export interface RadioGroupLabelProps
  extends ComponentProps<typeof RadioGroupLabel> {}

export const RadioGroupItemHiddenInput = ArkRadioGroup.ItemHiddenInput;
export interface RadioGroupHiddenInputProps
  extends ComponentProps<typeof RadioGroupItemHiddenInput> {}

export interface RadioGroupProps extends RadioGroupRootProps {
  options: { value: string; label: string; isDisabled?: boolean }[];
  itemProps?: RadioGroupItemProps;
  itemControlProps?: RadioGroupItemControlProps;
  itemTextProps?: RadioGroupItemTextProps;
  itemHiddenInputProps?: RadioGroupHiddenInputProps;
}

/**
 * Radio group.
 */
const RadioGroup = ({
  options,
  itemProps,
  itemControlProps,
  itemTextProps,
  itemHiddenInputProps,
  ...rest
}: RadioGroupProps) => (
  <RadioGroupRoot
    orientation="horizontal"
    defaultValue={options[0].value}
    {...rest}
  >
    {options.map(({ label, value, isDisabled }) => (
      <RadioGroupItem
        key={value}
        value={value}
        disabled={isDisabled}
        {...itemProps}
      >
        <RadioGroupItemControl {...itemControlProps} />

        <RadioGroupItemText {...itemTextProps}>{label}</RadioGroupItemText>

        <RadioGroupItemHiddenInput {...itemHiddenInputProps} />
      </RadioGroupItem>
    ))}
  </RadioGroupRoot>
);

export default RadioGroup;
