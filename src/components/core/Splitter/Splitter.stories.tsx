import { Splitter } from "components";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof meta>;

const meta = {
  title: "Components/Core/Splitter",
  component: Splitter,
  tags: ["autodocs"],
} satisfies Meta;

// TODO add multiple orientations of panels & splitters in a single story
export const Default: Story = {
  args: {
    orientation: "horizontal",
    sections: [
      { sectionType: "panel", id: "a", content: "A" },
      { sectionType: "resizeTrigger", id: "a:b" },
      { sectionType: "panel", id: "b", content: "B" },
    ],
  },
};

export default meta;
