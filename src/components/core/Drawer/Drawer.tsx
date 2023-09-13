import { Portal } from "@ark-ui/react";
import { Dialog as ArkDialog } from "@ark-ui/react/dialog";
import { FiX } from "react-icons/fi";

import Button from "components/core/Button/Button";
import { Stack, styled } from "generated/panda/jsx";
import { drawer, type DrawerVariantProps } from "generated/panda/recipes";
import { createStyleContext, getContextualChildren } from "lib/util";

import type { DialogProps as ArkDialogProps } from "@ark-ui/react/dialog";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

const { withProvider, withContext } = createStyleContext(drawer);

export interface DrawerProps extends ArkDialogProps, DrawerVariantProps {
  /** Trigger node, such as a button, used to open the drawer. */
  trigger: ReactNode;
  /** Drawer title, displayed at the top. */
  title?: string;
  /** Drawer description, displayed underneath title. */
  description?: string;
  /** Drawer content (body) container props. */
  contentProps?: ComponentPropsWithoutRef<typeof DrawerContent>;
}

export const DrawerRoot = withProvider(styled(ArkDialog.Root));

export const DrawerBackdrop = withContext(
  styled(ArkDialog.Backdrop),
  "backdrop",
);

export const DrawerCloseTrigger = withContext(
  styled(ArkDialog.CloseTrigger),
  "closeTrigger",
);

export const DrawerContainer = withContext(
  styled(ArkDialog.Container),
  "container",
);

export const DrawerContent = withContext(styled(ArkDialog.Content), "content");

export const DrawerDescription = withContext(
  styled(ArkDialog.Description),
  "description",
);

export const DrawerTitle = withContext(styled(ArkDialog.Title), "title");

export const DrawerTrigger = withContext(styled(ArkDialog.Trigger), "trigger");

/**
 * Drawer.
 */
const Drawer = ({
  trigger,
  title,
  description,
  children,
  contentProps,
  ...rest
}: DrawerProps) => (
  <DrawerRoot {...rest}>
    {(ctx) => (
      <>
        <DrawerTrigger asChild>{trigger}</DrawerTrigger>

        <Portal>
          <DrawerBackdrop />

          <DrawerContainer>
            <DrawerContent {...contentProps}>
              <Stack gap={6}>
                <Stack gap={1}>
                  {title && <DrawerTitle mb={1}>{title}</DrawerTitle>}

                  {description && (
                    <DrawerDescription>{description}</DrawerDescription>
                  )}
                </Stack>

                {getContextualChildren({ ctx, children })}
              </Stack>

              <DrawerCloseTrigger asChild position="absolute" top="3" right="4">
                <Button aria-label="Close Drawer" variant="ghost">
                  <FiX />
                </Button>
              </DrawerCloseTrigger>
            </DrawerContent>
          </DrawerContainer>
        </Portal>
      </>
    )}
  </DrawerRoot>
);

export default Drawer;
