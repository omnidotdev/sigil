import { Input, Label } from "components";
import { Stack } from "generated/panda/jsx";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof meta>;

const meta = {
  title: "Components/Core/Input",
  component: Input,
  tags: ["autodocs"],
} satisfies Meta;

export const Default: Story = {
  render: () => (
    <Stack gap={1.5} w="2xs">
      <Label htmlFor="name">Name</Label>
      <Input id="name" placeholder="Your Name" />
    </Stack>
  ),
};

/**
 * A custom color palette can be applied to atomically modify the base color.
 */
export const CustomColorPalette: Story = {
  render: () => (
    <Stack gap={1.5} w="2xs">
      <Label htmlFor="name">Name</Label>
      <Input id="name" placeholder="Your Name" colorPalette="lime" />
    </Stack>
  ),
};

export default meta;
