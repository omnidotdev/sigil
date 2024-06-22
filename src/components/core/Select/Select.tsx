import { Select as ArkSelect } from "@ark-ui/react/select";
import { BiCheck, BiExpandVertical, BiX } from "react-icons/bi";

import { styled } from "generated/panda/jsx";
import { select } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { Assign, JsxStyleProps } from "generated/panda/types";
import type { ComponentProps } from "react";

const { withProvider, withContext } = createStyleContext(select);

// https://github.com/chakra-ui/ark/issues/1740#issuecomment-1817255471
type AugmentedSelectRoot = <T extends ArkSelect.CollectionItem>(
  props: Assign<JsxStyleProps, ArkSelect.RootProps<T>>,
) => JSX.Element;

export const SelectRoot = withProvider(
  styled(ArkSelect.Root) as AugmentedSelectRoot,
  "root",
);
export interface SelectRootProps extends ComponentProps<typeof SelectRoot> {}

export const SelectClearTrigger = withContext(
  styled(ArkSelect.ClearTrigger),
  "clearTrigger",
);
export interface SelectClearTriggerProps
  extends ComponentProps<typeof SelectClearTrigger> {}

export const SelectContent = withContext(styled(ArkSelect.Content), "content");
export interface SelectContentProps
  extends ComponentProps<typeof SelectContent> {}

export const SelectControl = withContext(styled(ArkSelect.Control), "control");
export interface SelectControlProps
  extends ComponentProps<typeof SelectControl> {}

// TODO use in prebuilt `Select` component
const SelectIndicator = withContext(styled(ArkSelect.Indicator), "indicator");
export interface SelectIndicatorProps
  extends ComponentProps<typeof SelectIndicator> {}

export const SelectItem = withContext(styled(ArkSelect.Item), "item");
export interface SelectItemProps extends ComponentProps<typeof SelectItem> {}

export const SelectItemGroup = withContext(
  styled(ArkSelect.ItemGroup),
  "itemGroup",
);
export interface SelectItemGroupProps
  extends ComponentProps<typeof SelectItemGroup> {}

export const SelectItemGroupLabel = withContext(
  styled(ArkSelect.ItemGroupLabel),
  "itemGroupLabel",
);
export interface SelectItemGroupLabelProps
  extends ComponentProps<typeof SelectItemGroupLabel> {}

export const SelectItemIndicator = withContext(
  styled(ArkSelect.ItemIndicator),
  "itemIndicator",
);
export interface SelectItemIndicatorProps
  extends ComponentProps<typeof SelectItemIndicator> {}

export const SelectItemText = withContext(
  styled(ArkSelect.ItemText),
  "itemText",
);
export interface SelectItemTextProps
  extends ComponentProps<typeof SelectItemText> {}

export const SelectLabel = withContext(styled(ArkSelect.Label), "label");
export interface SelectLabelProps extends ComponentProps<typeof SelectLabel> {}

export const SelectPositioner = withContext(
  styled(ArkSelect.Positioner),
  "positioner",
);
export interface SelectPositionerProps
  extends ComponentProps<typeof SelectPositioner> {}

export const SelectTrigger = withContext(styled(ArkSelect.Trigger), "trigger");
export interface SelectTriggerProps
  extends ComponentProps<typeof SelectTrigger> {}

export const SelectValueText = withContext(
  styled(ArkSelect.ValueText),
  "valueText",
);
export interface SelectValueTextProps
  extends ComponentProps<typeof SelectValueText> {}

export interface SelectProps extends SelectRootProps {
  /** Whether to display the input field label. */
  displayFieldLabel?: boolean;
  /** Whether to display the group label contained in the dropdown. */
  displayGroupLabel?: boolean;
  /** Whether to display the clear trigger button. */
  displayClearTrigger?: boolean;
  label: {
    // TODO calculate ID from singular (add dashes, lowercase, etc.)
    id: string;
    singular: string;
    plural: string;
  };
  labelProps?: SelectLabelProps;
  controlProps?: SelectControlProps;
  triggerProps?: SelectTriggerProps;
  valueTextProps?: SelectValueTextProps;
  clearTriggerProps?: SelectClearTriggerProps;
  positionerProps?: SelectPositionerProps;
  contentProps?: SelectContentProps;
  itemGroupProps?: SelectItemGroupProps;
  itemGroupLabelProps?: SelectItemGroupLabelProps;
  itemProps?: SelectItemProps;
  itemIndicatorProps?: SelectItemIndicatorProps;
  itemTextProps?: SelectItemTextProps;
}

/**
 * Select.
 */
const Select = ({
  displayFieldLabel = true,
  displayGroupLabel = true,
  displayClearTrigger = true,
  label,
  items,
  labelProps,
  controlProps,
  triggerProps,
  valueTextProps,
  clearTriggerProps,
  positionerProps,
  contentProps,
  itemGroupProps,
  itemGroupLabelProps,
  itemProps,
  itemIndicatorProps,
  itemTextProps,
  ...rest
}: SelectProps) => (
  <SelectRoot positioning={{ sameWidth: true }} items={items} {...rest}>
    {displayFieldLabel && (
      <SelectLabel {...labelProps}>{label.singular}</SelectLabel>
    )}

    <SelectControl {...controlProps}>
      <SelectTrigger {...triggerProps}>
        <SelectValueText {...valueTextProps} />

        <BiExpandVertical />
      </SelectTrigger>

      {displayClearTrigger && (
        <SelectClearTrigger asChild {...clearTriggerProps}>
          <BiX />
        </SelectClearTrigger>
      )}
    </SelectControl>

    <SelectPositioner {...positionerProps}>
      <SelectContent {...contentProps}>
        <SelectItemGroup id={label.id} {...itemGroupProps}>
          {displayGroupLabel && (
            <SelectItemGroupLabel {...itemGroupLabelProps}>
              {label.plural}
            </SelectItemGroupLabel>
          )}

          {items.map((item) => (
            // @ts-ignore upstream (Ark `CollectionItem`) type bug
            <SelectItem key={item.value} item={item} {...itemProps}>
              {/* @ts-ignore upstream (Ark `CollectionItem`) type bug */}
              <SelectItemText {...itemTextProps}>{item.label}</SelectItemText>

              <SelectItemIndicator {...itemIndicatorProps}>
                <BiCheck />
              </SelectItemIndicator>
            </SelectItem>
          ))}
        </SelectItemGroup>
      </SelectContent>
    </SelectPositioner>
  </SelectRoot>
);

export default Select;
