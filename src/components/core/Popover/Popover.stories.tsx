import { Button, Popover } from "components";
import { useDisclosure } from "lib/hooks";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof meta>;

const meta = {
  title: "Components/Core/Popover",
  component: Popover,
  tags: ["autodocs"],
} satisfies Meta;

export const Default: Story = {
  args: {
    trigger: <Button>Open Popover</Button>,
    triggerProps: { asChild: true },
    title: "Hello",
    description: "I'm a popover! Snap crackle pop 🍫",
    children: "I'm the popover content!",
  },
};

export const NoCloseTrigger: Story = {
  args: {
    ...Default.args,
    closeTrigger: null,
  },
};

export const ChildrenOnly: Story = {
  args: {
    ...Default.args,
    title: undefined,
    description: undefined,
  },
};

/**
 * Popover with no trigger; controlled by decoupled external state.
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
        <Button onClick={onOpen}>Open Popover (Controlled)</Button>

        <Popover
          open={isOpen}
          onOpenChange={({ open }) => (open ? onOpen() : onClose())}
          title={args.title}
          description={args.description}
        />
      </>
    );
  },
};

export default meta;
