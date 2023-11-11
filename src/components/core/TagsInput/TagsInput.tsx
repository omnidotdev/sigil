import { TagsInput as ArkTagsInput } from "@ark-ui/react/tags-input";
import { Fragment } from "react";
import { FiX } from "react-icons/fi/index.js";

import Button from "components/core/Button/Button";
import { styled } from "generated/panda/jsx";
import { tagsInput, type TagsInputVariantProps } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { ComponentProps } from "react";

const { withProvider, withContext } = createStyleContext(tagsInput);

export interface TagsInputProps
  extends Omit<ComponentProps<typeof TagsInputRoot>, "children" | "size">,
    // TODO use below type instead of above, currently a missing props issue (e.g. `maxW`)
    // Omit<ArkTagsInputProps, "children">
    TagsInputVariantProps {
  /** Input label. */
  label: string;
}

export const TagsInputRoot = withProvider(styled(ArkTagsInput.Root), "root");

export const TagsInputClearTrigger = withContext(
  styled(ArkTagsInput.ClearTrigger),
  "clearTrigger",
);

export const TagsInputControl = withContext(
  styled(ArkTagsInput.Control),
  "control",
);

export const TagsInputInput = withContext(styled(ArkTagsInput.Input), "input");

export const TagsInputItem = withContext(styled(ArkTagsInput.Item), "item");

export const TagsInputItemDeleteTrigger = withContext(
  styled(ArkTagsInput.ItemDeleteTrigger),
  "itemDeleteTrigger",
);

export const TagsInputItemInput = withContext(
  styled(ArkTagsInput.ItemInput),
  "itemInput",
);

export const TagsInputItemText = withContext(
  styled(ArkTagsInput.ItemText),
  "itemText",
);

export const TagsInputLabel = withContext(styled(ArkTagsInput.Label), "label");

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
