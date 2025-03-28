import { FiDownload } from "react-icons/fi";

import { Alert, Button, Icon } from "components";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof meta>;

const meta = {
  title: "Components/Core/Alert",
  component: Alert,
  tags: ["autodocs"],
} satisfies Meta;

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

/**
 * The title is optional.
 */
export const NoTitle: Story = {
  args: {
    title: undefined,
    description: "No title, but the description says it all! ✍️",
  },
};

/**
 * The description is optional.
 */
export const NoDescription: Story = {
  args: {
    title: "Riding the title wave 🌊",
    description: undefined,
  },
};

/**
 * Children can be passed, and will be displayed underneath the title and description, if present.
 */
export const Children: Story = {
  args: {
    ...Default.args,
    children: (
      <Button variant="outline" w="fit" size="xs" mt={2}>
        Download
      </Button>
    ),
  },
};

export default meta;
