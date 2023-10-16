import { Portal } from "@ark-ui/react";
import { Select as ArkSelect } from "@ark-ui/react/select";
import { BiCheck, BiExpandVertical } from "react-icons/bi";

import { styled } from "generated/panda/jsx";
import { select, type SelectVariantProps } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type {
  SelectProps as ArkSelectProps,
  CollectionItem,
} from "@ark-ui/react/select";

// https://github.com/microsoft/TypeScript/issues/47663
import type {} from "@zag-js/select";

const { withProvider, withContext } = createStyleContext(select);

export interface SelectProps<T extends CollectionItem>
  extends ArkSelectProps<T>,
    SelectVariantProps {
  label: {
    // TODO calculate ID from singular (add dashes, lowercase, etc.)
    id: string;
    singular: string;
    plural: string;
  };
}

export const SelectRoot = withProvider(styled(ArkSelect.Root), "root");

export const SelectClearTrigger = withContext(
  styled(ArkSelect.ClearTrigger),
  "clearTrigger",
);

export const SelectContent = withContext(styled(ArkSelect.Content), "content");

export const SelectControl = withContext(styled(ArkSelect.Control), "control");

export const SelectItem = withContext(styled(ArkSelect.Item), "item");

export const SelectItemGroup = withContext(
  styled(ArkSelect.ItemGroup),
  "itemGroup",
);

export const SelectItemGroupLabel = withContext(
  styled(ArkSelect.ItemGroupLabel),
  "itemGroupLabel",
);

export const SelectItemIndicator = withContext(
  styled(ArkSelect.ItemIndicator),
  "itemIndicator",
);

export const SelectItemText = withContext(
  styled(ArkSelect.ItemText),
  "itemText",
);

export const SelectLabel = withContext(styled(ArkSelect.Label), "label");

export const SelectPositioner = withContext(
  styled(ArkSelect.Positioner),
  "positioner",
);

export const SelectTrigger = withContext(styled(ArkSelect.Trigger), "trigger");

export const SelectValue = withContext(styled(ArkSelect.Value), "value");

/**
 * Select.
 */
const Select = ({ label, items, ...rest }: SelectProps<CollectionItem>) => (
  <SelectRoot
    positioning={{ sameWidth: true }}
    width="2xs"
    items={items}
    {...rest}
  >
    {/* {({ selectedOption }) => ( */}
    <>
      <SelectLabel>{label.singular}</SelectLabel>

      <SelectControl>
        <SelectTrigger>
          <SelectValue placeholder={`Select ${label.singular}...`} />
          <BiExpandVertical />
        </SelectTrigger>
      </SelectControl>

      <Portal>
        <SelectPositioner>
          <SelectContent>
            <SelectItemGroup id={label.id}>
              <SelectItemGroupLabel htmlFor={label.id}>
                {label.plural}
              </SelectItemGroupLabel>

              {items.map((item) => (
                // @ts-expect-error upstream (Ark `CollectionItem`) type bug
                <SelectItem key={item.value} item={item}>
                  {/* @ts-expect-error upstream (Ark `CollectionItem`) type bug */}
                  <SelectItemText>{item.label}</SelectItemText>

                  <SelectItemIndicator>
                    <BiCheck />
                  </SelectItemIndicator>
                </SelectItem>
              ))}
            </SelectItemGroup>
          </SelectContent>
        </SelectPositioner>
      </Portal>
    </>
    {/* )} */}
  </SelectRoot>
);

export default Select;
