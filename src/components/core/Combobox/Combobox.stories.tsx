import { Combobox } from "components";
import { fruitBasket } from "stories/data";

import type { Meta, StoryObj } from "@storybook/react";
type Story = StoryObj<typeof meta>;

const meta = {
  title: "Components/Core/Combobox",
  component: Combobox,
  tags: ["autodocs"],
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

export default meta;
