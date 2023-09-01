import { Button, Popover } from "components";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof meta>;

const meta = {
  title: "Components/Core/Popover",
  component: Popover,
  tags: ["autodocs"],
} satisfies Meta<typeof Popover>;

export const Default: Story = {
  args: {
    trigger: <Button variant="outline">Open Popover</Button>,
    title: "Hello",
    description: "I'm a popover! I pop all over the place.",
  },
};

export default meta;
