import * as Ark from "@ark-ui/react/number-input";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";

import { styled } from "generated/panda/jsx";
import {
  numberInput,
  type NumberInputVariantProps,
} from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

const { withProvider, withContext } = createStyleContext(numberInput);

export interface NumberInputProps
  extends Ark.NumberInputProps,
    NumberInputVariantProps {
  label: string;
}

export const NumberInputRoot = withProvider(
  styled(Ark.NumberInput.Root),
  "root",
);

export const NumberInputControl = withContext(
  styled(Ark.NumberInput.Control),
  "control",
);

export const NumberInputDecrementTrigger = withContext(
  styled(Ark.NumberInput.DecrementTrigger),
  "decrementTrigger",
);

export const NumberInputInput = withContext(
  styled(Ark.NumberInput.Input),
  "input",
);

export const NumberInputIncrementTrigger = withContext(
  styled(Ark.NumberInput.IncrementTrigger),
  "incrementTrigger",
);

export const NumberInputLabel = withContext(
  styled(Ark.NumberInput.Label),
  "label",
);

// ?
export const NumberInputScrubber = withContext(
  styled(Ark.NumberInput.Scrubber),
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
