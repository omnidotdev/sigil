import { Portal } from "@ark-ui/react";
import { Dialog as ArkDialog } from "@ark-ui/react/dialog";
import { FiX } from "react-icons/fi";

import Button from "components/core/Button/Button";
import { Stack, styled } from "generated/panda/jsx";
import { dialog, type DialogVariantProps } from "generated/panda/recipes";
import { createStyleContext, getContextualChildren } from "lib/util";

import type {
  DialogProps as ArkDialogProps,
  DialogContentProps as ArkDialogContentProps,
} from "@ark-ui/react/dialog";
import type { ReactNode } from "react";

// https://github.com/microsoft/TypeScript/issues/47663
import type {} from "@zag-js/types";

const { withProvider, withContext } = createStyleContext(dialog);

export interface DialogProps extends ArkDialogProps, DialogVariantProps {
  trigger: ReactNode;
  title?: string;
  description?: string;
  contentProps?: ArkDialogContentProps;
}

export const DialogRoot = withProvider(styled(ArkDialog.Root));

export const DialogTrigger = withContext(styled(ArkDialog.Trigger), "trigger");

export const DialogBackdrop = withContext(
  styled(ArkDialog.Backdrop),
  "backdrop",
);

export const DialogContainer = withContext(
  styled(ArkDialog.Container),
  "container",
);

export const DialogContent = withContext(styled(ArkDialog.Content), "content");

export const DialogCloseTrigger = withContext(
  styled(ArkDialog.CloseTrigger),
  "closeTrigger",
);

export const DialogTitle = withContext(styled(ArkDialog.Title), "title");

export const DialogDescription = withContext(
  styled(ArkDialog.Description),
  "description",
);

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
        <DialogTrigger>{trigger}</DialogTrigger>

        <Portal>
          <DialogBackdrop />

          <DialogContainer>
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
                <Button aria-label="Close Dialog" variant="ghost" size="sm">
                  <FiX />
                </Button>
              </DialogCloseTrigger>
            </DialogContent>
          </DialogContainer>
        </Portal>
      </>
    )}
  </DialogRoot>
);

export default Dialog;
