import { Collapsible as ArkCollapsible } from "@ark-ui/react/collapsible";

import { styled } from "generated/panda/jsx";
import { collapsible } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { ComponentProps, ReactNode } from "react";

const { withProvider, withContext } = createStyleContext(collapsible);

export const CollapsibleRoot = withProvider(
  styled(ArkCollapsible.Root),
  "root",
);
export interface CollapsibleRootProps
  extends ComponentProps<typeof CollapsibleRoot> {}

export const CollapsibleContent = withContext(
  styled(ArkCollapsible.Content),
  "content",
);
export interface CollapsibleContentProps
  extends ComponentProps<typeof CollapsibleContent> {}

export const CollapsibleTrigger = withContext(
  styled(ArkCollapsible.Trigger),
  "trigger",
);
export interface CollapsibleTriggerProps
  extends ComponentProps<typeof CollapsibleTrigger> {}

export interface CollapsibleProps extends CollapsibleRootProps {
  /** Trigger node, such as a button, used to toggle the collapsible content visibility. */
  trigger?: ReactNode;
  /** Content container props. */
  contentProps?: CollapsibleContentProps;
}

/**
 * Interactive component which can be expanded or collapsed.
 */
const Collapsible = ({
  trigger,
  children,
  contentProps,
  ...props
}: CollapsibleProps) => (
  <CollapsibleRoot {...props}>
    {trigger && <CollapsibleTrigger asChild>{trigger}</CollapsibleTrigger>}

    <CollapsibleContent {...contentProps}>{children}</CollapsibleContent>
  </CollapsibleRoot>
);

export default Collapsible;
