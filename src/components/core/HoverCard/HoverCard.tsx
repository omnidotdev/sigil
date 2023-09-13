import { Portal } from "@ark-ui/react";
import { HoverCard as ArkHoverCard } from "@ark-ui/react/hover-card";

import { styled } from "generated/panda/jsx";
import { hoverCard, type HoverCardVariantProps } from "generated/panda/recipes";
import { createStyleContext, getContextualChildren } from "lib/util";

import type { HoverCardProps as ArkHoverCardProps } from "@ark-ui/react/hover-card";
import type { ReactNode } from "react";

const { withProvider, withContext } = createStyleContext(hoverCard);

export interface HoverCardProps
  extends ArkHoverCardProps,
    HoverCardVariantProps {
  trigger: ReactNode;
}

export const HoverCardRoot = withProvider(styled(ArkHoverCard.Root));

export const HoverCardArrow = withContext(styled(ArkHoverCard.Arrow), "arrow");

export const HoverCardArrowTip = withContext(
  styled(ArkHoverCard.ArrowTip),
  "arrowTip",
);

export const HoverCardContent = withContext(
  styled(ArkHoverCard.Content),
  "content",
);

export const HoverCardPositioner = withContext(
  styled(ArkHoverCard.Positioner),
  "positioner",
);

export const HoverCardTrigger = withContext(
  styled(ArkHoverCard.Trigger),
  "trigger",
);

/**
 * Hover card.
 */
const HoverCard = ({ trigger, children, ...rest }: HoverCardProps) => (
  <HoverCardRoot openDelay={0} closeDelay={100} {...rest}>
    {(ctx) => (
      <>
        <HoverCardTrigger asChild>{trigger}</HoverCardTrigger>

        <Portal>
          <HoverCardPositioner>
            <HoverCardContent>
              <HoverCardArrow>
                <HoverCardArrowTip />
              </HoverCardArrow>

              {getContextualChildren({ ctx, children })}
            </HoverCardContent>
          </HoverCardPositioner>
        </Portal>
      </>
    )}
  </HoverCardRoot>
);

export default HoverCard;
