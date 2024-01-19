import { Checkbox } from "components";

import type { Meta, StoryObj } from "@storybook/react";
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
