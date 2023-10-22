import { FiArrowRight } from "react-icons/fi";

import { Button, Drawer, DrawerCloseTrigger, Input, Label } from "components";
import { Stack } from "generated/panda/jsx";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof meta>;

const meta = {
  title: "Components/Core/Drawer",
  component: Drawer,
  tags: ["autodocs"],
} satisfies Meta<typeof Drawer>;

export const Default: Story = {
  args: {
    trigger: <Button variant="outline">Open Drawer</Button>,
    title: "Drawer Title",
    description: "Drawer description",
    footerProps: { gap: 3 },
    footer: (
      <>
        <Button variant="outline">Provide Feedback</Button>
        <Button>Get Help</Button>
      </>
    ),
    children: (
      <>
        <Stack gap={4}>
          <Stack gap={1.5}>
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Your name" />
          </Stack>

          <Stack gap={1.5}>
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" placeholder="Your email address" />
          </Stack>
        </Stack>

        <DrawerCloseTrigger asChild>
          <Button mt={8}>
            Continue <FiArrowRight />
          </Button>
        </DrawerCloseTrigger>
      </>
    ),
  },
};

export default meta;
