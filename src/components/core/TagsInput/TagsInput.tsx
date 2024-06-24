import { TagsInput as ArkTagsInput } from "@ark-ui/react/tags-input";
import { FiX } from "react-icons/fi";

import Button from "components/core/Button/Button";
import { styled } from "generated/panda/jsx";
import { tagsInput } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { AssignJSXStyleProps } from "lib/types";
import type { ReactNode } from "react";

const { withProvider, withContext } = createStyleContext(tagsInput);

export const TagsInputContext = ArkTagsInput.Context;
export interface TagsInputContextProps
  extends AssignJSXStyleProps<ArkTagsInput.ContextProps> {}

export const TagsInputRoot = withProvider(styled(ArkTagsInput.Root), "root");
export interface TagsInputRootProps
  extends AssignJSXStyleProps<ArkTagsInput.RootProps> {}

export const TagsInputClearTrigger = withContext(
  styled(ArkTagsInput.ClearTrigger),
  "clearTrigger",
);
export interface TagsInputClearTriggerProps
  extends AssignJSXStyleProps<ArkTagsInput.ClearTriggerProps> {}

export const TagsInputControl = withContext(
  styled(ArkTagsInput.Control),
  "control",
);
export interface TagsInputControlProps
  extends AssignJSXStyleProps<ArkTagsInput.ControlProps> {}

export const TagsInputInput = withContext(styled(ArkTagsInput.Input), "input");
export interface TagsInputInputProps
  extends AssignJSXStyleProps<ArkTagsInput.InputProps> {}

export const TagsInputItem = withContext(styled(ArkTagsInput.Item), "item");
export interface TagsInputItemProps
  extends AssignJSXStyleProps<ArkTagsInput.ItemProps> {}

export const TagsInputItemDeleteTrigger = withContext(
  styled(ArkTagsInput.ItemDeleteTrigger),
  "itemDeleteTrigger",
);
export interface TagsInputItemDeleteTriggerProps
  extends AssignJSXStyleProps<ArkTagsInput.ItemDeleteTriggerProps> {}

export const TagsInputItemInput = withContext(
  styled(ArkTagsInput.ItemInput),
  "itemInput",
);
export interface TagsInputItemInputProps
  extends AssignJSXStyleProps<ArkTagsInput.ItemInputProps> {}

export const TagsInputItemText = withContext(
  styled(ArkTagsInput.ItemText),
  "itemText",
);
export interface TagsInputItemTextProps
  extends AssignJSXStyleProps<ArkTagsInput.ItemTextProps> {}

export const TagsInputItemPreview = withContext(
  styled(ArkTagsInput.ItemPreview),
  "itemPreview",
);
export interface TagsInputItemPreviewProps
  extends AssignJSXStyleProps<ArkTagsInput.ItemPreviewProps> {}

export const TagsInputLabel = withContext(styled(ArkTagsInput.Label), "label");
export interface TagsInputLabelProps
  extends AssignJSXStyleProps<ArkTagsInput.LabelProps> {}

export interface TagsInputProps extends TagsInputRootProps {
  /** Input label. */
  label?: ReactNode;
  /** Clear trigger. Defaults to a button. */
  clearTrigger?: ReactNode;
  /** Label props. */
  labelProps?: TagsInputLabelProps;
  /** Control props. */
  controlProps?: TagsInputControlProps;
  /** Item props. */
  itemProps?: TagsInputItemProps;
  /** Item preview props. */
  itemPreviewProps?: TagsInputItemPreviewProps;
  /** Item text props. */
  itemTextProps?: TagsInputItemTextProps;
  /** Item delete trigger props. */
  itemDeleteTriggerProps?: TagsInputItemDeleteTriggerProps;
  /** Item input props. */
  itemInputProps?: TagsInputItemInputProps;
  /** Input props. */
  inputProps?: TagsInputInputProps;
  /** Clear trigger props. */
  clearTriggerProps?: TagsInputClearTriggerProps;
}

/**
 * Input for tags.
 */
const TagsInput = ({
  label,
  clearTrigger = <Button variant="outline">Clear</Button>,
  labelProps,
  controlProps,
  itemProps,
  itemPreviewProps,
  itemTextProps,
  itemDeleteTriggerProps,
  itemInputProps,
  inputProps,
  clearTriggerProps,
  ...rest
}: TagsInputProps) => (
  <TagsInputRoot {...rest}>
    {label && <TagsInputLabel {...labelProps}>{label}</TagsInputLabel>}

    <TagsInputControl {...controlProps}>
      <TagsInputContext>
        {({ value }) =>
          value.map((value, idx) => (
            <TagsInputItem key={idx} index={idx} value={value} {...itemProps}>
              <TagsInputItemPreview {...itemPreviewProps}>
                <TagsInputItemText {...itemTextProps}>
                  {value}
                </TagsInputItemText>

                <TagsInputItemDeleteTrigger asChild {...itemDeleteTriggerProps}>
                  <Button
                    aria-label="Delete tag"
                    variant="ghost"
                    px={0}
                    minW={0}
                    h="fit-content"
                    size="xs"
                    _hover={{
                      color: "accent.default",
                      bgColor: "transparent",
                    }}
                  >
                    <FiX />
                  </Button>
                </TagsInputItemDeleteTrigger>
              </TagsInputItemPreview>

              <TagsInputItemInput {...itemInputProps} />
            </TagsInputItem>
          ))
        }
      </TagsInputContext>

      <TagsInputInput {...inputProps} />
    </TagsInputControl>

    {clearTrigger && (
      <TagsInputClearTrigger asChild {...clearTriggerProps}>
        {clearTrigger}
      </TagsInputClearTrigger>
    )}
  </TagsInputRoot>
);

export default TagsInput;
