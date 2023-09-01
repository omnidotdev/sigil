import { RadioGroup } from "components";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof meta>;

const meta = {
  title: "Components/Core/RadioGroup",
  component: RadioGroup,
  tags: ["autodocs"],
} satisfies Meta<typeof RadioGroup>;

export const Default: Story = {
  name: "Horizontal (Default)",
  args: {
    options: [
      { value: "react", label: "React" },
      { value: "solid", label: "Solid" },
      { value: "vue", label: "Vue" },
    ],
  },
};

export const Vertical: Story = {
  args: {
    ...Default.args,
    orientation: "vertical",
  },
};

export default meta;
