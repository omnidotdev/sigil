import { ark } from "@ark-ui/react";

import { styled } from "generated/panda/jsx";
import { code, type CodeVariantProps } from "generated/panda/recipes";

import type { HTMLArkProps } from "@ark-ui/react";

export interface CodeProps extends CodeVariantProps, HTMLArkProps<"code"> {}

/**
 * Code text representation.
 */
const Code = styled(ark.code, code);

export default Code;
