import { PinInput as ArkPINInput } from "@ark-ui/react/pin-input";

import { Input } from "components/core/Input/Input";
import { styled } from "generated/panda/jsx";
import { pinInput } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { PinInputVariantProps } from "generated/panda/recipes";
import type { ColorPalette } from "generated/panda/tokens";
import type { AssignJSXStyleProps } from "lib/types";
import type { ReactNode } from "react";

const { withProvider, withContext } = createStyleContext(pinInput);

export const PINInputRoot = withProvider(styled(ArkPINInput.Root), "root");
export interface PINInputRootProps
  extends Omit<AssignJSXStyleProps<ArkPINInput.RootProps>, "mask">,
    PinInputVariantProps {}

export const PINInputControl = withContext(
  styled(ArkPINInput.Control),
  "control",
);
export interface PINInputControlProps
  extends AssignJSXStyleProps<ArkPINInput.ControlProps> {}

export const PINInputInput = withContext(styled(ArkPINInput.Input), "input");
export interface PINInputInputProps
  extends AssignJSXStyleProps<ArkPINInput.InputProps> {}

export const PINInputLabel = withContext(styled(ArkPINInput.Label), "label");
export interface PINInputLabelProps
  extends AssignJSXStyleProps<ArkPINInput.LabelProps> {}

export const PINInputHiddenInput = ArkPINInput.HiddenInput;
export interface PINInputHiddenInputProps
  extends AssignJSXStyleProps<ArkPINInput.HiddenInputProps> {}

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
  /** Hidden input props. */
  hiddenInputProps?: PINInputHiddenInputProps;
}

// TODO rename to something more generic

/**
 * Personal identification number (PIN) code input. Also useful for e.g. verification codes. Includes auto-focus transfer and masking options.
 */
export const PINInput = ({
  colorPalette,
  label,
  length = 4,
  controlProps,
  inputProps,
  hiddenInputProps,
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

      <PINInputHiddenInput {...hiddenInputProps} />
    </PINInputRoot>
  );
};
