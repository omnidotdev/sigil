import { ark } from "@ark-ui/react";

import { styled } from "generated/panda/jsx";
import { badge } from "generated/panda/recipes";

import type { HTMLStyledProps } from "generated/panda/jsx";

export interface BadgeProps extends HTMLStyledProps<typeof Badge> {}

/**
 * Badge.
 */
const Badge = styled(ark.div, badge);

export default Badge;
