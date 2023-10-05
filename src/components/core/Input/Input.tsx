import { ark } from "@ark-ui/react";

import { styled } from "generated/panda/jsx";
import { input, type InputVariantProps } from "generated/panda/recipes";

import type { HTMLArkProps } from "@ark-ui/react";

export interface InputProps
  extends InputVariantProps,
    Omit<HTMLArkProps<"input">, "size"> {}

/**
 * Interactive input.
 */
const Input = styled(ark.input, input);

export default Input;
