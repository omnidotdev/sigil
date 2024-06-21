import { Popover as ArkPopover } from "@ark-ui/react/popover";
import {
  cloneElement,
  type ReactElement,
  type ComponentProps,
  type ReactNode,
} from "react";
import { FiX } from "react-icons/fi";

import Button from "components/core/Button/Button";
import { Box, Stack, styled } from "generated/panda/jsx";
import { popover } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

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
  /** Trigger node, such as a button, used to open the popover. */
  trigger?: ReactNode;
  /** Popover title, displayed at the top. */
  title?: ReactNode;
  /** Popover description, displayed underneath the title. */
  description?: ReactNode;
  /** Close trigger. Defaults to a button in the top right corner. */
  closeTrigger?: ReactElement | null;
  /** Popover trigger props. */
  triggerProps?: PopoverTriggerProps;
  /** Popover positioner props. */
  positionerProps?: PopoverPositionerProps;
  /** Popover content props. */
  contentProps?: PopoverContentProps;
  /** Popover arrow props. */
  arrowProps?: PopoverArrowProps;
  /** Popover arrow tip props. */
  arrowTipProps?: PopoverArrowTipProps;
  /** Popover title props. */
  titleProps?: PopoverTitleProps;
  /** Popover description props. */
  descriptionProps?: PopoverDescriptionProps;
  /** Close trigger props. */
  closeTriggerProps?: PopoverCloseTriggerProps;
}

/**
 * Popover.
 */
const Popover = ({
  trigger,
  title,
  description,
  children,
  // TODO make default close trigger styles more flexible, doesn't always look good with certain titles, descriptions, nor children
  closeTrigger = (
    <Box position="absolute" top="1" right="1">
      <PopoverCloseTrigger asChild>
        <Button aria-label="Close popover" variant="ghost" size="sm">
          <FiX />
        </Button>
      </PopoverCloseTrigger>
    </Box>
  ),
  triggerProps,
  positionerProps,
  contentProps,
  arrowProps,
  arrowTipProps,
  titleProps,
  descriptionProps,
  closeTriggerProps,
  ...rest
}: PopoverProps) => (
  <PopoverRoot {...rest}>
    {trigger && <PopoverTrigger {...triggerProps}>{trigger}</PopoverTrigger>}

    <PopoverPositioner {...positionerProps}>
      <PopoverContent {...contentProps}>
        <PopoverArrow {...arrowProps}>
          <PopoverArrowTip {...arrowTipProps} />
        </PopoverArrow>

        <Stack gap={1}>
          <PopoverTitle {...titleProps}>{title}</PopoverTitle>

          <PopoverDescription {...descriptionProps}>
            {description}
          </PopoverDescription>

          <Box mt={2}>{children}</Box>
        </Stack>

        {closeTrigger && cloneElement(closeTrigger, closeTriggerProps)}
      </PopoverContent>
    </PopoverPositioner>
  </PopoverRoot>
);

export default Popover;
