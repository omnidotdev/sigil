import { Pressable } from "@ark-ui/react";

import { styled } from "generated/panda/jsx";
import { button, type ButtonVariantProps } from "generated/panda/recipes";

import type { HTMLArkProps } from "@ark-ui/react";

export interface ButtonProps
  extends ButtonVariantProps,
    HTMLArkProps<"button"> {}

/**
 * Interactive action button.
 */
const Button = styled(Pressable, button);

export default Button;
