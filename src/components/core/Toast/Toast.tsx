import { Portal } from "@ark-ui/react";
import {
  Toast as ArkToast,
  useToast as useArkToast,
} from "@ark-ui/react/toast";
import { cloneElement } from "react";
import { FiX } from "react-icons/fi";

import Button from "components/core/Button/Button";
import { Box, Stack, styled } from "generated/panda/jsx";
import { toast, type ToastVariantProps } from "generated/panda/recipes";
import createStyleContext from "lib/util/createStyleContext";

import type {
  ToastProviderProps,
  ToastProps as ArkToastProps,
} from "@ark-ui/react/toast";
// https://github.com/microsoft/TypeScript/issues/47663
import type { ToastOptions } from "@zag-js/toast";
import type { ReactElement } from "react";

const { withProvider, withContext } = createStyleContext(toast);

interface ToastWrapperProps {
  trigger: ReactElement;
  toastOptions: Partial<ToastOptions>;
}

export interface ToastProps
  extends ArkToastProps,
    ToastVariantProps,
    ToastWrapperProps {
  providerProps?: ToastProviderProps;
}

export const ToastProvider = withContext(styled(ArkToast.Provider), "provider");

export const ToastTitle = withContext(styled(ArkToast.Title), "title");

export const ToastRoot = withProvider(styled(ArkToast.Root), "root");

export const ToastDescription = withContext(
  styled(ArkToast.Description),
  "description",
);

export const ToastCloseTrigger = withContext(
  styled(ArkToast.CloseTrigger),
  "closeTrigger",
);

export const ToastPlacements = withContext(
  styled(ArkToast.Placements),
  "placements",
);

export const ToastGroup = withContext(styled(ArkToast.Group), "group");

/**
 * Toast wrapper that triggers creation of a toast.
 */
const ToastWrapper = ({ trigger, toastOptions }: ToastWrapperProps) => {
  const toast = useArkToast();

  return cloneElement(trigger, {
    onClick: () => {
      toast.create({
        placement: "bottom-end",
        removeDelay: 0,
        ...toastOptions,
      });
    },
  });
};

/**
 * Popup toast.
 */
const Toast = ({
  trigger,
  children,
  toastOptions,
  providerProps,
  ...rest
}: Omit<ToastProps, "toast">) => (
  <ToastProvider {...providerProps}>
    <Portal>
      <ToastPlacements>
        {(placements) =>
          placements.map((placement) => (
            <ToastGroup key={placement} placement={placement}>
              {(toasts) =>
                toasts.map((toast) => (
                  <ToastRoot key={toast.id} toast={toast} {...rest}>
                    <Stack gap={4}>
                      <Stack gap={1}>
                        <ToastTitle />
                        <ToastDescription />
                      </Stack>

                      {children}
                    </Stack>

                    <Box position="absolute" top="3" right="3">
                      <ToastCloseTrigger asChild>
                        <Button
                          size="sm"
                          variant="ghost"
                          aria-label="Close Toast"
                        >
                          <FiX />
                        </Button>
                      </ToastCloseTrigger>
                    </Box>
                  </ToastRoot>
                ))
              }
            </ToastGroup>
          ))
        }
      </ToastPlacements>
    </Portal>

    <ToastWrapper trigger={trigger} toastOptions={toastOptions} />
  </ToastProvider>
);

export default Toast;
