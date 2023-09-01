import { ark } from "@ark-ui/react";

import { styled } from "generated/panda/jsx";
import { textarea, type TextareaVariantProps } from "generated/panda/recipes";

import type { ComponentPropsWithoutRef } from "react";

export interface TextareaProps
  extends TextareaVariantProps,
    ComponentPropsWithoutRef<typeof ark.textarea> {}

/**
 * Textarea.
 */
const Textarea = styled(ark.textarea, textarea);

export default Textarea;
