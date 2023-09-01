import { Splitter } from "components";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof meta>;

const meta = {
  title: "Components/Core/Splitter",
  component: Splitter,
  tags: ["autodocs"],
} satisfies Meta<typeof Splitter>;

// TODO add multiple orientations of panels & splitters in a single story
export const Default: Story = {
  args: {
    orientation: "horizontal",
    sections: [
      { type: "panel", id: "a", content: "A", size: 50 },
      { type: "resizeTrigger", id: "a:b" },
      { type: "panel", id: "b", content: "B", size: 50 },
    ],
  },
};

export default meta;
