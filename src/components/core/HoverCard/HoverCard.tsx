import { Portal } from "@ark-ui/react";
import * as Ark from "@ark-ui/react/hover-card";

import { styled } from "generated/panda/jsx";
import { hoverCard, type HoverCardVariantProps } from "generated/panda/recipes";
import { createStyleContext, getContextualChildren } from "lib/util";

import type { ReactNode } from "react";

const { withProvider, withContext } = createStyleContext(hoverCard);

export interface HoverCardProps
  extends Ark.HoverCardProps,
    HoverCardVariantProps {
  trigger: ReactNode;
}

export const HoverCardRoot = withProvider(styled(Ark.HoverCard.Root), "root");

export const HoverCardArrow = withContext(styled(Ark.HoverCard.Arrow), "arrow");

export const HoverCardArrowTip = withContext(
  styled(Ark.HoverCard.ArrowTip),
  "arrowTip",
);

export const HoverCardContent = withContext(
  styled(Ark.HoverCard.Content),
  "content",
);

export const HoverCardPositioner = withContext(
  styled(Ark.HoverCard.Positioner),
  "positioner",
);

export const HoverCardTrigger = withContext(
  styled(Ark.HoverCard.Trigger),
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
