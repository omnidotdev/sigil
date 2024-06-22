import { Combobox as ArkCombobox } from "@ark-ui/react/combobox";
import { useState } from "react";
import { BiCheck, BiExpandVertical, BiX } from "react-icons/bi";

import Button from "components/core/Button/Button";
import Input from "components/core/Input/Input";
import { styled } from "generated/panda/jsx";
import { combobox } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { ComboboxInputValueChangeDetails } from "@ark-ui/react/combobox";
import type { ColorPalette } from "generated/panda/tokens";
import type { ComponentProps } from "react";

const { withProvider, withContext } = createStyleContext(combobox);

// https://github.com/chakra-ui/ark/issues/1740#issuecomment-1817255471
type AugmentedComboboxRoot = <T extends ArkCombobox.CollectionItem>(
  props: ArkCombobox.RootProps<T>,
) => JSX.Element;

export const ComboboxRoot = withProvider(
  styled(ArkCombobox.Root) as AugmentedComboboxRoot,
  "root",
);
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
  colorPalette?: ColorPalette;
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
  labelProps?: ComboboxLabelProps;
  controlProps?: ComboboxControlProps;
  inputProps?: ComboboxInputProps;
  clearTriggerProps?: ComboboxClearTriggerProps;
  triggerProps?: ComboboxTriggerProps;
  positionerProps?: ComboboxPositionerProps;
  contentProps?: ComboboxContentProps;
  itemGroupProps?: ComboboxItemGroupProps;
  itemGroupLabelProps?: ComboboxItemGroupLabelProps;
  itemProps?: ComboboxItemProps;
  itemTextProps?: ComboboxItemTextProps;
  itemIndicatorProps?: ComboboxItemIndicatorProps;
}

/**
 * Combobox.
 */
const Combobox = ({
  colorPalette = "accent",
  displayFieldLabel = true,
  displayGroupLabel = true,
  displayClearTrigger = true,
  label,
  items,
  onInputValueChange,
  labelProps,
  controlProps,
  inputProps,
  clearTriggerProps,
  triggerProps,
  positionerProps,
  contentProps,
  itemGroupProps,
  itemGroupLabelProps,
  itemProps,
  itemTextProps,
  itemIndicatorProps,
  ...rest
}: ComboboxProps) => {
  const [filteredItems, setFilteredItems] = useState(items);

  /**
   * Handle input value change. Composes a custom `onInputValueChange` handler, if provided.
   */
  const handleChange = (
    evt: ComboboxInputValueChangeDetails,
    onInputValueChange?: ComboboxProps["onInputValueChange"],
  ) => {
    const filtered = items.filter((item) =>
      // @ts-ignore upstream (Ark `CollectionItem`) type bug
      item.label.toLowerCase().includes(evt.inputValue.toLowerCase()),
    );

    setFilteredItems(filtered.length ? filtered : items);

    // execute custom `onInputValueChange` handler, if provided
    onInputValueChange?.(evt);
  };

  return (
    <ComboboxRoot
      onInputValueChange={(evt) =>
        onInputValueChange
          ? // compose custom `onInputValueChange` handler
            handleChange(evt, onInputValueChange)
          : handleChange(evt)
      }
      items={filteredItems}
      {...rest}
    >
      {displayFieldLabel && (
        <ComboboxLabel {...labelProps}>{label.plural}</ComboboxLabel>
      )}

      <ComboboxControl {...controlProps}>
        <ComboboxInput asChild {...inputProps}>
          <Input colorPalette={colorPalette} />
        </ComboboxInput>

        {displayClearTrigger && (
          <ComboboxClearTrigger asChild {...clearTriggerProps}>
            <Button variant="link" size="xs" aria-label="Clear combobox">
              <BiX />
            </Button>
          </ComboboxClearTrigger>
        )}

        <ComboboxTrigger asChild {...triggerProps}>
          <Button variant="link" size="xs" aria-label="Open combobox">
            <BiExpandVertical />
          </Button>
        </ComboboxTrigger>
      </ComboboxControl>

      <ComboboxPositioner {...positionerProps}>
        <ComboboxContent {...contentProps}>
          <ComboboxItemGroup id={label.id} {...itemGroupProps}>
            {displayGroupLabel && (
              <ComboboxItemGroupLabel {...itemGroupLabelProps}>
                {label.plural}
              </ComboboxItemGroupLabel>
            )}

            {filteredItems.map((item) => (
              // @ts-ignore upstream (Ark `CollectionItem`) type bug
              <ComboboxItem key={item.value} item={item} {...itemProps}>
                <ComboboxItemText {...itemTextProps}>
                  {/* @ts-ignore upstream (Ark `CollectionItem`) type bug */}
                  {item.label}
                </ComboboxItemText>

                <ComboboxItemIndicator {...itemIndicatorProps}>
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
