import { NumberInput } from "components";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof meta>;

const meta = {
  title: "Components/Core/NumberInput",
  component: NumberInput,
  tags: ["autodocs"],
} satisfies Meta<typeof NumberInput>;

export const Default: Story = {
  args: {
    label: "Quantity",
    defaultValue: "0",
    min: 0,
    max: 5,
  },
};

export default meta;
