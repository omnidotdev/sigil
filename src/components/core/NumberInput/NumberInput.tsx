import { NumberInput as ArkNumberInput } from "@ark-ui/react/number-input";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";

import { styled } from "generated/panda/jsx";
import { numberInput } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { ComponentProps, ReactNode } from "react";

const { withProvider, withContext } = createStyleContext(numberInput);

export const NumberInputRoot = withProvider(
  styled(ArkNumberInput.Root),
  "root",
);
export interface NumberInputRootProps
  extends ComponentProps<typeof NumberInputRoot> {}

export const NumberInputControl = withContext(
  styled(ArkNumberInput.Control),
  "control",
);
export interface NumberInputControlProps
  extends ComponentProps<typeof NumberInputControl> {}

export const NumberInputDecrementTrigger = withContext(
  styled(ArkNumberInput.DecrementTrigger),
  "decrementTrigger",
);
export interface NumberInputDecrementTriggerProps
  extends ComponentProps<typeof NumberInputDecrementTrigger> {}

export const NumberInputInput = withContext(
  styled(ArkNumberInput.Input),
  "input",
);
export interface NumberInputInputProps
  extends ComponentProps<typeof NumberInputInput> {}

export const NumberInputIncrementTrigger = withContext(
  styled(ArkNumberInput.IncrementTrigger),
  "incrementTrigger",
);
export interface NumberInputIncrementTriggerProps
  extends ComponentProps<typeof NumberInputIncrementTrigger> {}

export const NumberInputLabel = withContext(
  styled(ArkNumberInput.Label),
  "label",
);
export interface NumberInputLabelProps
  extends ComponentProps<typeof NumberInputLabel> {}

export const NumberInputScrubber = withContext(
  styled(ArkNumberInput.Scrubber),
  "scrubber",
);
export interface NumberInputScrubberProps
  extends ComponentProps<typeof NumberInputScrubber> {}

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
const NumberInput = ({
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

export default NumberInput;
