import { Center, Divider } from "generated/panda/jsx";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof meta>;

const dividerProps = {
  color: "brand.primary",
  thickness: "2",
};

/**
 * Horizontal or vertical divider.
 */
const meta = {
  title: "Components/Layout/Divider",
  component: Divider,
  tags: ["autodocs"],
} satisfies Meta<typeof Divider>;

export const Default: Story = {
  name: "Horizontal (Default)",
  render: () => <Divider {...dividerProps} />,
};

export const Vertical: Story = {
  render: () => (
    <Center h="128px">
      <Divider orientation="vertical" {...dividerProps} />
    </Center>
  ),
};

export default meta;
