import { ark } from "@ark-ui/react";

import { styled } from "generated/panda/jsx";
import { card } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type {
  Assign,
  ComponentProps,
  JsxStyleProps,
} from "generated/panda/types";
import type { ReactNode } from "react";

const { withProvider, withContext } = createStyleContext(card);

export const CardRoot = withProvider(styled(ark.div), "root");
export interface CardRootProps
  extends Omit<
    Assign<JsxStyleProps, ComponentProps<typeof CardRoot>>,
    "title"
  > {}

export const CardHeader = withContext(styled(ark.div), "header");
export interface CardHeaderProps
  extends Assign<JsxStyleProps, ComponentProps<typeof CardHeader>> {}

export const CardTitle = withContext(styled(ark.h3), "title");
export interface CardTitleProps
  extends Assign<JsxStyleProps, ComponentProps<typeof CardTitle>> {}

export const CardDescription = withContext(styled(ark.div), "description");
export interface CardDescriptionProps
  extends Assign<JsxStyleProps, ComponentProps<typeof CardDescription>> {}

export const CardBody = withContext(styled(ark.div), "body");
export interface CardBodyProps
  extends Assign<JsxStyleProps, ComponentProps<typeof CardBody>> {}

export const CardFooter = withContext(styled(ark.div), "footer");
export interface CardFooterProps
  extends Assign<JsxStyleProps, ComponentProps<typeof CardFooter>> {}

export interface CardProps extends CardRootProps {
  title?: ReactNode;
  /** Card description, displayed underneath header. */
  description?: ReactNode;
  /** Footer render. */
  footer?: ReactNode;
  /** Card header container props. */
  headerProps?: CardHeaderProps;
  /** Card body container props. */
  bodyProps?: CardBodyProps;
  /** Card footer container props. */
  footerProps?: CardFooterProps;
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
