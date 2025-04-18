import { NumberInput as ArkNumberInput } from "@ark-ui/react/number-input";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";

import { styled } from "generated/panda/jsx";
import { numberInput } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { NumberInputVariantProps } from "generated/panda/recipes";
import type { AssignJSXStyleProps } from "lib/types";
import type { ReactNode } from "react";

const { withProvider, withContext } = createStyleContext(numberInput);

export const NumberInputRoot = withProvider(
  styled(ArkNumberInput.Root),
  "root",
);
export interface NumberInputRootProps
  extends AssignJSXStyleProps<ArkNumberInput.RootProps>,
    NumberInputVariantProps {}

export const NumberInputControl = withContext(
  styled(ArkNumberInput.Control),
  "control",
);
export interface NumberInputControlProps
  extends AssignJSXStyleProps<ArkNumberInput.ControlProps> {}

export const NumberInputDecrementTrigger = withContext(
  styled(ArkNumberInput.DecrementTrigger),
  "decrementTrigger",
);
export interface NumberInputDecrementTriggerProps
  extends AssignJSXStyleProps<ArkNumberInput.DecrementTriggerProps> {}

export const NumberInputInput = withContext(
  styled(ArkNumberInput.Input),
  "input",
);
export interface NumberInputInputProps
  extends AssignJSXStyleProps<ArkNumberInput.InputProps> {}

export const NumberInputIncrementTrigger = withContext(
  styled(ArkNumberInput.IncrementTrigger),
  "incrementTrigger",
);
export interface NumberInputIncrementTriggerProps
  extends AssignJSXStyleProps<ArkNumberInput.IncrementTriggerProps> {}

export const NumberInputLabel = withContext(
  styled(ArkNumberInput.Label),
  "label",
);
export interface NumberInputLabelProps
  extends AssignJSXStyleProps<ArkNumberInput.LabelProps> {}

export const NumberInputScrubber = withContext(
  styled(ArkNumberInput.Scrubber),
  "scrubber",
);
export interface NumberInputScrubberProps
  extends AssignJSXStyleProps<ArkNumberInput.ScrubberProps> {}

// TODO use in prebuilt `NumberInput` component
export const NumberInputValueText = withContext(
  styled(ArkNumberInput.ValueText),
  "valueText",
);
export interface NumberInputValueTextProps
  extends AssignJSXStyleProps<ArkNumberInput.ValueTextProps> {}

export interface NumberInputProps extends NumberInputRootProps {
  label?: ReactNode;
  scrubberProps?: NumberInputScrubberProps;
  labelProps?: NumberInputLabelProps;
  controlProps?: NumberInputControlProps;
  inputProps?: NumberInputInputProps;
  incrementTriggerProps?: NumberInputIncrementTriggerProps;
  decrementTriggerProps?: NumberInputDecrementTriggerProps;
}

/**
 * Number input.
 */
export const NumberInput = ({
  label,
  scrubberProps,
  labelProps,
  controlProps,
  inputProps,
  incrementTriggerProps,
  decrementTriggerProps,
  ...rest
}: NumberInputProps) => (
  <NumberInputRoot {...rest}>
    {/* enable scrubbing via the Pointer Lock API (https://developer.mozilla.org/en-US/docs/Web/API/Pointer_Lock_API) */}
    <NumberInputScrubber {...scrubberProps} />

    {label && <NumberInputLabel {...labelProps}>{label}</NumberInputLabel>}

    <NumberInputControl {...controlProps}>
      <NumberInputInput {...inputProps} />

      <NumberInputIncrementTrigger {...incrementTriggerProps}>
        <FiChevronUp />
      </NumberInputIncrementTrigger>

      <NumberInputDecrementTrigger {...decrementTriggerProps}>
        <FiChevronDown />
      </NumberInputDecrementTrigger>
    </NumberInputControl>
  </NumberInputRoot>
);
