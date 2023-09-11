import { Square } from "generated/panda/jsx";
import { Tags } from "lib/types/storybook";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof meta>;

/**
 * Square shape.
 */
const meta = {
  title: "Components/Layout/Square",
  component: Square,
  tags: [Tags.AUTODOCS],
} satisfies Meta<typeof Square>;

export const Default: Story = {
  render: () => (
    <Square size={24} bgColor="purple.200">
      <span>🦒</span>
    </Square>
  ),
};

export default meta;
