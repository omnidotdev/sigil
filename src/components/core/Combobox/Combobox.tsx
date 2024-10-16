import { Combobox as ArkCombobox } from "@ark-ui/react/combobox";
import { useEffect, useState } from "react";
import { BiCheck, BiExpandVertical, BiX } from "react-icons/bi";

import Button from "components/core/Button/Button";
import Input from "components/core/Input/Input";
import { styled } from "generated/panda/jsx";
import { combobox } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type {
  CollectionItem,
  ComboboxInputValueChangeDetails,
} from "@ark-ui/react/combobox";
import type { ComboboxVariantProps } from "generated/panda/recipes";
import type { ColorPalette } from "generated/panda/tokens";
import type { AssignJSXStyleProps } from "lib/types";

const { withProvider, withContext } = createStyleContext(combobox);

// TODO normalize styles with `Select`, e.g. make sure trigger has same padding

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

// TODO use in prebuilt `Combobox` component
export const ComboboxList = withContext(styled(ArkCombobox.List), "list");
export interface ComboboxListProps
  extends AssignJSXStyleProps<ArkCombobox.ListProps> {}

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
  /** Color palette. Defaults to "accent". */
  colorPalette?: ColorPalette;
  /** Whether to display the input field label. Defaults to true. */
  displayFieldLabel?: boolean;
  /** Whether to display the group label contained in the dropdown. Defaults to true. */
  displayGroupLabel?: boolean;
  /** Whether to display the clear trigger button. Defaults to true. */
  displayClearTrigger?: boolean;
  /** Whether to preload items (useful for async data fetching). Defaults to true. If false, items will be loaded on input change. */
  preloadItems?: boolean;
  /** Label. */
  label: {
    // TODO calculate ID from singular (add dashes, lowercase, etc.)
    id: string;
    singular: string;
    plural: string;
  };
  /** Label props. */
  labelProps?: ComboboxLabelProps;
  /** Control props. */
  controlProps?: ComboboxControlProps;
  /** Input props. */
  inputProps?: ComboboxInputProps;
  /** Clear trigger props. */
  clearTriggerProps?: ComboboxClearTriggerProps;
  /** Trigger props. */
  triggerProps?: ComboboxTriggerProps;
  /** Positioner props. */
  positionerProps?: ComboboxPositionerProps;
  /** Content props. */
  contentProps?: ComboboxContentProps;
  /** Item group props. */
  itemGroupProps?: ComboboxItemGroupProps;
  /** Item group label props. */
  itemGroupLabelProps?: ComboboxItemGroupLabelProps;
  /** Item props. */
  itemProps?: ComboboxItemProps;
  /** Item text props. */
  itemTextProps?: ComboboxItemTextProps;
  /** Item indicator props. */
  itemIndicatorProps?: ComboboxItemIndicatorProps;
}

/**
 * Combobox.
 */
const Combobox = ({
  collection,
  colorPalette = "accent",
  displayFieldLabel = true,
  displayGroupLabel = true,
  displayClearTrigger = true,
  preloadItems = true,
  label,
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
  const [filteredItems, setFilteredItems] = useState<CollectionItem[]>(
    collection.items,
  );

  /**
   * Handle input value change. Composes a custom `onInputValueChange` handler, if provided.
   */
  const handleInputValueChange = (evt: ComboboxInputValueChangeDetails) => {
    const filtered = collection.items.filter((item) => {
      // is this necessary? does createCollectionList always make item.label valid?
      const label = typeof item === "string" ? item : item.label;

      return label.toLowerCase().includes(evt.inputValue.toLowerCase());
    });

    setFilteredItems(filtered.length ? filtered : collection.items);

    // execute custom `onInputValueChange` handler, if provided
    onInputValueChange?.(evt);
  };

  useEffect(() => {
    preloadItems && setFilteredItems(collection.items);
  }, [collection.items, preloadItems]);

  return (
    <ComboboxRoot
      collection={collection}
      onInputValueChange={handleInputValueChange}
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
            <Button variant="ghost" size="xs" p={0} aria-label="Clear combobox">
              <BiX />
            </Button>
          </ComboboxClearTrigger>
        )}

        <ComboboxTrigger asChild {...triggerProps}>
          <Button variant="ghost" size="xs" p={0} aria-label="Open combobox">
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
              <ComboboxItem key={item.value} item={item} {...itemProps}>
                <ComboboxItemText {...itemTextProps}>
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
