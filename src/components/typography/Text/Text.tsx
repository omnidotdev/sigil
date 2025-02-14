import { styled } from "generated/panda/jsx";
import { text, type TextVariantProps } from "generated/panda/recipes";

import type { HTMLStyledProps, StyledComponent } from "generated/panda/jsx";

export type TagVariants =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "span";

export type TextProps = {
  /** HTML text tag to render, affecting semantic markup. */
  as?: TagVariants;
} & TextVariantProps &
  HTMLStyledProps<TagVariants>;

/**
 * Text.
 */
export const Text = ({ as = "p", ...rest }: TextProps) => {
  const StyledText = styled(as, text) as StyledComponent<TagVariants>;

  return <StyledText {...rest} />;
};
