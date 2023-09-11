import { RangeSlider } from "components";
import { Tags } from "lib/types/storybook";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof meta>;

const meta = {
  title: "Components/Core/RangeSlider",
  component: RangeSlider,
  tags: [Tags.AUTODOCS],
} satisfies Meta<typeof RangeSlider>;

export const Default: Story = {
  args: {
    min: 0,
    max: 100,
    defaultValue: [33, 66],
    markerValues: [25, 50, 75],
  },
};

export default meta;
