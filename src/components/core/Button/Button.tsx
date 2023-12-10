import { ark } from "@ark-ui/react";

import { styled } from "generated/panda/jsx";
import { button } from "generated/panda/recipes";

import type { HTMLStyledProps } from "generated/panda/jsx";

export interface ButtonProps extends HTMLStyledProps<typeof Button> {}

/**
 * Interactive action button.
 */
const Button = styled(ark.button, button);

export default Button;
