import { Tabs as ArkTabs } from "@ark-ui/react/tabs";

import { styled } from "generated/panda/jsx";
import { tabs, type TabsVariantProps } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { TabsProps as ArkTabsProps } from "@ark-ui/react/tabs";
import type { ReactNode } from "react";

// https://github.com/microsoft/TypeScript/issues/47663
import type {} from "@zag-js/tabs";

const { withProvider, withContext } = createStyleContext(tabs);

export interface TabsProps extends ArkTabsProps, TabsVariantProps {
  tabs: {
    id: string;
    label: string;
    isDisabled?: boolean;
    content: ReactNode;
  }[];
}

export const TabsRoot = withProvider(styled(ArkTabs.Root), "root");

export const TabList = withContext(styled(ArkTabs.List), "list");

export const TabTrigger = withContext(styled(ArkTabs.Trigger), "trigger");

export const TabIndicator = withContext(styled(ArkTabs.Indicator), "indicator");

export const TabContent = withContext(styled(ArkTabs.Content), "content");

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
