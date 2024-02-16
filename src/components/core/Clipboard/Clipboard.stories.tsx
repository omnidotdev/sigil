import { Clipboard } from "components";
import { app } from "lib/config";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof meta>;

const meta = {
  title: "Components/Core/Clipboard",
  component: Clipboard,
  tags: ["autodocs"],
} satisfies Meta;

export const Default: Story = {
  args: {
    value: app.organization.url,
  },
};

export const WithLabel: Story = {
  args: {
    ...Default.args,
    label: "Copy link",
  },
};

export default meta;
