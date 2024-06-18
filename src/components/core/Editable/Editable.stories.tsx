import { Editable } from "components";

import type { Meta, StoryObj } from "@storybook/react";
type Story = StoryObj<typeof meta>;

const meta = {
  title: "Components/Core/Editable",
  component: Editable,
  tags: ["autodocs"],
} satisfies Meta;

export const Default: Story = {
  args: {
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

export const WithLabel: Story = {
  args: {
    ...Default.args,
    label: "Name",
  },
};

export default meta;
