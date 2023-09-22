import pkg from "../../../../package.json";
import { Code } from "components";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof meta>;

const meta = {
  title: "Components/Typography/Code",
  component: Code,
  tags: ["autodocs"],
} satisfies Meta<typeof Code>;

export const Default: Story = {
  args: {
    children: pkg.name,
  },
};

export const Ghost: Story = {
  args: {
    ...Default.args,
    variant: "ghost",
  },
};

export default meta;
