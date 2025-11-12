import { ark } from "@ark-ui/react";

import { styled } from "generated/panda/jsx";
import { icon } from "generated/panda/recipes";

import type { ComponentProps } from "generated/panda/types";
import type { ElementType } from "react";

export interface IconProps extends ComponentProps<typeof StyledIcon> {
  /** Source. */
  src?: ElementType;
}

const StyledIcon = styled(ark.svg, icon);

/**
 * Icon.
 */
export const Icon = ({
  src,
  asChild: _asChild,
  children,
  ...rest
}: IconProps) => {
  if (!src) {
    return (
      <StyledIcon {...rest} asChild>
        {children}
      </StyledIcon>
    );
  }

  return <StyledIcon {...rest} as={src} />;
};
