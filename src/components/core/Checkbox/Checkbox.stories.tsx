import { Checkbox } from "components";

import type { Meta, StoryObj } from "@storybook/react";
type Story = StoryObj<typeof meta>;

const meta = {
  title: "Components/Core/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
} satisfies Meta<typeof Checkbox>;

export const Default: Story = {
  args: {
    label: "Label",
  },
};

export const Indeterminate: Story = {
  args: {
    ...Default.args,
    defaultChecked: "indeterminate",
  },
};

export default meta;
