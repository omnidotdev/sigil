import { Carousel } from "components";

import type { Meta, StoryObj } from "@storybook/react";
type Story = StoryObj<typeof meta>;

const meta = {
  title: "Components/Core/Carousel",
  component: Carousel,
  tags: ["autodocs"],
} satisfies Meta;

const imageUrls = [
  "/img/beach.jpg",
  "/img/jellyfish.jpg",
  "/img/valley.jpg",
  "/img/glacier.jpg",
  "/img/aurora.jpg",
];

export const Default: Story = {
  args: {
    items: imageUrls.map((src, idx) => (
      <img
        key={idx}
        src={src}
        alt={`Slide ${idx}`}
        style={{ height: "398px", width: "100%", objectFit: "cover" }}
      />
    )),
  },
};

export default meta;
