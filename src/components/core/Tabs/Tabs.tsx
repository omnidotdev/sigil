import { Tabs as ArkTabs } from "@ark-ui/react/tabs";

import { styled } from "generated/panda/jsx";
import { tabs } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { TabsVariantProps } from "generated/panda/recipes";
import type { AssignJSXStyleProps } from "lib/types";
import type { ReactNode } from "react";

const { withProvider, withContext } = createStyleContext(tabs);

export const TabsRoot = withProvider(styled(ArkTabs.Root), "root");
export interface TabsRootProps
  extends AssignJSXStyleProps<ArkTabs.RootProps>,
    TabsVariantProps {}

export const TabList = withContext(styled(ArkTabs.List), "list");
export interface TabListProps extends AssignJSXStyleProps<ArkTabs.ListProps> {}

export const TabTrigger = withContext(styled(ArkTabs.Trigger), "trigger");
export interface TabTriggerProps
  extends AssignJSXStyleProps<ArkTabs.TriggerProps> {}

export const TabIndicator = withContext(styled(ArkTabs.Indicator), "indicator");
export interface TabIndicatorProps
  extends AssignJSXStyleProps<ArkTabs.IndicatorProps> {}

export const TabContent = withContext(styled(ArkTabs.Content), "content");
export interface TabContentProps
  extends AssignJSXStyleProps<ArkTabs.ContentProps> {}

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
