import { Slider } from "components";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof meta>;

const meta = {
  title: "Components/Core/Slider",
  component: Slider,
  tags: ["autodocs"],
} satisfies Meta<typeof Slider>;

export const Default: Story = {
  args: {
    min: 0,
    max: 100,
    defaultValue: 33,
    markerValues: [25, 50, 75],
    label: "Slider",
  },
};

export default meta;
