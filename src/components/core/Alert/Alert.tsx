import { ark } from "@ark-ui/react";

import { styled } from "generated/panda/jsx";
import { alert, type AlertVariantProps } from "generated/panda/recipes";

import type { ComponentPropsWithoutRef } from "react";

export interface AlertProps
  extends AlertVariantProps,
    ComponentPropsWithoutRef<typeof ark.div> {}

/**
 * Alert a user.
 */
const Alert = styled(ark.div, alert);

export default Alert;
