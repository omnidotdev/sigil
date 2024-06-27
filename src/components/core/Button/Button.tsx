import { ark } from "@ark-ui/react";

import { styled } from "generated/panda/jsx";
import { button } from "generated/panda/recipes";

import type { ButtonVariantProps } from "generated/panda/recipes";
import type { ComponentProps } from "generated/panda/types";
import type { AssignJSXStyleProps } from "lib/types";

export interface ButtonProps
  extends AssignJSXStyleProps<ComponentProps<typeof Button>>,
    ButtonVariantProps {}

/**
 * Interactive action button.
 */
const Button = styled(ark.button, button);

export default Button;
