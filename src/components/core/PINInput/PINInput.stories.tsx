import { PINInput } from "components";

import type { Meta, StoryObj } from "@storybook/react";
type Story = StoryObj<typeof meta>;

const meta = {
  title: "Components/Core/PINInput",
  component: PINInput,
  tags: ["autodocs"],
} satisfies Meta<typeof PINInput>;

export const Default: Story = {
  args: {
    onComplete: (evt) => alert(evt.valueAsString),
  },
};

export const WithLabel: Story = {
  args: {
    ...Default.args,
    label: "Enter your PIN below 🔒",
  },
};

export default meta;
