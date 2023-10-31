import { ark } from "@ark-ui/react";
import { BiErrorAlt } from "react-icons/bi/index.js";
import { FiCheck, FiInfo } from "react-icons/fi/index.js";
import { IoWarningOutline } from "react-icons/io5/index.js";
import { match } from "ts-pattern";

import { styled } from "generated/panda/jsx";
import { alert, type AlertVariantProps } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { HTMLArkProps } from "@ark-ui/react";
import type { ComponentProps, ReactNode } from "react";

const { withProvider, withContext } = createStyleContext(alert);

export const AlertRoot = withProvider(styled(ark.div), "root");

export const AlertContent = withContext(styled(ark.div), "content");

export const AlertDescription = withContext(styled(ark.p), "description");

export const AlertIcon = withContext(styled(ark.svg), "icon");

export const AlertTitle = withContext(styled(ark.h5), "title");

export interface AlertProps extends AlertVariantProps, HTMLArkProps<"div"> {
  description: ReactNode;
  icon?: ReactNode;
  contentProps?: ComponentProps<typeof AlertContent>;
  titleProps?: ComponentProps<typeof AlertTitle>;
  descriptionProps?: ComponentProps<typeof AlertDescription>;
}

/**
 * Alert. Useful for displaying important messages to the user, such as warnings, errors, or contextual information.
 */
const Alert = ({
  title,
  description,
  icon,
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
        <AlertTitle {...titleProps}>{title}</AlertTitle>

        <AlertDescription {...descriptionProps}>{description}</AlertDescription>
      </AlertContent>
    </AlertRoot>
  );
};

export default Alert;
