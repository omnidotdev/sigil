import { DatePicker } from "components";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof meta>;

const meta = {
  title: "Components/Core/DatePicker",
  component: DatePicker,
  tags: ["autodocs"],
} satisfies Meta;

export const Default: Story = {};

export const Range: Story = {
  args: {
    startOfWeek: 1,
    selectionMode: "range",
  },
};

export default meta;
