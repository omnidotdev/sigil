import { Switch } from "components";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof meta>;

const meta = {
  title: "Components/Core/Switch",
  component: Switch,
  tags: ["autodocs"],
} satisfies Meta<typeof Switch>;

export const Default: Story = {
  args: {
    children: "Label",
  },
};

export const DefaultChecked: Story = {
  args: {
    ...Default.args,
    defaultChecked: true,
  },
};

export default meta;
