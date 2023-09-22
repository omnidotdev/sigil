import { Accordion } from "components";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof meta>;

const meta = {
  title: "Components/Core/Accordion",
  component: Accordion,
  tags: ["autodocs"],
} satisfies Meta<typeof Accordion>;

export const Default: Story = {
  args: {
    items: [
      {
        title: "Augmented Reality",
        body: "Augmented reality (AR) is a technology that overlays digital information, such as images, videos, or other data, onto the real world, enhancing someone's perception and interaction with their surroundings.",
      },
      {
        title: "Virtual Reality",
        body: "Virtual reality (VR) is a technology that immerses users in a computer-generated environment, isolating them from the physical world and allowing for interactive and immersive experiences.",
      },
      {
        title: "Extended Reality",
        body: "Extended Reality (XR) is a marketing term used to represent the spectrum of virtual reality (VR) and augmented reality (AR) technologies.",
      },
    ],
  },
};

/**
 * Programatically set initial open state of an accordion tab item.
 */
export const DefaultOpen: Story = {
  args: {
    ...Default.args,
    defaultValue: [Default.args.items[0].title],
  },
};

export default meta;
