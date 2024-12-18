import type {
  Assign,
  JsxStyleProps as JSXStyleProps,
} from "generated/panda/types";

/**
 * Assign Panda JSX style props to component props.
 * @template P Component props.
 */
type AssignJSXStyleProps<P> = Assign<JSXStyleProps, P>;

export default AssignJSXStyleProps;
