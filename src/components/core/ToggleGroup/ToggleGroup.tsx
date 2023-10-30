import { ToggleGroup as ArkToggleGroup } from "@ark-ui/react/toggle-group";

import { Stack, styled } from "generated/panda/jsx";
import { toggleGroup } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { ToggleGroupProps as ArkToggleGroupProps } from "@ark-ui/react/toggle-group";
import type { ToggleGroupVariantProps } from "generated/panda/recipes";

const { withProvider, withContext } = createStyleContext(toggleGroup);

export interface ToggleGroupProps
  extends ArkToggleGroupProps,
    ToggleGroupVariantProps {}

export const ToggleGroupRoot = withProvider(
  styled(ArkToggleGroup.Root),
  "root",
);

export const Toggle = withContext(styled(ArkToggleGroup.Toggle), "toggle");

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
