import { Button, Tooltip } from "components";
import { useDisclosure } from "lib/hooks";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof meta>;

const meta = {
  title: "Components/Core/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
} satisfies Meta<typeof Tooltip>;

export const Default: Story = {
  args: {
    trigger: "Hover over me!",
    content: "I'm a tooltip!",
  },
};

/**
 * Tooltip with no trigger; controlled by decoupled external state.
 */
export const Controlled: Story = {
  args: {
    ...Default.args,
    trigger: undefined,
  },
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
      <>
        <Button onClick={onOpen}>Open Tooltip (Controlled)</Button>

        <Tooltip
          open={isOpen}
          onOpenChange={({ open }) => (open ? onOpen() : onClose())}
          content={args.content}
        />
      </>
    );
  },
};

export default meta;
