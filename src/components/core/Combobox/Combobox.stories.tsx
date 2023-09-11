import { Combobox } from "components";
import { Tags } from "lib/types/storybook";
import { fruitBasket } from "stories/data";

import type { Meta, StoryObj } from "@storybook/react";
type Story = StoryObj<typeof meta>;

const meta = {
  title: "Components/Core/Combobox",
  component: Combobox,
  tags: [Tags.AUTODOCS],
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
