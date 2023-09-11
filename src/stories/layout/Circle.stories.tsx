import { Circle } from "generated/panda/jsx";
import { Tags } from "lib/types/storybook";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof meta>;

/**
 * Circle shape.
 */
const meta = {
  title: "Components/Layout/Circle",
  component: Circle,
  tags: [Tags.AUTODOCS],
} satisfies Meta<typeof Circle>;

export const Default: Story = {
  render: () => (
    <Circle size={24} bgColor="yellow.100">
      <span>🐼</span>
    </Circle>
  ),
};

export default meta;
