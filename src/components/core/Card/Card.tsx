import { ark } from "@ark-ui/react";

import { styled } from "generated/panda/jsx";
import { card, type CardVariantProps } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { HTMLArkProps } from "@ark-ui/react";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

const { withProvider, withContext } = createStyleContext(card);

export interface CardProps extends CardVariantProps, HTMLArkProps<"div"> {
  /** Card description, displayed underneath header. */
  description?: string;
  /** Footer content. */
  footerContent?: ReactNode;
  /** Card header container props. */
  headerProps?: ComponentPropsWithoutRef<typeof CardHeader>;
  /** Card content (body) container props. */
  contentProps?: ComponentPropsWithoutRef<typeof CardContent>;
  /** Card footer container props. */
  footerProps?: ComponentPropsWithoutRef<typeof CardFooter>;
}

export const CardRoot = withProvider(styled(ark.div), "root");

export const CardHeader = withContext(styled(ark.div), "header");

export const CardContent = withContext(styled(ark.div), "content");

export const CardFooter = withContext(styled(ark.div), "footer");

export const CardTitle = withContext(styled(ark.h3), "title");

export const CardDescription = withContext(styled(ark.p), "description");

/**
 * Card.
 */
const Card = ({
  title,
  description,
  children,
  footerContent,
  headerProps,
  contentProps,
  footerProps,
  ...rest
}: CardProps) => (
  <CardRoot {...rest}>
    <CardHeader {...headerProps}>
      {title && <CardTitle>{title}</CardTitle>}

      {description && <CardDescription>{description}</CardDescription>}
    </CardHeader>

    <CardContent {...contentProps}>{children}</CardContent>

    {footerContent && <CardFooter {...footerProps}>{footerContent}</CardFooter>}
  </CardRoot>
);

export default Card;
