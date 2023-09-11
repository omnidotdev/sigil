import { Keyboard } from "components";
import { Flex } from "generated/panda/jsx";
import { Tags } from "lib/types/storybook";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof meta>;

const meta = {
  title: "Components/Typography/Keyboard",
  component: Keyboard,
  tags: [Tags.AUTODOCS],
} satisfies Meta<typeof Keyboard>;

export const Default: Story = {
  args: {
    children: "Ctrl + Shift + P",
  },
};

export const MultipleKeys: Story = {
  render: () => (
    <Flex gap={1.5}>
      <Keyboard>Ctrl</Keyboard>
      <Keyboard>Shift</Keyboard>
      <Keyboard>P</Keyboard>
    </Flex>
  ),
};

export default meta;
