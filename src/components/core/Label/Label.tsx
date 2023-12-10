import { ark } from "@ark-ui/react";

import { styled } from "generated/panda/jsx";
import { label } from "generated/panda/recipes";

import type { HTMLStyledProps } from "generated/panda/jsx";

export interface LabelProps extends HTMLStyledProps<typeof Label> {}

/**
 * Label.
 */
const Label = styled(ark.label, label);

export default Label;
