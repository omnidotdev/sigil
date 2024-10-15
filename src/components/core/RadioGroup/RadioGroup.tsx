import { RadioGroup as ArkRadioGroup } from "@ark-ui/react/radio-group";

import { styled } from "generated/panda/jsx";
import { radioGroup } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { RadioGroupVariantProps } from "generated/panda/recipes";
import type { AssignJSXStyleProps } from "lib/types";

const { withProvider, withContext } = createStyleContext(radioGroup);

export const RadioGroupRoot = withProvider(styled(ArkRadioGroup.Root), "root");
export interface RadioGroupRootProps
  extends AssignJSXStyleProps<ArkRadioGroup.RootProps>,
    RadioGroupVariantProps {}

export const RadioGroupIndicator = withContext(
  styled(ArkRadioGroup.Indicator),
  "indicator",
);
export interface RadioGroupIndicatorProps
  extends AssignJSXStyleProps<ArkRadioGroup.IndicatorProps> {}

export const RadioGroupItem = withContext(styled(ArkRadioGroup.Item), "item");
export interface RadioGroupItemProps
  extends AssignJSXStyleProps<ArkRadioGroup.ItemProps> {}

export const RadioGroupItemControl = withContext(
  styled(ArkRadioGroup.ItemControl),
  "itemControl",
);
export interface RadioGroupItemControlProps
  extends AssignJSXStyleProps<ArkRadioGroup.ItemControlProps> {}

export const RadioGroupItemText = withContext(
  styled(ArkRadioGroup.ItemText),
  "itemText",
);
export interface RadioGroupItemTextProps
  extends AssignJSXStyleProps<ArkRadioGroup.ItemTextProps> {}

export const RadioGroupLabel = withContext(
  styled(ArkRadioGroup.Label),
  "label",
);
export interface RadioGroupLabelProps
  extends AssignJSXStyleProps<ArkRadioGroup.LabelProps> {}

export const RadioGroupItemHiddenInput = ArkRadioGroup.ItemHiddenInput;
export interface RadioGroupHiddenInputProps
  extends AssignJSXStyleProps<ArkRadioGroup.ItemHiddenInputProps> {}

export interface RadioGroupProps extends RadioGroupRootProps {
  /** Available options. */
  options: { value: string; label: string; isDisabled?: boolean }[];
  /** Item props. */
  itemProps?: RadioGroupItemProps;
  /** Item control props. */
  itemControlProps?: RadioGroupItemControlProps;
  /** Item text props. */
  itemTextProps?: RadioGroupItemTextProps;
  /** Hidden input props. */
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
