import { TagsInput as ArkTagsInput } from "@ark-ui/react/tags-input";
import { Fragment } from "react";
import { FiX } from "react-icons/fi/index.js";

import Button from "components/core/Button/Button";
import Label from "components/core/Label/Label";
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

export const TagsInputLabel = withContext(styled(ArkTagsInput.Label), "label");

export const Tag = withContext(styled(ArkTagsInput.Tag), "tag");

export const TagInput = withContext(styled(ArkTagsInput.TagInput), "tagInput");

export const TagDeleteTrigger = withContext(
  styled(ArkTagsInput.TagDeleteTrigger),
  "tagDeleteTrigger",
);

/**
 * Input for tags.
 */
const TagsInput = ({ label, ...rest }: TagsInputProps) => (
  <TagsInputRoot {...rest}>
    {/* @ts-ignore TODO */}
    {({ value }) => (
      <>
        <TagsInputLabel asChild>
          <Label>{label}</Label>
        </TagsInputLabel>

        <TagsInputControl>
          {/* @ts-ignore TODO */}
          {(value ?? []).map((value, index) => (
            <Fragment key={index}>
              <Tag index={index} value={value}>
                {value}

                <TagDeleteTrigger index={index} value={value} asChild>
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
                </TagDeleteTrigger>
              </Tag>
              <TagInput index={index} value={value} />
            </Fragment>
          ))}
          <TagsInputInput placeholder="Add tag" />
        </TagsInputControl>
      </>
    )}
  </TagsInputRoot>
);

export default TagsInput;
