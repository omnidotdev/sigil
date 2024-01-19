import { Label } from "components";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof meta>;

const meta = {
  title: "Components/Core/Label",
  component: Label,
  tags: ["autodocs"],
} satisfies Meta;

export const Default: Story = {
  args: {
    children: <>I&apos;m a label</>,
  },
};

export default meta;
