import { Portal } from "@ark-ui/react";
import { Tooltip as ArkTooltip } from "@ark-ui/react/tooltip";

import { styled } from "generated/panda/jsx";
import { tooltip } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

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
  trigger?: ReactNode;
  content: ReactNode;
}

/**
 * Tooltip.
 */
const Tooltip = ({ trigger, content, ...rest }: TooltipProps) => (
  <TooltipRoot {...rest}>
    {trigger && <TooltipTrigger>{trigger}</TooltipTrigger>}

    <Portal>
      <TooltipPositioner>
        <TooltipArrow>
          <TooltipArrowTip />
        </TooltipArrow>

        <TooltipContent>{content}</TooltipContent>
      </TooltipPositioner>
    </Portal>
  </TooltipRoot>
);

export default Tooltip;
