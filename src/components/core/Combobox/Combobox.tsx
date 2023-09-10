import { Portal } from "@ark-ui/react";
import { Combobox as ArkCombobox } from "@ark-ui/react/combobox";
import { useState } from "react";
import { BiExpandVertical } from "react-icons/bi";

import Button from "components/core/Button/Button";
import Input from "components/core/Input/Input";
import Label from "components/core/Label/Label";
import { styled } from "generated/panda/jsx";
import { combobox, type ComboboxVariantProps } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { ComboboxProps as ArkComboboxProps } from "@ark-ui/react/combobox";

// https://github.com/microsoft/TypeScript/issues/47663
import type {} from "@zag-js/combobox";

const { withProvider, withContext } = createStyleContext(combobox);

export interface ComboboxProps extends ArkComboboxProps, ComboboxVariantProps {
  label: string;
  data: { label: string; value: string }[];
}

export const ComboboxRoot = withProvider(styled(ArkCombobox.Root), "root");

export const ComboboxClearTrigger = withContext(
  styled(ArkCombobox.ClearTrigger),
  "clearTrigger",
);

export const ComboboxContent = withContext(
  styled(ArkCombobox.Content),
  "content",
);

export const ComboboxControl = withContext(
  styled(ArkCombobox.Control),
  "control",
);

export const ComboboxInput = withContext(styled(ArkCombobox.Input), "input");

export const ComboboxLabel = withContext(styled(ArkCombobox.Label), "label");

export const ComboboxOption = withContext(styled(ArkCombobox.Option), "option");

export const ComboboxOptionGroup = withContext(
  styled(ArkCombobox.OptionGroup),
  "optionGroup",
);

export const ComboboxOptionGroupLabel = withContext(
  styled(ArkCombobox.OptionGroupLabel),
  "optionGroupLabel",
);

export const ComboboxPositioner = withContext(
  styled(ArkCombobox.Positioner),
  "positioner",
);

export const ComboboxTrigger = withContext(
  styled(ArkCombobox.Trigger),
  "trigger",
);

/**
 * Combobox.
 */
const Combobox = ({ label, data, ...rest }: ComboboxProps) => {
  const [options, setOptions] = useState(data);

  const handleInputChange: ComboboxProps["onInputChange"] = (e) => {
    const filtered = data.filter((item) =>
      item.label.toLowerCase().includes(e.value.toLowerCase()),
    );
    setOptions(filtered.length > 0 ? filtered : data);
  };

  return (
    <ComboboxRoot onInputChange={handleInputChange} {...rest}>
      <ComboboxLabel asChild>
        <Label>{label}</Label>
      </ComboboxLabel>

      <ComboboxControl>
        <ComboboxInput asChild>
          <Input />
        </ComboboxInput>

        <ComboboxTrigger asChild>
          <Button variant="link" aria-label="open" size="sm">
            <BiExpandVertical />
          </Button>
        </ComboboxTrigger>
      </ComboboxControl>

      <Portal>
        <ComboboxPositioner>
          <ComboboxContent>
            {options.map((item) => (
              <ComboboxOption key={item.value} {...item}>
                {item.label}
              </ComboboxOption>
            ))}
          </ComboboxContent>
        </ComboboxPositioner>
      </Portal>
    </ComboboxRoot>
  );
};

export default Combobox;
