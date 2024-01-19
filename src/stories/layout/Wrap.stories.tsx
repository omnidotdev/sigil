import { Wrap } from "generated/panda/jsx";
import { FruitBasket } from "stories/data";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof meta>;

/**
 * Add space between elements, and automatically wrap if there isn't enough space.
 */
const meta = {
  title: "Components/Layout/Wrap",
  component: Wrap,
  tags: ["autodocs"],
} satisfies Meta;

export const Default: Story = {
  render: () => (
    <Wrap columnGap={4} rowGap={8}>
      {Array(30)
        .fill(null)
        .map((i) => (
          <FruitBasket key={i} />
        ))}
    </Wrap>
  ),
};

export default meta;
