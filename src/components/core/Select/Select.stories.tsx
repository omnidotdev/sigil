import { Select } from "components";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof meta>;

const meta = {
  title: "Components/Core/Select",
  component: Select,
  tags: ["autodocs"],
} satisfies Meta<typeof Select>;

export const Default: Story = {
  args: {
    label: "Color",
    options: [
      { value: "red", label: "Red" },
      { value: "green", label: "Green" },
      { value: "blue", label: "Blue" },
    ],
  },
};

export default meta;
