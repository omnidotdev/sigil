import { createTreeCollection } from "@ark-ui/react";

import { TreeView } from "components";

import type { Meta, StoryObj } from "@storybook/react";
import type { TreeNodeData } from "components/core/TreeView/TreeView";

type Story = StoryObj<typeof meta>;

const meta = {
  title: "Components/Core/TreeView",
  component: TreeView,
  tags: ["autodocs"],
} satisfies Meta;

const collection = createTreeCollection<TreeNodeData>({
  nodeToValue: (node) => node.id,
  nodeToString: (node) => node.name,
  rootNode: {
    id: "ROOT",
    name: "",
    children: [
      {
        id: "node_modules",
        name: "node_modules",
        children: [
          { id: "node_modules/zag-js", name: "zag-js" },
          { id: "node_modules/pandacss", name: "panda" },
          {
            id: "node_modules/@types",
            name: "@types",
            children: [
              { id: "node_modules/@types/react", name: "react" },
              { id: "node_modules/@types/react-dom", name: "react-dom" },
            ],
          },
        ],
      },
      {
        id: "src",
        name: "src",
        children: [
          { id: "src/app.tsx", name: "app.tsx" },
          { id: "src/index.ts", name: "index.ts" },
        ],
      },
      { id: "panda.config", name: "panda.config.ts" },
      { id: "package.json", name: "package.json" },
      { id: "renovate.json", name: "renovate.json" },
      { id: "readme.md", name: "README.md" },
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
