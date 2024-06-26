import { Bleed, Flex } from "generated/panda/jsx";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof meta>;

const PARENT_PADDING = 6;

/**
 * Extend to full-width by escaping parent container padding. `inline` negates padding on the horizontal axis, and `block` negates padding on the vertical axis. Both should match the corresponding padding of the parent container.
 */
const meta = {
  title: "Components/Layout/Bleed",
  component: Bleed,
  tags: ["autodocs"],
} satisfies Meta;

export const Default: Story = {
  render: () => (
    <Flex bgColor={{ base: "rose.50", _dark: "rose" }} p={PARENT_PADDING}>
      <Bleed
        bgColor={{ base: "purple.100", _dark: "purple" }}
        inline={PARENT_PADDING}
        block={PARENT_PADDING}
      >
        Child
      </Bleed>
      Parent container
    </Flex>
  ),
};

export default meta;
