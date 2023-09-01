import { ark } from "@ark-ui/react";

import { styled } from "generated/panda/jsx";
import { keyboard, type KeyboardVariantProps } from "generated/panda/recipes";

import type { ComponentPropsWithoutRef } from "react";

export interface KeyboardProps
  extends KeyboardVariantProps,
    ComponentPropsWithoutRef<typeof ark.kbd> {}

/**
 * Keyboard text representation.
 */
const Keyboard = styled(ark.kbd, keyboard);

export default Keyboard;
