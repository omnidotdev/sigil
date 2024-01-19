import { Select } from "components";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof meta>;

const meta = {
  title: "Components/Core/Select",
  component: Select,
  tags: ["autodocs"],
} satisfies Meta;

export const Default: Story = {
  args: {
    label: {
      id: "color",
      singular: "Color",
      plural: "Colors",
    },
    items: [
      { value: "red", label: "Red", disabled: true },
      { value: "green", label: "Green" },
      { value: "blue", label: "Blue" },
    ],
  },
};

export default meta;
