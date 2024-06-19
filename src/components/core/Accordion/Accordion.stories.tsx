import { Accordion, Button } from "components";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof meta>;

const meta = {
  title: "Components/Core/Accordion",
  component: Accordion,
  tags: ["autodocs"],
} satisfies Meta;

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
      {
        isDisabled: true,
        title: "Mixed Reality",
        body: "Mixed reality (MR) is a marketing term coined by Microsoft and occasionally used by other companies to describe a technology that blends real and virtual worlds to produce new environments and visualizations where physical and digital objects coexist and interact in real time.",
      },
    ],
  },
};

/**
 * Allow only one accordion item to be open at a time.
 */
export const OnlyOneOpen: Story = {
  args: {
    ...Default.args,
    multiple: false,
  },
};

/**
 * Programatically set initial open state of an accordion tab item.
 */
export const DefaultOpen: Story = {
  args: {
    ...Default.args,
    defaultValue: [Default.args.items[0].title!.toString()],
  },
};

export const CustomTitle: Story = {
  args: {
    ...Default.args,
    items: [
      {
        ...Default.args.items[0],
        title: <Button bgColor="red">{Default.args.items[0].title}</Button>,
      },
      ...Default.args.items.slice(1),
    ],
  },
};

export default meta;
