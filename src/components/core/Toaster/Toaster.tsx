import { Toast as ArkToast, createToaster } from "@ark-ui/react";
import { FiX } from "react-icons/fi";

import Button from "components/core/Button/Button";
import { styled } from "generated/panda/jsx";
import { toast as toastRecipe } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { ComponentProps } from "react";

const { withProvider, withContext } = createStyleContext(toastRecipe);

export const ToastRoot = withProvider(styled(ArkToast.Root), "root");
export interface ToastRootProps extends ComponentProps<typeof ToastRoot> {}

// TODO use in prebuilt `Toaster` component
const ToastGroup = withContext(styled(ArkToast.Group), "group");
export interface ToastGroupProps extends ComponentProps<typeof ToastGroup> {}

export const ToastTitle = withContext(styled(ArkToast.Title), "title");
export interface ToastTitleProps extends ComponentProps<typeof ToastTitle> {}

export const ToastDescription = withContext(
  styled(ArkToast.Description),
  "description",
);
export interface ToastDescriptionProps
  extends ComponentProps<typeof ToastDescription> {}

export const ToastCloseTrigger = withContext(
  styled(ArkToast.CloseTrigger),
  "closeTrigger",
);
export interface ToastCloseTriggerProps
  extends ComponentProps<typeof ToastCloseTrigger> {}

export interface ToastProps extends ToastRootProps {}

// TODO allow passing in custom default props
// TODO JSDoc `Toaster` and `toast`
// TODO remove type annotation, added due to by type portability error (https://github.com/microsoft/TypeScript/issues/47663)
const [Toaster, toast]: any[] = createToaster({
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
