import { Editable } from "components";
import { Tags } from "lib/types/storybook";

import type { Meta, StoryObj } from "@storybook/react";
type Story = StoryObj<typeof meta>;

const meta = {
  title: "Components/Core/Editable",
  component: Editable,
  tags: [Tags.AUTODOCS],
} satisfies Meta<typeof Editable>;

export const Default: Story = {
  args: {
    label: "Name",
    placeholder: "Enter your name...",
    defaultValue: "Click here to edit",
  },
};

export const DoubleClick: Story = {
  args: {
    ...Default.args,
    activationMode: "dblclick",
    defaultValue: "Double click here to edit",
  },
};

export default meta;
