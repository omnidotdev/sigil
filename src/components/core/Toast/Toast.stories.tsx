import { Button, Toast, ToastCloseTrigger } from "components";
import { Stack } from "generated/panda/jsx";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof meta>;

const meta = {
  title: "Components/Core/Toast",
  component: Toast,
  tags: ["autodocs"],
} satisfies Meta<typeof Toast>;

export const Default: Story = {
  args: {
    trigger: <Button variant="outline">Add toast</Button>,
    children: (
      <Stack direction="row" gap={3}>
        <ToastCloseTrigger asChild>
          <Button variant="link" size="sm">
            Dismiss
          </Button>
        </ToastCloseTrigger>
      </Stack>
    ),
    toastOptions: {
      title: "Breakfast is ready!",
      description: "Here's your toast 🍞",
    },
    providerProps: {
      max: 1,
    },
  },
};

export const CustomPlacement: Story = {
  args: {
    ...Default.args,
    toastOptions: {
      ...Default.args.toastOptions,
      placement: "top-end",
    },
  },
};

export default meta;
