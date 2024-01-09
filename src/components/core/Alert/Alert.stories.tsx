import { FiDownload } from "react-icons/fi/index.js";

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
    icon: <Icon src={FiDownload} />,
    title: "Update available",
    description: "For the best experience, update to the latest version.",
  },
};

export const Info: Story = {
  args: {
    variant: "info",
    title: "Info",
    description: "Did you know platypuses are venomous?",
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    title: "Warning",
    description: "Beware of animals running towards you.",
  },
};

export const Error: Story = {
  args: {
    variant: "error",
    title: "Error",
    description: "segfault",
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    title: "Success",
    description: "It was a great success!",
  },
};

export default meta;
