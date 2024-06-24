import { ark } from "@ark-ui/react";

import { styled } from "generated/panda/jsx";
import { textarea } from "generated/panda/recipes";

import type {
  Assign,
  ComponentProps,
  JsxStyleProps,
} from "generated/panda/types";

export interface TextareaProps
  extends Assign<JsxStyleProps, ComponentProps<typeof Textarea>> {}

/**
 * Textarea.
 */
const Textarea = styled(ark.textarea, textarea);

export default Textarea;
