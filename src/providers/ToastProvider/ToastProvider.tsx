import { Portal } from "@ark-ui/react";
import { Toast as ArkToast } from "@ark-ui/react/toast";
import { FiX } from "react-icons/fi/index.js";

import Button from "components/core/Button/Button";
import { Box, Stack, styled } from "generated/panda/jsx";
import { toast, type ToastVariantProps } from "generated/panda/recipes";
import { useBreakpointValue } from "lib/hooks";
import createStyleContext from "lib/util/createStyleContext";

import type { ToastProviderProps as ArkToastProviderProps } from "@ark-ui/react/toast";
import type { Placement } from "@zag-js/toast";

const { withProvider, withContext } = createStyleContext(toast);

export interface ToastProviderProps
  extends ArkToastProviderProps,
    ToastVariantProps {}

export const BaseToastProvider = withContext(styled(ArkToast.Provider));

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

export const ToastPlacements = withContext(styled(ArkToast.Placements));

export const ToastGroup = withContext(styled(ArkToast.Group), "group");

/**
 * Popup toast provider.
 */
const ToastProvider = ({
  children,
  ...rest
}: Omit<ToastProviderProps, "toast">) => {
  const placement = useBreakpointValue({
    base: "bottom",
    md: "bottom-end",
  }) as Placement;

  return (
    <BaseToastProvider
      // TODO fix this (doesn't dynamically update)
      defaultOptions={{ placement }}
      {...rest}
    >
      <Portal>
        <ToastPlacements>
          {(placements) =>
            placements.map((placement) => (
              <ToastGroup key={placement} placement={placement}>
                {(toasts) =>
                  toasts.map((toast) => (
                    <ToastRoot key={toast.id} toast={toast} {...rest}>
                      <Stack gap={1}>
                        <ToastTitle />
                        <ToastDescription />
                        {placement}
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

      {children}
    </BaseToastProvider>
  );
};

export default ToastProvider;
