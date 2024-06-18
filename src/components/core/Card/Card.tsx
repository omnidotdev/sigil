import { ark } from "@ark-ui/react";

import { styled } from "generated/panda/jsx";
import { card } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type {
  ComponentProps,
  ComponentPropsWithoutRef,
  ReactNode,
} from "react";

const { withProvider, withContext } = createStyleContext(card);

export const CardRoot = withProvider(styled(ark.div), "root");
export interface CardRootProps
  extends Omit<ComponentProps<typeof CardRoot>, "title"> {}

export const CardHeader = withContext(styled(ark.div), "header");
export interface CardHeaderProps extends ComponentProps<typeof CardHeader> {}

export const CardTitle = withContext(styled(ark.h3), "title");
export interface CardTitleProps extends ComponentProps<typeof CardTitle> {}

export const CardDescription = withContext(styled(ark.div), "description");
export interface CardDescriptionProps
  extends ComponentProps<typeof CardDescription> {}

export const CardBody = withContext(styled(ark.div), "body");
export interface CardBodyProps extends ComponentProps<typeof CardBody> {}

export const CardFooter = withContext(styled(ark.div), "footer");
export interface CardFooterProps extends ComponentProps<typeof CardFooter> {}

export interface CardProps extends CardRootProps {
  title?: ReactNode;
  /** Card description, displayed underneath header. */
  description?: ReactNode;
  /** Footer render. */
  footer?: ReactNode;
  /** Card header container props. */
  headerProps?: ComponentPropsWithoutRef<typeof CardHeader>;
  /** Card body container props. */
  bodyProps?: ComponentPropsWithoutRef<typeof CardBody>;
  /** Card footer container props. */
  footerProps?: ComponentPropsWithoutRef<typeof CardFooter>;
}

/**
 * Card.
 */
const Card = ({
  title,
  description,
  children,
  footer,
  headerProps,
  bodyProps,
  footerProps,
  ...rest
}: CardProps) => (
  <CardRoot {...rest}>
    <CardHeader {...headerProps}>
      {title && <CardTitle>{title}</CardTitle>}

      {description && <CardDescription>{description}</CardDescription>}
    </CardHeader>

    <CardBody {...bodyProps}>{children}</CardBody>

    {footer && <CardFooter {...footerProps}>{footer}</CardFooter>}
  </CardRoot>
);

export default Card;
