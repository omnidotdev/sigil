import { ark } from "@ark-ui/react";

import { styled } from "generated/panda/jsx";
import { badge } from "generated/panda/recipes";

import type { ComponentProps } from "react";

export interface BadgeProps extends ComponentProps<typeof Badge> {}

/**
 * Badge.
 */
const Badge = styled(ark.div, badge);

export default Badge;
