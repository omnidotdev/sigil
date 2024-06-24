import { Dialog as ArkDialog } from "@ark-ui/react/dialog";
import { cloneElement, type ReactNode, type ReactElement } from "react";
import { FiX } from "react-icons/fi";

import Button from "components/core/Button/Button";
import { Stack, styled } from "generated/panda/jsx";
import { dialog } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { DialogContentProps as ArkDialogContentProps } from "@ark-ui/react/dialog";
import type { Assign, JsxStyleProps } from "generated/panda/types";

const { withProvider, withContext } = createStyleContext(dialog);

export const DialogRoot = withProvider(styled(ArkDialog.Root), "root");
export interface DialogRootProps
  extends Assign<JsxStyleProps, ArkDialog.RootProps> {}

export const DialogTrigger = withContext(styled(ArkDialog.Trigger), "trigger");
export interface DialogTriggerProps
  extends Assign<JsxStyleProps, ArkDialog.TriggerProps> {}

export const DialogBackdrop = withContext(
  styled(ArkDialog.Backdrop),
  "backdrop",
);
export interface DialogBackdropProps
  extends Assign<JsxStyleProps, ArkDialog.BackdropProps> {}

export const DialogContent = withContext(styled(ArkDialog.Content), "content");

export interface DialogContentProps
  extends Assign<JsxStyleProps, ArkDialogContentProps> {}

export const DialogCloseTrigger = withContext(
  styled(ArkDialog.CloseTrigger),
  "closeTrigger",
);
export interface DialogCloseTriggerProps
  extends Assign<JsxStyleProps, ArkDialog.CloseTriggerProps> {}

export const DialogTitle = withContext(styled(ArkDialog.Title), "title");
export interface DialogTitleProps
  extends Assign<JsxStyleProps, ArkDialog.TitleProps> {}

export const DialogDescription = withContext(
  styled(ArkDialog.Description),
  "description",
);
export interface DialogDescriptionProps
  extends Assign<JsxStyleProps, ArkDialog.DescriptionProps> {}

export const DialogPositioner = withContext(
  styled(ArkDialog.Positioner),
  "positioner",
);
export interface DialogPositionerProps
  extends Assign<JsxStyleProps, ArkDialog.PositionerProps> {}

export interface DialogProps extends DialogRootProps {
  /** Trigger node, such as a button, used to open the dialog. */
  trigger?: ReactNode;
  /** Dialog title, displayed at the top. */
  title?: string;
  /** Dialog description, displayed underneath the title. */
  description?: string;
  /** Close trigger. Defaults to a button in the top right corner. */
  closeTrigger?: ReactElement | null;
  /** Dialog trigger props. */
  triggerProps?: DialogTriggerProps;
  /** Dialog backdrop props. */
  backdropProps?: DialogBackdropProps;
  /** Dialog positioner props. */
  positionerProps?: DialogPositionerProps;
  /** Dialog content props. */
  contentProps?: ArkDialogContentProps;
  /** Dialog title props. */
  titleProps?: DialogTitleProps;
  /** Dialog description props. */
  descriptionProps?: DialogDescriptionProps;
  /** Dialog close trigger props. */
  closeTriggerProps?: DialogCloseTriggerProps;
}

/**
 * Modal dialog.
 */
const Dialog = ({
  trigger,
  title,
  description,
  closeTrigger = (
    <DialogCloseTrigger asChild position="absolute" top={2} right={2}>
      <Button aria-label="Close dialog" variant="ghost" size="sm">
        <FiX />
      </Button>
    </DialogCloseTrigger>
  ),
  children,
  triggerProps,
  backdropProps,
  positionerProps,
  contentProps,
  titleProps,
  descriptionProps,
  closeTriggerProps,
  ...rest
}: DialogProps) => (
  <DialogRoot {...rest}>
    {trigger && (
      <DialogTrigger asChild {...triggerProps}>
        {trigger}
      </DialogTrigger>
    )}

    <DialogBackdrop {...backdropProps} />

    <DialogPositioner {...positionerProps}>
      <DialogContent {...contentProps}>
        <Stack gap={8} p={6}>
          <Stack gap={1}>
            {title && <DialogTitle {...titleProps}>{title}</DialogTitle>}

            {description && (
              <DialogDescription {...descriptionProps}>
                {description}
              </DialogDescription>
            )}
          </Stack>

          {children}
        </Stack>

        {closeTrigger && cloneElement(closeTrigger, closeTriggerProps)}
      </DialogContent>
    </DialogPositioner>
  </DialogRoot>
);

export default Dialog;
