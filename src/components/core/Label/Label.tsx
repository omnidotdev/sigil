import { ark } from "@ark-ui/react";

import { styled } from "generated/panda/jsx";
import { label, type LabelVariantProps } from "generated/panda/recipes";

import type { HTMLArkProps } from "@ark-ui/react";

export interface LabelProps extends LabelVariantProps, HTMLArkProps<"label"> {}

/**
 * Label.
 */
const Label = styled(ark.label, label);

export default Label;
