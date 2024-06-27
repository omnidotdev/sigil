import { Accordion as ArkAccordion } from "@ark-ui/react/accordion";
import { FiChevronDown } from "react-icons/fi";

import { styled } from "generated/panda/jsx";
import { accordion } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { AccordionVariantProps } from "generated/panda/recipes";
import type { AssignJSXStyleProps } from "lib/types";
import type { ReactNode } from "react";

const { withProvider, withContext } = createStyleContext(accordion);

export const AccordionRoot = withProvider(styled(ArkAccordion.Root), "root");
export interface AccordionRootProps
  extends AssignJSXStyleProps<ArkAccordion.RootProps>,
    AccordionVariantProps {}

export const AccordionItem = withContext(styled(ArkAccordion.Item), "item");
export interface AccordionItemProps
  extends AssignJSXStyleProps<ArkAccordion.ItemProps> {}

export const AccordionItemContent = withContext(
  styled(ArkAccordion.ItemContent),
  "itemContent",
);
export interface AccordionItemContentProps
  extends AssignJSXStyleProps<ArkAccordion.ItemContentProps> {}

export const AccordionItemIndicator = withContext(
  styled(ArkAccordion.ItemIndicator),
  "itemIndicator",
);
export interface AccordionItemIndicatorProps
  extends AssignJSXStyleProps<ArkAccordion.ItemIndicatorProps> {}

export const AccordionItemTrigger = withContext(
  styled(ArkAccordion.ItemTrigger),
  "itemTrigger",
);
export interface AccordionItemTriggerProps
  extends AssignJSXStyleProps<ArkAccordion.ItemTriggerProps> {}

export interface AccordionProps extends AccordionRootProps {
  items: (Omit<ArkAccordion.ItemProps, "title" | "value"> & {
    /** Title of item. */
    title: ReactNode;
    /** Content to display when item is open. */
    body: ReactNode;
    /** Whether item is disabled. */
    isDisabled?: boolean;
  })[];
  /** Item trigger props. */
  triggerProps?: AccordionItemTriggerProps;
  /** Item indicator props. */
  indicatorProps?: AccordionItemIndicatorProps;
  /** Item content props. */
  contentProps?: AccordionItemContentProps;
}

/**
 * Accordion used to display interactive tabs that can be opened and closed to show/hide nested content. By default, `multiple` is enabled, allowing multiple items to be open at once.
 */
const Accordion = ({
  items,
  triggerProps,
  indicatorProps,
  contentProps,
  ...rest
}: AccordionProps) => (
  <AccordionRoot multiple {...rest}>
    {items.map(({ title, body, isDisabled, ...rest }) => (
      <AccordionItem
        key={title!.toString()}
        value={title!.toString()}
        disabled={isDisabled}
        {...rest}
      >
        <>
          <AccordionItemTrigger {...triggerProps}>
            {title}

            {/* TODO allow custom icon overrides (make sure animation still works well) */}
            <AccordionItemIndicator {...indicatorProps}>
              <FiChevronDown />
            </AccordionItemIndicator>
          </AccordionItemTrigger>

          <AccordionItemContent {...contentProps}>{body}</AccordionItemContent>
        </>
      </AccordionItem>
    ))}
  </AccordionRoot>
);

export default Accordion;
