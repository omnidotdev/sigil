import { ark } from "@ark-ui/react";

import { styled } from "generated/panda/jsx";
import { badge } from "generated/panda/recipes";

import type {
  Assign,
  ComponentProps,
  JsxStyleProps,
} from "generated/panda/types";

export interface BadgeProps
  extends Assign<JsxStyleProps, ComponentProps<typeof Badge>> {}

/**
 * Badge.
 */
const Badge = styled(ark.div, badge);

export default Badge;
