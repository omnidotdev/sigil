import { createContext, forwardRef, useContext } from "react";

import type { ComponentType } from "react";

type AnyProps = Record<string, unknown>;
type AnyRecipe = {
  (props?: AnyProps): Record<string, string>;
  splitVariantProps: (props: AnyProps) => any;
};

/**
 * Create style context. Based on https://panda-css.com/docs/concepts/slot-recipes#styling-jsx-compound-components
 */
const createStyleContext = <R extends AnyRecipe>(recipe: R) => {
  const StyleContext = createContext<Record<string, string> | null>(null);

  const withProvider = <T extends object>(
    Component: ComponentType<T>,
    part?: string,
  ) => {
    const Comp = forwardRef((props: T & Parameters<R>[0], ref) => {
      const [variantProps, rest] = recipe.splitVariantProps(props);
      const styles = recipe(variantProps);
      return (
        <StyleContext.Provider value={styles}>
          <Component ref={ref} className={styles?.[part ?? ""]} {...rest} />
        </StyleContext.Provider>
      );
    });
    Comp.displayName = Component.displayName || Component.name;
    return Comp;
  };

  const withContext = <T extends object>(
    Component: ComponentType<T>,
    part?: string,
  ) => {
    if (!part) return Component;

    const _Component = forwardRef((props: T, ref) => {
      const styles = useContext(StyleContext);

      return (
        <Component ref={ref} className={styles?.[part ?? ""]} {...props} />
      );
    });

    _Component.displayName = Component.displayName || Component.name;

    return _Component;
  };

  return { withProvider, withContext };
};

export default createStyleContext;
