import { ark } from "@ark-ui/react";

import { styled } from "generated/panda/jsx";
import { badge, type BadgeVariantProps } from "generated/panda/recipes";

import type { ComponentPropsWithoutRef } from "react";

export interface BadgeProps
  extends BadgeVariantProps,
    ComponentPropsWithoutRef<typeof ark.div> {}

/**
 * Badge.
 */
const Badge = styled(ark.div, badge);

export default Badge;
