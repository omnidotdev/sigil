import { RadioGroup as ArkRadioGroup } from "@ark-ui/react/radio-group";

import { styled } from "generated/panda/jsx";
import { radioGroup } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { Assign, JsxStyleProps } from "generated/panda/types";

const { withProvider, withContext } = createStyleContext(radioGroup);

export const RadioGroupRoot = withProvider(styled(ArkRadioGroup.Root), "root");
export interface RadioGroupRootProps
  extends Assign<JsxStyleProps, ArkRadioGroup.RootProps> {}

export const RadioGroupIndicator = withContext(
  styled(ArkRadioGroup.Indicator),
  "indicator",
);
export interface RadioGroupIndicatorProps
  extends Assign<JsxStyleProps, ArkRadioGroup.IndicatorProps> {}

export const RadioGroupItem = withContext(styled(ArkRadioGroup.Item), "item");
export interface RadioGroupItemProps
  extends Assign<JsxStyleProps, ArkRadioGroup.ItemProps> {}

export const RadioGroupItemControl = withContext(
  styled(ArkRadioGroup.ItemControl),
  "itemControl",
);
export interface RadioGroupItemControlProps
  extends Assign<JsxStyleProps, ArkRadioGroup.ItemControlProps> {}

export const RadioGroupItemText = withContext(
  styled(ArkRadioGroup.ItemText),
  "itemText",
);
export interface RadioGroupItemTextProps
  extends Assign<JsxStyleProps, ArkRadioGroup.ItemTextProps> {}

export const RadioGroupLabel = withContext(
  styled(ArkRadioGroup.Label),
  "label",
);
export interface RadioGroupLabelProps
  extends Assign<JsxStyleProps, ArkRadioGroup.LabelProps> {}

export const RadioGroupItemHiddenInput = ArkRadioGroup.ItemHiddenInput;
export interface RadioGroupHiddenInputProps
  extends Assign<JsxStyleProps, ArkRadioGroup.ItemHiddenInputProps> {}

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
