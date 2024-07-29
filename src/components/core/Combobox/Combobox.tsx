import { Combobox as ArkCombobox } from "@ark-ui/react/combobox";
import { useState } from "react";
import { BiCheck, BiExpandVertical, BiX } from "react-icons/bi";

import Button from "components/core/Button/Button";
import Input from "components/core/Input/Input";
import { styled } from "generated/panda/jsx";
import { combobox } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type {
  ComboboxInputValueChangeDetails,
  ComboboxValueChangeDetails,
} from "@ark-ui/react/combobox";
import type { ComboboxVariantProps } from "generated/panda/recipes";
import type { ColorPalette } from "generated/panda/tokens";
import type { AssignJSXStyleProps } from "lib/types";

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
  extends AssignJSXStyleProps<
      ArkCombobox.RootProps<ArkCombobox.CollectionItem>
    >,
    ComboboxVariantProps {}

export const ComboboxClearTrigger = withContext(
  styled(ArkCombobox.ClearTrigger),
  "clearTrigger",
);
export interface ComboboxClearTriggerProps
  extends AssignJSXStyleProps<ArkCombobox.ClearTriggerProps> {}

export const ComboboxContent = withContext(
  styled(ArkCombobox.Content),
  "content",
);
export interface ComboboxContentProps
  extends AssignJSXStyleProps<ArkCombobox.ContentProps> {}

export const ComboboxControl = withContext(
  styled(ArkCombobox.Control),
  "control",
);
export interface ComboboxControlProps
  extends AssignJSXStyleProps<ArkCombobox.ControlProps> {}

export const ComboboxInput = withContext(styled(ArkCombobox.Input), "input");
export interface ComboboxInputProps
  extends AssignJSXStyleProps<ArkCombobox.InputProps> {}

export const ComboboxItem = withContext(styled(ArkCombobox.Item), "item");
export interface ComboboxItemProps
  extends AssignJSXStyleProps<ArkCombobox.ItemProps> {}

export const ComboboxItemGroup = withContext(
  styled(ArkCombobox.ItemGroup),
  "itemGroup",
);
export interface ComboboxItemGroupProps
  extends AssignJSXStyleProps<ArkCombobox.ItemGroupProps> {}

export const ComboboxItemGroupLabel = withContext(
  styled(ArkCombobox.ItemGroupLabel),
  "itemGroupLabel",
);
export interface ComboboxItemGroupLabelProps
  extends AssignJSXStyleProps<ArkCombobox.ItemGroupLabelProps> {}

export const ComboboxItemIndicator = withContext(
  styled(ArkCombobox.ItemIndicator),
  "itemIndicator",
);
export interface ComboboxItemIndicatorProps
  extends AssignJSXStyleProps<ArkCombobox.ItemIndicatorProps> {}

export const ComboboxItemText = withContext(
  styled(ArkCombobox.ItemText),
  "itemText",
);
export interface ComboboxItemTextProps
  extends AssignJSXStyleProps<ArkCombobox.ItemTextProps> {}

export const ComboboxLabel = withContext(styled(ArkCombobox.Label), "label");
export interface ComboboxLabelProps
  extends AssignJSXStyleProps<ArkCombobox.LabelProps> {}

export const ComboboxPositioner = withContext(
  styled(ArkCombobox.Positioner),
  "positioner",
);
export interface ComboboxPositionerProps
  extends AssignJSXStyleProps<ArkCombobox.PositionerProps> {}

export const ComboboxTrigger = withContext(
  styled(ArkCombobox.Trigger),
  "trigger",
);
export interface ComboboxTriggerProps
  extends AssignJSXStyleProps<ArkCombobox.TriggerProps> {}

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
  onValueChange,
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
  const [filteredItems, setFilteredItems] = useState(items),
    [inputValue, setInputValue] = useState(rest.defaultValue || "");

  /**
   * Handle input value change. Composes a custom `onInputValueChange` handler, if provided.
   */
  const handleInputValueChange = (
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

  /**
   * Handle value change. Composes a custom `onValueChange` handler, if provided.
   */
  const handleValueChange = (
    evt: ComboboxValueChangeDetails,
    onValueChange?: ComboboxProps["onValueChange"],
  ) => {
    setInputValue(evt.items.map((item) => item.label).join(", "));

    // execute custom `onValueChange` handler, if provided
    onValueChange?.(evt);
  };

  return (
    <ComboboxRoot
      onInputValueChange={(evt) =>
        onInputValueChange
          ? // compose custom `onInputValueChange` handler
            handleInputValueChange(evt, onInputValueChange)
          : handleInputValueChange(evt)
      }
      onValueChange={(evt) =>
        onValueChange
          ? // compose custom `onValueChange` handler
            handleValueChange(evt, onValueChange)
          : handleValueChange(evt)
      }
      items={filteredItems}
      {...rest}
    >
      {displayFieldLabel && (
        <ComboboxLabel {...labelProps}>{label.plural}</ComboboxLabel>
      )}

      <ComboboxControl {...controlProps}>
        <ComboboxInput asChild value={inputValue} {...inputProps}>
          <Input colorPalette={colorPalette} />
        </ComboboxInput>

        {displayClearTrigger && (
          <ComboboxClearTrigger asChild {...clearTriggerProps}>
            <Button variant="ghost" size="xs" aria-label="Clear combobox">
              <BiX />
            </Button>
          </ComboboxClearTrigger>
        )}

        <ComboboxTrigger asChild {...triggerProps}>
          <Button variant="ghost" size="xs" aria-label="Open combobox">
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
