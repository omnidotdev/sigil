import { ark } from "@ark-ui/react";

import { styled } from "generated/panda/jsx";
import { textarea } from "generated/panda/recipes";

import type { HTMLStyledProps } from "generated/panda/jsx";

export interface TextareaProps extends HTMLStyledProps<typeof Textarea> {}

/**
 * Textarea.
 */
const Textarea = styled(ark.textarea, textarea);

export default Textarea;
