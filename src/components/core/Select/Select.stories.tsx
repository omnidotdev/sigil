import { Select } from "components";
import { Box } from "generated/panda/jsx";

import type { Meta, StoryObj } from "@storybook/react";

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
