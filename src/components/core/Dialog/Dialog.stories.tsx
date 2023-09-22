import { Button, Dialog, DialogCloseTrigger } from "components";
import { Stack } from "generated/panda/jsx";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof meta>;

const meta = {
  title: "Components/Core/Dialog",
  component: Dialog,
  tags: ["autodocs"],
} satisfies Meta<typeof Dialog>;

export const Default: Story = {
  args: {
    trigger: <Button variant="outline">Open dialog</Button>,
    title: "Dialog Title",
    description: "Dialog Description",
    children: (
      <Stack gap={3} direction="row" width="full">
        <DialogCloseTrigger asChild>
          <Button variant="outline" width="full">
            Cancel
          </Button>
        </DialogCloseTrigger>

        <DialogCloseTrigger asChild>
          <Button width="full">Confirm</Button>
        </DialogCloseTrigger>
      </Stack>
    ),
  },
};

/**
 * Lazily mount dialog (`lazyMount` prop), and optionally unmount when closed (`unmountOnExit` prop).
 */
export const LazyMount: Story = {
  args: {
    ...Default.args,
    contentProps: {
      ...Default.args.contentProps,
      lazyMount: true,
      unmountOnExit: true,
    },
  },
};

export default meta;
