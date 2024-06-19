import { Select } from "components";
import { Box, Stack } from "generated/panda/jsx";
import { select } from "lib/theme/extensions/slotRecipes";

import type { Meta, StoryObj } from "@storybook/react";
import type { SelectVariant } from "generated/panda/recipes";

type Story = StoryObj<typeof meta>;

const meta = {
  title: "Components/Core/Select",
  component: Select,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <Box w="2xs">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta;

export const Default: Story = {
  args: {
    label: {
      id: "color",
      singular: "Color",
      plural: "Colors",
    },
    items: [
      { value: "red", label: "Red", disabled: true },
      { value: "green", label: "Green" },
      { value: "blue", label: "Blue" },
    ],
  },
};

/**
 * The input field and group labels can be hidden by setting the `displayFieldLabel` and `displayGroupLabel` props to `false`, respectively.
 */
export const HideLabels: Story = {
  args: {
    ...Default.args,
    displayFieldLabel: false,
    displayGroupLabel: false,
  },
};

export const Ghost: Story = {
  args: {
    ...Default.args,
    variant: "ghost",
  },
};

// TODO table like Avatar stories

const sizes = Object.keys(select.variants!["size"]) as SelectVariant["size"][];

export const Sizes: Story = {
  ...Default,
  render: () => (
    <Stack>
      {sizes.map((size) => (
        <Select key={size} {...Default.args} size={size} />
      ))}
    </Stack>
  ),
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
