import { Combobox as ArkCombobox } from "@ark-ui/react/combobox";
import { useState } from "react";
import { BiCheck, BiExpandVertical } from "react-icons/bi";

import Button from "components/core/Button/Button";
import Input from "components/core/Input/Input";
import { styled } from "generated/panda/jsx";
import { combobox } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { ComponentProps } from "react";

// https://github.com/microsoft/TypeScript/issues/47663
import type {} from "@zag-js/combobox";

const { withProvider, withContext } = createStyleContext(combobox);

export const ComboboxRoot = withProvider(styled(ArkCombobox.Root), "root");
export interface ComboboxRootProps
  extends ComponentProps<typeof ComboboxRoot> {}

export const ComboboxClearTrigger = withContext(
  styled(ArkCombobox.ClearTrigger),
  "clearTrigger",
);
export interface ComboboxClearTriggerProps
  extends ComponentProps<typeof ComboboxClearTrigger> {}

export const ComboboxContent = withContext(
  styled(ArkCombobox.Content),
  "content",
);
export interface ComboboxContentProps
  extends ComponentProps<typeof ComboboxContent> {}

export const ComboboxControl = withContext(
  styled(ArkCombobox.Control),
  "control",
);
export interface ComboboxControlProps
  extends ComponentProps<typeof ComboboxControl> {}

export const ComboboxInput = withContext(styled(ArkCombobox.Input), "input");
export interface ComboboxInputProps
  extends ComponentProps<typeof ComboboxInput> {}

export const ComboboxItem = withContext(styled(ArkCombobox.Item), "item");
export interface ComboboxItemProps
  extends ComponentProps<typeof ComboboxItem> {}

export const ComboboxItemGroup = withContext(
  styled(ArkCombobox.ItemGroup),
  "itemGroup",
);
export interface ComboboxItemGroupProps
  extends ComponentProps<typeof ComboboxItemGroup> {}

export const ComboboxItemGroupLabel = withContext(
  styled(ArkCombobox.ItemGroupLabel),
  "itemGroupLabel",
);
export interface ComboboxItemGroupLabelProps
  extends ComponentProps<typeof ComboboxItemGroupLabel> {}

export const ComboboxItemIndicator = withContext(
  styled(ArkCombobox.ItemIndicator),
  "itemIndicator",
);
export interface ComboboxItemIndicatorProps
  extends ComponentProps<typeof ComboboxItemIndicator> {}

export const ComboboxItemText = withContext(
  styled(ArkCombobox.ItemText),
  "itemText",
);
export interface ComboboxItemTextProps
  extends ComponentProps<typeof ComboboxItemText> {}

export const ComboboxLabel = withContext(styled(ArkCombobox.Label), "label");
export interface ComboboxLabelProps
  extends ComponentProps<typeof ComboboxLabel> {}

export const ComboboxPositioner = withContext(
  styled(ArkCombobox.Positioner),
  "positioner",
);
export interface ComboboxPositionerProps
  extends ComponentProps<typeof ComboboxPositioner> {}

export const ComboboxTrigger = withContext(
  styled(ArkCombobox.Trigger),
  "trigger",
);
export interface ComboboxTriggerProps
  extends ComponentProps<typeof ComboboxTrigger> {}

export interface ComboboxProps extends ComboboxRootProps {
  label: {
    // TODO calculate ID from singular (add dashes, lowercase, etc.)
    id: string;
    singular: string;
    plural: string;
  };
}

// TODO fix combobox not filtering when searching (works on Park UI: https://park-ui.com/docs/components/combobox)

/**
 * Combobox.
 */
const Combobox = ({ label, items, ...rest }: ComboboxProps) => {
  const [filteredItems, setFilteredItems] = useState(items);

  const handleChange = (
    evt: Parameters<
      NonNullable<ComponentProps<typeof ComboboxRoot>["onInputValueChange"]>
    >[0],
  ) => {
    const filtered = items.filter((item) =>
      // @ts-ignore upstream (Ark `CollectionItem`) type bug
      item.label.toLowerCase().includes(evt.value.toLowerCase()),
    );

    setFilteredItems(filtered.length ? filtered : items);
  };

  return (
    <ComboboxRoot
      width="2xs"
      onInputValueChange={handleChange}
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
          <Button variant="link" aria-label="Open combobox" size="xs">
            <BiExpandVertical />
          </Button>
        </ComboboxTrigger>
      </ComboboxControl>

      <ComboboxPositioner>
        <ComboboxContent>
          <ComboboxItemGroup id={label.id}>
            <ComboboxItemGroupLabel htmlFor={label.id}>
              {label.plural}
            </ComboboxItemGroupLabel>

            {filteredItems.map((item) => (
              // @ts-ignore upstream (Ark `CollectionItem`) type bug
              <ComboboxItem key={item.value} item={item}>
                {/* @ts-ignore upstream (Ark `CollectionItem`) type bug */}
                <ComboboxItemText>{item.label}</ComboboxItemText>

                <ComboboxItemIndicator>
                  <BiCheck />
                </ComboboxItemIndicator>
              </ComboboxItem>
            ))}
          </ComboboxItemGroup>
        </ComboboxContent>
      </ComboboxPositioner>
    </ComboboxRoot>
  );
};

export default Combobox;
