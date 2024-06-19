import { TagsInput } from "components";
import { fruitBasket } from "stories/data";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof meta>;

const meta = {
  title: "Components/Core/TagsInput",
  component: TagsInput,
  tags: ["autodocs"],
} satisfies Meta;

export const Default: Story = {
  args: {
    maxW: "xs",
    label: "Fruits (click tags to edit)",
  },
};

export const DefaultTags: Story = {
  args: {
    ...Default.args,
    defaultValue: fruitBasket.map(({ name }) => name),
  },
};

/**
 * A custom color palette can be applied to atomically modify the base color.
 */
export const CustomColorPalette: Story = {
  args: {
    ...Default.args,
    colorPalette: "lime",
  },
};

export default meta;
