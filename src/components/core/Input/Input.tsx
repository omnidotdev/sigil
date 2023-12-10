import { ark } from "@ark-ui/react";

import { styled } from "generated/panda/jsx";
import { input } from "generated/panda/recipes";

import type { HTMLStyledProps } from "generated/panda/jsx";

export interface InputProps extends HTMLStyledProps<typeof Input> {}

/**
 * Interactive input.
 */
const Input = styled(ark.input, input);

export default Input;
