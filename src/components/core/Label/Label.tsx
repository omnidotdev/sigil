import { ark } from "@ark-ui/react";

import { styled } from "generated/panda/jsx";
import { label } from "generated/panda/recipes";

import type { ComponentProps } from "generated/panda/types";
import type { AssignJSXStyleProps } from "lib/types";

export interface LabelProps
  extends AssignJSXStyleProps<ComponentProps<typeof Label>> {}

/**
 * Label.
 */
const Label = styled(ark.label, label);

export default Label;
