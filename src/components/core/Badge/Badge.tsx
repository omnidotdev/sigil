import { ark } from "@ark-ui/react";

import { styled } from "generated/panda/jsx";
import { badge, type BadgeVariantProps } from "generated/panda/recipes";

import type { HTMLArkProps } from "@ark-ui/react";

export interface BadgeProps extends BadgeVariantProps, HTMLArkProps<"div"> {}

/**
 * Badge.
 */
const Badge = styled(ark.div, badge);

export default Badge;
