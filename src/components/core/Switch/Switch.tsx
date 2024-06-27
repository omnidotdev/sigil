import { Switch as ArkSwitch } from "@ark-ui/react/switch";

import { styled } from "generated/panda/jsx";
import { switchRecipe } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { SwitchRecipeVariantProps } from "generated/panda/recipes";
import type { AssignJSXStyleProps } from "lib/types";

const { withProvider, withContext } = createStyleContext(switchRecipe);

export const SwitchRoot = withProvider(styled(ArkSwitch.Root), "root");
export interface SwitchRootProps
  extends AssignJSXStyleProps<ArkSwitch.RootProps>,
    SwitchRecipeVariantProps {}

export const SwitchControl = withContext(styled(ArkSwitch.Control), "control");

export interface SwitchControlProps
  extends AssignJSXStyleProps<ArkSwitch.ControlProps> {}

export const SwitchLabel = withContext(styled(ArkSwitch.Label), "label");
export interface SwitchLabelProps
  extends AssignJSXStyleProps<ArkSwitch.LabelProps> {}

export const SwitchThumb = withContext(styled(ArkSwitch.Thumb), "thumb");
export interface SwitchThumbProps
  extends AssignJSXStyleProps<ArkSwitch.ThumbProps> {}

export const SwitchHiddenInput = ArkSwitch.HiddenInput;
export interface SwitchHiddenInputProps
  extends AssignJSXStyleProps<ArkSwitch.HiddenInputProps> {}

export interface SwitchProps extends SwitchRootProps {}

/**
 * Toggle switch.
 */
const Switch = ({ label, ...rest }: SwitchProps) => (
  <SwitchRoot {...rest}>
    <SwitchControl>
      <SwitchThumb />
    </SwitchControl>

    {label && <SwitchLabel>{label}</SwitchLabel>}

    <SwitchHiddenInput />
  </SwitchRoot>
);

export default Switch;
