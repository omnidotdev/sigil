import { TagsInput as ArkTagsInput } from "@ark-ui/react/tags-input";
import { Fragment } from "react";
import { FiX } from "react-icons/fi";

import Button from "components/core/Button/Button";
import { tagsInput } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { ComponentProps } from "react";

const { withProvider, withContext } = createStyleContext(tagsInput);

export const TagsInputRoot = withProvider(ArkTagsInput.Root, "root");
export interface TagsInputRootProps
  extends ComponentProps<typeof TagsInputRoot> {}

export const TagsInputClearTrigger = withContext(
  ArkTagsInput.ClearTrigger,
  "clearTrigger",
);
export interface TagsInputClearTriggerProps
  extends ComponentProps<typeof TagsInputClearTrigger> {}

export const TagsInputControl = withContext(ArkTagsInput.Control, "control");
export interface TagsInputControlProps
  extends ComponentProps<typeof TagsInputControl> {}

export const TagsInputInput = withContext(ArkTagsInput.Input, "input");
export interface TagsInputInputProps
  extends ComponentProps<typeof TagsInputInput> {}

export const TagsInputItem = withContext(ArkTagsInput.Item, "item");
export interface TagsInputItemProps
  extends ComponentProps<typeof TagsInputItem> {}

export const TagsInputItemDeleteTrigger = withContext(
  ArkTagsInput.ItemDeleteTrigger,
  "itemDeleteTrigger",
);
export interface TagsInputItemDeleteTriggerProps
  extends ComponentProps<typeof TagsInputItemDeleteTrigger> {}

export const TagsInputItemInput = withContext(
  ArkTagsInput.ItemInput,
  "itemInput",
);
export interface TagsInputItemInputProps
  extends ComponentProps<typeof TagsInputItemInput> {}

export const TagsInputItemText = withContext(ArkTagsInput.ItemText, "itemText");
export interface TagsInputItemTextProps
  extends ComponentProps<typeof TagsInputItemText> {}

export const TagsInputItemPreview = withContext(
  ArkTagsInput.ItemPreview,
  "itemPreview",
);
export interface TagsInputItemPreviewProps
  extends ComponentProps<typeof TagsInputItemPreview> {}

export const TagsInputLabel = withContext(ArkTagsInput.Label, "label");
export interface TagsInputLabelProps
  extends ComponentProps<typeof TagsInputLabel> {}

export interface TagsInputProps extends TagsInputRootProps {
  /** Input label. */
  label: string;
}

/**
 * Input for tags.
 */
const TagsInput = ({ label, ...rest }: TagsInputProps) => (
  <TagsInputRoot {...rest}>
    {(api) => (
      <>
        <TagsInputLabel>{label}</TagsInputLabel>

        <TagsInputControl>
          {api.value.map((value, idx) => (
            <TagsInputItem key={idx} index={idx} value={value}>
              <TagsInputItemPreview>
                <TagsInputItemText>{value}</TagsInputItemText>

                <TagsInputItemDeleteTrigger asChild>
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

              <TagsInputItemInput />
            </TagsInputItem>
          ))}

          <TagsInputInput placeholder="Add tag" />
        </TagsInputControl>

        <TagsInputClearTrigger asChild>
          <Button variant="outline">Clear</Button>
        </TagsInputClearTrigger>
      </>
    )}
  </TagsInputRoot>
);

export default TagsInput;
