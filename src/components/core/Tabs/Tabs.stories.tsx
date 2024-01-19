import { Tabs } from "components";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof meta>;

const meta = {
  title: "Components/Core/Tabs",
  component: Tabs,
  tags: ["autodocs"],
} satisfies Meta;

export const Default: Story = {
  args: {
    tabs: [
      {
        id: "rust",
        label: "Rust",
        content:
          "Rust is a systems programming language with a strong type system.",
      },
      {
        id: "typescript",
        label: "TypeScript",
        content: "TypeScript is a statically-typed superset of JavaScript.",
      },
      {
        id: "fe",
        label: "Fe",
        content:
          "Fe is an EVM-based smart contract programming language that utilizes Yul IR.",
      },
      {
        id: "d2",
        label: "D2",
        content:
          "D2 is a domain-specific language (DSL) for diagramming, akin to Mermaid and PlantUML.",
      },
    ],
  },
};

export const Vertical: Story = {
  args: {
    ...Default.args,
    orientation: "vertical",
  },
};

export const Outline: Story = {
  args: {
    ...Default.args,
    variant: "outline",
  },
};

export const OutlineVertical: Story = {
  args: {
    ...Default.args,
    orientation: "vertical",
    variant: "outline",
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    tabs: [
      ...Default.args.tabs,
      {
        id: "disabled",
        label: "Disabled Tab",
        content: "Disabled content",
        isDisabled: true,
      },
    ],
  },
};

export default meta;
