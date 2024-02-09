import { Badge } from "components";
import { app } from "lib/config";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof meta>;

const meta = {
  title: "Components/Core/Badge",
  component: Badge,
  tags: ["autodocs"],
} satisfies Meta;

export const Default: Story = {
  name: "Subtle (Default)",
  argTypes: {
    variant: {
      control: { type: "inline-radio" },
      options: ["solid", "subtle", "outline"],
    },
    size: {
      control: { type: "inline-radio" },
      options: ["sm", "md", "lg"],
    },
  },
  args: {
    children: app.name.short,
    size: "md",
  },
};

export const Solid: Story = {
  args: {
    ...Default.args,
    variant: "solid",
  },
};

export const Outline: Story = {
  args: {
    ...Default.args,
    variant: "outline",
  },
};

/**
 * A custom color palette can be applied to atomically modify the base color.
 */
export const CustomColorPalette: Story = {
  args: {
    ...Solid.args,
    colorPalette: "lime",
  },
};

export default meta;
