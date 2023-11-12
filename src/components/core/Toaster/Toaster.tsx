import { Toast as ArkToast, createToaster } from "@ark-ui/react";
import { FiX } from "react-icons/fi";

import Button from "components/core/Button/Button";
import { styled } from "generated/panda/jsx";
import { toast as toastRecipe } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { ToastProps as ArkToastProps } from "@ark-ui/react";
import type { ToastVariantProps } from "generated/panda/recipes";

// https://github.com/microsoft/TypeScript/issues/47663
import type {} from "@zag-js/toast";

const { withProvider, withContext } = createStyleContext(toastRecipe);

export interface ToastProps extends ArkToastProps, ToastVariantProps {}

export const ToastRoot = withProvider(styled(ArkToast.Root), "root");

export const ToastTitle = withContext(styled(ArkToast.Title), "title");

export const ToastDescription = withContext(
  styled(ArkToast.Description),
  "description",
);

export const ToastCloseTrigger = withContext(
  styled(ArkToast.CloseTrigger),
  "closeTrigger",
);

// TODO allow passing in custom default props
// TODO JSDoc `Toaster` and `toast`
const [Toaster, toast] = createToaster({
  // TODO `top-end` on desktop, `top` on mobile
  placement: "top-end",
  render: (toast) => (
    <ToastRoot>
      <ToastTitle>{toast.title}</ToastTitle>

      <ToastDescription>{toast.description}</ToastDescription>

      <ToastCloseTrigger asChild>
        <Button size="sm" variant="link">
          <FiX />
        </Button>
      </ToastCloseTrigger>
    </ToastRoot>
  ),
});

export { toast };

export default Toaster;
