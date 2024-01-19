import { ark } from "@ark-ui/react";

import { styled } from "generated/panda/jsx";
import { keyboard } from "generated/panda/recipes";

import type { ComponentProps } from "react";

export interface KeyboardProps extends ComponentProps<typeof Keyboard> {}

/**
 * Keyboard text representation.
 */
const Keyboard = styled(ark.kbd, keyboard);

export default Keyboard;
