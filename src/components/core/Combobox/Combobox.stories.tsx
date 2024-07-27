import { Combobox } from "components";
import { Box, Stack } from "generated/panda/jsx";
import { combobox } from "lib/theme/extensions/slotRecipes";
import { fruitBasket } from "stories/data";

import type { Meta, StoryObj } from "@storybook/react";
import type { ComboboxVariant } from "generated/panda/recipes";
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
 * Selection of multiple items is made possible by enabling the `multiple` prop.
 */
export const Multiple: Story = {
  args: {
    ...Default.args,
    multiple: true,
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

// TODO table like Avatar stories

const sizes = Object.keys(
  combobox.variants!["size"],
) as ComboboxVariant["size"][];

export const Sizes: Story = {
  ...Default,
  render: () => (
    <Stack>
      {sizes.map((size) => (
        <Combobox key={size} {...Default.args} size={size} />
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
