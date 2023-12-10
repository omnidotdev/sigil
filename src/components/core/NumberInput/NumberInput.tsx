import { NumberInput as ArkNumberInput } from "@ark-ui/react/number-input";
import { FiChevronUp, FiChevronDown } from "react-icons/fi/index.js";

import { styled } from "generated/panda/jsx";
import { numberInput } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { HTMLStyledProps } from "generated/panda/jsx";

const { withProvider, withContext } = createStyleContext(numberInput);

export const NumberInputRoot = withProvider(
  styled(ArkNumberInput.Root),
  "root",
);
export interface NumberInputRootProps
  extends HTMLStyledProps<typeof NumberInputRoot> {}

export const NumberInputControl = withContext(
  styled(ArkNumberInput.Control),
  "control",
);
export interface NumberInputControlProps
  extends HTMLStyledProps<typeof NumberInputControl> {}

export const NumberInputDecrementTrigger = withContext(
  styled(ArkNumberInput.DecrementTrigger),
  "decrementTrigger",
);
export interface NumberInputDecrementTriggerProps
  extends HTMLStyledProps<typeof NumberInputDecrementTrigger> {}

export const NumberInputInput = withContext(
  styled(ArkNumberInput.Input),
  "input",
);
export interface NumberInputInputProps
  extends HTMLStyledProps<typeof NumberInputInput> {}

export const NumberInputIncrementTrigger = withContext(
  styled(ArkNumberInput.IncrementTrigger),
  "incrementTrigger",
);
export interface NumberInputIncrementTriggerProps
  extends HTMLStyledProps<typeof NumberInputIncrementTrigger> {}

export const NumberInputLabel = withContext(
  styled(ArkNumberInput.Label),
  "label",
);
export interface NumberInputLabelProps
  extends HTMLStyledProps<typeof NumberInputLabel> {}

export const NumberInputScrubber = withContext(
  styled(ArkNumberInput.Scrubber),
  "scrubber",
);
export interface NumberInputScrubberProps
  extends HTMLStyledProps<typeof NumberInputScrubber> {}

export interface NumberInputProps extends NumberInputRootProps {
  label: string;
}

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
