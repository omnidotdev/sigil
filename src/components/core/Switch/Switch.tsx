import { Switch as ArkSwitch } from "@ark-ui/react/switch";

import { styled } from "generated/panda/jsx";
import { switchRecipe } from "generated/panda/recipes";
import { createStyleContext, getContextualChildren } from "lib/util";

import type { ComponentProps } from "react";

const { withProvider, withContext } = createStyleContext(switchRecipe);

export const SwitchRoot = withProvider(styled(ArkSwitch.Root), "root");
export interface SwitchRootProps extends ComponentProps<typeof SwitchRoot> {}

export const SwitchControl = withContext(styled(ArkSwitch.Control), "control");

export interface SwitchControlProps
  extends ComponentProps<typeof SwitchControl> {}

export const SwitchLabel = withContext(styled(ArkSwitch.Label), "label");
export interface SwitchLabelProps extends ComponentProps<typeof SwitchLabel> {}

export const SwitchThumb = withContext(styled(ArkSwitch.Thumb), "thumb");
export interface SwitchThumbProps extends ComponentProps<typeof SwitchThumb> {}

export interface SwitchProps extends SwitchRootProps {}

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
