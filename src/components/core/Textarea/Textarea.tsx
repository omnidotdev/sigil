import { ark } from "@ark-ui/react";

import { styled } from "generated/panda/jsx";
import { textarea, type TextareaVariantProps } from "generated/panda/recipes";

import type { HTMLArkProps } from "@ark-ui/react";

export interface TextareaProps
  extends TextareaVariantProps,
    HTMLArkProps<"textarea"> {}

/**
 * Textarea.
 */
const Textarea = styled(ark.textarea, textarea);

export default Textarea;
