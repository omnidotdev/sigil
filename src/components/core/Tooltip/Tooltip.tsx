import { Portal } from "@ark-ui/react";
import { Tooltip as ArkTooltip } from "@ark-ui/react/tooltip";

import { styled } from "generated/panda/jsx";
import { tooltip, type TooltipVariantProps } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { TooltipProps as ArkTooltipProps } from "@ark-ui/react/tooltip";
import type { ReactNode } from "react";

const { withProvider, withContext } = createStyleContext(tooltip);

export interface TooltipProps extends ArkTooltipProps, TooltipVariantProps {
  trigger?: ReactNode;
  content: ReactNode;
}

// TODO ..., "root"
export const TooltipRoot = withProvider(styled(ArkTooltip.Root));

export const TooltipArrow = withContext(styled(ArkTooltip.Arrow), "arrow");

export const TooltipArrowTip = withContext(
  styled(ArkTooltip.ArrowTip),
  "arrowTip",
);

export const TooltipContent = withContext(
  styled(ArkTooltip.Content),
  "content",
);

export const TooltipPositioner = withContext(
  styled(ArkTooltip.Positioner),
  "positioner",
);

export const TooltipTrigger = withContext(
  styled(ArkTooltip.Trigger),
  "trigger",
);

/**
 * Tooltip.
 */
const Tooltip = ({ trigger, content, ...rest }: TooltipProps) => (
  <TooltipRoot {...rest}>
    <TooltipTrigger>{trigger}</TooltipTrigger>

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
