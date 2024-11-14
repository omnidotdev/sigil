import { Select as ArkSelect } from "@ark-ui/react/select";
import { BiCheck, BiExpandVertical, BiX } from "react-icons/bi";

import { styled } from "generated/panda/jsx";
import { select } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { SelectVariantProps } from "generated/panda/recipes";
import type { AssignJSXStyleProps } from "lib/types";
import type { ReactNode } from "react";

const { withProvider, withContext } = createStyleContext(select);

// https://github.com/chakra-ui/ark/issues/1740#issuecomment-1817255471
type AugmentedSelectRoot = <T extends ArkSelect.CollectionItem>(
  props: AssignJSXStyleProps<ArkSelect.RootProps<T>>,
) => JSX.Element;

export const SelectRoot = withProvider(
  styled(ArkSelect.Root) as AugmentedSelectRoot,
  "root",
);
export interface SelectRootProps
  extends AssignJSXStyleProps<ArkSelect.RootProps<ArkSelect.CollectionItem>>,
    SelectVariantProps {}

export const SelectClearTrigger = withContext(
  styled(ArkSelect.ClearTrigger),
  "clearTrigger",
);
export interface SelectClearTriggerProps
  extends AssignJSXStyleProps<ArkSelect.ClearTriggerProps> {}

export const SelectContent = withContext(styled(ArkSelect.Content), "content");
export interface SelectContentProps
  extends AssignJSXStyleProps<ArkSelect.ContentProps> {}

export const SelectControl = withContext(styled(ArkSelect.Control), "control");
export interface SelectControlProps
  extends AssignJSXStyleProps<ArkSelect.ControlProps> {}

// TODO use in prebuilt `Select` component
export const SelectIndicator = withContext(
  styled(ArkSelect.Indicator),
  "indicator",
);
export interface SelectIndicatorProps
  extends AssignJSXStyleProps<ArkSelect.IndicatorProps> {}

export const SelectItem = withContext(styled(ArkSelect.Item), "item");
export interface SelectItemProps
  extends AssignJSXStyleProps<ArkSelect.ItemProps> {}

export const SelectItemGroup = withContext(
  styled(ArkSelect.ItemGroup),
  "itemGroup",
);
export interface SelectItemGroupProps
  extends AssignJSXStyleProps<ArkSelect.ItemGroupProps> {}

export const SelectItemGroupLabel = withContext(
  styled(ArkSelect.ItemGroupLabel),
  "itemGroupLabel",
);
export interface SelectItemGroupLabelProps
  extends AssignJSXStyleProps<ArkSelect.ItemGroupLabelProps> {}

export const SelectItemIndicator = withContext(
  styled(ArkSelect.ItemIndicator),
  "itemIndicator",
);
export interface SelectItemIndicatorProps
  extends AssignJSXStyleProps<ArkSelect.ItemIndicatorProps> {}

export const SelectItemText = withContext(
  styled(ArkSelect.ItemText),
  "itemText",
);
export interface SelectItemTextProps
  extends AssignJSXStyleProps<ArkSelect.ItemTextProps> {}

export const SelectLabel = withContext(styled(ArkSelect.Label), "label");
export interface SelectLabelProps
  extends AssignJSXStyleProps<ArkSelect.LabelProps> {}

// TODO use in prebuilt `Select` component
export const SelectList = withContext(styled(ArkSelect.List), "list");
export interface SelectListProps
  extends AssignJSXStyleProps<ArkSelect.ListProps> {}

export const SelectPositioner = withContext(
  styled(ArkSelect.Positioner),
  "positioner",
);
export interface SelectPositionerProps
  extends AssignJSXStyleProps<ArkSelect.PositionerProps> {}

export const SelectTrigger = withContext(styled(ArkSelect.Trigger), "trigger");
export interface SelectTriggerProps
  extends AssignJSXStyleProps<ArkSelect.TriggerProps> {}

export const SelectValueText = withContext(
  styled(ArkSelect.ValueText),
  "valueText",
);
export interface SelectValueTextProps
  extends AssignJSXStyleProps<ArkSelect.ValueTextProps> {}

export interface SelectProps extends SelectRootProps {
  /** Whether to display the input field label. */
  displayFieldLabel?: boolean;
  /** Whether to display the group label contained in the dropdown. */
  displayGroupLabel?: boolean;
  /** Clear trigger. Defaults to an X icon. */
  clearTrigger?: ReactNode;
  label: {
    // TODO calculate ID from singular (add dashes, lowercase, etc.)
    id: string;
    singular: string;
    plural: string;
  };
  /** Label props. */
  labelProps?: SelectLabelProps;
  /** Control props. */
  controlProps?: SelectControlProps;
  /** Trigger props. */
  triggerProps?: SelectTriggerProps;
  /** Value text props. */
  valueTextProps?: SelectValueTextProps;
  /** Clear trigger props. */
  clearTriggerProps?: SelectClearTriggerProps;
  /** Positioner props. */
  positionerProps?: SelectPositionerProps;
  /** Content props. */
  contentProps?: SelectContentProps;
  /** Item group props. */
  itemGroupProps?: SelectItemGroupProps;
  /** Item group label props. */
  itemGroupLabelProps?: SelectItemGroupLabelProps;
  /** Item props. */
  itemProps?: SelectItemProps;
  /** Item indicator props. */
  itemIndicatorProps?: SelectItemIndicatorProps;
  /** Item text props. */
  itemTextProps?: SelectItemTextProps;
}

/**
 * Select.
 */
const Select = ({
  collection,
  displayFieldLabel = true,
  displayGroupLabel = true,
  clearTrigger = <BiX />,
  label,
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
  <SelectRoot
    positioning={{ sameWidth: true }}
    collection={collection}
    {...rest}
  >
    {displayFieldLabel && (
      <SelectLabel {...labelProps}>{label.singular}</SelectLabel>
    )}

    <SelectControl {...controlProps}>
      <SelectTrigger {...triggerProps}>
        <SelectValueText {...valueTextProps} />

        <BiExpandVertical />
      </SelectTrigger>

      {clearTrigger && (
        <SelectClearTrigger asChild {...clearTriggerProps}>
          {clearTrigger}
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

          {collection.items.map((item) => (
            <SelectItem key={item.value} item={item} {...itemProps}>
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
