import { Select as ArkSelect } from "@ark-ui/react/select";
import { BiCheck, BiExpandVertical } from "react-icons/bi";

import { select } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { ComponentProps } from "react";

const { withProvider, withContext } = createStyleContext(select);

export const SelectRoot = withProvider(ArkSelect.Root, "root");
export interface SelectRootProps extends ComponentProps<typeof SelectRoot> {}

export const SelectClearTrigger = withContext(
  ArkSelect.ClearTrigger,
  "clearTrigger",
);
export interface SelectClearTriggerProps
  extends ComponentProps<typeof SelectClearTrigger> {}

export const SelectContent = withContext(ArkSelect.Content, "content");
export interface SelectContentProps
  extends ComponentProps<typeof SelectContent> {}

export const SelectControl = withContext(ArkSelect.Control, "control");
export interface SelectControlProps
  extends ComponentProps<typeof SelectControl> {}

// TODO use in prebuilt `Select` component
const SelectIndicator = withContext(ArkSelect.Indicator, "indicator");
export interface SelectIndicatorProps
  extends ComponentProps<typeof SelectIndicator> {}

export const SelectItem = withContext(ArkSelect.Item, "item");
export interface SelectItemProps extends ComponentProps<typeof SelectItem> {}

export const SelectItemGroup = withContext(ArkSelect.ItemGroup, "itemGroup");
export interface SelectItemGroupProps
  extends ComponentProps<typeof SelectItemGroup> {}

export const SelectItemGroupLabel = withContext(
  ArkSelect.ItemGroupLabel,
  "itemGroupLabel",
);
export interface SelectItemGroupLabelProps
  extends ComponentProps<typeof SelectItemGroupLabel> {}

export const SelectItemIndicator = withContext(
  ArkSelect.ItemIndicator,
  "itemIndicator",
);
export interface SelectItemIndicatorProps
  extends ComponentProps<typeof SelectItemIndicator> {}

export const SelectItemText = withContext(ArkSelect.ItemText, "itemText");
export interface SelectItemTextProps
  extends ComponentProps<typeof SelectItemText> {}

export const SelectLabel = withContext(ArkSelect.Label, "label");
export interface SelectLabelProps extends ComponentProps<typeof SelectLabel> {}

export const SelectPositioner = withContext(ArkSelect.Positioner, "positioner");
export interface SelectPositionerProps
  extends ComponentProps<typeof SelectPositioner> {}

export const SelectTrigger = withContext(ArkSelect.Trigger, "trigger");
export interface SelectTriggerProps
  extends ComponentProps<typeof SelectTrigger> {}

export const SelectValueText = withContext(ArkSelect.ValueText, "valueText");
export interface SelectValueTextProps
  extends ComponentProps<typeof SelectValueText> {}

export interface SelectProps extends SelectRootProps {
  label: {
    // TODO calculate ID from singular (add dashes, lowercase, etc.)
    id: string;
    singular: string;
    plural: string;
  };
}

/**
 * Select.
 */
const Select = ({ label, items, ...rest }: SelectProps) => (
  <SelectRoot positioning={{ sameWidth: true }} items={items} {...rest}>
    <SelectLabel>{label.singular}</SelectLabel>

    <SelectControl>
      <SelectTrigger>
        {/* @ts-ignore upstream issue */}
        <SelectValueText placeholder={`Select ${label.singular}...`} />
        <BiExpandVertical />
      </SelectTrigger>
    </SelectControl>

    <SelectPositioner>
      <SelectContent>
        <SelectItemGroup id={label.id}>
          <SelectItemGroupLabel htmlFor={label.id}>
            {label.plural}
          </SelectItemGroupLabel>

          {items.map((item) => (
            // @ts-ignore upstream (Ark `CollectionItem`) type bug
            <SelectItem key={item.value} item={item}>
              {/* @ts-ignore upstream (Ark `CollectionItem`) type bug */}
              <SelectItemText>{item.label}</SelectItemText>

              <SelectItemIndicator>
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
