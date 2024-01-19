import { SegmentGroup } from "components";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof meta>;

const meta = {
  title: "Components/Core/SegmentGroup",
  component: SegmentGroup,
  tags: ["autodocs"],
} satisfies Meta;

export const Default: Story = {
  name: "Vertical (Default)",
  args: {
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
