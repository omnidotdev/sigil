import { ToggleGroup as ArkToggleGroup } from "@ark-ui/react/toggle-group";

import { styled } from "generated/panda/jsx";
import { toggleGroup } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { ComponentProps } from "react";

const { withProvider, withContext } = createStyleContext(toggleGroup);

export const ToggleGroupRoot = withProvider(
  styled(ArkToggleGroup.Root),
  "root",
);
export interface ToggleGroupRootProps
  extends ComponentProps<typeof ToggleGroupRoot> {}

export const ToggleGroupItem = withContext(styled(ArkToggleGroup.Item), "item");
export interface ToggleGroupItemProps
  extends ComponentProps<typeof ToggleGroupItem> {}

export interface ToggleGroupProps extends ToggleGroupRootProps {}

/**
 * Toggle group.
 */
const ToggleGroup = ({ children, ...rest }: ToggleGroupProps) => (
  <ToggleGroupRoot {...rest}>{children}</ToggleGroupRoot>
);

export default ToggleGroup;
