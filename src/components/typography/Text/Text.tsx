import { styled, type HTMLStyledProps } from "generated/panda/jsx";

import type { PropsWithChildren } from "react";

type TagVariants = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";

// TODO convert to `interface`
export type TextProps = PropsWithChildren<{
  /** HTML text tag to render. */
  as?: TagVariants;
}> &
  HTMLStyledProps<TagVariants>;

/**
 * Text.
 */
const Text = ({ as = "p", ...rest }: TextProps) => {
  const Component = styled(as);

  return <Component {...rest} />;
};

export default Text;
