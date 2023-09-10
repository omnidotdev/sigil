import { Switch as ArkSwitch } from "@ark-ui/react/switch";

import { styled } from "generated/panda/jsx";
import {
  switchRecipe,
  type SwitchRecipeVariantProps,
} from "generated/panda/recipes";
import { createStyleContext, getContextualChildren } from "lib/util";

import type { SwitchProps as ArkSwitchProps } from "@ark-ui/react/switch";

const { withProvider, withContext } = createStyleContext(switchRecipe);

export interface SwitchProps extends ArkSwitchProps, SwitchRecipeVariantProps {}

export const SwitchRoot = withProvider(styled(ArkSwitch.Root), "root");

export const SwitchControl = withContext(styled(ArkSwitch.Control), "control");

export const SwitchLabel = withContext(styled(ArkSwitch.Label), "label");

export const SwitchThumb = withContext(styled(ArkSwitch.Thumb), "thumb");

/**
 * Toggle switch.
 */
const Switch = ({ children, ...rest }: SwitchProps) => (
  <SwitchRoot {...rest}>
    {(ctx) => (
      <>
        <SwitchControl>
          <SwitchThumb />
        </SwitchControl>

        <SwitchLabel>{getContextualChildren({ ctx, children })}</SwitchLabel>
      </>
    )}
  </SwitchRoot>
);

export default Switch;
