import { ark } from "@ark-ui/react";

import { styled } from "generated/panda/jsx";
import { button } from "generated/panda/recipes";

import type { ComponentProps } from "generated/panda/types";

export interface ButtonProps extends ComponentProps<typeof Button> {}

/**
 * Interactive action button.
 */
const Button = styled(ark.button, button);

export default Button;
