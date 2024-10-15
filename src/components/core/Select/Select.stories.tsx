import { createListCollection } from "@ark-ui/react/select";
import { useEffect, useState } from "react";

import { Select } from "components";
import { Box, Stack } from "generated/panda/jsx";
import { select } from "lib/theme/extensions/slotRecipes";
import { fruitBasket } from "stories/data";

import type { CollectionItem } from "@ark-ui/react";
import type { Meta, StoryObj } from "@storybook/react";
import type { SelectVariant } from "generated/panda/recipes";

type Story = StoryObj<typeof meta>;

// TODO `itemToString`, `itemToValue` in `collectionItem` stories
// TODO simple string `items` story

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
    collection: createListCollection({
      items: [
        { value: "red", label: "Red", disabled: true },
        { value: "green", label: "Green" },
        { value: "blue", label: "Blue" },
      ],
    }),
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
 * The Select items are loaded here asynchronously, with a simulation via `setTimout`.
 */
export const AsyncItems: StoryObj = {
  render: () => {
    const [items, setItems] = useState<CollectionItem[]>([]);

    useEffect(() => {
      // simulate async data fetching
      const fetchItems = async () => {
        const asyncData: CollectionItem[] = await new Promise((resolve) => {
          setTimeout(() => {
            resolve(
              fruitBasket.map(({ name, icon }, idx) => ({
                label: `${name} ${icon}`,
                value: name,
                disabled: idx === 2,
              })),
            );
            // simulate 1s delay
          }, 1000);
        });

        setItems(asyncData);
      };

      void fetchItems();
    }, []);

    return (
      <Select
        {...Default.args}
        valueTextProps={{
          placeholder: "Search...",
        }}
        collection={createListCollection({
          items,
        })}
      />
    );
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
