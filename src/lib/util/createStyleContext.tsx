import {
  createContext,
  forwardRef,
  useContext,
  type ComponentProps,
  type ElementType,
} from "react";

interface Props extends Record<string, unknown> {}

interface Recipe {
  (props?: Props): Record<string, string>;
  splitVariantProps: (props: Props) => any;
}

type Slot<R extends Recipe> = keyof ReturnType<R>;

type SlotRecipe<R extends Recipe> = Record<Slot<R>, string>;

type VariantProps<R extends Recipe> = Parameters<R>[0];

type Assign<T, U> = Omit<T, keyof U> & U;

export interface StyledContextProvider<
  T extends ElementType,
  R extends Recipe,
> {
  (props: ComponentProps<T> & VariantProps<R>): JSX.Element;
  <P extends object>(
    props: Assign<ComponentProps<T>, P> & VariantProps<R>,
  ): JSX.Element;
}

const cx = (...args: (string | undefined)[]) => args.filter(Boolean).join(" ");

/**
 * Create style context. Based on https://panda-css.com/docs/concepts/slot-recipes#styling-jsx-compound-components
 */
const createStyleContext = <R extends Recipe>(recipe: R) => {
  const StyleContext = createContext<SlotRecipe<R> | null>(null);

  const withProvider = <T extends ElementType>(
    Component: T,
    slot?: Slot<R>,
  ) => {
    const Comp = forwardRef(
      (props: ComponentProps<T> & VariantProps<R>, ref) => {
        const [variantProps, localProps] = recipe.splitVariantProps(props);

        const slotRecipe = recipe(variantProps) as SlotRecipe<R>;

        return (
          <StyleContext.Provider value={slotRecipe}>
            <Component
              ref={ref}
              {...localProps}
              className={cx(slotRecipe[slot ?? ""], localProps.className)}
            />
          </StyleContext.Provider>
        );
      },
    );

    // @ts-expect-error `JSX.IntrinsicElements` do not have a `displayName`, but function and class components do
    Comp.displayName = Component.displayName || Component.name || "Component";

    return Comp as unknown as StyledContextProvider<T, R>;
  };

  const withContext = <T extends ElementType>(Component: T, slot?: Slot<R>) => {
    const Comp = forwardRef((props: ComponentProps<T>, ref) => {
      const slotRecipe = useContext(StyleContext);

      return (
        // @ts-ignore complex type mapping
        <Component
          ref={ref}
          {...props}
          className={cx(slotRecipe?.[slot ?? ""], props.className)}
        />
      );
    });

    // @ts-expect-error `JSX.IntrinsicElements` do not have a `displayName`, but function and class components do
    Comp.displayName = Component.displayName || Component.name || "Component";

    return Comp as unknown as T;
  };

  return { withProvider, withContext };
};

export default createStyleContext;
