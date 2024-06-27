import { ark } from "@ark-ui/react";

import { styled } from "generated/panda/jsx";
import { input } from "generated/panda/recipes";

import type { InputVariantProps } from "generated/panda/recipes";
import type { ComponentProps } from "generated/panda/types";
import type { AssignJSXStyleProps } from "lib/types";

export interface InputProps
  extends AssignJSXStyleProps<ComponentProps<typeof Input>>,
    InputVariantProps {}

/**
 * Interactive input.
 */
const Input = styled(ark.input, input);

export default Input;
