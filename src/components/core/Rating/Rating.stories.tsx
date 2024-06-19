import { Rating } from "components";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof meta>;

const meta = {
  title: "Components/Core/Rating",
  component: Rating,
  tags: ["autodocs"],
} satisfies Meta;

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
 * The rating can be marked as read only, preventing user interaction, via the `readOnly` prop. Note that this also defaults the cursor.
 */
export const ReadOnly: Story = {
  args: {
    ...Default.args,
    readOnly: true,
  },
};

/**
 * A custom color palette can be applied to atomically modify the base color.
 */
export const CustomColorPalette: Story = {
  args: {
    ...Default.args,
    colorPalette: "gold",
  },
};

export default meta;
