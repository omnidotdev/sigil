import { TagsInput as ArkTagsInput } from "@ark-ui/react/tags-input";
import { Fragment } from "react";
import { FiX } from "react-icons/fi/index.js";

import Button from "components/core/Button/Button";
import { styled } from "generated/panda/jsx";
import { tagsInput } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { HTMLStyledProps } from "generated/panda/jsx";

const { withProvider, withContext } = createStyleContext(tagsInput);

export const TagsInputRoot = withProvider(styled(ArkTagsInput.Root), "root");
export interface TagsInputRootProps
  extends HTMLStyledProps<typeof TagsInputRoot> {}

export const TagsInputClearTrigger = withContext(
  styled(ArkTagsInput.ClearTrigger),
  "clearTrigger",
);
export interface TagsInputClearTriggerProps
  extends HTMLStyledProps<typeof TagsInputClearTrigger> {}

export const TagsInputControl = withContext(
  styled(ArkTagsInput.Control),
  "control",
);
export interface TagsInputControlProps
  extends HTMLStyledProps<typeof TagsInputControl> {}

export const TagsInputInput = withContext(styled(ArkTagsInput.Input), "input");
export interface TagsInputInputProps
  extends HTMLStyledProps<typeof TagsInputInput> {}

export const TagsInputItem = withContext(styled(ArkTagsInput.Item), "item");
export interface TagsInputItemProps
  extends HTMLStyledProps<typeof TagsInputItem> {}

export const TagsInputItemDeleteTrigger = withContext(
  styled(ArkTagsInput.ItemDeleteTrigger),
  "itemDeleteTrigger",
);
export interface TagsInputItemDeleteTriggerProps
  extends HTMLStyledProps<typeof TagsInputItemDeleteTrigger> {}

export const TagsInputItemInput = withContext(
  styled(ArkTagsInput.ItemInput),
  "itemInput",
);
export interface TagsInputItemInputProps
  extends HTMLStyledProps<typeof TagsInputItemInput> {}

export const TagsInputItemText = withContext(
  styled(ArkTagsInput.ItemText),
  "itemText",
);
export interface TagsInputItemTextProps
  extends HTMLStyledProps<typeof TagsInputItemText> {}

export const TagsInputLabel = withContext(styled(ArkTagsInput.Label), "label");
export interface TagsInputLabelProps
  extends HTMLStyledProps<typeof TagsInputLabel> {}

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
              <TagsInputItemText>{value}</TagsInputItemText>

              <TagsInputItemDeleteTrigger asChild>
                <Button
                  aria-label="Delete tag"
                  variant="ghost"
                  px={0}
                  size="xs"
                  _hover={{
                    color: "accent.default",
                    bgColor: "transparent",
                  }}
                >
                  <FiX />
                </Button>
              </TagsInputItemDeleteTrigger>
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
