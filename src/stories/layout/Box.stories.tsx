import { Text } from "components";
import { Box } from "generated/panda/jsx";
import { Tags } from "lib/types/storybook";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof meta>;

/**
 * General box container. Renders a `div`.
 */
const meta = {
  title: "Components/Layout/Box",
  component: Box,
  tags: [Tags.AUTODOCS],
} satisfies Meta<typeof Box>;

export const Default: Story = {
  render: () => (
    <Box w={24} h={24} bgColor="rose.400">
      <Text fontWeight="bold">Hello!</Text>
    </Box>
  ),
};

export default meta;
