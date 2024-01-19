import { Spacer } from "generated/panda/jsx";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof meta>;

/**
 * Stretched flex container.
 */
const meta = {
  title: "Components/Layout/Spacer",
  component: Spacer,
  tags: ["autodocs"],
} satisfies Meta;

export const Default: Story = {
  render: () => (
    <Spacer bgColor="rose.500" color="blue.100">
      I am a spacer
    </Spacer>
  ),
};

export default meta;
