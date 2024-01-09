import { Tooltip as ArkTooltip } from "@ark-ui/react/tooltip";

import { styled } from "generated/panda/jsx";
import { tooltip } from "generated/panda/recipes";
import { createStyleContext, getContextualChildren } from "lib/util";

import type { HTMLStyledProps } from "generated/panda/jsx";
import type { ReactNode } from "react";

const { withProvider, withContext } = createStyleContext(tooltip);

// TODO ..., "root"
export const TooltipRoot = withProvider(styled(ArkTooltip.Root));
export interface TooltipRootProps
  extends Omit<HTMLStyledProps<typeof TooltipRoot>, "content"> {}

export const TooltipArrow = withContext(styled(ArkTooltip.Arrow), "arrow");
export interface TooltipArrowProps
  extends HTMLStyledProps<typeof TooltipArrow> {}

export const TooltipArrowTip = withContext(
  styled(ArkTooltip.ArrowTip),
  "arrowTip",
);
export interface TooltipArrowTipProps
  extends HTMLStyledProps<typeof TooltipArrowTip> {}

export const TooltipContent = withContext(
  styled(ArkTooltip.Content),
  "content",
);
export interface TooltipContentProps
  extends HTMLStyledProps<typeof TooltipContent> {}

export const TooltipPositioner = withContext(
  styled(ArkTooltip.Positioner),
  "positioner",
);
export interface TooltipPositionerProps
  extends HTMLStyledProps<typeof TooltipPositioner> {}

export const TooltipTrigger = withContext(
  styled(ArkTooltip.Trigger),
  "trigger",
);
export interface TooltipTriggerProps
  extends HTMLStyledProps<typeof TooltipTrigger> {}

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
