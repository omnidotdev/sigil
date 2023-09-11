import { Input, Label } from "components";
import { Stack } from "generated/panda/jsx";
import { Tags } from "lib/types/storybook";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof meta>;

const meta = {
  title: "Components/Core/Input",
  component: Input,
  tags: [Tags.AUTODOCS],
} satisfies Meta<typeof Input>;

export const Default: Story = {
  render: () => (
    <Stack gap={1.5} w="2xs">
      <Label htmlFor="name">Name</Label>
      <Input id="name" placeholder="Your Name" />
    </Stack>
  ),
};

export default meta;
