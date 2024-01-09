import { styled } from "generated/panda/jsx";
import { icon, type IconVariantProps } from "generated/panda/recipes";

import type { HTMLStyledProps } from "generated/panda/jsx";
import type { ElementType } from "react";

export interface IconProps
  extends IconVariantProps,
    HTMLStyledProps<ElementType> {
  src: ElementType;
}

/**
 * Icon.
 */
const Icon = ({ src, ...rest }: IconProps) => {
  const Component = styled(src, icon);

  return <Component {...rest} />;
};

export default Icon;
