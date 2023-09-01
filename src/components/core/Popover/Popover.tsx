import { Portal } from "@ark-ui/react";
import * as Ark from "@ark-ui/react/popover";
import { FiX } from "react-icons/fi";

import Button from "components/core/Button/Button";
import { Box, Stack, styled } from "generated/panda/jsx";
import { popover, type PopoverVariantProps } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { ReactNode } from "react";

// https://github.com/microsoft/TypeScript/issues/47663
import type {} from "@zag-js/popper";

const { withProvider, withContext } = createStyleContext(popover);

export interface PopoverProps extends Ark.PopoverProps, PopoverVariantProps {
  trigger: ReactNode;
  title: string;
  description: string;
}

export const PopoverRoot = withProvider(styled(Ark.Popover.Root), "root");

export const PopoverAnchor = withContext(styled(Ark.Popover.Anchor), "anchor");

export const PopoverArrow = withContext(styled(Ark.Popover.Arrow), "arrow");

export const PopoverArrowTip = withContext(
  styled(Ark.Popover.ArrowTip),
  "arrowTip",
);

export const PopoverCloseTrigger = withContext(
  styled(Ark.Popover.CloseTrigger),
  "closeTrigger",
);

export const PopoverContent = withContext(
  styled(Ark.Popover.Content),
  "content",
);

export const PopoverDescription = withContext(
  styled(Ark.Popover.Description),
  "description",
);

export const PopoverPositioner = withContext(
  styled(Ark.Popover.Positioner),
  "positioner",
);

export const PopoverTitle = withContext(styled(Ark.Popover.Title), "title");

export const PopoverTrigger = withContext(
  styled(Ark.Popover.Trigger),
  "trigger",
);

/**
 * Popover.
 */
const Popover = ({ trigger, title, description, ...rest }: PopoverProps) => (
  <PopoverRoot portalled {...rest}>
    <PopoverTrigger>{trigger}</PopoverTrigger>

    <Portal>
      <PopoverPositioner>
        <PopoverContent>
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
