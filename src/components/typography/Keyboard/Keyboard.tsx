import { ark } from "@ark-ui/react";

import { styled } from "generated/panda/jsx";
import { keyboard } from "generated/panda/recipes";

import type {
  Assign,
  ComponentProps,
  JsxStyleProps,
} from "generated/panda/types";

export interface KeyboardProps
  extends Assign<JsxStyleProps, ComponentProps<typeof Keyboard>> {}

/**
 * Keyboard text representation.
 */
const Keyboard = styled(ark.kbd, keyboard);

export default Keyboard;
