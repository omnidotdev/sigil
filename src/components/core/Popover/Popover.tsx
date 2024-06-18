import { Popover as ArkPopover } from "@ark-ui/react/popover";
import { FiX } from "react-icons/fi";

import Button from "components/core/Button/Button";
import { Box, Stack, styled } from "generated/panda/jsx";
import { popover } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { ComponentProps, ReactNode } from "react";

const { withProvider, withContext } = createStyleContext(popover);

export const PopoverRoot = withProvider(styled(ArkPopover.Root), "root");
export interface PopoverRootProps extends ComponentProps<typeof PopoverRoot> {}

export const PopoverAnchor = withContext(styled(ArkPopover.Anchor), "anchor");
export interface PopoverAnchorProps
  extends ComponentProps<typeof PopoverAnchor> {}

export const PopoverArrow = withContext(styled(ArkPopover.Arrow), "arrow");
export interface PopoverArrowProps
  extends ComponentProps<typeof PopoverArrow> {}

export const PopoverArrowTip = withContext(
  styled(ArkPopover.ArrowTip),
  "arrowTip",
);
export interface PopoverArrowTipProps
  extends ComponentProps<typeof PopoverArrowTip> {}

export const PopoverCloseTrigger = withContext(
  styled(ArkPopover.CloseTrigger),
  "closeTrigger",
);
export interface PopoverCloseTriggerProps
  extends ComponentProps<typeof PopoverCloseTrigger> {}

export const PopoverContent = withContext(
  styled(ArkPopover.Content),
  "content",
);
export interface PopoverContentProps
  extends ComponentProps<typeof PopoverContent> {}

export const PopoverDescription = withContext(
  styled(ArkPopover.Description),
  "description",
);
export interface PopoverDescriptionProps
  extends ComponentProps<typeof PopoverDescription> {}

// TODO use in prebuilt `Popover` component
const PopoverIndicator = withContext(styled(ArkPopover.Indicator), "indicator");
export interface PopoverIndicatorProps
  extends ComponentProps<typeof PopoverIndicator> {}

export const PopoverPositioner = withContext(
  styled(ArkPopover.Positioner),
  "positioner",
);
export interface PopoverPositionerProps
  extends ComponentProps<typeof PopoverPositioner> {}

export const PopoverTitle = withContext(styled(ArkPopover.Title), "title");
export interface PopoverTitleProps
  extends ComponentProps<typeof PopoverTitle> {}

export const PopoverTrigger = withContext(
  styled(ArkPopover.Trigger),
  "trigger",
);
export interface PopoverTriggerProps
  extends ComponentProps<typeof PopoverTrigger> {}

export interface PopoverProps extends PopoverRootProps {
  trigger?: ReactNode;
  title: string;
  description: string;
  contentProps?: PopoverContentProps;
}

/**
 * Popover.
 */
const Popover = ({
  trigger,
  title,
  description,
  contentProps,
  ...rest
}: PopoverProps) => (
  <PopoverRoot {...rest}>
    {trigger && <PopoverTrigger>{trigger}</PopoverTrigger>}

    <PopoverPositioner>
      <PopoverContent {...contentProps}>
        <PopoverArrow>
          <PopoverArrowTip />
        </PopoverArrow>

        <Stack gap={1}>
          <PopoverTitle>{title}</PopoverTitle>

          <PopoverDescription>{description}</PopoverDescription>
        </Stack>

        <Box position="absolute" top="1" right="1">
          <PopoverCloseTrigger asChild>
            <Button aria-label="Close popover" variant="ghost" size="sm">
              <FiX />
            </Button>
          </PopoverCloseTrigger>
        </Box>
      </PopoverContent>
    </PopoverPositioner>
  </PopoverRoot>
);

export default Popover;
