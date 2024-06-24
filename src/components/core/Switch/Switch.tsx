import { Switch as ArkSwitch } from "@ark-ui/react/switch";

import { styled } from "generated/panda/jsx";
import { switchRecipe } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { Assign, JsxStyleProps } from "generated/panda/types";

const { withProvider, withContext } = createStyleContext(switchRecipe);

export const SwitchRoot = withProvider(styled(ArkSwitch.Root), "root");
export interface SwitchRootProps
  extends Assign<JsxStyleProps, ArkSwitch.RootProps> {}

export const SwitchControl = withContext(styled(ArkSwitch.Control), "control");

export interface SwitchControlProps
  extends Assign<JsxStyleProps, ArkSwitch.ControlProps> {}

export const SwitchLabel = withContext(styled(ArkSwitch.Label), "label");
export interface SwitchLabelProps
  extends Assign<JsxStyleProps, ArkSwitch.LabelProps> {}

export const SwitchThumb = withContext(styled(ArkSwitch.Thumb), "thumb");
export interface SwitchThumbProps
  extends Assign<JsxStyleProps, ArkSwitch.ThumbProps> {}

export const SwitchHiddenInput = ArkSwitch.HiddenInput;
export interface SwitchHiddenInputProps
  extends Assign<JsxStyleProps, ArkSwitch.HiddenInputProps> {}

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
