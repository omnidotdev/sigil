import { ark } from "@ark-ui/react";
import { BiErrorAlt } from "react-icons/bi";
import { FiCheck, FiInfo } from "react-icons/fi";
import { IoWarningOutline } from "react-icons/io5";
import { match } from "ts-pattern";

import { styled } from "generated/panda/jsx";
import { alert } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { AlertVariantProps } from "generated/panda/recipes";
import type { ComponentProps } from "generated/panda/types";
import type { AssignJSXStyleProps } from "lib/types";
import type { ReactNode } from "react";

const { withProvider, withContext } = createStyleContext(alert);

export const AlertRoot = withProvider(styled(ark.div), "root");
export interface AlertRootProps
  extends AssignJSXStyleProps<ComponentProps<typeof AlertRoot>>,
    AlertVariantProps {}

export const AlertContent = withContext(styled(ark.div), "content");
export interface AlertContentProps
  extends AssignJSXStyleProps<ComponentProps<typeof AlertContent>> {}

export const AlertDescription = withContext(styled(ark.div), "description");
export interface AlertDescriptionProps
  extends AssignJSXStyleProps<ComponentProps<typeof AlertDescription>> {}

export const AlertIcon = withContext(styled(ark.svg), "icon");
export interface AlertIconProps
  extends AssignJSXStyleProps<ComponentProps<typeof AlertIcon>> {}

export const AlertTitle = withContext(styled(ark.h5), "title");
export interface AlertTitleProps
  extends AssignJSXStyleProps<ComponentProps<typeof AlertTitle>> {}

export interface AlertProps extends AlertRootProps {
  description?: ReactNode;
  icon?: ReactNode;
  contentProps?: AlertContentProps;
  titleProps?: AlertTitleProps;
  descriptionProps?: AlertDescriptionProps;
}

// TODO default titles for each variant

/**
 * Alert. Useful for displaying important messages to the user, such as warnings, errors, or contextual information.
 */
export const Alert = ({
  title,
  description,
  icon,
  children,
  contentProps,
  titleProps,
  descriptionProps,
  ...rest
}: AlertProps) => {
  const _icon = match(rest.variant)
    .with("info", () => <FiInfo />)
    .with("warning", () => <IoWarningOutline />)
    .with("error", () => <BiErrorAlt />)
    .with("success", () => <FiCheck />)
    .otherwise(() => null);

  return (
    <AlertRoot {...rest}>
      {(icon || _icon) && <AlertIcon asChild>{icon || _icon}</AlertIcon>}

      <AlertContent {...contentProps}>
        {title && <AlertTitle {...titleProps}>{title}</AlertTitle>}

        {description && (
          <AlertDescription {...descriptionProps}>
            {description}
          </AlertDescription>
        )}

        {children}
      </AlertContent>
    </AlertRoot>
  );
};
