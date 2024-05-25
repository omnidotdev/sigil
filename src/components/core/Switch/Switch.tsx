import { Switch as ArkSwitch } from "@ark-ui/react/switch";

import { switchRecipe } from "generated/panda/recipes";
import { createStyleContext, getContextualChildren } from "lib/util";

import type { ComponentProps } from "react";

const { withProvider, withContext } = createStyleContext(switchRecipe);

export const SwitchRoot = withProvider(ArkSwitch.Root, "root");
export interface SwitchRootProps extends ComponentProps<typeof SwitchRoot> {}

export const SwitchControl = withContext(ArkSwitch.Control, "control");

export interface SwitchControlProps
  extends ComponentProps<typeof SwitchControl> {}

export const SwitchLabel = withContext(ArkSwitch.Label, "label");
export interface SwitchLabelProps extends ComponentProps<typeof SwitchLabel> {}

export const SwitchThumb = withContext(ArkSwitch.Thumb, "thumb");
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
