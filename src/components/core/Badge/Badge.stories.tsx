import { Badge } from "components";
import { app } from "lib/config";
import { Tags } from "lib/types/storybook";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof meta>;

const meta = {
  title: "Components/Core/Badge",
  component: Badge,
  tags: [Tags.AUTODOCS],
} satisfies Meta<typeof Badge>;

export const Default: Story = {
  name: "Subtle (Default)",
  argTypes: {
    variant: {
      control: { type: "inline-radio" },
      options: ["solid", "subtle", "outline"],
    },
    size: {
      control: { type: "inline-radio" },
      options: ["sm", "md", "lg"],
    },
  },
  args: {
    children: app.name.short,
    size: "md",
  },
};

export const Solid: Story = {
  args: {
    ...Default.args,
    variant: "solid",
  },
};

export const Outline: Story = {
  args: {
    ...Default.args,
    variant: "outline",
  },
};

export default meta;
