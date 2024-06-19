import { Pagination } from "components";
import { Flex } from "generated/panda/jsx";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof meta>;

// NB: type annotation resolves type portability error
const meta: Meta = {
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
} satisfies Meta;

export const Default: Story = {
  args: {
    count: 90,
  },
};

/**
 * Set th default page on mount.
 */
export const DefaultPage: Story = {
  args: {
    ...Default.args,
    defaultPage: 3,
  },
};

/**
 * Customize pagination parameters, such as page size and sibling count.
 */
export const CustomParameters: Story = {
  args: {
    ...Default.args,
    pageSize: 8,
    siblingCount: 2,
  },
};

/*
 * A custom color palette can be applied to atomically modify the base color.
 */
export const CustomColorPalette: Story = {
  args: {
    ...Default.args,
    colorPalette: "red",
  },
};

export default meta;
