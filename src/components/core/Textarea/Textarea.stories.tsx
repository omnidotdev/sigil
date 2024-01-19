import { Label, Textarea } from "components";
import { Stack } from "generated/panda/jsx";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof meta>;

const meta = {
  title: "Components/Core/Textarea",
  component: Textarea,
  tags: ["autodocs"],
} satisfies Meta;

export const Default: Story = {
  render: () => (
    <Stack gap={1.5} w="2xs">
      <Label htmlFor="description">Description</Label>
      <Textarea id="description" rows={4} />
    </Stack>
  ),
};

export default meta;
