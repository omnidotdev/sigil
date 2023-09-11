import { Spacer } from "generated/panda/jsx";
import { Tags } from "lib/types/storybook";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof meta>;

/**
 * Stretched flex container.
 */
const meta = {
  title: "Components/Layout/Spacer",
  component: Spacer,
  tags: [Tags.AUTODOCS],
} satisfies Meta<typeof Spacer>;

export const Default: Story = {
  render: () => (
    <Spacer bgColor="rose.500" color="blue.100">
      I am a spacer
    </Spacer>
  ),
};

export default meta;
