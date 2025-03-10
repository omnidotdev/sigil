import { ToggleGroup as ArkToggleGroup } from "@ark-ui/react/toggle-group";

import { styled } from "generated/panda/jsx";
import { toggleGroup } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { ToggleGroupVariantProps } from "generated/panda/recipes";
import type { AssignJSXStyleProps } from "lib/types";

const { withProvider, withContext } = createStyleContext(toggleGroup);

export const ToggleGroupRoot = withProvider(
  styled(ArkToggleGroup.Root),
  "root",
);
export interface ToggleGroupRootProps
  extends AssignJSXStyleProps<ArkToggleGroup.RootProps>,
    ToggleGroupVariantProps {}

export const ToggleGroupItem = withContext(styled(ArkToggleGroup.Item), "item");
export interface ToggleGroupItemProps
  extends AssignJSXStyleProps<ArkToggleGroup.ItemProps> {}

export interface ToggleGroupProps extends ToggleGroupRootProps {}

/**
 * Toggle group.
 */
export const ToggleGroup = ({ children, ...rest }: ToggleGroupProps) => (
  <ToggleGroupRoot {...rest}>{children}</ToggleGroupRoot>
);
