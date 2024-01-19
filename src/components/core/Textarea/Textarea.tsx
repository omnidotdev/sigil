import { ark } from "@ark-ui/react";

import { styled } from "generated/panda/jsx";
import { textarea } from "generated/panda/recipes";

import type { ComponentProps } from "react";

export interface TextareaProps extends ComponentProps<typeof Textarea> {}

/**
 * Textarea.
 */
const Textarea = styled(ark.textarea, textarea);

export default Textarea;
