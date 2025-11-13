import { styled } from "generated/panda/jsx";
import { icon } from "generated/panda/recipes";

import type { ComponentProps } from "generated/panda/types";
import type { ElementType } from "react";

export interface IconProps extends ComponentProps<typeof StyledIcon> {
  /** Source. */
  src: ElementType;
}

const StyledIcon = styled("svg", icon);

/**
 * Icon.
 */
export const Icon = ({ src, ...rest }: IconProps) => (
  <StyledIcon {...rest} as={src} />
);
