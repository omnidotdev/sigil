import { Flex } from "generated/panda/jsx";
import { FruitBasket } from "stories/data";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof meta>;

/**
 * General flex container. Renders a `div` with `display: flex`.
 */
const meta = {
  title: "Components/Layout/Flex",
  component: Flex,
  tags: ["autodocs"],
} satisfies Meta<typeof Flex>;

export const Default: Story = {
  args: {
    children: <FruitBasket />,
    align: "center",
    justify: "center",
  },
};

export default meta;
