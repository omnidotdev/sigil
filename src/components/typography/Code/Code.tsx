import { ark } from "@ark-ui/react";

import { styled } from "generated/panda/jsx";
import { code, type CodeVariantProps } from "generated/panda/recipes";

import type { ComponentPropsWithoutRef } from "react";

export interface CodeProps
  extends CodeVariantProps,
    ComponentPropsWithoutRef<typeof ark.code> {}

/**
 * Code text representation.
 */
const Code = styled(ark.code, code);

export default Code;
