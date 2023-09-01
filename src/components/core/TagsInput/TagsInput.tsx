import * as Ark from "@ark-ui/react/tags-input";
import { Fragment } from "react";
import { FiX } from "react-icons/fi";

import Button from "components/core/Button/Button";
import Label from "components/core/Label/Label";
import { styled } from "generated/panda/jsx";
import { tagsInput, type TagsInputVariantProps } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { ComponentProps } from "react";

// https://github.com/microsoft/TypeScript/issues/47663
import type {} from "@zag-js/interact-outside";

const { withProvider, withContext } = createStyleContext(tagsInput);

export interface TagsInputProps
  extends Omit<ComponentProps<typeof TagsInputRoot>, "children" | "size">,
    // TODO use below type instead of above, currently a missing props issue (e.g. `maxW`)
    // Omit<Ark.TagsInputProps, "children">
    TagsInputVariantProps {
  /** Input label. */
  label: string;
}

export const TagsInputRoot = withProvider(styled(Ark.TagsInput.Root), "root");

export const TagsInputClearTrigger = withContext(
  styled(Ark.TagsInput.ClearTrigger),
  "clearTrigger",
);

export const TagsInputControl = withContext(
  styled(Ark.TagsInput.Control),
  "control",
);

export const TagsInputInput = withContext(styled(Ark.TagsInput.Input), "input");

export const TagsInputLabel = withContext(styled(Ark.TagsInput.Label), "label");

export const Tag = withContext(styled(Ark.TagsInput.Tag), "tag");

export const TagInput = withContext(styled(Ark.TagsInput.TagInput), "tagInput");

export const TagDeleteTrigger = withContext(
  styled(Ark.TagsInput.TagDeleteTrigger),
  "tagDeleteTrigger",
);

/**
 * Input for tags.
 */
const TagsInput = ({ label, ...rest }: TagsInputProps) => (
  // @ts-ignore TODO
  <TagsInputRoot {...rest}>
    {({ value }) => (
      <>
        <TagsInputLabel asChild>
          <Label>{label}</Label>
        </TagsInputLabel>

        <TagsInputControl>
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
