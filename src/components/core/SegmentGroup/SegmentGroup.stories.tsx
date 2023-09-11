import { SegmentGroup } from "components";
import { Tags } from "lib/types/storybook";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof meta>;

const meta = {
  title: "Components/Core/SegmentGroup",
  component: SegmentGroup,
  tags: [Tags.AUTODOCS],
} satisfies Meta<typeof SegmentGroup>;

export const Default: Story = {
  name: "Vertical (Default)",
  args: {
    orientation: "vertical",
    options: [
      { value: "react", label: "React" },
      { value: "solid", label: "Solid" },
      { value: "vue", label: "Vue", isDisabled: true },
    ],
  },
};

export const Horizontal: Story = {
  args: {
    ...Default.args,
    orientation: "horizontal",
  },
};

export default meta;
