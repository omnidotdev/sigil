import { Combobox } from "components";
import { fruitBasket } from "stories/data";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof meta>;

const meta = {
  title: "Components/Core/Combobox",
  component: Combobox,
  tags: ["autodocs"],
} satisfies Meta<typeof Combobox>;

export const Default: Story = {
  args: {
    label: "Fruit",
    data: fruitBasket.map(({ name, icon }) => ({
      label: `${name} ${icon}`,
      value: name,
    })),
  },
};

export default meta;
