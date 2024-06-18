import { Menu as ArkMenu } from "@ark-ui/react/menu";

import { styled } from "generated/panda/jsx";
import { menu } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { ComponentProps, ReactNode } from "react";

const { withProvider, withContext } = createStyleContext(menu);

export const MenuRoot = withProvider(styled(ArkMenu.Root), "root");
export interface MenuRootProps extends ComponentProps<typeof MenuRoot> {}

export const MenuArrow = withContext(styled(ArkMenu.Arrow), "arrow");
export interface MenuArrowProps extends ComponentProps<typeof MenuArrow> {}

export const MenuArrowTip = withContext(styled(ArkMenu.ArrowTip), "arrowTip");
export interface MenuArrowTipProps
  extends ComponentProps<typeof MenuArrowTip> {}

export const MenuContent = withContext(styled(ArkMenu.Content), "content");
export interface MenuContentProps extends ComponentProps<typeof MenuContent> {}

export const MenuContextTrigger = withContext(
  styled(ArkMenu.ContextTrigger),
  "contextTrigger",
);
export interface MenuContextTriggerProps
  extends ComponentProps<typeof MenuContextTrigger> {}

export const MenuIndicator = withContext(
  styled(ArkMenu.Indicator),
  "indicator",
);
export interface MenuIndicatorProps
  extends ComponentProps<typeof MenuIndicator> {}

export const MenuCheckboxItem = withContext(
  styled(ArkMenu.CheckboxItem),
  "item",
);
export interface MenuCheckboxItemProps
  extends ComponentProps<typeof MenuCheckboxItem> {}

export const MenuRadioItemGroup = withContext(
  styled(ArkMenu.RadioItemGroup),
  "itemGroup",
);
export interface MenuRadioItemGroupProps
  extends ComponentProps<typeof MenuRadioItemGroup> {}

export const MenuRadioItem = withContext(styled(ArkMenu.RadioItem), "item");
export interface MenuRadioItemProps
  extends ComponentProps<typeof MenuRadioItem> {}

export const ItemIndicator = withContext(
  styled(ArkMenu.ItemIndicator),
  "itemIndicator",
);
export interface ItemIndicatorProps
  extends ComponentProps<typeof ItemIndicator> {}

export const MenuItem = withContext(styled(ArkMenu.Item), "item");
export interface MenuItemProps extends ComponentProps<typeof MenuItem> {}

export const ItemText = withContext(styled(ArkMenu.ItemText), "itemText");

export const MenuItemGroup = withContext(
  styled(ArkMenu.ItemGroup),
  "itemGroup",
);
export interface MenuItemGroupProps
  extends ComponentProps<typeof MenuItemGroup> {}

export const MenuItemGroupLabel = withContext(
  styled(ArkMenu.ItemGroupLabel),
  "itemGroupLabel",
);
export interface MenuItemGroupLabelProps
  extends ComponentProps<typeof MenuItemGroupLabel> {}

export const MenuPositioner = withContext(
  styled(ArkMenu.Positioner),
  "positioner",
);
export interface MenuPositionerProps
  extends ComponentProps<typeof MenuPositioner> {}

export const MenuSeparator = withContext(
  styled(ArkMenu.Separator),
  "separator",
);
export interface MenuSeparatorProps
  extends ComponentProps<typeof MenuSeparator> {}

export const MenuTrigger = withContext(styled(ArkMenu.Trigger), "trigger");
export interface MenuTriggerProps extends ComponentProps<typeof MenuTrigger> {}

export const MenuTriggerItem = withContext(
  styled(ArkMenu.TriggerItem),
  "triggerItem",
);
export interface MenuTriggerItemProps
  extends ComponentProps<typeof MenuTriggerItem> {}

export interface MenuProps extends MenuRootProps {
  trigger?: ReactNode;
}

/**
 * Menu.
 */
const Menu = ({ trigger, children, ...rest }: MenuProps) => (
  <MenuRoot {...rest}>
    {trigger && <MenuTrigger asChild>{trigger}</MenuTrigger>}

    <MenuPositioner>
      <MenuContent>{children}</MenuContent>
    </MenuPositioner>
  </MenuRoot>
);

export default Menu;
