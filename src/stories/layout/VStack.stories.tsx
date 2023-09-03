import { VStack } from "generated/panda/jsx";
import { FruitBasket } from "stories/data";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof meta>;

/**
 * Vertically stack elements, and center them horizontally. Wraps [Stack](?path=/docs/components-layout-stack--docs).
 */
const meta = {
  title: "Components/Layout/VStack",
  component: VStack,
  tags: ["autodocs"],
} satisfies Meta<typeof VStack>;

export const Default: Story = {
  args: {
    children: <FruitBasket />,
    gap: 4,
  },
};

export default meta;
