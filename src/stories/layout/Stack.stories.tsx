import { Stack } from "generated/panda/jsx";
import { Tags } from "lib/types/storybook";
import { FruitBasket } from "stories/data";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof meta>;

/**
 * Lay elements out vertically or horizontally.
 */
const meta = {
  title: "Components/Layout/Stack",
  component: Stack,
  tags: [Tags.AUTODOCS],
} satisfies Meta<typeof Stack>;

export const Default: Story = {
  name: "Vertical (Default)",
  args: {
    children: <FruitBasket />,
    gap: 4,
  },
};

export const Horizontal: Story = {
  args: {
    ...Default.args,
    direction: "horizontal",
  },
};

export default meta;
