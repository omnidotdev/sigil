import { Menu as ArkMenu } from "@ark-ui/react/menu";

import { styled } from "generated/panda/jsx";
import { menu } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { MenuVariantProps } from "generated/panda/recipes";
import type { AssignJSXStyleProps } from "lib/types";
import type { ReactNode } from "react";

const { withProvider, withContext } = createStyleContext(menu);

export const MenuRoot = withProvider(styled(ArkMenu.Root), "root");
export interface MenuRootProps
  extends AssignJSXStyleProps<ArkMenu.RootProps>,
    MenuVariantProps {}

export const MenuArrow = withContext(styled(ArkMenu.Arrow), "arrow");
export interface MenuArrowProps
  extends AssignJSXStyleProps<ArkMenu.ArrowProps> {}

export const MenuArrowTip = withContext(styled(ArkMenu.ArrowTip), "arrowTip");
export interface MenuArrowTipProps
  extends AssignJSXStyleProps<ArkMenu.ArrowTipProps> {}

export const MenuContent = withContext(styled(ArkMenu.Content), "content");
export interface MenuContentProps
  extends AssignJSXStyleProps<ArkMenu.ContentProps> {}

export const MenuContextTrigger = withContext(
  styled(ArkMenu.ContextTrigger),
  "contextTrigger",
);
export interface MenuContextTriggerProps
  extends AssignJSXStyleProps<ArkMenu.ContextTriggerProps> {}

export const MenuIndicator = withContext(
  styled(ArkMenu.Indicator),
  "indicator",
);
export interface MenuIndicatorProps
  extends AssignJSXStyleProps<ArkMenu.IndicatorProps> {}

export const MenuCheckboxItem = withContext(
  styled(ArkMenu.CheckboxItem),
  "item",
);
export interface MenuCheckboxItemProps
  extends AssignJSXStyleProps<ArkMenu.CheckboxItemProps> {}

export const MenuRadioItemGroup = withContext(
  styled(ArkMenu.RadioItemGroup),
  "itemGroup",
);
export interface MenuRadioItemGroupProps
  extends AssignJSXStyleProps<ArkMenu.RadioItemGroupProps> {}

export const MenuRadioItem = withContext(styled(ArkMenu.RadioItem), "item");
export interface MenuRadioItemProps
  extends AssignJSXStyleProps<ArkMenu.RadioItemProps> {}

export const ItemIndicator = withContext(
  styled(ArkMenu.ItemIndicator),
  "itemIndicator",
);
export interface ItemIndicatorProps
  extends AssignJSXStyleProps<ArkMenu.ItemIndicatorProps> {}

export const MenuItem = withContext(styled(ArkMenu.Item), "item");
export interface MenuItemProps extends AssignJSXStyleProps<ArkMenu.ItemProps> {}

export const ItemText = withContext(styled(ArkMenu.ItemText), "itemText");

export const MenuItemGroup = withContext(
  styled(ArkMenu.ItemGroup),
  "itemGroup",
);
export interface MenuItemGroupProps
  extends AssignJSXStyleProps<ArkMenu.ItemGroupProps> {}

export const MenuItemGroupLabel = withContext(
  styled(ArkMenu.ItemGroupLabel),
  "itemGroupLabel",
);
export interface MenuItemGroupLabelProps
  extends AssignJSXStyleProps<ArkMenu.ItemGroupLabelProps> {}

export const MenuPositioner = withContext(
  styled(ArkMenu.Positioner),
  "positioner",
);
export interface MenuPositionerProps
  extends AssignJSXStyleProps<ArkMenu.PositionerProps> {}

export const MenuSeparator = withContext(
  styled(ArkMenu.Separator),
  "separator",
);
export interface MenuSeparatorProps
  extends AssignJSXStyleProps<ArkMenu.SeparatorProps> {}

export const MenuTrigger = withContext(styled(ArkMenu.Trigger), "trigger");
export interface MenuTriggerProps
  extends AssignJSXStyleProps<ArkMenu.TriggerProps> {}

export const MenuTriggerItem = withContext(
  styled(ArkMenu.TriggerItem),
  "triggerItem",
);
export interface MenuTriggerItemProps
  extends AssignJSXStyleProps<ArkMenu.TriggerItemProps> {}

export interface MenuProps extends MenuRootProps {
  /** Trigger. */
  trigger?: ReactNode;
  /** Trigger props. */
  triggerProps?: MenuTriggerProps;
  /** Positioner props. */
  positionerProps?: MenuPositionerProps;
  /** Content props. */
  contentProps?: MenuContentProps;
}

/**
 * Menu.
 */
const Menu = ({
  trigger,
  children,
  triggerProps,
  positionerProps,
  contentProps,
  ...rest
}: MenuProps) => (
  <MenuRoot {...rest}>
    {trigger && (
      <MenuTrigger asChild {...triggerProps}>
        {trigger}
      </MenuTrigger>
    )}

    <MenuPositioner {...positionerProps}>
      <MenuContent {...contentProps}>{children}</MenuContent>
    </MenuPositioner>
  </MenuRoot>
);

export default Menu;
