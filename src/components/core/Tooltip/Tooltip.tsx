import { Tooltip as ArkTooltip } from "@ark-ui/react/tooltip";

import { styled } from "generated/panda/jsx";
import { tooltip } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { Assign, JsxStyleProps } from "generated/panda/types";
import type { ReactNode } from "react";

const { withProvider, withContext } = createStyleContext(tooltip);

export const TooltipRoot = withProvider(styled(ArkTooltip.Root), "root");
export interface TooltipRootProps
  extends Omit<Assign<JsxStyleProps, ArkTooltip.RootProps>, "content"> {}

export const TooltipArrow = withContext(styled(ArkTooltip.Arrow), "arrow");
export interface TooltipArrowProps
  extends Assign<JsxStyleProps, ArkTooltip.ArrowProps> {}

export const TooltipArrowTip = withContext(
  styled(ArkTooltip.ArrowTip),
  "arrowTip",
);
export interface TooltipArrowTipProps
  extends Assign<JsxStyleProps, ArkTooltip.ArrowTipProps> {}

export const TooltipContent = withContext(
  styled(ArkTooltip.Content),
  "content",
);
export interface TooltipContentProps
  extends Assign<JsxStyleProps, ArkTooltip.ContentProps> {}

export const TooltipPositioner = withContext(
  styled(ArkTooltip.Positioner),
  "positioner",
);
export interface TooltipPositionerProps
  extends Assign<JsxStyleProps, ArkTooltip.PositionerProps> {}

export const TooltipTrigger = withContext(
  styled(ArkTooltip.Trigger),
  "trigger",
);
export interface TooltipTriggerProps
  extends Assign<JsxStyleProps, ArkTooltip.TriggerProps> {}

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
    {trigger && <TooltipTrigger>{trigger}</TooltipTrigger>}

    <TooltipPositioner>
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
