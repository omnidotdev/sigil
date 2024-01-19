import { ark } from "@ark-ui/react";

import { styled } from "generated/panda/jsx";
import { label } from "generated/panda/recipes";

import type { ComponentProps } from "react";

export interface LabelProps extends ComponentProps<typeof Label> {}

/**
 * Label.
 */
const Label = styled(ark.label, label);

export default Label;
