import { ark } from "@ark-ui/react";

import { styled } from "generated/panda/jsx";
import { keyboard } from "generated/panda/recipes";

import type { HTMLStyledProps } from "generated/panda/jsx";

export interface KeyboardProps extends HTMLStyledProps<typeof Keyboard> {}

/**
 * Keyboard text representation.
 */
const Keyboard = styled(ark.kbd, keyboard);

export default Keyboard;
