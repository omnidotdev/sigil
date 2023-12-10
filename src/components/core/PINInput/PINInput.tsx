import { PinInput as ArkPINInput } from "@ark-ui/react/pin-input";

import Input from "components/core/Input/Input";
import { styled } from "generated/panda/jsx";
import { pinInput } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { HTMLStyledProps } from "generated/panda/jsx";

const { withProvider, withContext } = createStyleContext(pinInput);

export const PINInputRoot = withProvider(styled(ArkPINInput.Root), "root");
export interface PINInputRootProps
  extends HTMLStyledProps<typeof PINInputRoot> {}

export const PINInputControl = withContext(
  styled(ArkPINInput.Control),
  "control",
);
export interface PINInputControlProps
  extends HTMLStyledProps<typeof PINInputControl> {}

export const PINInputInput = withContext(styled(ArkPINInput.Input), "input");
export interface PINInputInputProps
  extends HTMLStyledProps<typeof PINInputInput> {}

export const PINInputLabel = withContext(styled(ArkPINInput.Label), "label");
export interface PINInputLabelProps
  extends HTMLStyledProps<typeof PINInputLabel> {}

export interface PINInputProps extends PINInputRootProps {
  /** Input label. */
  label?: string;
}

/**
 * Personal identification number (PIN) code input.
 */
const PINInput = ({ label, ...rest }: Omit<PINInputProps, "mask">) => (
  <PINInputRoot placeholder="0" {...rest}>
    {label && <PINInputLabel>{label}</PINInputLabel>}

    <PINInputControl>
      {[0, 1, 2, 3].map((id) => (
        <PINInputInput key={id} index={id} asChild>
          <Input size="lg" width={0} textAlign="center" />
        </PINInputInput>
      ))}
    </PINInputControl>
  </PINInputRoot>
);

export default PINInput;
