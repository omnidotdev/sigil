import { Dialog as ArkDialog } from "@ark-ui/react/dialog";
import { FiX } from "react-icons/fi";

import Button from "components/core/Button/Button";
import { Stack, styled } from "generated/panda/jsx";
import { dialog } from "generated/panda/recipes";
import { createStyleContext, getContextualChildren } from "lib/util";

import type { DialogContentProps as ArkDialogContentProps } from "@ark-ui/react/dialog";
import type { ComponentProps, ReactNode } from "react";

const { withProvider, withContext } = createStyleContext(dialog);

export const DialogRoot = withProvider(styled(ArkDialog.Root), "root");
export interface DialogRootProps extends ComponentProps<typeof DialogRoot> {}

export const DialogTrigger = withContext(styled(ArkDialog.Trigger), "trigger");
export interface DialogTriggerProps
  extends ComponentProps<typeof DialogTrigger> {}

export const DialogBackdrop = withContext(
  styled(ArkDialog.Backdrop),
  "backdrop",
);
export interface DialogBackdropProps
  extends ComponentProps<typeof DialogBackdrop> {}

export const DialogContent = withContext(styled(ArkDialog.Content), "content");

export interface DialogContentProps
  extends ComponentProps<typeof DialogContent> {}

export const DialogCloseTrigger = withContext(
  styled(ArkDialog.CloseTrigger),
  "closeTrigger",
);
export interface DialogCloseTriggerProps
  extends ComponentProps<typeof DialogCloseTrigger> {}

export const DialogTitle = withContext(styled(ArkDialog.Title), "title");
export interface DialogTitleProps extends ComponentProps<typeof DialogTitle> {}

export const DialogDescription = withContext(
  styled(ArkDialog.Description),
  "description",
);
export interface DialogDescriptionProps
  extends ComponentProps<typeof DialogDescription> {}

export const DialogPositioner = withContext(
  styled(ArkDialog.Positioner),
  "positioner",
);
export interface DialogPositionerProps
  extends ComponentProps<typeof DialogPositioner> {}

export interface DialogProps extends DialogRootProps {
  trigger?: ReactNode;
  title?: string;
  description?: string;
  contentProps?: ArkDialogContentProps;
}

// TODO fix animations not working

/**
 * Modal dialog.
 */
const Dialog = ({
  trigger,
  title,
  description,
  children,
  contentProps,
  ...rest
}: DialogProps) => (
  <DialogRoot {...rest}>
    {(ctx) => (
      <>
        {trigger && <DialogTrigger>{trigger}</DialogTrigger>}

        <DialogBackdrop />

        <DialogPositioner>
          <DialogContent
            // TODO remove this hack (https://github.com/chakra-ui/ark/discussions/1282)
            hidden={!ctx.isOpen}
            {...contentProps}
          >
            <Stack gap={8} p={6}>
              <Stack gap={1}>
                {title && <DialogTitle>{title}</DialogTitle>}

                {description && (
                  <DialogDescription>{description}</DialogDescription>
                )}
              </Stack>

              {getContextualChildren({ ctx, children })}
            </Stack>

            <DialogCloseTrigger position="absolute" top={2} right={2}>
              <Button aria-label="Close dialog" variant="ghost" size="sm">
                <FiX />
              </Button>
            </DialogCloseTrigger>
          </DialogContent>
        </DialogPositioner>
      </>
    )}
  </DialogRoot>
);

export default Dialog;
