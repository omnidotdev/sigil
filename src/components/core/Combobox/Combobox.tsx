import { Portal, type CollectionItem } from "@ark-ui/react";
import { Combobox as ArkCombobox } from "@ark-ui/react/combobox";
import { useState } from "react";
import { BiCheck, BiExpandVertical } from "react-icons/bi";

import Button from "components/core/Button/Button";
import Input from "components/core/Input/Input";
import { styled } from "generated/panda/jsx";
import { combobox, type ComboboxVariantProps } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { ComboboxProps as ArkComboboxProps } from "@ark-ui/react/combobox";
import type { ComponentProps } from "react";

// https://github.com/microsoft/TypeScript/issues/47663
import type {} from "@zag-js/combobox";

const { withProvider, withContext } = createStyleContext(combobox);

export interface ComboboxProps<T extends CollectionItem>
  extends ArkComboboxProps<T>,
    ComboboxVariantProps {
  label: {
    // TODO calculate ID from singular (add dashes, lowercase, etc.)
    id: string;
    singular: string;
    plural: string;
  };
}

export const ComboboxRoot = withProvider(styled(ArkCombobox.Root), "root");

export const ComboboxClearTrigger = withContext(
  styled(ArkCombobox.ClearTrigger),
  "clearTrigger",
);

export const ComboboxContent = withContext(
  styled(ArkCombobox.Content),
  "content",
);

export const ComboboxControl = withContext(
  styled(ArkCombobox.Control),
  "control",
);

export const ComboboxInput = withContext(styled(ArkCombobox.Input), "input");

export const ComboboxItem = withContext(styled(ArkCombobox.Item), "item");

export const ComboboxItemGroup = withContext(
  styled(ArkCombobox.ItemGroup),
  "itemGroup",
);

export const ComboboxItemGroupLabel = withContext(
  styled(ArkCombobox.ItemGroupLabel),
  "itemGroupLabel",
);

export const ComboboxItemIndicator = withContext(
  styled(ArkCombobox.ItemIndicator),
  "itemIndicator",
);

export const ComboboxItemText = withContext(
  styled(ArkCombobox.ItemText),
  "itemText",
);

export const ComboboxLabel = withContext(styled(ArkCombobox.Label), "label");

export const ComboboxPositioner = withContext(
  styled(ArkCombobox.Positioner),
  "positioner",
);

export const ComboboxTrigger = withContext(
  styled(ArkCombobox.Trigger),
  "trigger",
);

// TODO fix combobox not filtering when searching (works on Park UI: https://park-ui.com/docs/components/combobox)

/**
 * Combobox.
 */
const Combobox = ({ label, items, ...rest }: ComboboxProps<CollectionItem>) => {
  const [filteredItems, setFilteredItems] = useState(items);

  console.log(filteredItems);

  const handleChange = (
    evt: Parameters<
      NonNullable<ComponentProps<typeof ComboboxRoot>["onInputChange"]>
    >[0],
  ) => {
    console.log(evt.value);

    const filtered = items.filter((item) =>
      // @ts-expect-error upstream (Ark `CollectionItem`) type bug
      item.label.toLowerCase().includes(evt.value.toLowerCase()),
    );

    console.group("FILTERED");
    console.log(filtered);
    console.groupEnd();

    setFilteredItems(filtered.length ? filtered : items);
  };

  return (
    <ComboboxRoot
      width="2xs"
      onInputChange={handleChange}
      items={filteredItems}
      {...rest}
    >
      <ComboboxLabel>{label.plural}</ComboboxLabel>

      <ComboboxControl>
        <ComboboxInput
          asChild
          placeholder={`Select a ${label.singular.toLowerCase()}...`}
        >
          <Input />
        </ComboboxInput>

        <ComboboxTrigger asChild>
          <Button variant="link" aria-label="open" size="xs">
            <BiExpandVertical />
          </Button>
        </ComboboxTrigger>
      </ComboboxControl>

      <Portal>
        <ComboboxPositioner>
          <ComboboxContent>
            <ComboboxItemGroup id={label.id}>
              <ComboboxItemGroupLabel htmlFor={label.id}>
                {label.plural}
              </ComboboxItemGroupLabel>

              {filteredItems.map((item) => (
                // @ts-expect-error upstream (Ark `CollectionItem`) type bug
                <ComboboxItem key={item.value} item={item}>
                  {/* @ts-expect-error upstream (Ark `CollectionItem`) type bug */}
                  <ComboboxItemText>{item.label}</ComboboxItemText>

                  <ComboboxItemIndicator>
                    <BiCheck />
                  </ComboboxItemIndicator>
                </ComboboxItem>
              ))}
            </ComboboxItemGroup>
          </ComboboxContent>
        </ComboboxPositioner>
      </Portal>
    </ComboboxRoot>
  );
};

export default Combobox;
