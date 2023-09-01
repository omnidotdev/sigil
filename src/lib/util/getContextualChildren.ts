import type { ReactNode } from "react";

interface Params<C> {
  /** Parent component context. */
  ctx: C;
  /** Contextual children. */
  children: ((ctx: C) => ReactNode) | ReactNode;
}

/**
 * Get contextual children. Forward nested context/state if utilized, otherwise directly return children.
 */
const getContextualChildren = <C>({ children, ctx }: Params<C>) =>
  typeof children === "function" ? children(ctx) : children;

export default getContextualChildren;
