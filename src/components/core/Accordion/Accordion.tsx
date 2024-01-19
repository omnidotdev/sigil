import { Accordion as ArkAccordion } from "@ark-ui/react/accordion";
import { FiChevronDown } from "react-icons/fi";

import { styled } from "generated/panda/jsx";
import { accordion } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { AccordionItemProps as ArkAccordionItemProps } from "@ark-ui/react/accordion";
// https://github.com/microsoft/TypeScript/issues/47663
import type {} from "@zag-js/accordion";
import type { ComponentProps, ReactNode } from "react";

const { withProvider, withContext } = createStyleContext(accordion);

export const AccordionRoot = withProvider(styled(ArkAccordion.Root), "root");
export interface AccordionRootProps
  extends ComponentProps<typeof AccordionRoot> {}

export const AccordionItem = withContext(styled(ArkAccordion.Item), "item");
export interface AccordionItemProps
  extends ComponentProps<typeof AccordionItem> {}

export const AccordionItemContent = withContext(
  styled(ArkAccordion.ItemContent),
  "itemContent",
);
export interface AccordionItemContentProps
  extends ComponentProps<typeof AccordionItemContent> {}

export const AccordionItemIndicator = withContext(
  styled(ArkAccordion.ItemIndicator),
  "itemIndicator",
);
export interface AccordionItemIndicatorProps
  extends ComponentProps<typeof AccordionItemIndicator> {}

export const AccordionItemTrigger = withContext(
  styled(ArkAccordion.ItemTrigger),
  "itemTrigger",
);
export interface AccordionItemTriggerProps
  extends ComponentProps<typeof AccordionItemTrigger> {}

interface AccordionIconProps {
  isOpen: boolean;
}

export interface AccordionProps extends AccordionRootProps {
  items: (Omit<ArkAccordionItemProps, "title" | "value"> & {
    /** Title of item. */
    title: ReactNode;
    /** Content to display when item is open. */
    body: ReactNode;
    /** Whether item is disabled. */
    isDisabled?: boolean;
    // TODO enable support for below prop extensions
    /** Item trigger props. */
    // triggerProps?: ArkAccordionItemContentProps;
    /** Item icon props. */
    // iconProps?: AccordionIconProps;
    /** Item content props. */
    // contentProps?: ArkAccordionItemTriggerProps;
  })[];
}

/**
 * Accordion icon intended to be used to indicate whether an accordion item is open or closed.
 */
const AccordionIcon = ({ isOpen }: AccordionIconProps) => {
  const iconStyles = {
    transform: isOpen ? "rotate(-180deg)" : undefined,
    transition: "transform 0.2s",
    transformOrigin: "center",
  };

  // TODO allow custom icon overrides (make sure animation still works well)
  return <FiChevronDown style={iconStyles} />;
};

/**
 * Accordion used to display interactive tabs that can be opened and closed to show/hide nested content.
 */
const Accordion = ({ items, ...rest }: AccordionProps) => (
  <AccordionRoot multiple {...rest}>
    {items.map(({ title, body, isDisabled, ...rest }) => (
      <AccordionItem
        key={title!.toString()}
        value={title!.toString()}
        disabled={isDisabled}
        {...rest}
      >
        {({ isOpen }) => (
          <>
            <AccordionItemTrigger>
              {title}
              <AccordionIcon isOpen={isOpen} />
            </AccordionItemTrigger>

            <AccordionItemContent>
              {/* NB: div wrapper enforces body content to collapse properly if, for example, a string is passed */}
              {/* TODO remove wrapper, see https://github.com/cschroeter/park-ui/issues/92#event-10971243692 */}
              <div>{body}</div>
            </AccordionItemContent>
          </>
        )}
      </AccordionItem>
    ))}
  </AccordionRoot>
);

export default Accordion;
