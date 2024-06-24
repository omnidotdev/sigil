import { ToggleGroup as ArkToggleGroup } from "@ark-ui/react/toggle-group";

import { styled } from "generated/panda/jsx";
import { toggleGroup } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { Assign, JsxStyleProps } from "generated/panda/types";

const { withProvider, withContext } = createStyleContext(toggleGroup);

export const ToggleGroupRoot = withProvider(
  styled(ArkToggleGroup.Root),
  "root",
);
export interface ToggleGroupRootProps
  extends Assign<JsxStyleProps, ArkToggleGroup.RootProps> {}

export const ToggleGroupItem = withContext(styled(ArkToggleGroup.Item), "item");
export interface ToggleGroupItemProps
  extends Assign<JsxStyleProps, ArkToggleGroup.ItemProps> {}

export interface ToggleGroupProps extends ToggleGroupRootProps {}

/**
 * Toggle group.
 */
const ToggleGroup = ({ children, ...rest }: ToggleGroupProps) => (
  <ToggleGroupRoot {...rest}>{children}</ToggleGroupRoot>
);

export default ToggleGroup;
