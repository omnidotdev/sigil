import { NumberInput as ArkNumberInput } from "@ark-ui/react/number-input";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";

import { styled } from "generated/panda/jsx";
import {
  numberInput,
  type NumberInputVariantProps,
} from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { NumberInputProps as ArkNumberInputProps } from "@ark-ui/react/number-input";

const { withProvider, withContext } = createStyleContext(numberInput);

export interface NumberInputProps
  extends ArkNumberInputProps,
    NumberInputVariantProps {
  label: string;
}

export const NumberInputRoot = withProvider(
  styled(ArkNumberInput.Root),
  "root",
);

export const NumberInputControl = withContext(
  styled(ArkNumberInput.Control),
  "control",
);

export const NumberInputDecrementTrigger = withContext(
  styled(ArkNumberInput.DecrementTrigger),
  "decrementTrigger",
);

export const NumberInputInput = withContext(
  styled(ArkNumberInput.Input),
  "input",
);

export const NumberInputIncrementTrigger = withContext(
  styled(ArkNumberInput.IncrementTrigger),
  "incrementTrigger",
);

export const NumberInputLabel = withContext(
  styled(ArkNumberInput.Label),
  "label",
);

// ?
export const NumberInputScrubber = withContext(
  styled(ArkNumberInput.Scrubber),
  "scrubber",
);

/**
 * Number input.
 */
const NumberInput = ({ label, ...rest }: NumberInputProps) => (
  <NumberInputRoot width="2xs" {...rest}>
    {/* enable scrubbing via the Pointer Lock API (https://developer.mozilla.org/en-US/docs/Web/API/Pointer_Lock_API) */}
    <NumberInputScrubber />

    <NumberInputLabel>{label}</NumberInputLabel>

    <NumberInputControl>
      <NumberInputInput />

      <NumberInputIncrementTrigger>
        <FiChevronUp />
      </NumberInputIncrementTrigger>

      <NumberInputDecrementTrigger>
        <FiChevronDown />
      </NumberInputDecrementTrigger>
    </NumberInputControl>
  </NumberInputRoot>
);

export default NumberInput;
