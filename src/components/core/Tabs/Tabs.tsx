import { Tabs as ArkTabs } from "@ark-ui/react/tabs";

import { tabs } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { ComponentProps, ReactNode } from "react";

import type {} from "@zag-js/tabs";

const { withProvider, withContext } = createStyleContext(tabs);

export const TabsRoot = withProvider(ArkTabs.Root, "root");
export interface TabsRootProps extends ComponentProps<typeof TabsRoot> {}

export const TabList = withContext(ArkTabs.List, "list");
export interface TabListProps extends ComponentProps<typeof TabList> {}

export const TabTrigger = withContext(ArkTabs.Trigger, "trigger");
export interface TabTriggerProps extends ComponentProps<typeof TabTrigger> {}

export const TabIndicator = withContext(ArkTabs.Indicator, "indicator");
export interface TabIndicatorProps
  extends ComponentProps<typeof TabIndicator> {}

export const TabContent = withContext(ArkTabs.Content, "content");
export interface TabContentProps extends ComponentProps<typeof TabContent> {}

export interface TabsProps extends TabsRootProps {
  tabs: {
    id: string;
    label: string;
    isDisabled?: boolean;
    content: ReactNode;
  }[];
}

/**
 * Tabs.
 */
const Tabs = ({ tabs, ...rest }: TabsProps) => (
  <TabsRoot defaultValue={tabs[0].id} {...rest}>
    <TabList>
      {tabs.map(({ id, label, isDisabled }) => (
        <TabTrigger key={id} value={id} disabled={isDisabled}>
          {label}
        </TabTrigger>
      ))}
      <TabIndicator />
    </TabList>

    {tabs.map(({ id, content }) => (
      <TabContent key={id} value={id}>
        {content}
      </TabContent>
    ))}
  </TabsRoot>
);

export default Tabs;
