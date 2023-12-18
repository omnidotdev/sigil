import { HoverCard as ArkHoverCard } from "@ark-ui/react/hover-card";

import { styled } from "generated/panda/jsx";
import { hoverCard } from "generated/panda/recipes";
import { createStyleContext, getContextualChildren } from "lib/util";

import type { HTMLStyledProps } from "generated/panda/jsx";
import type { ReactNode } from "react";

const { withProvider, withContext } = createStyleContext(hoverCard);

// TODO ..., "root"
export const HoverCardRoot = withProvider(styled(ArkHoverCard.Root));
export interface HoverCardRootProps
  extends HTMLStyledProps<typeof HoverCardRoot> {}

export const HoverCardArrow = withContext(styled(ArkHoverCard.Arrow), "arrow");
export interface HoverCardArrowProps
  extends HTMLStyledProps<typeof HoverCardArrow> {}

export const HoverCardArrowTip = withContext(
  styled(ArkHoverCard.ArrowTip),
  "arrowTip",
);
export interface HoverCardArrowTipProps
  extends HTMLStyledProps<typeof HoverCardArrowTip> {}

export const HoverCardContent = withContext(
  styled(ArkHoverCard.Content),
  "content",
);
export interface HoverCardContentProps
  extends HTMLStyledProps<typeof HoverCardContent> {}

export const HoverCardPositioner = withContext(
  styled(ArkHoverCard.Positioner),
  "positioner",
);
export interface HoverCardPositionerProps
  extends HTMLStyledProps<typeof HoverCardPositioner> {}

export const HoverCardTrigger = withContext(
  styled(ArkHoverCard.Trigger),
  "trigger",
);
export interface HoverCardTriggerProps
  extends HTMLStyledProps<typeof HoverCardTrigger> {}

export interface HoverCardProps extends HoverCardRootProps {
  trigger?: ReactNode;
}

/**
 * Hover card.
 */
const HoverCard = ({ trigger, children, ...rest }: HoverCardProps) => (
  <HoverCardRoot openDelay={0} closeDelay={100} {...rest}>
    {(ctx) => (
      <>
        {trigger && <HoverCardTrigger asChild>{trigger}</HoverCardTrigger>}

        <HoverCardPositioner>
          <HoverCardContent>
            <HoverCardArrow>
              <HoverCardArrowTip />
            </HoverCardArrow>

            {getContextualChildren({ ctx, children })}
          </HoverCardContent>
        </HoverCardPositioner>
      </>
    )}
  </HoverCardRoot>
);

export default HoverCard;
