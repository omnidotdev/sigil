import { createListCollection } from "@ark-ui/react";
import { useEffect, useState } from "react";

import { Combobox } from "components";
import { Box, Stack } from "generated/panda/jsx";
import { combobox } from "lib/theme/extensions/slotRecipes";
import { fruitBasket } from "stories/data";

import type { CollectionItem } from "@ark-ui/react";
import type { Meta, StoryObj } from "@storybook/react";
import type { ComboboxVariant } from "generated/panda/recipes";

type Story = StoryObj<typeof meta>;

// TODO `selectionBehavior` stories
// TODO `itemToString`, `itemToValue` in `collectionItem` stories
// TODO simple string `items` story

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
    collection: createListCollection({
      items: fruitBasket.map(({ name, icon }, idx) => ({
        label: `${name} ${icon}`,
        value: name,
        disabled: idx === 2,
      })),
    }),
  },
};

/**
 * A default value can be set with the `defaultValue` prop.
 */
export const DefaultValue: Story = {
  args: {
    ...Default.args,
    defaultValue: [fruitBasket[0].name],
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
 * The `Combobox` items are loaded here asynchronously, with a simulation via `setTimout`. Enter an input into the input field to load filtered items.
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
      <Combobox
        label={{
          id: "fruit",
          singular: "Fruit",
          plural: "Fruit",
        }}
        placeholder="Search..."
        collection={createListCollection({ items })}
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
