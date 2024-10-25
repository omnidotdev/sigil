import { Tooltip as ArkTooltip } from "@ark-ui/react/tooltip";

import Button from "components/core/Button/Button";
import { styled } from "generated/panda/jsx";
import { tooltip } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type {
  ButtonVariantProps,
  TooltipVariantProps,
} from "generated/panda/recipes";
import type { AssignJSXStyleProps } from "lib/types";
import type { ReactNode } from "react";

const { withProvider, withContext } = createStyleContext(tooltip);

export const TooltipRoot = withProvider(styled(ArkTooltip.Root), "root");
export interface TooltipRootProps
  extends Omit<AssignJSXStyleProps<ArkTooltip.RootProps>, "content">,
    TooltipVariantProps {}

export const TooltipArrow = withContext(styled(ArkTooltip.Arrow), "arrow");
export interface TooltipArrowProps
  extends AssignJSXStyleProps<ArkTooltip.ArrowProps> {}

export const TooltipArrowTip = withContext(
  styled(ArkTooltip.ArrowTip),
  "arrowTip",
);
export interface TooltipArrowTipProps
  extends AssignJSXStyleProps<ArkTooltip.ArrowTipProps> {}

export const TooltipContent = withContext(
  styled(ArkTooltip.Content),
  "content",
);
export interface TooltipContentProps
  extends AssignJSXStyleProps<ArkTooltip.ContentProps> {}

export const TooltipPositioner = withContext(
  styled(ArkTooltip.Positioner),
  "positioner",
);
export interface TooltipPositionerProps
  extends AssignJSXStyleProps<ArkTooltip.PositionerProps> {}

export const TooltipTrigger = withContext(
  styled(ArkTooltip.Trigger),
  "trigger",
);
export interface TooltipTriggerProps
  extends AssignJSXStyleProps<Omit<ArkTooltip.TriggerProps, "asChild">>,
    ButtonVariantProps {}

export interface TooltipProps extends TooltipRootProps {
  /** Tooltip trigger. */
  trigger?: ReactNode;
  /** Whether arrow is rendered. */
  hasArrow?: boolean;
  /** Tooltip content props. */
  contentProps?: TooltipContentProps;
  /** Tooltip arrow props. */
  arrowProps?: TooltipArrowProps;
  /** Tooltip arrow tip props. */
  arrowTipProps?: TooltipArrowTipProps;
  /** Tooltip trigger props. */
  triggerProps?: TooltipTriggerProps;
  /** Tooltip positioner props. */
  positionerProps?: TooltipPositionerProps;
}

/**
 * Tooltip.
 */
const Tooltip = ({
  trigger,
  children,
  hasArrow = true,
  contentProps,
  arrowProps,
  arrowTipProps,
  triggerProps,
  positionerProps,
  ...rest
}: TooltipProps) => (
  <TooltipRoot openDelay={0} closeDelay={100} {...rest}>
    {trigger && (
      <TooltipTrigger asChild {...triggerProps}>
        <Button>{trigger}</Button>
      </TooltipTrigger>
    )}

    <TooltipPositioner {...positionerProps}>
      <TooltipContent {...contentProps}>
        {hasArrow && (
          <TooltipArrow {...arrowProps}>
            <TooltipArrowTip {...arrowTipProps} />
          </TooltipArrow>
        )}

        {children}
      </TooltipContent>
    </TooltipPositioner>
  </TooltipRoot>
);

export default Tooltip;
