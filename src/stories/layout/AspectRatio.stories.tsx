import { AspectRatio, styled } from "generated/panda/jsx";
import { Tags } from "lib/types/storybook";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof meta>;

/**
 * Container that maintains a fixed aspect ratio. Useful for embedding media; useful for displaying images, maps, videos, and other media.
 */
const meta = {
  title: "Components/Layout/AspectRatio",
  component: AspectRatio,
  tags: [Tags.AUTODOCS],
} satisfies Meta<typeof AspectRatio>;

export const SixteenNine: Story = {
  name: "16:9",
  render: () => (
    <AspectRatio ratio={16 / 9}>
      <styled.iframe
        src="https://www.google.com/maps/embed"
        title="Google map"
      />
    </AspectRatio>
  ),
};

export const FourThree: Story = {
  name: "4:3",
  render: () => (
    <AspectRatio ratio={4 / 3}>
      <styled.iframe
        src="https://www.google.com/maps/embed"
        title="Google map"
      />
    </AspectRatio>
  ),
};

export default meta;
