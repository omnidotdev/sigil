import { Avatar } from "components";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof meta>;

const meta = {
  title: "Components/Core/Avatar",
  component: Avatar,
  tags: ["autodocs"],
} satisfies Meta<typeof Avatar>;

export const Default: Story = {
  args: {
    name: "Elon Musk",
    imageSource: "/img/elon-musk.jpg",
  },
};

export default meta;
