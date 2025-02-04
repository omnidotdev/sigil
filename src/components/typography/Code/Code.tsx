import { ark } from "@ark-ui/react";

import { styled } from "generated/panda/jsx";
import { code } from "generated/panda/recipes";

import type { CodeVariantProps } from "generated/panda/recipes";
import type { ComponentProps } from "generated/panda/types";
import type { AssignJSXStyleProps } from "lib/types";

export interface CodeProps
  extends AssignJSXStyleProps<ComponentProps<typeof Code>>,
    CodeVariantProps {}

/**
 * Code text representation.
 */
export const Code = styled(ark.code, code);
