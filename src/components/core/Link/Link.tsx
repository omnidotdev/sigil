import { ark } from "@ark-ui/react";

import { styled } from "generated/panda/jsx";
import { link } from "generated/panda/recipes";

import type { ComponentProps } from "react";

const ArkLink = styled(ark.a, link);

export interface LinkProps extends ComponentProps<typeof ArkLink> {
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
  <ArkLink {...(isExternal && externalLinkProps)} {...rest} />
);

export default Link;
