import { Toast as ArkToast, Toaster as ArkToaster } from "@ark-ui/react/toast";
import { FiX } from "react-icons/fi";

import { Button } from "components/core/Button/Button";
import { styled } from "generated/panda/jsx";
import { toast as toastRecipe } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type {
  CreateToasterProps as ArkCreateToasterProps,
  ToasterProps as ArkToasterProps,
} from "@ark-ui/react/toast";
import type { ToastVariantProps } from "generated/panda/recipes";
import type { AssignJSXStyleProps } from "lib/types";
import type { ReactNode } from "react";

const { withProvider, withContext } = createStyleContext(toastRecipe);

export interface CreateToasterProps extends ArkCreateToasterProps {}

export const ToastRoot = withProvider(styled(ArkToast.Root), "root");
export interface ToastRootProps
  extends AssignJSXStyleProps<ArkToast.RootProps>,
    ToastVariantProps {}

export const ToastTitle = withContext(styled(ArkToast.Title), "title");
export interface ToastTitleProps
  extends AssignJSXStyleProps<ArkToast.TitleProps> {}

export const ToastDescription = withContext(
  styled(ArkToast.Description),
  "description",
);
export interface ToastDescriptionProps
  extends AssignJSXStyleProps<ArkToast.DescriptionProps> {}

export const ToastActionTrigger = withContext(
  styled(ArkToast.ActionTrigger),
  "actionTrigger",
);
export interface ToastActionTriggerProps
  extends AssignJSXStyleProps<ArkToast.ActionTriggerProps> {}

export const ToastCloseTrigger = withContext(
  styled(ArkToast.CloseTrigger),
  "closeTrigger",
);
export interface ToastCloseTriggerProps
  extends AssignJSXStyleProps<ArkToast.CloseTriggerProps> {}

export interface ToasterProps extends Omit<ArkToasterProps, "children"> {
  /** Trigger to be displayed in the toast for closing it. Defaults to a close button. To hide the close trigger, pass `null`. */
  closeTrigger?: ReactNode;
  /** Action trigger to be displayed in the toast, such as an undo button. */
  actionTrigger?: ReactNode;
  /** Props for the root element of the toast, immediately nested inside of the toaster. */
  rootProps?: ToastRootProps;
  /** Props for the title element of the toast. */
  titleProps?: ToastTitleProps;
  /** Props for the description element of the toast. */
  descriptionProps?: ToastDescriptionProps;
  /** Props for the action trigger element of the toast. */
  actionTriggerProps?: ToastActionTriggerProps;
  /** Props for the close trigger element of the toast. */
  closeTriggerProps?: ToastCloseTriggerProps;
}

// TODO allow passing in custom default props
// TODO JSDoc `Toaster` and `toast`
// TODO `top-end` on desktop, `top` on mobile (i.e. placement: "top-end")
// TODO figure out a way to unset `info` as default, and update component JSDoc description accordingly

/**
 * Toaster for displaying popup toast notifications. The default toast type (`data-type`) is `info`.
 */
export const Toaster = ({
  toaster,
  closeTrigger = (
    <Button size="sm" variant="ghost">
      <FiX />
    </Button>
  ),
  actionTrigger,
  rootProps,
  titleProps,
  descriptionProps,
  actionTriggerProps,
  closeTriggerProps,
  ...rest
}: ToasterProps) => (
  <ArkToaster toaster={toaster} {...rest}>
    {(toast) => (
      <ToastRoot {...rootProps}>
        <ToastTitle {...titleProps}>{toast.title}</ToastTitle>

        <ToastDescription {...descriptionProps}>
          {toast.description}
        </ToastDescription>

        {actionTrigger && (
          <ToastActionTrigger asChild {...actionTriggerProps}>
            {actionTrigger}
          </ToastActionTrigger>
        )}

        {closeTrigger && (
          <ToastCloseTrigger asChild {...closeTriggerProps}>
            {closeTrigger}
          </ToastCloseTrigger>
        )}
      </ToastRoot>
    )}
  </ArkToaster>
);
