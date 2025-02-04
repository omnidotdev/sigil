import { ark } from "@ark-ui/react";

import { styled } from "generated/panda/jsx";
import { keyboard } from "generated/panda/recipes";

import type { KeyboardVariantProps } from "generated/panda/recipes";
import type { ComponentProps } from "generated/panda/types";
import type { AssignJSXStyleProps } from "lib/types";

export interface KeyboardProps
  extends AssignJSXStyleProps<ComponentProps<typeof Keyboard>>,
    KeyboardVariantProps {}

/**
 * Keyboard text representation.
 */
export const Keyboard = styled(ark.kbd, keyboard);
