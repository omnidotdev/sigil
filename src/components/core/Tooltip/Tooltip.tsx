import { Tooltip as ArkTooltip } from "@ark-ui/react/tooltip";

import { tooltip } from "generated/panda/recipes";
import { createStyleContext, getContextualChildren } from "lib/util";

import type { ComponentProps, ReactNode } from "react";

const { withProvider, withContext } = createStyleContext(tooltip);

export const TooltipRoot = withProvider(ArkTooltip.Root, "root");
export interface TooltipRootProps
  extends Omit<ComponentProps<typeof TooltipRoot>, "content"> {}

export const TooltipArrow = withContext(ArkTooltip.Arrow, "arrow");
export interface TooltipArrowProps
  extends ComponentProps<typeof TooltipArrow> {}

export const TooltipArrowTip = withContext(ArkTooltip.ArrowTip, "arrowTip");
export interface TooltipArrowTipProps
  extends ComponentProps<typeof TooltipArrowTip> {}

export const TooltipContent = withContext(ArkTooltip.Content, "content");
export interface TooltipContentProps
  extends ComponentProps<typeof TooltipContent> {}

export const TooltipPositioner = withContext(
  ArkTooltip.Positioner,
  "positioner",
);
export interface TooltipPositionerProps
  extends ComponentProps<typeof TooltipPositioner> {}

export const TooltipTrigger = withContext(ArkTooltip.Trigger, "trigger");
export interface TooltipTriggerProps
  extends ComponentProps<typeof TooltipTrigger> {}

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
  ...rest
}: TooltipProps) => (
  <TooltipRoot openDelay={0} closeDelay={100} {...rest}>
    {(ctx) => (
      <>
        {trigger && <TooltipTrigger>{trigger}</TooltipTrigger>}

        <TooltipPositioner>
          <TooltipContent {...contentProps}>
            {hasArrow && (
              <TooltipArrow {...arrowProps}>
                <TooltipArrowTip {...arrowTipProps} />
              </TooltipArrow>
            )}

            {getContextualChildren({ ctx, children })}
          </TooltipContent>
        </TooltipPositioner>
      </>
    )}
  </TooltipRoot>
);

export default Tooltip;
