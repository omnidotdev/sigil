import { ark } from "@ark-ui/react";

import { styled } from "generated/panda/jsx";
import { button, type ButtonVariantProps } from "generated/panda/recipes";

import type { HTMLArkProps } from "@ark-ui/react";

export interface ButtonProps
  extends ButtonVariantProps,
    HTMLArkProps<"button"> {}

/**
 * Interactive action button.
 */
// TODO use `Pressable` below, causes strange errors such as `Converting circular structure to JSON` in Storybook autodocs pages
// const Button = styled(Pressable, button);
const Button = styled(ark.button, button);

export default Button;
