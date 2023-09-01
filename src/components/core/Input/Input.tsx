import { ark } from "@ark-ui/react";

import { styled } from "generated/panda/jsx";
import { input, type InputVariantProps } from "generated/panda/recipes";

import type { ComponentPropsWithoutRef } from "react";

export interface InputProps
  extends InputVariantProps,
    Omit<ComponentPropsWithoutRef<typeof ark.input>, "size"> {}

/**
 * Interactive input.
 */
const Input = styled(ark.input, input);

export default Input;
