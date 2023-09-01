import { Portal } from "@ark-ui/react";
import * as Ark from "@ark-ui/react/tooltip";

import { styled } from "generated/panda/jsx";
import { tooltip, type TooltipVariantProps } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { ReactNode } from "react";

const { withProvider, withContext } = createStyleContext(tooltip);

export interface TooltipProps extends Ark.TooltipProps, TooltipVariantProps {
  trigger: ReactNode;
  content: ReactNode;
}

export const TooltipRoot = withProvider(styled(Ark.Tooltip.Root), "root");

export const TooltipArrow = withContext(styled(Ark.Tooltip.Arrow), "arrow");

export const TooltipArrowTip = withContext(
  styled(Ark.Tooltip.ArrowTip),
  "arrowTip",
);

export const TooltipContent = withContext(
  styled(Ark.Tooltip.Content),
  "content",
);

export const TooltipPositioner = withContext(
  styled(Ark.Tooltip.Positioner),
  "positioner",
);

export const TooltipTrigger = withContext(
  styled(Ark.Tooltip.Trigger),
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
