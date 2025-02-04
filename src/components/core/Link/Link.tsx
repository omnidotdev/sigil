import { ark } from "@ark-ui/react";

import { styled } from "generated/panda/jsx";
import { link } from "generated/panda/recipes";

import type { LinkVariantProps } from "generated/panda/recipes";
import type { ComponentProps } from "generated/panda/types";
import type { AssignJSXStyleProps } from "lib/types";

const LinkRoot = styled(ark.a, link);
export interface LinkRootProps
  extends AssignJSXStyleProps<ComponentProps<typeof LinkRoot>>,
    LinkVariantProps {}

export interface LinkProps extends LinkRootProps {
  isExternal?: boolean;
}

/**
 * External link props.
 */
const externalLinkProps = {
  target: "_blank",
  rel: "noopener noreferrer",
};

/**
 * Hyperlink.
 */
export const Link = ({ isExternal = false, ...rest }: LinkProps) => (
  <LinkRoot {...(isExternal && externalLinkProps)} {...rest} />
);
