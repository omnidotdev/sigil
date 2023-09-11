import { Bleed, Flex } from "generated/panda/jsx";
import { Tags } from "lib/types/storybook";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof meta>;

const PARENT_PADDING = 6;

/**
 * Extend to full-width by escaping parent container padding. `inline` negates padding on the horizontal axis, and `block` negates padding on the vertical axis. Both should match the corresponding padding of the parent container.
 */
const meta = {
  title: "Components/Layout/Bleed",
  component: Bleed,
  tags: [Tags.AUTODOCS],
} satisfies Meta<typeof Bleed>;

export const Default: Story = {
  render: () => (
    <Flex bgColor="rose.50" p={PARENT_PADDING}>
      <Bleed
        bgColor="purple.100"
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
