import { ark } from "@ark-ui/react";
import { Dialog as ArkDialog } from "@ark-ui/react/dialog";
import { FiX } from "react-icons/fi";

import Button from "components/core/Button/Button";
import { styled } from "generated/panda/jsx";
import { drawer } from "generated/panda/recipes";
import { createStyleContext, getContextualChildren } from "lib/util";

import type {
  ComponentProps,
  ComponentPropsWithoutRef,
  ReactNode,
} from "react";

const { withProvider, withContext } = createStyleContext(drawer);

export const DrawerRoot = withProvider(styled(ArkDialog.Root), "root");
export interface DrawerRootProps extends ComponentProps<typeof DrawerRoot> {}

export const DrawerTrigger = withContext(styled(ArkDialog.Trigger), "trigger");
export interface DrawerTriggerProps
  extends ComponentProps<typeof DrawerTrigger> {}

export const DrawerBackdrop = withContext(
  styled(ArkDialog.Backdrop),
  "backdrop",
);
export interface DrawerBackdropProps
  extends ComponentProps<typeof DrawerBackdrop> {}

export const DrawerCloseTrigger = withContext(
  styled(ArkDialog.CloseTrigger),
  "closeTrigger",
);
export interface DrawerCloseTriggerProps
  extends ComponentProps<typeof DrawerCloseTrigger> {}

export const DrawerPositioner = withContext(
  styled(ArkDialog.Positioner),
  "positioner",
);
export interface DrawerPositionerProps
  extends ComponentProps<typeof DrawerPositioner> {}

export const DrawerContent = withContext(styled(ArkDialog.Content), "content");
export interface DrawerContentProps
  extends ComponentProps<typeof DrawerContent> {}

export const DrawerTitle = withContext(styled(ArkDialog.Title), "title");
export interface DrawerTitleProps extends ComponentProps<typeof DrawerTitle> {}

export const DrawerDescription = withContext(
  styled(ArkDialog.Description),
  "description",
);
export interface DrawerDescriptionProps
  extends ComponentProps<typeof DrawerDescription> {}

export const DrawerHeader = withContext(styled(ark.div), "header");
export interface DrawerHeaderProps
  extends ComponentProps<typeof DrawerHeader> {}

export const DrawerBody = withContext(styled(ark.div), "body");
export interface DrawerBodyProps extends ComponentProps<typeof DrawerBody> {}

export const DrawerFooter = withContext(styled(ark.div), "footer");
export interface DrawerFooterProps
  extends ComponentProps<typeof DrawerFooter> {}

export interface DrawerProps extends DrawerRootProps {
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
        {trigger && <DrawerTrigger asChild>{trigger}</DrawerTrigger>}

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

            <DrawerBody>{getContextualChildren({ ctx, children })}</DrawerBody>

            {footer && <DrawerFooter {...footerProps}>{footer}</DrawerFooter>}
          </DrawerContent>
        </DrawerPositioner>
      </>
    )}
  </DrawerRoot>
);

export default Drawer;
