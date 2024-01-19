import { ark } from "@ark-ui/react";

import { styled } from "generated/panda/jsx";
import { input } from "generated/panda/recipes";

import type { ComponentProps } from "react";

export interface InputProps extends ComponentProps<typeof Input> {}

/**
 * Interactive input.
 */
const Input = styled(ark.input, input);

export default Input;
