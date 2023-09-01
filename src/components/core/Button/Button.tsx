import { Pressable } from "@ark-ui/react";

import { styled } from "generated/panda/jsx";
import { button, type ButtonVariantProps } from "generated/panda/recipes";

import type { ComponentPropsWithoutRef } from "react";

// https://github.com/microsoft/TypeScript/issues/47663
import type {} from "@zag-js/pressable";

export interface ButtonProps
  extends ButtonVariantProps,
    ComponentPropsWithoutRef<typeof Button> {}

/**
 * Interactive action button.
 */
const Button = styled(Pressable, button);

export default Button;
