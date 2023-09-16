import { styled } from "generated/panda/jsx";
import { icon, type IconVariantProps } from "generated/panda/recipes";

import type { HTMLStyledProps } from "generated/panda/jsx";
import type { ElementType } from "react";

export interface IconProps
  extends IconVariantProps,
    HTMLStyledProps<ElementType> {
  as: ElementType;
}

/**
 * Icon.
 */
const Icon = ({ as, ...rest }: IconProps) => {
  const Component = styled(as, icon);

  return <Component {...rest} />;
};

export default Icon;
