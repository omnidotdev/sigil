import { ark } from "@ark-ui/react";

import { styled } from "generated/panda/jsx";
import { label } from "generated/panda/recipes";

import type {
  Assign,
  ComponentProps,
  JsxStyleProps,
} from "generated/panda/types";

export interface LabelProps
  extends Assign<JsxStyleProps, ComponentProps<typeof Label>> {}

/**
 * Label.
 */
const Label = styled(ark.label, label);

export default Label;
