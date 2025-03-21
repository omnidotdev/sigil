import { PINInput } from "components";
import { Stack } from "generated/panda/jsx";
import { pinInput } from "lib/theme/extensions/slotRecipes";

import type { Meta, StoryObj } from "@storybook/react";
import type { PinInputVariant as PINInputVariant } from "generated/panda/recipes";
type Story = StoryObj<typeof meta>;

const meta = {
  title: "Components/Core/PINInput",
  component: PINInput,
  tags: ["autodocs"],
} satisfies Meta;

export const Default: Story = {
  args: {
    onValueComplete: (evt) => alert(evt.valueAsString),
  },
};

export const WithLabel: Story = {
  args: {
    ...Default.args,
    label: "Enter your PIN below 🔒",
  },
};

export const WithPlaceholder = () => (
  <Stack>
    <PINInput {...Default.args} label="Dots" placeholder="•" />
    <PINInput {...Default.args} label="Zeros" placeholder="0" />
  </Stack>
);

/**
 * A custom length of input slots can be specified with the `length` prop.
 */
export const CustomLength: Story = {
  args: {
    ...Default.args,
    length: 6,
    label: "Enter your 6-digit PIN below 🔒",
  },
};

const sizes = Object.keys(
  pinInput.variants!["size"],
) as PINInputVariant["size"][];

export const Sizes = () => (
  <Stack>
    {sizes.map((size) => (
      <PINInput key={size} size={size} label={size}>
        {size}
      </PINInput>
    ))}
  </Stack>
);

/**
 * A custom color palette can be applied to atomically modify the base color.
 */
export const CustomColorPalette: Story = {
  args: {
    ...Default.args,
    colorPalette: "lime",
  },
};

export default meta;
