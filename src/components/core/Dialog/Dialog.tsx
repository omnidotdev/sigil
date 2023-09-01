import { Portal } from "@ark-ui/react";
import * as Ark from "@ark-ui/react/dialog";
import { FiX } from "react-icons/fi";

import Button from "components/core/Button/Button";
import { Stack, styled } from "generated/panda/jsx";
import { dialog, type DialogVariantProps } from "generated/panda/recipes";
import { createStyleContext, getContextualChildren } from "lib/util";

import type { ReactNode } from "react";

// https://github.com/microsoft/TypeScript/issues/47663
import type {} from "@zag-js/types";

const { withProvider, withContext } = createStyleContext(dialog);

export interface DialogProps extends Ark.DialogProps, DialogVariantProps {
  trigger: ReactNode;
  title?: string;
  description?: string;
  contentProps?: Ark.DialogContentProps;
}

export const DialogRoot = withProvider(styled(Ark.Dialog.Root), "root");

export const DialogTrigger = withContext(styled(Ark.Dialog.Trigger), "trigger");

export const DialogBackdrop = withContext(
  styled(Ark.Dialog.Backdrop),
  "backdrop",
);

export const DialogContainer = withContext(
  styled(Ark.Dialog.Container),
  "container",
);

export const DialogContent = withContext(styled(Ark.Dialog.Content), "content");

export const DialogCloseTrigger = withContext(
  styled(Ark.Dialog.CloseTrigger),
  "closeTrigger",
);

export const DialogTitle = withContext(styled(Ark.Dialog.Title), "title");

export const DialogDescription = withContext(
  styled(Ark.Dialog.Description),
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
