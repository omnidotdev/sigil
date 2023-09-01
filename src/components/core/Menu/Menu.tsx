import { Portal } from "@ark-ui/react";
import * as Ark from "@ark-ui/react/menu";

import { styled } from "generated/panda/jsx";
import { menu, type MenuVariantProps } from "generated/panda/recipes";
import { createStyleContext, getContextualChildren } from "lib/util";

import type { ReactNode } from "react";

// https://github.com/microsoft/TypeScript/issues/47663
import type {} from "@zag-js/menu";
import type {} from "@zag-js/rect-utils";

const { withProvider, withContext } = createStyleContext(menu);

export interface MenuProps extends Ark.MenuProps, MenuVariantProps {
  trigger: ReactNode;
}

export const MenuRoot = withProvider(styled(Ark.Menu.Root), "root");

export const MenuArrow = withContext(styled(Ark.Menu.Arrow), "arrow");

export const MenuArrowTip = withContext(styled(Ark.Menu.ArrowTip), "arrowTip");

export const MenuContent = withContext(styled(Ark.Menu.Content), "content");

export const MenuContextTrigger = withContext(
  styled(Ark.Menu.ContextTrigger),
  "contextTrigger",
);

export const MenuItem = withContext(styled(Ark.Menu.Item), "item");

export const MenuItemGroup = withContext(
  styled(Ark.Menu.ItemGroup),
  "itemGroup",
);

export const MenuItemGroupLabel = withContext(
  styled(Ark.Menu.ItemGroupLabel),
  "itemGroupLabel",
);

export const MenuOptionItem = withContext(
  styled(Ark.Menu.OptionItem),
  "optionItem",
);

export const MenuPositioner = withContext(
  styled(Ark.Menu.Positioner),
  "positioner",
);

export const MenuSeparator = withContext(
  styled(Ark.Menu.Separator),
  "separator",
);

export const MenuTrigger = withContext(styled(Ark.Menu.Trigger), "trigger");

export const MenuTriggerItem = withContext(
  styled(Ark.Menu.TriggerItem),
  "triggerItem",
);

/**
 * Menu.
 */
const Menu = ({ trigger, children, ...rest }: MenuProps) => (
  <MenuRoot {...rest}>
    {(ctx) => (
      <>
        <MenuTrigger>{trigger}</MenuTrigger>

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
