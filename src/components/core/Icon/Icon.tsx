import { styled } from "generated/panda/jsx";
import { type IconVariantProps, icon } from "generated/panda/recipes";

import type { ComponentProps, ElementType } from "react";

export interface IconProps
  extends IconVariantProps,
    ComponentProps<ElementType> {
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
