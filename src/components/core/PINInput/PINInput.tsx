import * as Ark from "@ark-ui/react/pin-input";

import Input from "components/core/Input/Input";
import { styled } from "generated/panda/jsx";
import { pinInput, type PinInputVariantProps } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

const { withProvider, withContext } = createStyleContext(pinInput);

export interface PINInputProps extends Ark.PinInputProps, PinInputVariantProps {
  /** Input label. */
  label?: string;
}

export const PINInputRoot = withProvider(styled(Ark.PinInput.Root), "root");

export const PINInputControl = withContext(
  styled(Ark.PinInput.Control),
  "control",
);

export const PINInputInput = withContext(styled(Ark.PinInput.Input), "input");

export const PINInputLabel = withContext(styled(Ark.PinInput.Label), "label");

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
