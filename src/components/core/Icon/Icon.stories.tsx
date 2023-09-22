import { BiAperture } from "react-icons/bi";

import { Icon } from "components";
import { Tags } from "lib/types/storybook";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof meta>;

const meta = {
  title: "Components/Core/Icon",
  component: Icon,
  tags: [Tags.AUTODOCS],
} satisfies Meta<typeof Icon>;

export const Default: Story = {
  render: () => <Icon as={BiAperture} />,
};

export const Colored: Story = {
  render: () => <Icon as={BiAperture} color="blue" />,
};

export default meta;
