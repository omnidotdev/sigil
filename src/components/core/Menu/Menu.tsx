import { Menu as ArkMenu } from "@ark-ui/react/menu";

import { menu } from "generated/panda/recipes";
import { createStyleContext, getContextualChildren } from "lib/util";

import type { ComponentProps, ReactNode } from "react";

import type {} from "@zag-js/menu";
import type {} from "@zag-js/rect-utils";

const { withProvider, withContext } = createStyleContext(menu);

export const MenuRoot = withProvider(ArkMenu.Root, "root");
export interface MenuRootProps extends ComponentProps<typeof MenuRoot> {}

export const MenuArrow = withContext(ArkMenu.Arrow, "arrow");
export interface MenuArrowProps extends ComponentProps<typeof MenuArrow> {}

export const MenuArrowTip = withContext(ArkMenu.ArrowTip, "arrowTip");
export interface MenuArrowTipProps
  extends ComponentProps<typeof MenuArrowTip> {}

export const MenuContent = withContext(ArkMenu.Content, "content");
export interface MenuContentProps extends ComponentProps<typeof MenuContent> {}

export const MenuContextTrigger = withContext(
  ArkMenu.ContextTrigger,
  "contextTrigger",
);
export interface MenuContextTriggerProps
  extends ComponentProps<typeof MenuContextTrigger> {}

export const MenuItem = withContext(ArkMenu.Item, "item");
export interface MenuItemProps extends ComponentProps<typeof MenuItem> {}

export const MenuItemGroup = withContext(ArkMenu.ItemGroup, "itemGroup");
export interface MenuItemGroupProps
  extends ComponentProps<typeof MenuItemGroup> {}

export const MenuItemGroupLabel = withContext(
  ArkMenu.ItemGroupLabel,
  "itemGroupLabel",
);
export interface MenuItemGroupLabelProps
  extends ComponentProps<typeof MenuItemGroupLabel> {}

export const MenuOptionItem = withContext(ArkMenu.OptionItem, "optionItem");
export interface MenuOptionItemProps
  extends ComponentProps<typeof MenuOptionItem> {}

export const MenuPositioner = withContext(ArkMenu.Positioner, "positioner");
export interface MenuPositionerProps
  extends ComponentProps<typeof MenuPositioner> {}

export const MenuSeparator = withContext(ArkMenu.Separator, "separator");
export interface MenuSeparatorProps
  extends ComponentProps<typeof MenuSeparator> {}

export const MenuTrigger = withContext(ArkMenu.Trigger, "trigger");
export interface MenuTriggerProps extends ComponentProps<typeof MenuTrigger> {}

export const MenuTriggerItem = withContext(ArkMenu.TriggerItem, "triggerItem");
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
    {(ctx) => (
      <>
        {trigger && <MenuTrigger asChild>{trigger}</MenuTrigger>}

        <MenuPositioner>
          <MenuContent>{getContextualChildren({ ctx, children })}</MenuContent>
        </MenuPositioner>
      </>
    )}
  </MenuRoot>
);

export default Menu;
