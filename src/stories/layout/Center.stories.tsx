import { Center } from "generated/panda/jsx";
import { FruitBasket } from "stories/data";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof meta>;

/**
 * Container for centering elements.
 */
const meta = {
  title: "Components/Layout/Center",
  component: Center,
  tags: ["autodocs"],
} satisfies Meta;

/**
 * Center elements both vertically and horizontally.
 */
export const Default: Story = {
  render: () => (
    <Center>
      <FruitBasket />
    </Center>
  ),
};

/**
 * `inline-flex` display.
 */
export const Inline: Story = {
  render: () => (
    <Center inline>
      <FruitBasket />
    </Center>
  ),
};

export default meta;
