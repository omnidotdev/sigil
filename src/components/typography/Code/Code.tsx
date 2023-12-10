import { ark } from "@ark-ui/react";

import { styled } from "generated/panda/jsx";
import { code } from "generated/panda/recipes";

import type { HTMLStyledProps } from "generated/panda/jsx";

export interface CodeProps extends HTMLStyledProps<typeof Code> {}

/**
 * Code text representation.
 */
const Code = styled(ark.code, code);

export default Code;
