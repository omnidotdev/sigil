import { ark } from "@ark-ui/react";
import { Dialog as ArkDialog } from "@ark-ui/react/dialog";
import { type ReactElement, type ReactNode } from "react";
import { FiX } from "react-icons/fi";

import Button from "components/core/Button/Button";
import { styled } from "generated/panda/jsx";
import { drawer } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { ComponentProps } from "generated/panda/types";
import type { AssignJSXStyleProps } from "lib/types";

const { withProvider, withContext } = createStyleContext(drawer);

export const DrawerRoot = withProvider(styled(ArkDialog.Root), "root");
export interface DrawerRootProps
  extends AssignJSXStyleProps<ArkDialog.RootProps> {}

export const DrawerTrigger = withContext(styled(ArkDialog.Trigger), "trigger");
export interface DrawerTriggerProps
  extends AssignJSXStyleProps<ArkDialog.TriggerProps> {}

export const DrawerBackdrop = withContext(
  styled(ArkDialog.Backdrop),
  "backdrop",
);
export interface DrawerBackdropProps
  extends AssignJSXStyleProps<ArkDialog.BackdropProps> {}

export const DrawerCloseTrigger = withContext(
  styled(ArkDialog.CloseTrigger),
  "closeTrigger",
);
export interface DrawerCloseTriggerProps
  extends AssignJSXStyleProps<ArkDialog.CloseTriggerProps> {}

export const DrawerPositioner = withContext(
  styled(ArkDialog.Positioner),
  "positioner",
);
export interface DrawerPositionerProps
  extends AssignJSXStyleProps<ArkDialog.PositionerProps> {}

export const DrawerContent = withContext(styled(ArkDialog.Content), "content");
export interface DrawerContentProps
  extends AssignJSXStyleProps<ArkDialog.ContentProps> {}

export const DrawerTitle = withContext(styled(ArkDialog.Title), "title");
export interface DrawerTitleProps
  extends AssignJSXStyleProps<ArkDialog.TitleProps> {}

export const DrawerDescription = withContext(
  styled(ArkDialog.Description),
  "description",
);
export interface DrawerDescriptionProps
  extends AssignJSXStyleProps<ArkDialog.DescriptionProps> {}

export const DrawerHeader = withContext(styled(ark.div), "header");
export interface DrawerHeaderProps
  extends AssignJSXStyleProps<ComponentProps<typeof DrawerHeader>> {}

export const DrawerBody = withContext(styled(ark.div), "body");
export interface DrawerBodyProps
  extends AssignJSXStyleProps<ComponentProps<typeof DrawerBody>> {}

export const DrawerFooter = withContext(styled(ark.div), "footer");
export interface DrawerFooterProps
  extends AssignJSXStyleProps<ComponentProps<typeof DrawerFooter>> {}

export interface DrawerProps extends DrawerRootProps {
  /** Trigger node, such as a button, used to open the drawer. */
  trigger?: ReactNode;
  /** Drawer title, displayed at the top. */
  title?: string;
  /** Drawer description, displayed underneath the title. */
  description?: string;
  /** Drawer footer, displayed at the bottom. */
  footer?: ReactNode;
  /** Close trigger. Defaults to a button in the top right corner. */
  closeTrigger?: ReactElement | null;
  /** Drawer trigger props. */
  triggerProps?: DrawerTriggerProps;
  /** Drawer backdrop props. */
  backdropProps?: DrawerBackdropProps;
  /** Drawer positioner props. */
  positionerProps?: DrawerPositionerProps;
  /** Drawer header props. */
  headerProps?: DrawerHeaderProps;
  /** Drawer title props. */
  titleProps?: DrawerTitleProps;
  /** Drawer description props. */
  descriptionProps?: DrawerDescriptionProps;
  /** Drawer content (body) container props. */
  contentProps?: DrawerContentProps;
  /** Drawer body container props. */
  bodyProps?: DrawerBodyProps;
  /** Drawer footer container props. */
  footerProps?: DrawerFooterProps;
  /** Close trigger props. */
  closeTriggerProps?: DrawerCloseTriggerProps;
}

/**
 * Drawer.
 */
const Drawer = ({
  trigger,
  title,
  description,
  footer,
  closeTrigger = (
    <Button variant="ghost">
      <FiX />
    </Button>
  ),
  children,
  triggerProps,
  backdropProps,
  positionerProps,
  headerProps,
  titleProps,
  descriptionProps,
  contentProps,
  bodyProps,
  footerProps,
  closeTriggerProps,
  ...rest
}: DrawerProps) => (
  <DrawerRoot {...rest}>
    {trigger && (
      <DrawerTrigger asChild {...triggerProps}>
        {trigger}
      </DrawerTrigger>
    )}

    <DrawerBackdrop {...backdropProps} />

    <DrawerPositioner {...positionerProps}>
      <DrawerContent {...contentProps}>
        {(title || description) && (
          <DrawerHeader {...headerProps}>
            {title && <DrawerTitle {...titleProps}>{title}</DrawerTitle>}

            {description && (
              <DrawerDescription {...descriptionProps}>
                {description}
              </DrawerDescription>
            )}

            {closeTrigger && (
              <DrawerCloseTrigger
                asChild
                position="absolute"
                top={3}
                right={4}
                {...closeTriggerProps}
              >
                {closeTrigger}
              </DrawerCloseTrigger>
            )}
          </DrawerHeader>
        )}

        <DrawerBody {...bodyProps}>{children}</DrawerBody>

        {footer && <DrawerFooter {...footerProps}>{footer}</DrawerFooter>}
      </DrawerContent>
    </DrawerPositioner>
  </DrawerRoot>
);

export default Drawer;
