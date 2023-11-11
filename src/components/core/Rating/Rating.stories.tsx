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
    max: 5,
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

export default meta;
