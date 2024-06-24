import { ark } from "@ark-ui/react";

import { styled } from "generated/panda/jsx";
import { button } from "generated/panda/recipes";

import type {
  Assign,
  ComponentProps,
  JsxStyleProps,
} from "generated/panda/types";

export interface ButtonProps
  extends Assign<JsxStyleProps, ComponentProps<typeof Button>> {}

/**
 * Interactive action button.
 */
const Button = styled(ark.button, button);

export default Button;
