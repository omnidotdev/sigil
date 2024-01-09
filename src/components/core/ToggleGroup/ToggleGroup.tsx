import { ToggleGroup as ArkToggleGroup } from "@ark-ui/react/toggle-group";

import { Stack, styled } from "generated/panda/jsx";
import { toggleGroup } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { HTMLStyledProps } from "generated/panda/jsx";

const { withProvider, withContext } = createStyleContext(toggleGroup);

export const ToggleGroupRoot = withProvider(
  styled(ArkToggleGroup.Root),
  "root",
);
export interface ToggleGroupRootProps
  extends HTMLStyledProps<typeof ToggleGroupRoot> {}

export const ToggleGroupItem = withContext(styled(ArkToggleGroup.Item), "item");
export interface ToggleGroupItemProps
  extends HTMLStyledProps<typeof ToggleGroupItem> {}

export interface ToggleGroupProps extends ToggleGroupRootProps {}

/**
 * Toggle group.
 */
const ToggleGroup = ({ children, ...rest }: ToggleGroupProps) => (
  <Stack
    direction={rest.orientation === "horizontal" ? "row" : "column"}
    gap={3}
    bgColor="background.default"
    borderRadius="md"
    borderWidth={rest.variant === "ghost" ? "1px" : 0}
    p={rest.variant === "ghost" ? 1 : 0}
  >
    <ToggleGroupRoot {...rest}>{children}</ToggleGroupRoot>
  </Stack>
);

export default ToggleGroup;
