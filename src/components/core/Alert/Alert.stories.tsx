import { FiInfo } from "react-icons/fi";

import { Alert, Icon } from "components";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof meta>;

const meta = {
  title: "Components/Core/Alert",
  component: Alert,
  tags: ["autodocs"],
} satisfies Meta<typeof Alert>;

export const Default: Story = {
  args: {
    icon: <Icon as={FiInfo} />,
    title: "Update available",
    description:
      "For the best experience, please update to the latest version.",
  },
};

export const NoIcon: Story = {
  args: {
    ...Default.args,
    icon: undefined,
  },
};

export default meta;
