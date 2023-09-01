import { ark } from "@ark-ui/react";

import { styled } from "generated/panda/jsx";
import { label, type LabelVariantProps } from "generated/panda/recipes";

import type { ComponentPropsWithoutRef } from "react";

export interface LabelProps
  extends LabelVariantProps,
    ComponentPropsWithoutRef<typeof ark.label> {}

/**
 * Label.
 */
const Label = styled(ark.label, label);

export default Label;
