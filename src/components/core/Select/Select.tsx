import { Portal } from "@ark-ui/react";
import * as Ark from "@ark-ui/react/select";
import { BiExpandVertical } from "react-icons/bi";

import { Stack, styled } from "generated/panda/jsx";
import { select, type SelectVariantProps } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

// https://github.com/microsoft/TypeScript/issues/47663
import type {} from "@zag-js/select";

const { withProvider, withContext } = createStyleContext(select);

export interface SelectProps extends Ark.SelectProps, SelectVariantProps {
  label: string;
  options: { label: string; value: string }[];
}

export const SelectRoot = withProvider(styled(Ark.Select.Root), "root");

export const SelectContent = withContext(styled(Ark.Select.Content), "content");

export const SelectLabel = withContext(styled(Ark.Select.Label), "label");

export const SelectOption = withContext(styled(Ark.Select.Option), "option");

export const SelectOptionGroup = withContext(
  styled(Ark.Select.OptionGroup),
  "optionGroup",
);

export const SelectOptionGroupLabel = withContext(
  styled(Ark.Select.OptionGroupLabel),
  "optionGroupLabel",
);

export const SelectPositioner = withContext(
  styled(Ark.Select.Positioner),
  "positioner",
);

export const SelectTrigger = withContext(styled(Ark.Select.Trigger), "trigger");

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
