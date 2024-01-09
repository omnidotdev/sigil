import { styled, type HTMLStyledProps } from "generated/panda/jsx";

type TagVariants = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";

export type TextProps = {
  /** HTML text tag to render, affecting semantic markup. */
  as?: TagVariants;
} & HTMLStyledProps<TagVariants>;

/**
 * Text.
 */
const Text = ({ as = "p", ...rest }: TextProps) => {
  const Component = styled(as);

  return <Component {...rest} />;
};

export default Text;
