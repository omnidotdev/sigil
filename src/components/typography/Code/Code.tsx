import { ark } from "@ark-ui/react";

import { styled } from "generated/panda/jsx";
import { code } from "generated/panda/recipes";

import type { ComponentProps } from "react";

export interface CodeProps extends ComponentProps<typeof Code> {}

/**
 * Code text representation.
 */
const Code = styled(ark.code, code);

export default Code;
