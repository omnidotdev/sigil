import { Rating } from "components";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof meta>;

const meta = {
  title: "Components/Core/Rating",
  component: Rating,
  tags: ["autodocs"],
} satisfies Meta<typeof Rating>;

export const Default: Story = {
  args: {
    count: 5,
    defaultValue: 3,
    label: "Rating",
  },
};

export const AllowHalves: Story = {
  args: {
    ...Default.args,
    allowHalf: true,
    defaultValue: 3.5,
  },
};

/**
 * A custom color palette can be applied to atomically modify the base color.
 */
export const CustomColorPalette: Story = {
  args: {
    ...Default.args,
    // TODO fix, this is not a real color yet
    colorPalette: "gold",
  },
};

export default meta;
