import { RadioGroup } from "components";
import { Tags } from "lib/types/storybook";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof meta>;

const meta = {
  title: "Components/Core/RadioGroup",
  component: RadioGroup,
  tags: [Tags.AUTODOCS],
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

export const RoundedRectangleSolid: Story = {
  args: {
    ...Default.args,
    variant: "solid",
    options: [
      { value: "xsmall", label: "XS" },
      { value: "small", label: "S" },
      { value: "medium", label: "M" },
      {
        value: "large",
        label: "L",
        isDisabled: true,
      },
      { value: "xlarge", label: "XL" },
    ],
    defaultValue: "medium",
  },
};

export const RoundedRectangleOutline: Story = {
  args: {
    ...RoundedRectangleSolid.args,
    variant: "outline",
  },
};

export default meta;
