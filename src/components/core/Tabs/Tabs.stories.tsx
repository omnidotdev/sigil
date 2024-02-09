import { Table, TableCell, TableHeader, TableRow, Tabs } from "components";
import { tabs } from "lib/theme/extensions/slotRecipes";

import type { Meta, StoryObj } from "@storybook/react";
import type { TabsVariant } from "generated/panda/recipes";

type Story = StoryObj<typeof meta>;

// TODO compress horizontal & vertical into one story for each variant

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

export const Enclosed: Story = {
  args: {
    ...Default.args,
    variant: "enclosed",
  },
};

export const EnclosedVertical: Story = {
  args: {
    ...Default.args,
    orientation: "vertical",
    variant: "enclosed",
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

const sizes = Object.keys(tabs.variants!.size) as TabsVariant["size"][];

export const Sizes = () => (
  <Table
    headerContent={
      <TableRow css={{ "& *": { fontWeight: "bold" } }}>
        <TableHeader>Size</TableHeader>

        {sizes.map((size) => (
          <TableHeader key={size}>{size}</TableHeader>
        ))}
      </TableRow>
    }
  >
    <TableRow>
      <TableCell fontWeight="semibold">Line (Default)</TableCell>

      {sizes.map((size) => (
        <TableCell key={size} py={2}>
          <Tabs
            {...Default.args}
            size={size}
            tabs={Default.args.tabs.map((tab) => ({
              ...tab,
              label: tab.label,
            }))}
          />
        </TableCell>
      ))}
    </TableRow>

    <TableRow>
      <TableCell fontWeight="semibold">Outline</TableCell>

      {sizes.map((size) => (
        <TableCell key={size} py={2}>
          <Tabs
            {...Default.args}
            size={size}
            variant="outline"
            tabs={Default.args.tabs.map((tab) => ({
              ...tab,
              label: tab.label,
            }))}
          />
        </TableCell>
      ))}
    </TableRow>

    <TableRow>
      <TableCell fontWeight="semibold">Enclosed</TableCell>

      {sizes.map((size) => (
        <TableCell key={size} py={2}>
          <Tabs
            {...Default.args}
            size={size}
            variant="enclosed"
            tabs={Default.args.tabs.map((tab) => ({
              ...tab,
              label: tab.label,
            }))}
          />
        </TableCell>
      ))}
    </TableRow>
  </Table>
);

export default meta;
