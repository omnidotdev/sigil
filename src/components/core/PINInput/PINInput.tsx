import { PinInput as ArkPINInput } from "@ark-ui/react/pin-input";

import Input from "components/core/Input/Input";
import { styled } from "generated/panda/jsx";
import { pinInput } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { ColorPalette } from "generated/panda/tokens";
import type { Assign, JsxStyleProps } from "generated/panda/types";
import type { ReactNode } from "react";

const { withProvider, withContext } = createStyleContext(pinInput);

export const PINInputRoot = withProvider(styled(ArkPINInput.Root), "root");
export interface PINInputRootProps
  extends Omit<Assign<JsxStyleProps, ArkPINInput.RootProps>, "mask"> {}

export const PINInputControl = withContext(
  styled(ArkPINInput.Control),
  "control",
);
export interface PINInputControlProps
  extends Assign<JsxStyleProps, ArkPINInput.ControlProps> {}

export const PINInputInput = withContext(styled(ArkPINInput.Input), "input");
export interface PINInputInputProps
  extends Assign<JsxStyleProps, ArkPINInput.InputProps> {}

export const PINInputLabel = withContext(styled(ArkPINInput.Label), "label");
export interface PINInputLabelProps
  extends Assign<JsxStyleProps, ArkPINInput.LabelProps> {}

export interface PINInputProps extends PINInputRootProps {
  colorPalette?: ColorPalette;
  /** Input label. */
  label?: ReactNode;
  /** Number of input slots to render. */
  length?: number;
  /** Control props. */
  controlProps?: PINInputControlProps;
  /** Input props. */
  inputProps?: PINInputInputProps;
}

// TODO rename to something more generic

/**
 * Personal identification number (PIN) code input. Also useful for e.g. verification codes. Includes auto-focus transfer and masking options.
 */
const PINInput = ({
  colorPalette,
  label,
  length = 4,
  controlProps,
  inputProps,
  ...rest
}: PINInputProps) => {
  // @ts-ignore TODO fix, works functionally
  const [{ size }] = pinInput.splitVariantProps(rest);

  return (
    // NB: empty placeholder used to cancel out default placeholder
    <PINInputRoot placeholder="" {...rest}>
      {label && <PINInputLabel>{label}</PINInputLabel>}

      <PINInputControl {...controlProps}>
        {Array.from({ length }, (_, idx) => idx).map((id) => (
          <PINInputInput
            asChild
            key={id}
            index={id}
            colorPalette={colorPalette}
            {...inputProps}
          >
            {/* forward root size prop to input itself */}
            <Input size={size} />
          </PINInputInput>
        ))}
      </PINInputControl>
    </PINInputRoot>
  );
};

export default PINInput;
