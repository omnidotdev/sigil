import * as Ark from "@ark-ui/react/switch";

import { styled } from "generated/panda/jsx";
import {
  switchRecipe,
  type SwitchRecipeVariantProps,
} from "generated/panda/recipes";
import { createStyleContext, getContextualChildren } from "lib/util";

const { withProvider, withContext } = createStyleContext(switchRecipe);

export interface SwitchProps
  extends Ark.SwitchProps,
    SwitchRecipeVariantProps {}

export const SwitchRoot = withProvider(styled(Ark.Switch.Root), "root");

export const SwitchControl = withContext(styled(Ark.Switch.Control), "control");

export const SwitchLabel = withContext(styled(Ark.Switch.Label), "label");

export const SwitchThumb = withContext(styled(Ark.Switch.Thumb), "thumb");

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
