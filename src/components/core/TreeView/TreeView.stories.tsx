import { TreeView } from "components";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof meta>;

const meta = {
  title: "Components/Core/TreeView",
  component: TreeView,
  tags: ["autodocs"],
} satisfies Meta;

export const Default: Story = {
  args: {
    maxW: "2xs",
    data: {
      children: [
        {
          value: "1",
          name: "Item 1",
          children: [
            {
              value: "1.1",
              name: "Item 1.1",
            },
            {
              value: "1.2",
              name: "Item 1.2",
              children: [
                {
                  value: "1.2.1",
                  name: "Item 1.2.1",
                },
                {
                  value: "1.2.2",
                  name: "Item 1.2.2",
                },
              ],
            },
          ],
        },
        {
          value: "2",
          name: "Item 2",
          children: [
            {
              value: "2.1",
              name: "Item 2.1",
            },
            {
              value: "2.2",
              name: "Item 2.2",
            },
          ],
        },
        {
          value: "3",
          name: "Item 3",
        },
      ],
    },
  },
};

export const WithLabel: Story = {
  args: {
    ...Default.args,
    label: "Tree view",
  },
};

/**
 * A custom color palette can be applied to atomically modify the base color.
 */
export const CustomColorPalette: Story = {
  args: {
    ...Default.args,
    colorPalette: "purple",
  },
};

export default meta;
