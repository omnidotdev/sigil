import { createTreeCollection } from "@ark-ui/react";

import { TreeView } from "components";

import type { Meta, StoryObj } from "@storybook/react";
import type { TreeViewNode } from "components";

type Story = StoryObj<typeof meta>;

const meta = {
  title: "Components/Core/TreeView",
  component: TreeView,
  tags: ["autodocs"],
} satisfies Meta;

const collection = createTreeCollection<TreeViewNode>({
  nodeToValue: (node) => node.value,
  nodeToString: (node) => node.label,
  rootNode: {
    value: "ROOT",
    label: "",
    children: [
      {
        value: "node_modules",
        label: "node_modules",
        children: [
          { value: "node_modules/zag-js", label: "zag-js" },
          { value: "node_modules/pandacss", label: "panda" },
          {
            value: "node_modules/@types",
            label: "@types",
            children: [
              { value: "node_modules/@types/react", label: "react" },
              { value: "node_modules/@types/react-dom", label: "react-dom" },
            ],
          },
        ],
      },
      {
        value: "src",
        label: "src",
        children: [
          { value: "src/app.tsx", label: "app.tsx" },
          { value: "src/index.ts", label: "index.ts" },
        ],
      },
      { value: "panda.config", label: "panda.config.ts" },
      { value: "package.json", label: "package.json" },
      { value: "renovate.json", label: "renovate.json" },
      { value: "readme.md", label: "README.md" },
    ],
  },
});

export const Default: Story = {
  args: {
    collection,
    maxW: "2xs",
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
