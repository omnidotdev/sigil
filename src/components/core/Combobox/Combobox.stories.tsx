import { Combobox } from "components";
import { Box } from "generated/panda/jsx";
import { fruitBasket } from "stories/data";

import type { Meta, StoryObj } from "@storybook/react";
type Story = StoryObj<typeof meta>;

const meta = {
  title: "Components/Core/Combobox",
  component: Combobox,
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
      id: "fruit",
      singular: "Fruit",
      plural: "Fruit",
    },
    items: fruitBasket.map(({ name, icon }, idx) => ({
      label: `${name} ${icon}`,
      value: name,
      disabled: idx === 2,
    })),
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
