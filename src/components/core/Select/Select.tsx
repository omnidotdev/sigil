import { Select as ArkSelect } from "@ark-ui/react/select";
import { BiCheck, BiExpandVertical } from "react-icons/bi/index.js";

import { styled } from "generated/panda/jsx";
import { select } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { HTMLStyledProps } from "generated/panda/jsx";

const { withProvider, withContext } = createStyleContext(select);

export const SelectRoot = withProvider(styled(ArkSelect.Root), "root");
export interface SelectRootProps extends HTMLStyledProps<typeof SelectRoot> {}

export const SelectClearTrigger = withContext(
  styled(ArkSelect.ClearTrigger),
  "clearTrigger",
);
export interface SelectClearTriggerProps
  extends HTMLStyledProps<typeof SelectClearTrigger> {}

export const SelectContent = withContext(styled(ArkSelect.Content), "content");
export interface SelectContentProps
  extends HTMLStyledProps<typeof SelectContent> {}

export const SelectControl = withContext(styled(ArkSelect.Control), "control");
export interface SelectControlProps
  extends HTMLStyledProps<typeof SelectControl> {}

// TODO use in prebuilt `Select` component
const SelectIndicator = withContext(styled(ArkSelect.Indicator), "indicator");
export interface SelectIndicatorProps
  extends HTMLStyledProps<typeof SelectIndicator> {}

export const SelectItem = withContext(styled(ArkSelect.Item), "item");
export interface SelectItemProps extends HTMLStyledProps<typeof SelectItem> {}

export const SelectItemGroup = withContext(
  styled(ArkSelect.ItemGroup),
  "itemGroup",
);
export interface SelectItemGroupProps
  extends HTMLStyledProps<typeof SelectItemGroup> {}

export const SelectItemGroupLabel = withContext(
  styled(ArkSelect.ItemGroupLabel),
  "itemGroupLabel",
);
export interface SelectItemGroupLabelProps
  extends HTMLStyledProps<typeof SelectItemGroupLabel> {}

export const SelectItemIndicator = withContext(
  styled(ArkSelect.ItemIndicator),
  "itemIndicator",
);
export interface SelectItemIndicatorProps
  extends HTMLStyledProps<typeof SelectItemIndicator> {}

export const SelectItemText = withContext(
  styled(ArkSelect.ItemText),
  "itemText",
);
export interface SelectItemTextProps
  extends HTMLStyledProps<typeof SelectItemText> {}

export const SelectLabel = withContext(styled(ArkSelect.Label), "label");
export interface SelectLabelProps extends HTMLStyledProps<typeof SelectLabel> {}

export const SelectPositioner = withContext(
  styled(ArkSelect.Positioner),
  "positioner",
);
export interface SelectPositionerProps
  extends HTMLStyledProps<typeof SelectPositioner> {}

export const SelectTrigger = withContext(styled(ArkSelect.Trigger), "trigger");
export interface SelectTriggerProps
  extends HTMLStyledProps<typeof SelectTrigger> {}

export const SelectValueText = withContext(
  styled(ArkSelect.ValueText),
  "valueText",
);
export interface SelectValueTextProps
  extends HTMLStyledProps<typeof SelectValueText> {}

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
  <SelectRoot
    positioning={{ sameWidth: true }}
    width="2xs"
    items={items}
    {...rest}
  >
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
