import { Pagination } from "components";
import { Flex } from "generated/panda/jsx";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof meta>;

const meta = {
  title: "Components/Core/Pagination",
  component: Pagination,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <Flex>
        <Story />
      </Flex>
    ),
  ],
} satisfies Meta<typeof Pagination>;

export const Default: Story = {
  args: {
    count: 90,
  },
};

export default meta;
