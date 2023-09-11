import pkg from "../../../../package.json";
import { Code } from "components";
import { Tags } from "lib/types/storybook";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof meta>;

const meta = {
  title: "Components/Typography/Code",
  component: Code,
  tags: [Tags.AUTODOCS],
} satisfies Meta<typeof Code>;

export const Default: Story = {
  args: {
    children: pkg.name,
  },
};

export default meta;
