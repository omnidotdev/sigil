import { Checkbox } from "components";
import { Stack } from "generated/panda/jsx";
import { checkbox } from "lib/theme/extensions/slotRecipes";

import type { Meta, StoryObj } from "@storybook/react";
import type { CheckboxVariant } from "generated/panda/recipes";
type Story = StoryObj<typeof meta>;

const meta = {
  title: "Components/Core/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
} satisfies Meta;

export const Default: Story = {
  args: {
    label: "Label",
  },
};

export const DefaultChecked: Story = {
  args: {
    ...Default.args,
    defaultChecked: true,
  },
};

export const Indeterminate: Story = {
  args: {
    ...Default.args,
    defaultChecked: "indeterminate",
  },
};

// TODO table like Avatar stories

const sizes = Object.keys(checkbox.variants!.size) as CheckboxVariant["size"][];

export const Sizes: Story = {
  render: () => (
    <Stack>
      {sizes.map((size) => (
        <Checkbox key={size} size={size} label={size} />
      ))}
    </Stack>
  ),
};

/**
 * A custom color palette can be applied to atomically modify the base color.
 */
export const CustomColorPalette: Story = {
  args: {
    ...DefaultChecked.args,
    colorPalette: "lime",
  },
};

export default meta;
