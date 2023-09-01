import * as Ark from "@ark-ui/react/accordion";
import { FiChevronDown } from "react-icons/fi";

import { styled } from "generated/panda/jsx";
import { accordion, type AccordionVariantProps } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

// https://github.com/microsoft/TypeScript/issues/47663
import type {} from "@zag-js/accordion";

const { withProvider, withContext } = createStyleContext(accordion);

export interface AccordionProps
  extends Ark.AccordionProps,
    AccordionVariantProps {
  items: { title: string; body: string }[];
}

export const AccordionRoot = withProvider(styled(Ark.Accordion.Root), "root");

export const AccordionContent = withContext(
  styled(Ark.Accordion.Content),
  "content",
);

export const AccordionItem = withContext(styled(Ark.Accordion.Item), "item");

export const AccordionTrigger = withContext(
  styled(Ark.Accordion.Trigger),
  "trigger",
);

const AccordionIcon = (props: { isOpen: boolean }) => {
  const iconStyles = {
    transform: props.isOpen ? "rotate(-180deg)" : undefined,
    transition: "transform 0.2s",
    transformOrigin: "center",
  };

  return <FiChevronDown style={iconStyles} />;
};

/**
 * Accordion used to display interactive tabs that can be opened and closed to show/hide nested content.
 */
const Accordion = ({ items, ...rest }: AccordionProps) => (
  <AccordionRoot multiple {...rest}>
    {items.map(({ title, body }) => (
      <AccordionItem key={title} value={title}>
        {({ isOpen }) => (
          <>
            <AccordionTrigger>
              {title}
              <AccordionIcon isOpen={isOpen} />
            </AccordionTrigger>

            <AccordionContent>
              {/* NB: div wrapper enforces body content to collapse properly if, for example, a string is passed */}
              <div>{body}</div>
            </AccordionContent>
          </>
        )}
      </AccordionItem>
    ))}
  </AccordionRoot>
);

export default Accordion;
