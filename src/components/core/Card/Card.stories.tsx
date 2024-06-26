import { Button, Card, Input, Label } from "components";
import { HStack, Stack } from "generated/panda/jsx";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof meta>;

const meta = {
  title: "Components/Core/Card",
  component: Card,
  tags: ["autodocs"],
} satisfies Meta;

export const Default: Story = {
  args: {
    title: "Team Members",
    description: "Add new members to your organization.",
    footer: (
      <HStack>
        <Button variant="outline">Cancel</Button>
        <Button>Invite</Button>
      </HStack>
    ),
    children: (
      <Stack gap={4}>
        <Stack gap={1.5}>
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Name" />
        </Stack>

        <Stack gap={1.5}>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="Email" />
        </Stack>
      </Stack>
    ),
  },
};

export default meta;
