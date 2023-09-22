import { Circle } from "generated/panda/jsx";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof meta>;

/**
 * Circle shape.
 */
const meta = {
  title: "Components/Layout/Circle",
  component: Circle,
  tags: ["autodocs"],
} satisfies Meta<typeof Circle>;

export const Default: Story = {
  render: () => (
    <Circle size={24} bgColor="yellow.100">
      <span>🐼</span>
    </Circle>
  ),
};

export default meta;
