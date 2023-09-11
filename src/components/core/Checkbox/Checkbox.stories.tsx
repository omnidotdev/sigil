import { Checkbox } from "components";
import { Tags } from "lib/types/storybook";

import type { Meta, StoryObj } from "@storybook/react";
type Story = StoryObj<typeof meta>;

const meta = {
  title: "Components/Core/Checkbox",
  component: Checkbox,
  tags: [Tags.AUTODOCS],
} satisfies Meta<typeof Checkbox>;

export const Default: Story = {
  args: {
    label: "Label",
  },
};

export default meta;
