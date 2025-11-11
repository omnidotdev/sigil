import { styled } from "generated/panda/jsx";
import { icon } from "generated/panda/recipes";

import type { IconVariantProps } from "generated/panda/recipes";
import type { ComponentProps, ElementType } from "react";

export interface IconProps extends IconVariantProps, ComponentProps<"span"> {
  /** Source. */
  src: ElementType;
}

const StyledIcon = styled("span", icon);

/**
 * Icon.
 */
export const Icon = ({ src, ...rest }: IconProps) => (
  <StyledIcon {...rest} as={src} />
);
