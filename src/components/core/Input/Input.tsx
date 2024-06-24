import { ark } from "@ark-ui/react";

import { styled } from "generated/panda/jsx";
import { input } from "generated/panda/recipes";

import type {
  Assign,
  ComponentProps,
  JsxStyleProps,
} from "generated/panda/types";

export interface InputProps
  extends Assign<JsxStyleProps, ComponentProps<typeof Input>> {}

/**
 * Interactive input.
 */
const Input = styled(ark.input, input);

export default Input;
