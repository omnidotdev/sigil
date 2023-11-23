import { Portal } from "@ark-ui/react";
import { Menu as ArkMenu } from "@ark-ui/react/menu";

import { styled } from "generated/panda/jsx";
import { menu, type MenuVariantProps } from "generated/panda/recipes";
import { createStyleContext, getContextualChildren } from "lib/util";

import type { MenuProps as ArkMenuProps } from "@ark-ui/react/menu";
import type { ReactNode } from "react";

// https://github.com/microsoft/TypeScript/issues/47663
import type {} from "@zag-js/menu";
import type {} from "@zag-js/rect-utils";

const { withProvider, withContext } = createStyleContext(menu);

export interface MenuProps extends ArkMenuProps, MenuVariantProps {
  trigger?: ReactNode;
}

// TODO ..., "root"
export const MenuRoot = withProvider(styled(ArkMenu.Root));

export const MenuArrow = withContext(styled(ArkMenu.Arrow), "arrow");

export const MenuArrowTip = withContext(styled(ArkMenu.ArrowTip), "arrowTip");

export const MenuContent = withContext(styled(ArkMenu.Content), "content");

export const MenuContextTrigger = withContext(
  styled(ArkMenu.ContextTrigger),
  "contextTrigger",
);

export const MenuItem = withContext(styled(ArkMenu.Item), "item");

export const MenuItemGroup = withContext(
  styled(ArkMenu.ItemGroup),
  "itemGroup",
);

export const MenuItemGroupLabel = withContext(
  styled(ArkMenu.ItemGroupLabel),
  "itemGroupLabel",
);

export const MenuOptionItem = withContext(
  styled(ArkMenu.OptionItem),
  "optionItem",
);

export const MenuPositioner = withContext(
  styled(ArkMenu.Positioner),
  "positioner",
);

export const MenuSeparator = withContext(
  styled(ArkMenu.Separator),
  "separator",
);

export const MenuTrigger = withContext(styled(ArkMenu.Trigger), "trigger");

export const MenuTriggerItem = withContext(
  styled(ArkMenu.TriggerItem),
  "triggerItem",
);

/**
 * Menu.
 */
const Menu = ({ trigger, children, ...rest }: MenuProps) => (
  <MenuRoot {...rest}>
    {(ctx) => (
      <>
        {trigger && <MenuTrigger asChild>{trigger}</MenuTrigger>}

        <Portal>
          <MenuPositioner>
            <MenuContent>
              {getContextualChildren({ ctx, children })}
            </MenuContent>
          </MenuPositioner>
        </Portal>
      </>
    )}
  </MenuRoot>
);

export default Menu;
