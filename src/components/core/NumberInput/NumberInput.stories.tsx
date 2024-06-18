import { NumberInput } from "components";
import { Box } from "generated/panda/jsx";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof meta>;

const meta = {
  title: "Components/Core/NumberInput",
  component: NumberInput,
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
    label: "Quantity",
    defaultValue: "0",
    min: 0,
    max: 5,
  },
};

/**
 * Enable mouse wheel scrolling to change the value. The input must be focused.
 */
export const MouseWheelAllowed: Story = {
  args: {
    ...Default.args,
    allowMouseWheel: true,
  },
};

export const DefaultValue: Story = {
  args: {
    ...Default.args,
    defaultValue: "4",
  },
};

export const CustomColorPalette: Story = {
  args: {
    ...Default.args,
    colorPalette: "lime",
  },
};

export default meta;
