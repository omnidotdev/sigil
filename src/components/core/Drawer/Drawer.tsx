import { ark, Portal } from "@ark-ui/react";
import { Dialog as ArkDialog } from "@ark-ui/react/dialog";
import { FiX } from "react-icons/fi";

import Button from "components/core/Button/Button";
import { styled } from "generated/panda/jsx";
import { drawer, type DrawerVariantProps } from "generated/panda/recipes";
import { createStyleContext, getContextualChildren } from "lib/util";

import type { DialogProps as ArkDialogProps } from "@ark-ui/react/dialog";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

const { withProvider, withContext } = createStyleContext(drawer);

export interface DrawerProps extends ArkDialogProps, DrawerVariantProps {
  /** Trigger node, such as a button, used to open the drawer. */
  trigger?: ReactNode;
  /** Drawer title, displayed at the top. */
  title?: string;
  /** Drawer description, displayed underneath title. */
  description?: string;
  /** Drawer footer, displayed at the bottom. */
  footer?: ReactNode;
  /** Drawer content (body) container props. */
  contentProps?: ComponentPropsWithoutRef<typeof DrawerContent>;
  footerProps?: ComponentPropsWithoutRef<typeof DrawerFooter>;
}

export const DrawerRoot = withProvider(styled(ArkDialog.Root), "root");

export const DrawerTrigger = withContext(styled(ArkDialog.Trigger), "trigger");

export const DrawerBackdrop = withContext(
  styled(ArkDialog.Backdrop),
  "backdrop",
);

export const DrawerCloseTrigger = withContext(
  styled(ArkDialog.CloseTrigger),
  "closeTrigger",
);

export const DrawerPositioner = withContext(
  styled(ArkDialog.Positioner),
  "positioner",
);

export const DrawerContent = withContext(styled(ArkDialog.Content), "content");

export const DrawerTitle = withContext(styled(ArkDialog.Title), "title");

export const DrawerDescription = withContext(
  styled(ArkDialog.Description),
  "description",
);

export const DrawerHeader = withContext(styled(ark.div), "header");

export const DrawerBody = withContext(styled(ark.div), "body");

export const DrawerFooter = withContext(styled(ark.div), "footer");

/**
 * Drawer.
 */
const Drawer = ({
  trigger,
  title,
  description,
  footer,
  children,
  contentProps,
  footerProps,
  ...rest
}: DrawerProps) => (
  <DrawerRoot {...rest}>
    {(ctx) => (
      <>
        <DrawerTrigger asChild>{trigger}</DrawerTrigger>

        <Portal>
          <DrawerBackdrop />

          <DrawerPositioner>
            <DrawerContent {...contentProps}>
              {(title || description) && (
                <DrawerHeader>
                  {title && <DrawerTitle>{title}</DrawerTitle>}

                  {description && (
                    <DrawerDescription>{description}</DrawerDescription>
                  )}

                  <DrawerCloseTrigger
                    asChild
                    position="absolute"
                    top={3}
                    right={4}
                  >
                    <Button variant="ghost">
                      <FiX />
                    </Button>
                  </DrawerCloseTrigger>
                </DrawerHeader>
              )}

              <DrawerBody>
                {getContextualChildren({ ctx, children })}
              </DrawerBody>

              {footer && <DrawerFooter {...footerProps}>{footer}</DrawerFooter>}
            </DrawerContent>
          </DrawerPositioner>
        </Portal>
      </>
    )}
  </DrawerRoot>
);

export default Drawer;
