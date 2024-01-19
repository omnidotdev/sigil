import { ark } from "@ark-ui/react";

import { styled } from "generated/panda/jsx";
import { link } from "generated/panda/recipes";

import type { ComponentProps } from "react";

const LinkRoot = styled(ark.a, link);
export interface LinkRootProps extends ComponentProps<typeof LinkRoot> {}

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
const Link = ({ isExternal = false, ...rest }: LinkProps) => (
  <LinkRoot {...(isExternal && externalLinkProps)} {...rest} />
);

export default Link;
