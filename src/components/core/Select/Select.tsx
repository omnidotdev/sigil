import { Portal } from "@ark-ui/react";
import { Select as ArkSelect } from "@ark-ui/react/select";
import { BiExpandVertical } from "react-icons/bi";

import { Stack, styled } from "generated/panda/jsx";
import { select, type SelectVariantProps } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { SelectProps as ArkSelectProps } from "@ark-ui/react/select";

// https://github.com/microsoft/TypeScript/issues/47663
import type {} from "@zag-js/select";

const { withProvider, withContext } = createStyleContext(select);

export interface SelectProps extends ArkSelectProps, SelectVariantProps {
  label: string;
  options: { label: string; value: string }[];
}

export const SelectRoot = withProvider(styled(ArkSelect.Root));

export const SelectContent = withContext(styled(ArkSelect.Content), "content");

export const SelectLabel = withContext(styled(ArkSelect.Label), "label");

export const SelectOption = withContext(styled(ArkSelect.Option), "option");

export const SelectOptionGroup = withContext(
  styled(ArkSelect.OptionGroup),
  "optionGroup",
);

export const SelectOptionGroupLabel = withContext(
  styled(ArkSelect.OptionGroupLabel),
  "optionGroupLabel",
);

export const SelectPositioner = withContext(
  styled(ArkSelect.Positioner),
  "positioner",
);

export const SelectTrigger = withContext(styled(ArkSelect.Trigger), "trigger");

/**
 * Select.
 */
const Select = ({ label, options, ...rest }: SelectProps) => (
  <SelectRoot positioning={{ sameWidth: true }} {...rest}>
    {({ selectedOption }) => (
      <Stack gap={1.5} width="2xs">
        <SelectLabel>{label}</SelectLabel>

        <SelectTrigger>
          {selectedOption?.label ?? `Select ${label}...`}
          <BiExpandVertical />
        </SelectTrigger>

        <Portal>
          <SelectPositioner>
            <SelectContent>
              {options.map(({ label, value }) => (
                <SelectOption key={value} value={value} label={label} />
              ))}
            </SelectContent>
          </SelectPositioner>
        </Portal>
      </Stack>
    )}
  </SelectRoot>
);

export default Select;
