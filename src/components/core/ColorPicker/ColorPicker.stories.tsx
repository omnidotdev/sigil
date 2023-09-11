import { ColorPicker } from "components";
import { Tags } from "lib/types/storybook";

import type { Meta, StoryObj } from "@storybook/react";
type Story = StoryObj<typeof meta>;

const meta = {
  title: "Components/Core/ColorPicker",
  component: ColorPicker,
  tags: [Tags.AUTODOCS],
} satisfies Meta<typeof ColorPicker>;

export const Default: Story = {
  args: {
    presets: [
      "hsl(10, 81%, 59%)",
      "hsl(60, 81%, 59%)",
      "hsl(100, 81%, 59%)",
      "hsl(175, 81%, 59%)",
      "hsl(190, 81%, 59%)",
      "hsl(205, 81%, 59%)",
      "hsl(220, 81%, 59%)",
      "hsl(250, 81%, 59%)",
      "hsl(280, 81%, 59%)",
      "hsl(350, 81%, 59%)",
    ],
  },
};

export default meta;
