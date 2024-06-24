import { ark } from "@ark-ui/react";

import { styled } from "generated/panda/jsx";
import { code } from "generated/panda/recipes";

import type {
  Assign,
  ComponentProps,
  JsxStyleProps,
} from "generated/panda/types";

export interface CodeProps
  extends Assign<JsxStyleProps, ComponentProps<typeof Code>> {}

/**
 * Code text representation.
 */
const Code = styled(ark.code, code);

export default Code;
