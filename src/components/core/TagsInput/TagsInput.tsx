import { TagsInput as ArkTagsInput } from "@ark-ui/react/tags-input";
import { FiX } from "react-icons/fi";

import Button from "components/core/Button/Button";
import { styled } from "generated/panda/jsx";
import { tagsInput } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { ComponentProps, ReactNode } from "react";

const { withProvider, withContext } = createStyleContext(tagsInput);

export const TagsInputContext = ArkTagsInput.Context;
export interface TagsInputContextProps
  extends ComponentProps<typeof TagsInputContext> {}

export const TagsInputRoot = withProvider(styled(ArkTagsInput.Root), "root");
export interface TagsInputRootProps
  extends ComponentProps<typeof TagsInputRoot> {}

export const TagsInputClearTrigger = withContext(
  styled(ArkTagsInput.ClearTrigger),
  "clearTrigger",
);
export interface TagsInputClearTriggerProps
  extends ComponentProps<typeof TagsInputClearTrigger> {}

export const TagsInputControl = withContext(
  styled(ArkTagsInput.Control),
  "control",
);
export interface TagsInputControlProps
  extends ComponentProps<typeof TagsInputControl> {}

export const TagsInputInput = withContext(styled(ArkTagsInput.Input), "input");
export interface TagsInputInputProps
  extends ComponentProps<typeof TagsInputInput> {}

export const TagsInputItem = withContext(styled(ArkTagsInput.Item), "item");
export interface TagsInputItemProps
  extends ComponentProps<typeof TagsInputItem> {}

export const TagsInputItemDeleteTrigger = withContext(
  styled(ArkTagsInput.ItemDeleteTrigger),
  "itemDeleteTrigger",
);
export interface TagsInputItemDeleteTriggerProps
  extends ComponentProps<typeof TagsInputItemDeleteTrigger> {}

export const TagsInputItemInput = withContext(
  styled(ArkTagsInput.ItemInput),
  "itemInput",
);
export interface TagsInputItemInputProps
  extends ComponentProps<typeof TagsInputItemInput> {}

export const TagsInputItemText = withContext(
  styled(ArkTagsInput.ItemText),
  "itemText",
);
export interface TagsInputItemTextProps
  extends ComponentProps<typeof TagsInputItemText> {}

export const TagsInputItemPreview = withContext(
  styled(ArkTagsInput.ItemPreview),
  "itemPreview",
);
export interface TagsInputItemPreviewProps
  extends ComponentProps<typeof TagsInputItemPreview> {}

export const TagsInputLabel = withContext(styled(ArkTagsInput.Label), "label");
export interface TagsInputLabelProps
  extends ComponentProps<typeof TagsInputLabel> {}

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
