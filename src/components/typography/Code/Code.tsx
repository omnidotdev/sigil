import { ark } from "@ark-ui/react";

import { styled } from "generated/panda/jsx";
import { code } from "generated/panda/recipes";

import type { ComponentProps } from "generated/panda/types";
import type { AssignJSXStyleProps } from "lib/types";

export interface CodeProps
  extends AssignJSXStyleProps<ComponentProps<typeof Code>> {}

/**
 * Code text representation.
 */
const Code = styled(ark.code, code);

export default Code;
