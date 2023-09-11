import { DatePicker } from "components";
import { Tags } from "lib/types/storybook";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof meta>;

const meta = {
  title: "Components/Core/DatePicker",
  component: DatePicker,
  tags: [Tags.AUTODOCS],
} satisfies Meta<typeof DatePicker>;

export const Default: Story = {};

export const Range: Story = {
  args: {
    selectionMode: "range",
  },
};

export default meta;
