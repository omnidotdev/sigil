import { ark } from "@ark-ui/react";

import { styled } from "generated/panda/jsx";
import { textarea } from "generated/panda/recipes";

import type { TextareaVariantProps } from "generated/panda/recipes";
import type { ComponentProps } from "generated/panda/types";
import type { AssignJSXStyleProps } from "lib/types";

export interface TextareaProps
  extends AssignJSXStyleProps<ComponentProps<typeof Textarea>>,
    TextareaVariantProps {}

/**
 * Textarea.
 */
export const Textarea = styled(ark.textarea, textarea);
