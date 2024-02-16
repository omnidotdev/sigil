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
          id: "1",
          name: "Item 1",
          children: [
            {
              id: "1.1",
              name: "Item 1.1",
            },
            {
              id: "1.2",
              name: "Item 1.2",
              children: [
                {
                  id: "1.2.1",
                  name: "Item 1.2.1",
                },
                {
                  id: "1.2.2",
                  name: "Item 1.2.2",
                },
              ],
            },
          ],
        },
        {
          id: "2",
          name: "Item 2",
          children: [
            {
              id: "2.1",
              name: "Item 2.1",
            },
            {
              id: "2.2",
              name: "Item 2.2",
            },
          ],
        },
        {
          id: "3",
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

export default meta;
