import { styled } from "generated/panda/jsx";
import { icon } from "generated/panda/recipes";

import type { IconVariantProps } from "generated/panda/recipes";
import type { ComponentProps, JsxStyleProps } from "generated/panda/types";
import type { ElementType } from "react";

export interface IconProps
  extends IconVariantProps,
    Omit<ComponentProps<"span">, keyof JsxStyleProps>,
    JsxStyleProps {
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
