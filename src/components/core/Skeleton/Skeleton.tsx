import { ark } from "@ark-ui/react";

import { styled } from "generated/panda/jsx";
import { skeleton } from "generated/panda/recipes";

import type { ComponentProps, ReactNode } from "react";

const StyledSkeleton = styled(ark.div, skeleton);

export interface SkeletonProps extends ComponentProps<typeof StyledSkeleton> {
  /**
   * Whether the skeleton has been loaded.
   * @default false
   */
  isLoaded?: boolean;
  /** Children to wrap. */
  children?: ReactNode;
}

/**
 * Loading skeleton placeholder, useful for indicating that content is being loaded. Can be used as a standalone placeholder, or as a wrapper around content.
 */
const Skeleton = ({ isLoaded, ...rest }: SkeletonProps) => {
  if (isLoaded) return <styled.div animation="fade-in" {...rest} />;

  return <StyledSkeleton {...rest} />;
};

export default Skeleton;
