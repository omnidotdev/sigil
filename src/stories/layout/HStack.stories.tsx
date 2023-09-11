import { HStack } from "generated/panda/jsx";
import { Tags } from "lib/types/storybook";
import { FruitBasket } from "stories/data";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof meta>;

/**
 * Horizontally stack elements, and center them vertically. Wraps [Stack](?path=/docs/components-layout-stack--docs).
 */
const meta = {
  title: "Components/Layout/HStack",
  component: HStack,
  tags: [Tags.AUTODOCS],
} satisfies Meta<typeof HStack>;

export const Default: Story = {
  args: {
    children: <FruitBasket />,
    gap: 4,
  },
};

export default meta;
