import { Portal } from "@ark-ui/react";
import { Popover as ArkPopover } from "@ark-ui/react/popover";
import { FiX } from "react-icons/fi/index.js";

import Button from "components/core/Button/Button";
import { Box, Stack, styled } from "generated/panda/jsx";
import { popover, type PopoverVariantProps } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type {
  PopoverProps as ArkPopoverProps,
  PopoverContentProps as PopoverContentProps,
} from "@ark-ui/react/popover";
import type { ReactNode } from "react";

const { withProvider, withContext } = createStyleContext(popover);

export interface PopoverProps extends ArkPopoverProps, PopoverVariantProps {
  trigger?: ReactNode;
  title: string;
  description: string;
  contentProps?: PopoverContentProps;
}

export const PopoverRoot = withProvider(styled(ArkPopover.Root));

export const PopoverAnchor = withContext(styled(ArkPopover.Anchor), "anchor");

export const PopoverArrow = withContext(styled(ArkPopover.Arrow), "arrow");

export const PopoverArrowTip = withContext(
  styled(ArkPopover.ArrowTip),
  "arrowTip",
);

export const PopoverCloseTrigger = withContext(
  styled(ArkPopover.CloseTrigger),
  "closeTrigger",
);

export const PopoverContent = withContext(
  styled(ArkPopover.Content),
  "content",
);

export const PopoverDescription = withContext(
  styled(ArkPopover.Description),
  "description",
);

export const PopoverPositioner = withContext(
  styled(ArkPopover.Positioner),
  "positioner",
);

export const PopoverTitle = withContext(styled(ArkPopover.Title), "title");

export const PopoverTrigger = withContext(
  styled(ArkPopover.Trigger),
  "trigger",
);

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
  <PopoverRoot portalled {...rest}>
    <PopoverTrigger>{trigger}</PopoverTrigger>

    <Portal>
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
              <Button aria-label="Close Popover" variant="ghost" size="sm">
                <FiX />
              </Button>
            </PopoverCloseTrigger>
          </Box>
        </PopoverContent>
      </PopoverPositioner>
    </Portal>
  </PopoverRoot>
);

export default Popover;
