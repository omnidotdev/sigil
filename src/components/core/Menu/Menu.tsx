import { Menu as ArkMenu } from "@ark-ui/react/menu";

import { styled } from "generated/panda/jsx";
import { menu } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { Assign, JsxStyleProps } from "generated/panda/types";
import type { ReactNode } from "react";

const { withProvider, withContext } = createStyleContext(menu);

export const MenuRoot = withProvider(styled(ArkMenu.Root), "root");
export interface MenuRootProps
  extends Assign<JsxStyleProps, ArkMenu.RootProps> {}

export const MenuArrow = withContext(styled(ArkMenu.Arrow), "arrow");
export interface MenuArrowProps
  extends Assign<JsxStyleProps, ArkMenu.ArrowProps> {}

export const MenuArrowTip = withContext(styled(ArkMenu.ArrowTip), "arrowTip");
export interface MenuArrowTipProps
  extends Assign<JsxStyleProps, ArkMenu.ArrowTipProps> {}

export const MenuContent = withContext(styled(ArkMenu.Content), "content");
export interface MenuContentProps
  extends Assign<JsxStyleProps, ArkMenu.ContentProps> {}

export const MenuContextTrigger = withContext(
  styled(ArkMenu.ContextTrigger),
  "contextTrigger",
);
export interface MenuContextTriggerProps
  extends Assign<JsxStyleProps, ArkMenu.ContextTriggerProps> {}

export const MenuIndicator = withContext(
  styled(ArkMenu.Indicator),
  "indicator",
);
export interface MenuIndicatorProps
  extends Assign<JsxStyleProps, ArkMenu.IndicatorProps> {}

export const MenuCheckboxItem = withContext(
  styled(ArkMenu.CheckboxItem),
  "item",
);
export interface MenuCheckboxItemProps
  extends Assign<JsxStyleProps, ArkMenu.CheckboxItemProps> {}

export const MenuRadioItemGroup = withContext(
  styled(ArkMenu.RadioItemGroup),
  "itemGroup",
);
export interface MenuRadioItemGroupProps
  extends Assign<JsxStyleProps, ArkMenu.RadioItemGroupProps> {}

export const MenuRadioItem = withContext(styled(ArkMenu.RadioItem), "item");
export interface MenuRadioItemProps
  extends Assign<JsxStyleProps, ArkMenu.RadioItemProps> {}

export const ItemIndicator = withContext(
  styled(ArkMenu.ItemIndicator),
  "itemIndicator",
);
export interface ItemIndicatorProps
  extends Assign<JsxStyleProps, ArkMenu.ItemIndicatorProps> {}

export const MenuItem = withContext(styled(ArkMenu.Item), "item");
export interface MenuItemProps
  extends Assign<JsxStyleProps, ArkMenu.ItemProps> {}

export const ItemText = withContext(styled(ArkMenu.ItemText), "itemText");

export const MenuItemGroup = withContext(
  styled(ArkMenu.ItemGroup),
  "itemGroup",
);
export interface MenuItemGroupProps
  extends Assign<JsxStyleProps, ArkMenu.ItemGroupProps> {}

export const MenuItemGroupLabel = withContext(
  styled(ArkMenu.ItemGroupLabel),
  "itemGroupLabel",
);
export interface MenuItemGroupLabelProps
  extends Assign<JsxStyleProps, ArkMenu.ItemGroupLabelProps> {}

export const MenuPositioner = withContext(
  styled(ArkMenu.Positioner),
  "positioner",
);
export interface MenuPositionerProps
  extends Assign<JsxStyleProps, ArkMenu.PositionerProps> {}

export const MenuSeparator = withContext(
  styled(ArkMenu.Separator),
  "separator",
);
export interface MenuSeparatorProps
  extends Assign<JsxStyleProps, ArkMenu.SeparatorProps> {}

export const MenuTrigger = withContext(styled(ArkMenu.Trigger), "trigger");
export interface MenuTriggerProps
  extends Assign<JsxStyleProps, ArkMenu.TriggerProps> {}

export const MenuTriggerItem = withContext(
  styled(ArkMenu.TriggerItem),
  "triggerItem",
);
export interface MenuTriggerItemProps
  extends Assign<JsxStyleProps, ArkMenu.TriggerItemProps> {}

export interface MenuProps extends MenuRootProps {
  trigger?: ReactNode;
  triggerProps?: MenuTriggerProps;
  positionerProps?: MenuPositionerProps;
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
