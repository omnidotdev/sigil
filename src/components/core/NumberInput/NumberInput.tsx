import * as Ark from "@ark-ui/react/number-input";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";

import Button from "components/core/Button/Button";
import Label from "components/core/Label/Label";
import { Stack, styled } from "generated/panda/jsx";
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

export const NumberInputScrubber = withContext(
  styled(Ark.NumberInput.Scrubber),
  "scrubber",
);

/**
 * Number input.
 */
const NumberInput = ({ label, ...rest }: NumberInputProps) => (
  <Stack gap={1.5} width="2xs">
    <Label htmlFor="qty">{label}</Label>

    <NumberInputRoot min={0} max={5} defaultValue="3" {...rest}>
      <NumberInputScrubber />

      <NumberInputInput id="qty" />

      <NumberInputControl>
        <NumberInputIncrementTrigger asChild>
          <Button size="xs" variant="ghost" aria-label="Increment">
            <FiChevronUp />
          </Button>
        </NumberInputIncrementTrigger>

        <hr />

        <NumberInputDecrementTrigger asChild>
          <Button size="xs" variant="ghost" aria-label="Decrement">
            <FiChevronDown />
          </Button>
        </NumberInputDecrementTrigger>
      </NumberInputControl>
    </NumberInputRoot>
  </Stack>
);

export default NumberInput;
