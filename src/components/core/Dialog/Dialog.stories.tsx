import { Button, Dialog, DialogCloseTrigger } from "components";
import { Stack } from "generated/panda/jsx";
import { useDisclosure } from "lib/hooks";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof meta>;

const meta = {
  title: "Components/Core/Dialog",
  component: Dialog,
  tags: ["autodocs"],
} satisfies Meta;

export const Default: Story = {
  args: {
    trigger: <Button>Open Dialog</Button>,
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
 * Dialog with the default close trigger disabled.
 */
export const WithoutCloseTrigger: Story = {
  args: {
    ...Default.args,
    closeTrigger: null,
  },
};

/**
 * Lazily mount dialog (`lazyMount` prop), and optionally unmount when closed (`unmountOnExit` prop).
 */
export const LazyMount: Story = {
  args: {
    ...Default.args,
    lazyMount: true,
    unmountOnExit: true,
  },
};

/**
 * Dialog with no trigger; controlled by decoupled external state.
 */
export const Controlled: Story = {
  args: {
    ...Default.args,
    trigger: undefined,
  },
  render: (args) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
      <>
        <Button onClick={onOpen}>Open Dialog (Controlled)</Button>

        <Dialog
          open={isOpen}
          onOpenChange={({ open }) => (open ? onOpen() : onClose())}
          title={args.title}
          description={args.description}
        >
          {args.children}
        </Dialog>
      </>
    );
  },
};

export default meta;
