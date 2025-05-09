import { ark } from "@ark-ui/react";

import { styled } from "generated/panda/jsx";
import { badge } from "generated/panda/recipes";

import type { BadgeVariantProps } from "generated/panda/recipes";
import type { ComponentProps } from "generated/panda/types";
import type { AssignJSXStyleProps } from "lib/types";

export interface BadgeProps
  extends AssignJSXStyleProps<ComponentProps<typeof Badge>>,
    BadgeVariantProps {}

/**
 * Badge.
 */
export const Badge = styled(ark.div, badge);
