import { Tooltip } from "components";
import { Tags } from "lib/types/storybook";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof meta>;

const meta = {
  title: "Components/Core/Tooltip",
  component: Tooltip,
  tags: [Tags.AUTODOCS],
} satisfies Meta<typeof Tooltip>;

export const Default: Story = {
  args: {
    trigger: "Hover over me!",
    content: "I'm a tooltip!",
  },
};

export default meta;
